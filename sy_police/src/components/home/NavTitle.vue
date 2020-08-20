<template>
  <div class="nav-title">
    <div class="nav-location">
      <span>您当前位置：{{ location }}</span>
    </div>
    <div class="date-time"> {{ NowTime }}</div>
    <div class="tip-btn" @click="gotoMessagePage"><i class="el-icon-message-solid"></i></div>
  </div>
</template>

<script>
export default {
  name: 'NavTitle',
  data() {
    return {
      location: this.$store.getters.pageName,
      dater: new Date(),
    }
  },
  computed: {
    NowTime () {
      let timeStamp = this.dater
      let year = new Date(timeStamp).getFullYear();
      let month =new Date(timeStamp).getMonth() + 1 < 10? "0" + (new Date(timeStamp).getMonth() + 1): new Date(timeStamp).getMonth() + 1;
      let date =new Date(timeStamp).getDate() < 10? "0" + new Date(timeStamp).getDate(): new Date(timeStamp).getDate();
      let hh =new Date(timeStamp).getHours() < 10? "0" + new Date(timeStamp).getHours(): new Date(timeStamp).getHours();
      let mm =new Date(timeStamp).getMinutes() < 10? "0" + new Date(timeStamp).getMinutes(): new Date(timeStamp).getMinutes();
      let ss =new Date(timeStamp).getSeconds() < 10? "0" + new Date(timeStamp).getSeconds(): new Date(timeStamp).getSeconds();
      let weekday = "星期" + "日一二三四五六".charAt(new Date().getDay())

      return year + "年" + month + "月" + date +"日"+" "+hh+":"+mm+':'+ss + " " +weekday ;
    }
  },
  methods: {
    /**初始化 */
    init() {
      let _this = this; // 声明一个变量指向Vue实例this，保证作用域一致
      this.timer = setInterval(() => {
        _this.dater = new Date(); // 修改数据date
      }, 1000)
    },
    /**前往消息页 */
    gotoMessagePage() {
      alert('前往消息页')
    }
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    if (this.timer) {
      clearInterval(this.timer); // 在Vue实例销毁前，清除我们的定时器
    }
  }
}
</script>

<style lang="scss" scoped>
  .nav-title {
    min-width: 610px;
    background-color: $nav-menu-background;
    padding: 10px;
    .nav-location {
      display: inline-block;
      width: 50%;
      min-width: 290px;
    }
    .date-time {
      float: right;
      margin-left: 1%;
    }
    .tip-btn {
      float: right;
      background-color: #777;
      color: #FFF;
      text-align: center;
      width: 40px;
      border-radius: 10px;
      cursor: pointer;
    }
  }
</style>