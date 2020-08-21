<template>
  <div class="agency-index">
    <el-form :inline="true" ref="form" class="agency-form" :model="agencyForm" label-width="80px">
      <el-form-item label="机构名称">
        <el-input v-model="agencyForm.name"></el-input>
      </el-form-item>
      <el-form-item class="btn-option">
        <el-button type="primary" class="base-button">搜索</el-button>
        <el-button type="primary" class="base-button">添加</el-button>
      </el-form-item>
    </el-form>
    
    <el-row>
       <el-table
        border
        :data="agencyData"
        row-class-name="table-row"
        cell-class-name="table-cell"
        size="medium "
        style="width: 100%">
        <el-table-column
          label="序号"
          type="index"
          width="80"
          align="center">
        </el-table-column>
        <el-table-column
          prop="name"
          label="机构名称"
          min-width="100"
          align="center">
        </el-table-column>
        <el-table-column
          prop="img"
          label="图标"
          min-width="100"
          align="center">
          <template slot-scope="scope">
            <img class="img25" :src="scope.row.img" alt="无图">
          </template>
        </el-table-column>
        <el-table-column
          prop="type"
          label="机构类型"
          min-width="100"
          align="center">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          min-width="120"
          align="center">
          <template slot-scope="scope">
            <el-button type="text" size="small" @click="detail(scope.row.id)"> 详情 </el-button>
            <el-button type="text" size="small" @click="edit(scope.row.id)"> 编辑 </el-button>
            <el-button type="text" size="small" @click="del(scope.row.id)"> 删除 </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-row>
    <div class="pagination">
        <el-pagination
          background
          layout="total, prev, pager, next, jumper"
          @current-change="handleCurrentChange"
          :current-page="page.pageIndex"
          :total="page.dataTotal">
        </el-pagination>
      </div>
  </div>
</template>

<script>
export default {
  name: 'AgencyIndex',
  data() {
    return {
      pageName: {
        firstTitle: '机构管理',
        secondTitle: '首页',
        thirdTitle: null,
      },
      agencyForm: {
        name: ''
      },
      agencyData: [
        {
          name: '贵州大学',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597999640772&di=a59d66b9df9a898604800a785dd7b44e&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180525%2F6880695686694a62bdc62d27c5d31c45.jpeg',
          type: '学校',
        },
        {
          name: '思雅派出所',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597999640772&di=a59d66b9df9a898604800a785dd7b44e&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180525%2F6880695686694a62bdc62d27c5d31c45.jpeg',
          type: '政府机关',
        },
        {
          name: '贵州财经大学',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597999640772&di=a59d66b9df9a898604800a785dd7b44e&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180525%2F6880695686694a62bdc62d27c5d31c45.jpeg',
          type: '学校',
        },
        {
          name: '贵州医科大学',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597999640772&di=a59d66b9df9a898604800a785dd7b44e&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180525%2F6880695686694a62bdc62d27c5d31c45.jpeg',
          type: '学校',
        },
        {
          name: '贵阳市政府',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597999640772&di=a59d66b9df9a898604800a785dd7b44e&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180525%2F6880695686694a62bdc62d27c5d31c45.jpeg',
          type: '政府机关',
        },
        {
          name: '贵州医科大学',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597999640772&di=a59d66b9df9a898604800a785dd7b44e&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180525%2F6880695686694a62bdc62d27c5d31c45.jpeg',
          type: '学校',
        },
        {
          name: '贵阳市政府',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597999640772&di=a59d66b9df9a898604800a785dd7b44e&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180525%2F6880695686694a62bdc62d27c5d31c45.jpeg',
          type: '政府机关',
        },
        {
          name: '贵州医科大学',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597999640772&di=a59d66b9df9a898604800a785dd7b44e&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180525%2F6880695686694a62bdc62d27c5d31c45.jpeg',
          type: '学校',
        },
        {
          name: '贵阳市政府',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597999640772&di=a59d66b9df9a898604800a785dd7b44e&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180525%2F6880695686694a62bdc62d27c5d31c45.jpeg',
          type: '政府机关',
        },
        {
          name: '贵州医科大学',
          img: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1597999640772&di=a59d66b9df9a898604800a785dd7b44e&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fq_70%2Cc_zoom%2Cw_640%2Fimages%2F20180525%2F6880695686694a62bdc62d27c5d31c45.jpeg',
          type: '学校',
        }
      ],
      pageInfo: {
        pageIndex: 1,
        dataTotal: 100,
        pagesize: 10
      }
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.$store.commit("setPageName", this.pageName)
    },
    select (index) {
      console.log("查询数据"+index)
    },
    add() {

    },
    edit() {

    },
    detail(id) {
      this.$router.push({name: 'AgencyDetail', param: { id, pageInfo: this.pageInfo}})
    },
    del() {

    },
    handleCurrentChange (pageIndex) {
      this.select(pageIndex)
    },
  },
}
</script>

<style lang="scss" scoped>
  .agency-index{
    text-align: center;
    .agency-form {
      .btn-option {
        display: inline-block;
      }
    }

    .el-table {
      .table-row {
        height: 50px;
      }

      .table-cell {
        height: 50px;

      }
    }
  }
</style>