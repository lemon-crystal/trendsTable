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
> 8.selection-change:当列表有全选或选择时 需要此方法
### 相关的扩展功能 或者table的其他事件方法可参照elementUI中的方法自行添加
