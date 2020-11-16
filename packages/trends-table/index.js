// 导入组件，组件必须声明 name
// import trendsTable from './src/trendsTable.vue'
import trendsTable from "./src/trendsTable_1112.vue";

// 为组件提供 install 安装方法，供按需引入
trendsTable.install = function(Vue) {
  Vue.component(trendsTable.name, trendsTable);
};

// 默认导出组件
export default trendsTable;
