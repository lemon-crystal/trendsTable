# trendstable

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# 此分支：将表格显示区域+显示/隐藏列+分页 功能组件化。

## 参数说明：
> 1.tableList:列表数据
> 2.hideColumnIndexs:初始化隐藏列的下标
> 3.pageSize:每页数据条数
> 4.pageNumber:当前页码
> 5.total:数据总条数
> 6.getHideColist:隐藏/显示列动态更改-传参（方法）
> 7.pagination:分页相关数据（方法）
> 8.selection-change:-跟el-table中的表格事件-一样可直接使用
### 相关的扩展功能 或者table的其他事件方法可参照elementUI中的方法自行添加

## 2020-11-12 2.01版本
> 1.在原有版本上优化更改
>表格列的隐藏与显示依据-getHideColist方法中的相应prop参数---更改状态要调用this.$forceUpdate()强制更新
>class-name="column_visible"在需要隐藏的列上加上特定的类名
>hideColumnIndexs去除此方法
