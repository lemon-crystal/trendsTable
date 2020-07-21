<template>
  <div class="check-trends-table">
    <trends-table :tableList="dataList"
    :hideColumnIndexs="[]" ref="trendtable"
    :pageSize.sync="onrenewalForm.pageSize"
    :pageNumber.sync="onrenewalForm.pageNumber"
    :total="total"
    @getHideColist="getHideColist"
    @pagination = "paginationHadle"
    @selection-change="handleSelectionChange"
    >
      <el-table-column
        v-if="!columnHideList[0]"
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        v-if="!columnHideList[1]"
        type="index"
        label="序号"
        width="50">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column prop="name" label="姓名" v-if="!columnHideList[2]"> </el-table-column>
      <el-table-column prop="address" label="地址" v-if="!columnHideList[3]"> </el-table-column>
      <el-table-column prop="date" label="日期" v-if="!columnHideList[4]"> </el-table-column>
    </trends-table>
  </div>
</template>
<script>
  // 引入-table-组件
  import TrendsTable from "../components/trendsTable.vue";
  export default {
    name: 'onrenewal',
    components: {
      TrendsTable
    },
    data() {
      return {
        columnHideList: [],
        dataList:[
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }
        ],
        onrenewalForm:{
          pageNumber: 1,
          pageSize: 10,
        },
        total:200,
      }
    },
    created() {
    },
    mounted() {},
    methods: {
      handleSelectionChange(item) {
        console.log('=多选===', item)
      },
      // 获得列显示隐藏数据
      getHideColist(item) {
        this.columnHideList = item;
        console.log('------------', this.columnHideList)
      },

      paginationHadle(item) {
        console.log('===分页相关参数===',item)
        this.onrenewalForm.pageNumber = item.pageNumber;
        this.onrenewalForm.pageSize = item.pageSize;
        // this.getonrenewalList();
      },
    },
    watch: {},
  }
</script>
<style lang="less" scoped>
  .onrenewal_container {
    overflow: hidden;
    position: relative;

    .commlandr {
      float: left;
      width: 240px;
    }

    .onrenewal_right_container {
      .onrenewal_base_wrap {
        margin-top: 20px;
        margin-left: 50px;
      }
    }
  }
</style>
<style lang="less">
</style>