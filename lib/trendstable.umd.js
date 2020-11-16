(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["trendstable"] = factory();
	else
		root["trendstable"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "51c4":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "934c":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "a64a":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_trendsTable_1112_vue_vue_type_style_index_0_id_b29deb6c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("934c");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_trendsTable_1112_vue_vue_type_style_index_0_id_b29deb6c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_trendsTable_1112_vue_vue_type_style_index_0_id_b29deb6c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_trendsTable_1112_vue_vue_type_style_index_0_id_b29deb6c_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "a9d5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_trendsTable_1112_vue_vue_type_style_index_1_lang_less___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("51c4");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_trendsTable_1112_vue_vue_type_style_index_1_lang_less___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_trendsTable_1112_vue_vue_type_style_index_1_lang_less___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_trendsTable_1112_vue_vue_type_style_index_1_lang_less___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"7334ed03-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/trends-table/src/trendsTable_1112.vue?vue&type=template&id=b29deb6c&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"trends_container"},[_c('div',{staticClass:"table_container"},[_c('el-table',{ref:"trendsTable",staticStyle:{"width":"100%"},attrs:{"data":_vm.tableList,"fit":"","stripe":"","border":"","highlight-current-row":_vm.obj.hcrow},on:{"selection-change":_vm.handleSelectionChange,"select":_vm.handleSelect,"select-all":_vm.handleSelectAll,"cell-mouse-enter":_vm.handleCellMouseEnter,"cell-mouse-leave":_vm.handleCellMouseLeave}},[_vm._t("default")],2)],1),_c('div',{staticClass:"pagination_trends_wrap"},[_c('div',{staticClass:"trends_oprt_wrap"},[_c('el-popover',{attrs:{"placement":"top-start","width":"280","trigger":"click"}},[_c('div',{staticClass:"trends_btn_wrap"},[_c('el-checkbox-group',{attrs:{"size":"small"},model:{value:(_vm.visibleList),callback:function ($$v) {_vm.visibleList=$$v},expression:"visibleList"}},_vm._l((_vm.columnList),function(col,index){return _c('el-checkbox',{key:index,attrs:{"label":col.label,"border":""},on:{"change":function($event){return _vm.visibleListChange(col, index, $event)}}},[_vm._v(_vm._s(col.value))])}),1)],1),_c('el-button',{attrs:{"slot":"reference","size":"small"},slot:"reference"},[_vm._v("隐藏/显示列")])],1)],1),(_vm.total > 0)?_c('div',{staticClass:"pagination_wrap"},[[_c('el-pagination',{staticStyle:{"text-align":"right"},attrs:{"current-page":_vm.currentPage,"page-sizes":[10, 25, 50, 100],"page-size":_vm.currentSize,"layout":"total, sizes, prev, pager, next, jumper","total":_vm.total,"background":""},on:{"update:currentPage":function($event){_vm.currentPage=$event},"update:current-page":function($event){_vm.currentPage=$event},"update:pageSize":function($event){_vm.currentSize=$event},"update:page-size":function($event){_vm.currentSize=$event},"size-change":_vm.handleSizeChange,"current-change":_vm.handleCurrentChange}})]],2):_vm._e()])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./packages/trends-table/src/trendsTable_1112.vue?vue&type=template&id=b29deb6c&scoped=true&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./packages/trends-table/src/trendsTable_1112.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var trendsTable_1112vue_type_script_lang_js_ = ({
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
});

// CONCATENATED MODULE: ./packages/trends-table/src/trendsTable_1112.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_trendsTable_1112vue_type_script_lang_js_ = (trendsTable_1112vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./packages/trends-table/src/trendsTable_1112.vue?vue&type=style&index=0&id=b29deb6c&lang=less&scoped=true&
var trendsTable_1112vue_type_style_index_0_id_b29deb6c_lang_less_scoped_true_ = __webpack_require__("a64a");

// EXTERNAL MODULE: ./packages/trends-table/src/trendsTable_1112.vue?vue&type=style&index=1&lang=less&
var trendsTable_1112vue_type_style_index_1_lang_less_ = __webpack_require__("a9d5");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

// CONCATENATED MODULE: ./packages/trends-table/src/trendsTable_1112.vue







/* normalize component */

var component = normalizeComponent(
  src_trendsTable_1112vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "b29deb6c",
  null
  
)

/* harmony default export */ var trendsTable_1112 = (component.exports);
// CONCATENATED MODULE: ./packages/trends-table/index.js
// 导入组件，组件必须声明 name
// import trendsTable from './src/trendsTable.vue'


// 为组件提供 install 安装方法，供按需引入
trendsTable_1112.install = function(Vue) {
  Vue.component(trendsTable_1112.name, trendsTable_1112);
};

// 默认导出组件
/* harmony default export */ var trends_table = (trendsTable_1112);

// CONCATENATED MODULE: ./packages/index.js
// 导入颜色选择器组件


// 存储组件列表
const components = [trends_table];

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function(Vue) {
  // 判断是否安装
  if (install.installed) return;
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component));
};

// 判断是否是直接引入文件
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

/* harmony default export */ var packages_0 = ({
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install,
  // 以下是具体的组件列表
  trendsTable: trends_table
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (packages_0);



/***/ })

/******/ });
});
//# sourceMappingURL=trendstable.umd.js.map