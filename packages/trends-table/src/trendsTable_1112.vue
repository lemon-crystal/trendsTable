<!-- create by crystalSong 分页+table+动态设置表格列的隐藏与显示 -->
<template>
  <div class="trends_container">
    <div class="table_container">
      <el-table
        ref="trendsTable"
        :data="tableList"
        fit
        stripe
        style="width: 100%"
        border
        :highlight-current-row="obj.hcrow"
        @selection-change="handleSelectionChange"
        @select="handleSelect"
        @select-all="handleSelectAll"
        @cell-mouse-enter="handleCellMouseEnter"
        @cell-mouse-leave="handleCellMouseLeave"
      >
        <slot />
      </el-table>
    </div>
    <div class="pagination_trends_wrap">
      <div class="trends_oprt_wrap">
        <el-popover placement="top-start" width="280" trigger="click">
          <div class="trends_btn_wrap">
            <el-checkbox-group v-model="visibleList" size="small">
              <el-checkbox
                v-for="(col, index) in columnList"
                :key="index"
                :label="col.label"
                border
                @change="visibleListChange(col, index, $event)"
                >{{ col.value }}</el-checkbox
              >
            </el-checkbox-group>
          </div>
          <el-button slot="reference" size="small">隐藏/显示列</el-button>
        </el-popover>
      </div>
      <div v-if="total > 0" class="pagination_wrap">
        <template>
          <el-pagination
            style="text-align: right;"
            :current-page.sync="currentPage"
            :page-sizes="[10, 25, 50, 100]"
            :page-size.sync="currentSize"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
            background
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TrendsTable",
  components: {},
  props: {
    tableList: {
      type: Array,
      require: true,
      // eslint-disable-next-line no-unused-vars
      default: _ => []
    },
    hideColumnIndexs: {
      type: Array,
      // eslint-disable-next-line no-unused-vars
      default: _ => []
    },
    pageSize: {
      type: Number,
      default: 10
    },
    pageNumber: {
      type: Number,
      default: 1
    },
    total: {
      required: true,
      type: Number,
      default: 0
    },
    obj: {
      type: Object,
      default: () => {
        return {
          hcrow: false
        };
      }
    }
  },
  data() {
    return {
      visibleList: [], // 显示/隐藏列的选中下标数据集合
      columnList: [], // 表格所有列名称数据列表
      curHideList: {} // 动态更改的
    };
  },
  computed: {
    currentPage: {
      get() {
        return this.pageNumber;
      },
      set(val) {
        this.$emit("update:pageNumber", val);
      }
    },
    currentSize: {
      get() {
        return this.pageSize;
      },
      set(val) {
        this.$emit("update:pageSize", val);
      }
    }
  },
  watch: {},
  created() {},
  mounted() {
    const _this = this;
    this.curHideList = {};
    this.$refs.trendsTable.$children.forEach((obj, index) => {
      // console.log("===============lie================", obj, index);
      if (obj.type) {
        // 根据类名定义动态列
        if (obj.className && obj.className.indexOf("column_visible") !== -1) {
          // console.log("==================lie=================", obj);
          let tempProp = obj.prop;
          // if (obj.type === "index") {
          //   // 序号
          //   tempProp = "TableIdx";
          // } else if (obj.type === "selection") {
          //   tempProp = "TableSelection";
          // }
          _this.columnList.push({
            label: index,
            value: obj.type === "selection" ? "选择" : obj.label,
            columnId: obj.columnId,
            prop: tempProp
          });
          this.curHideList[tempProp] = true;
          // _this.visibleList.push(index)
        }
      }
    });
    _this.$emit("getHideColist", this.curHideList);
    _this.$forceUpdate();
  },
  methods: {
    // handleSizeChange
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`);
      this.$emit("pagination", { pageNumber: 1, pageSize: val });
    },
    // handleCurrentChange
    handleCurrentChange(val) {
      // console.log(`当前页码 ${val} `);
      this.$emit("pagination", { pageNumber: val, pageSize: this.currentSize });
    },
    visibleListChange(col, index, e) {
      // console.log('=======================change=================================', col, index, e, this.columnList, this.visibleList)
      if (e) {
        // 选中
        // this.curHideList[col.prop] = false
        this.$set(this.curHideList, col.prop, false);
      } else {
        // this.curHideList[col.prop] = true
        this.$set(this.curHideList, col.prop, true);
      }
      this.$emit("getHideColist", this.curHideList);
      this.$forceUpdate();
    },
    // 当选择项发生变化时会触发该事件
    handleSelectionChange(selection) {
      this.$emit("selection-change", selection);
    },
    // 当用户手动勾选数据行的 Checkbox 时触发的事件
    handleSelect(selection) {
      this.$emit("select", selection);
    },
    // 当用户手动勾选全选 Checkbox 时触发的事件
    handleSelectAll(selection) {
      this.$emit("select-all", selection);
    },
    // /当单元格 hover 进入时会触发该事件
    handleCellMouseEnter(row, column, cell, event) {
      this.$emit("cell-mouse-enter", row, column, cell, event);
    },
    // 当单元格 hover 退出时会触发该事件
    handleCellMouseLeave(row, column, cell, event) {
      this.$emit("cell-mouse-leave", row, column, cell, event);
    },
    // cell-click	当某个单元格被点击时会触发该事件	row, column, cell, event
    handleCellClick(row, column, cell, event) {
      this.$emit("cell-click", row, column, cell, event);
    },
    //  cell-dblclick	当某个单元格被双击击时会触发该事件	row, column, cell, event
    handleCellDbClick(row, column, cell, event) {
      this.$emit("cell-dblclick", row, column, cell, event);
    },
    // 某一行被点击
    handleRowClick(row, column, event) {
      this.$emit("row-click", row, column, event);
    },
    // row-dblclick	当某一行被双击时会触发该事件	row, column, event
    handleRowDbClick(row, column, event) {
      this.$emit("row-dblclick", row, column, event);
    },
    // row-contextmenu	当某一行被鼠标右键点击时会触发该事件	row, column, event
    handleRowContextmenu(row, column, event) {
      this.$emit("row-contextmenu", row, column, event);
    },
    // header-click	当某一列的表头被点击时会触发该事件	column, event
    handleHeaderClick(column, event) {
      this.$emit("header-click", column, event);
    },
    //  header-contextmenu	当某一列的表头被鼠标右键点击时触发该事件	column, event
    handleHeaderContextmenu(column, event) {
      this.$emit("header-contextmenu", column, event);
    },
    // sort-change	当表格的排序条件发生变化的时候会触发该事件	{ column, prop, order }
    handleSortChange(column, prop, order) {
      this.$emit("sort-change", column, prop, order);
    },
    // current-change	当表格的当前行发生变化的时候会触发该事件，
    // 如果要高亮当前行，请打开表格的 highlight-current-row 属性	currentRow, oldCurrentRow
    handleTableCurrentChange(currentRow, oldCurrentRow) {
      this.$emit("current-change", currentRow, oldCurrentRow);
    }
    /**
     *
      filter-change	当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。	filters
      header-dragend	当拖动表头改变了列的宽度的时候会触发该事件	newWidth, oldWidth, column, event
      expand-change	当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded）	row, (expandedRows | expanded)
     */
  }
};
</script>
<style lang="less" scoped>
.trends_container {
  .pagination_trends_wrap {
    margin: 20px 0;
    position: relative;
  }
  .trends_oprt_wrap {
    display: inline-block;
    vertical-align: top;
    width: 100px;
  }
  .pagination_wrap {
    display: inline-block;
    vertical-align: top;
    width: calc(100% - 105px);
    margin: 0 !important;
  }
}
</style>
<style lang="less">
.trends_btn_wrap {
  .el-checkbox-group {
    label {
      margin: 0 !important;
      margin: 0 10px !important;
      margin-bottom: 15px !important;
    }
  }
}
.table_container .el-table .cell {
  text-overflow: initial !important;
}
// 解决element table 表头错位
body .el-table th.gutter {
  display: table-cell !important;
}

body .el-table colgroup.gutter {
  display: table-cell !important;
}
</style>
