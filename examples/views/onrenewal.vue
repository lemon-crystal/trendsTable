<template>
  <div class="check-trends-table">
    <trends-table
      :tableList="dataList"
      ref="trendtable"
      :pageSize.sync="onrenewalForm.pageSize"
      :pageNumber.sync="onrenewalForm.pageNumber"
      :total="total"
      @getHideColist="getHideColist"
      @pagination="paginationHadle"
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column type="index" label="序号" width="50">
        <template slot-scope="scope">
          {{ scope.$index + 1 }}
        </template>
      </el-table-column>
      <el-table-column prop="name" label="姓名"> </el-table-column>
      <el-table-column
        v-if="!columnHideList['address']"
        prop="address"
        label="地址"
        class-name="column_visible"
      >
      </el-table-column>
      <el-table-column prop="date" label="日期"> </el-table-column>
      <el-table-column
        v-if="!columnHideList['operationBtn']"
        label="操作"
        align="center"
        width="100"
        prop="operationBtn"
        class-name="column_visible"
      >
        <template slot-scope="{ row, column, $index }">
          <el-button type="text" @click="download(row, column, $index)"
            >下载</el-button
          >
          <el-button type="text" @click="detail(row, column, $index)"
            >详情</el-button
          >
        </template>
      </el-table-column>
    </trends-table>
  </div>
</template>
<script>
// 引入-table-组件
// import TrendsTable from "../components/trendsTable.vue";
export default {
  name: "onrenewal",
  components: {
    // TrendsTable
  },
  data() {
    return {
      columnHideList: {},
      dataList: [
        {
          date: "2016-05-02",
          index: "哈哈哈",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "李小虎",
          index: "哈哈哈",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "阿小虎",
          index: "哈哈哈",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "胡小虎",
          index: "哈哈哈",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      onrenewalForm: {
        pageNumber: 1,
        pageSize: 10
      },
      total: 200
    };
  },
  created() {},
  mounted() {},
  methods: {
    download(row, column, index) {
      console.log("===========下载=================", row, column, index);
    },
    detail(row, column, index) {
      console.log("===========详情=================", row, column, index);
    },
    // 获得列显示隐藏数据
    getHideColist(item) {
      this.columnHideList = item;
      this.$forceUpdate();
      console.log("====================================", this.columnHideList);
    },

    paginationHadle(item) {
      this.onrenewalForm.pageNumber = item.pageNumber;
      this.onrenewalForm.pageSize = item.pageSize;
      // this.getonrenewalList();
    }
  },
  watch: {}
};
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
<style lang="less"></style>
