<template>
  <div class="left-menu">
    <div class="user-info">
      <img :src="user.avatarImg">
      <div class="user-text">
        <p class="user-name">{{ user.userName }}</p>
        <p>欢迎回来</p>
      </div>
    </div>
    <div class="menu-info">
      <el-menu
        router
        default-active="1"
        class="el-menu-info"
        @open="handleOpen"
        @close="handleClose"
        text-color="#fff"
        active-text-color="#1aa794">
        <el-submenu :index="menuItem.link" v-for="(menuItem, index) in menuData" :key="index">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{ menuItem.title }}</span>
          </template>
            <el-menu-item :index="secondaryMenu.link" v-for="(secondaryMenu, index) in menuItem.children" :key="index">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{ secondaryMenu.title }}</span>
              </template>
            </el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftMenu',
  data() {
    return {
      user: this.$store.state.user,
      menuData: [
        {
          title: '信息管理',
          link: '/info-management',
          children: [
            {
              title: '机构管理',
              imgUrl: require('@/assets/images/menu/ico-agency.png'),
              link: '/agency/index',
            },
            {
              title: '人员管理',
              imgUrl: '',
              link: '/student/index',
            },
            {
              title: '用户管理',
              imgUrl: '',
              link: '/info-management/wx_user',
            },
            {
              title: '暂住管理',
              imgUrl: '',
              link: '/info-management/transient',
            },
            {
              title: '信息宣传',
              imgUrl: '',
              link: '/info-management/info',
            },
          ]
        },
        {
          title: '学生管理',
          link: '/student',
          children: [
            {
              title: '学生信息',
              imgUrl: require('@/assets/images/menu/ico-agency.png'),
              link: '/student/agency',
            },
            {
              title: '车辆管理',
              imgUrl: '',
              link: '/student/user',
            },
            {
              title: '资料上传',
              imgUrl: '',
              link: '/student/wx_user',
            },
          ]
        }, 
        {
          title: '相关统计',
          link: '/info-statistics',
          children: [
            {
              title: '浏览统计',
              imgUrl: require('@/assets/images/menu/ico-agency.png'),
              link: '/info-management/agency',
            },
            {
              title: '点击量统计',
              imgUrl: '',
              link: '/info-management/user',
            },
          ]
        },
        {
          title: '系统管理',
          link: '/system',
          children: [
            {
              title: '密码修改',
              imgUrl: require('@/assets/images/menu/ico-agency.png'),
              link: '/info-management/agency',
            },
            {
              title: '权限管理',
              imgUrl: '',
              link: '/info-management/user',
            },
            {
              title: '意见与反馈',
              imgUrl: '',
              link: '/info-management/wx_user',
            }
          ]
        }
      ]
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
}
</script>

<style lang="scss" scoped>
  .left-menu {
    background-color: $menu-background;
    color: #FFF;
    padding: 20px 10px;
    .user-info {
      width: 140px;
      margin: auto;
      img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        float:left;
      }
      .user-text{
        padding-top: 4px;
        margin-left: 60px;
        text-align: center;
        .user-name {
          color: $base-color;
          font-size: 20px;
        }
      }
    }
    .menu-info {
      margin-top: 30px;
      height: 90%;
      overflow-y: auto;
      &::-webkit-scrollbar {
        display: none; /* Chrome Safari */
      }
      .el-menu-info {
        background-color: $menu-background;
        overflow:hidden;
        background-color: $menu-background  !important;
        border: none;
        
        .el-menu-item {
            background-color: $menu-background  !important;
        }
        
        .el-menu-item:hover{
            color: #fff !important;
            background: $base-color !important;
        }
        .el-menu-item.is-active {
            color: #fff !important;
            background: $base-color !important;
        }
      }
    }
  }
</style>