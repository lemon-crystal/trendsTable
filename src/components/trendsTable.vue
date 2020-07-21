<!-- create by crystalSong 分页+table+动态设置表格列的隐藏与显示 -->
<template>
  <div class='trends_container'>
      <div class="table_container">
            <el-table ref="trendsTable" :data="tableList" fit stripe style="width: 100%" border
            @selection-change="handleSelectionChange">
                <slot></slot>
            </el-table>
      </div>
      <div class="pagination_trends_wrap">
            <div class="trends_oprt_wrap">
                <el-popover placement="top-start" width="280" trigger="click">
                    <div class="trends_btn_wrap">
                        <el-checkbox-group v-model="visibleList" size="small" @change="visibleListChange">
                            <el-checkbox 
                            v-for="(col, index) in columnList" :key="index"
                            :label="col.label"
                            border
                            >{{col.value}}</el-checkbox>
                        </el-checkbox-group>
                    </div>
                    <el-button slot="reference" size="small">隐藏/显示列</el-button>
                </el-popover>
            </div>
            <div class="pagination_wrap" v-if="total > 0">
                <template>
                    <el-pagination style="text-align: right;" @size-change="handleSizeChange"
                    @current-change="handleCurrentChange" :current-page.sync="currentPage"
                    :page-sizes="[10,25,50,100]" :page-size.sync="currentSize"
                    layout="total, sizes, prev, pager, next, jumper" :total="total" background>
                    </el-pagination>
                </template>
            </div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'trendsTable',
    props: {
        tableList:{
            type: Array,
            require: true,
            default: _ => []
        },
        hideColumnIndexs:{
            type: Array,
            default: _ => []
        },
        pageSize:{
            type:Number,
            default:10,
        },
        pageNumber:{
            type:Number,
            default:1,
        },
        total:{
            required: true,
            type:Number,
            default:0,
        },
    },
    components: {},
    data() {
        return {
            visibleList:[],//显示/隐藏列的选中下标数据集合
            columnList:[],//表格所有列名称数据列表
        };
    },
    created() {
        
    },
    mounted() {
        let _this = this;
        var curHideList = [];
        this.$refs.trendsTable.$children.forEach((obj,index) => { 
            if(obj.type){
                _this.columnList.push(
                    {
                        'label':index,
                        'value':obj.type == 'selection' ? '选择' : obj.label,
                    }
                );
                // 记录初始展示的列
                if (_this.hideColumnIndexs.indexOf(index) === -1) {
                    _this.visibleList.push(index)
                    curHideList[index] = false;
                }else{
                    curHideList.push(true);
                }              
            }
        });
        _this.$emit('getHideColist',curHideList);
    },
    methods: {
        // handleSizeChange
        handleSizeChange (val) {
            // console.log(`每页 ${val} 条`);
            this.$emit('pagination', { pageNumber: 1, pageSize: val });
        },
        // handleCurrentChange
        handleCurrentChange (val) {
            // console.log(`当前页码 ${val} `);
            this.$emit('pagination', { pageNumber: val, pageSize: this.currentSize });
        },
        visibleListChange(item){
            // console.log('change',item)
            var curHideList = [];
            this.columnList.forEach((obj,index) => { 
                curHideList[index] = false;
                // 更改显示隐藏列
                if (item.indexOf(index) === -1) {
                    curHideList[index] = true;
                } 
            });
            this.$emit('getHideColist',curHideList);
        },
        handleSelectionChange(item){
            this.$emit('selection-change',item);
        },
    },
    computed: {
        currentPage: {
            get() {
                return this.pageNumber
            },
            set(val) {
                this.$emit('update:pageNumber', val)
            }
        },
        currentSize: {
            get() {
                return this.pageSize
            },
            set(val) {
                this.$emit('update:pageSize', val)
            }
        }
    },
    watch: {},
  }
</script>
<style lang='less' scoped>
    .trends_container{
        .pagination_trends_wrap{
            margin: 20px 0;
            position: relative;
        }
        .trends_oprt_wrap{
            display: inline-block;
            vertical-align: top;
            width: 100px;
        }
        .pagination_wrap{
            display: inline-block;
            vertical-align: top;
            width: calc(100% - 105px);
            margin: 0 !important;
        }
    }
</style>
<style lang="less">
    .trends_btn_wrap{
        .el-checkbox-group{
            label{
                margin: 0 !important;
                margin: 0 10px !important;
                margin-bottom: 15px !important;
            }
        }
    }
    .table_container .el-table .cell{
        text-overflow: initial !important;
    }
</style>
