/*! For license information please see components-Operation-ShortOperationDisplay-ShortOperationDisplay-stories.4e266f5e.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[546],{"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Operation/ShortOperationDisplay/ShortOperationDisplay.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".container{max-width:1170px;max-height:500px;margin:auto;padding:0 15px;overflow-y:scroll}.mtb-3{margin-top:3rem;margin-bottom:3rem}.tm-table-flex{--bs-table-bg: none;--bs-border-width: 0;width:100%;box-shadow:0 5px 15px rgba(0,0,0,.2);border-collapse:collapse;white-space:nowrap;display:flex;flex-direction:column;justify-content:space-between}.tm-table-flex .tm-table-flex__row{display:flex;flex-direction:row}.tm-table-flex .tm-table-flex__row .tm-table-flex__cell{width:100%;flex:1 1 auto}.tm-table-flex .tm-table-flex__row .tm-table-flex__cell:nth-child(1){max-width:50px}.tm-table-flex .tm-table-flex__row .tm-table-flex__cell:nth-child(2){max-width:100px}.tm-table-flex .tm-table-flex__row .tm-table-flex__cell:nth-child(3){max-width:150px}.tm-table-flex .tm-table-flex__row .tm-table-flex__cell:nth-child(4){max-width:200px;overflow:hidden;text-overflow:ellipsis}.tm-table-flex .tm-table-flex__row .tm-table-flex__cell:nth-child(5){overflow:hidden;text-overflow:ellipsis}.tm-table-flex.tm-table-flex--sticky-head .tm-table-flex__head{position:sticky;top:0}.tm-table-flex.tm-table-flex--sticky-foot .tm-table-flex__foot{position:sticky;bottom:0}.tm-table-flex.tm-table-flex--theme-default .tm-table-flex__head{background-color:var(--contrast-color);color:#fff;text-align:center}.tm-table-flex.tm-table-flex--theme-default .tm-table-flex__head .tm-table-flex__cell{padding:10px 0}.tm-table-flex.tm-table-flex--theme-default .tm-table-flex__head .tm-table-flex__cell:nth-child(odd){background-color:#4f585f}.tm-table-flex.tm-table-flex--theme-default .tm-table-flex__body{text-align:center}.tm-table-flex.tm-table-flex--theme-default .tm-table-flex__body .tm-table-flex__row{transition:all .3s;cursor:pointer}.tm-table-flex.tm-table-flex--theme-default .tm-table-flex__body .tm-table-flex__row:nth-child(even){background-color:var(--light-grey-color)}.tm-table-flex.tm-table-flex--theme-default .tm-table-flex__body .tm-table-flex__row:hover{background-color:#ccc}.tm-table-flex.tm-table-flex--theme-default .tm-table-flex__body .tm-table-flex__row .tm-table-flex__cell{padding:10px}.tm-table-flex.tm-table-flex--theme-default .tm-table-flex__body .tm-table-flex__row .tm-table-flex__cell:not(:last-child){border-right:1px solid #ccc}.tm-table-flex.tm-table-flex--theme-default .tm-table-flex__foot{background-color:var(--contrast-color);color:#fff;text-align:center}.tm-table-flex.tm-table-flex--theme-default .tm-table-flex__foot .tm-table-flex__cell{padding:10px 0}.tm-table-flex.tm-table-flex--theme-default .tm-table-flex__foot .tm-table-flex__cell:nth-child(odd){background-color:#4f585f}","",{version:3,sources:["webpack://./src/components/Operation/ShortOperationDisplay/ShortOperationDisplay.scss"],names:[],mappings:"AAAA,WACI,gBAAA,CACA,gBAAA,CACA,WAAA,CACA,cAAA,CACA,iBAAA,CAGJ,OACI,eAAA,CACA,kBAAA,CAGJ,eACI,mBAAA,CACA,oBAAA,CACA,UAAA,CACA,oCAAA,CACA,wBAAA,CACA,kBAAA,CACA,YAAA,CACA,qBAAA,CACA,6BAAA,CAEA,mCACI,YAAA,CACA,kBAAA,CAEA,wDACI,UAAA,CACA,aAAA,CAEA,qEACI,cAAA,CAGJ,qEACI,eAAA,CAGJ,qEACI,eAAA,CAGJ,qEACI,eAAA,CACA,eAAA,CACA,sBAAA,CAGJ,qEACI,eAAA,CACA,sBAAA,CAMR,+DACI,eAAA,CACA,KAAA,CAKJ,+DACI,eAAA,CACA,QAAA,CAKJ,iEACI,sCAAA,CACA,UAAA,CACA,iBAAA,CAEA,sFACI,cAAA,CAEA,qGACI,wBAAA,CAIZ,iEACI,iBAAA,CAEA,qFACI,kBAAA,CACA,cAAA,CAEA,qGACI,wCAAA,CAGJ,2FACI,qBAAA,CAGJ,0GACI,YAAA,CAEA,2HACI,2BAAA,CAMhB,iEACI,sCAAA,CACA,UAAA,CACA,iBAAA,CAEA,sFACI,cAAA,CAEA,qGACI,wBAAA",sourcesContent:[".container {\n    max-width: 1170px;\n    max-height: 500px;\n    margin: auto;\n    padding: 0 15px;\n    overflow-y: scroll;\n}\n\n.mtb-3 {\n    margin-top: 3rem;\n    margin-bottom: 3rem;\n}\n\n.tm-table-flex {\n    --bs-table-bg: none;\n    --bs-border-width: 0;\n    width: 100%;\n    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);\n    border-collapse: collapse;\n    white-space: nowrap;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n\n    .tm-table-flex__row {\n        display: flex;\n        flex-direction: row;\n\n        .tm-table-flex__cell {\n            width: 100%;\n            flex: 1 1 auto;\n\n            &:nth-child(1) {\n                max-width: 50px;\n            }\n\n            &:nth-child(2) {\n                max-width: 100px;\n            }\n\n            &:nth-child(3) {\n                max-width: 150px;\n            }\n\n            &:nth-child(4) {\n                max-width: 200px;\n                overflow: hidden;\n                text-overflow: ellipsis;\n            }\n\n            &:nth-child(5) {\n                overflow: hidden;\n                text-overflow: ellipsis;\n            }\n        }\n    }\n\n    &.tm-table-flex--sticky-head {\n        .tm-table-flex__head {\n            position: sticky;\n            top: 0;\n        }\n    }\n\n    &.tm-table-flex--sticky-foot {\n        .tm-table-flex__foot {\n            position: sticky;\n            bottom: 0;\n        }\n    }\n\n    &.tm-table-flex--theme-default {\n        .tm-table-flex__head {\n            background-color: var(--contrast-color);\n            color: #fff;\n            text-align: center;\n\n            .tm-table-flex__cell {\n                padding: 10px 0;\n\n                &:nth-child(odd) {\n                    background-color: #4f585f;\n                }\n            }\n        }\n        .tm-table-flex__body {\n            text-align: center;\n\n            .tm-table-flex__row {\n                transition: all .3s;\n                cursor: pointer;\n\n                &:nth-child(even) {\n                    background-color: var(--light-grey-color);\n                }\n\n                &:hover {\n                    background-color: #ccc;\n                }\n\n                .tm-table-flex__cell {\n                    padding: 10px;\n\n                    &:not(:last-child) {\n                        border-right: 1px solid #ccc;\n                    }\n                }\n            }\n        }\n\n        .tm-table-flex__foot {\n            background-color: var(--contrast-color);\n            color: #fff;\n            text-align: center;\n\n            .tm-table-flex__cell {\n                padding: 10px 0;\n                \n                &:nth-child(odd) {\n                    background-color: #4f585f;\n                }\n            }\n        }\n    }\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/components/Operation/ShortOperationDisplay/ShortOperationDisplay.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>ShortOperationDisplay_stories,Операция_1:()=>Операция_1,Операция_2:()=>Операция_2,Операция_3:()=>Операция_3,Операция_4:()=>Операция_4,Операция_5:()=>Операция_5,Операция_6:()=>Операция_6});__webpack_require__("./node_modules/react/index.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),ShortOperationDisplay=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Operation/ShortOperationDisplay/ShortOperationDisplay.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(ShortOperationDisplay.Z,options);ShortOperationDisplay.Z&&ShortOperationDisplay.Z.locals&&ShortOperationDisplay.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ShortOperationDisplay_ShortOperationDisplay_ShortOperationDisplay=function ShortOperationDisplay(_ref){var operation=_ref.operation,id=operation.id,amount=operation.amount,category=operation.category,type=operation.type,desc=operation.desc;return(0,jsx_runtime.jsx)("div",{className:"container mtb-3",children:(0,jsx_runtime.jsx)("div",{className:"operations-table-resposive",children:(0,jsx_runtime.jsxs)("div",{className:"tm-table-flex tm-table-flex--sticky-head tm-table-flex--sticky-foot tm-table-flex--theme-default",children:[(0,jsx_runtime.jsx)("div",{className:"tm-table-flex__head",children:(0,jsx_runtime.jsxs)("div",{className:"tm-table-flex__row",children:[(0,jsx_runtime.jsx)("div",{className:"tm-table-flex__cell",children:"ID"}),(0,jsx_runtime.jsx)("div",{className:"tm-table-flex__cell",children:"Сумма"}),(0,jsx_runtime.jsx)("div",{className:"tm-table-flex__cell",children:"Категория"}),(0,jsx_runtime.jsx)("div",{className:"tm-table-flex__cell",children:"Операция"}),(0,jsx_runtime.jsx)("div",{className:"tm-table-flex__cell",children:"Описание"})]})}),(0,jsx_runtime.jsx)("div",{className:"tm-table-flex__body",children:(0,jsx_runtime.jsxs)("div",{className:"tm-table-flex__row",children:[(0,jsx_runtime.jsx)("div",{className:"tm-table-flex__cell",children:id}),(0,jsx_runtime.jsx)("div",{className:"tm-table-flex__cell",children:amount}),(0,jsx_runtime.jsx)("div",{className:"tm-table-flex__cell",children:category.name}),(0,jsx_runtime.jsx)("div",{className:"tm-table-flex__cell",children:type}),(0,jsx_runtime.jsx)("div",{className:"tm-table-flex__cell",children:desc})]})}),(0,jsx_runtime.jsx)("div",{className:"tm-table-flex__foot",children:(0,jsx_runtime.jsxs)("div",{className:"tm-table-flex__row",children:[(0,jsx_runtime.jsx)("div",{className:"tm-table-flex__cell",children:"Итог"}),(0,jsx_runtime.jsx)("div",{className:"tm-table-flex__cell"}),(0,jsx_runtime.jsx)("div",{className:"tm-table-flex__cell"}),(0,jsx_runtime.jsx)("div",{className:"tm-table-flex__cell"}),(0,jsx_runtime.jsx)("div",{className:"tm-table-flex__cell"})]})})]})})})};ShortOperationDisplay_ShortOperationDisplay_ShortOperationDisplay.displayName="ShortOperationDisplay";try{ShortOperationDisplay_ShortOperationDisplay_ShortOperationDisplay.displayName="ShortOperationDisplay",ShortOperationDisplay_ShortOperationDisplay_ShortOperationDisplay.__docgenInfo={description:"Компонент краткого отображения операции. Содержит сумму операции, название категории, название, описание (обрезанно) - все это он получает из пропсов",displayName:"ShortOperationDisplay",props:{operation:{defaultValue:null,description:"Объект с информацией об одной операции",name:"operation",required:!0,type:{name:"{ id: number; name: string; desc: string; createAt: string; amount: number; category: { id: number; name: string; photo: string; }; type: string; }"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Operation/ShortOperationDisplay/ShortOperationDisplay.tsx#ShortOperationDisplay"]={docgenInfo:ShortOperationDisplay_ShortOperationDisplay_ShortOperationDisplay.__docgenInfo,name:"ShortOperationDisplay",path:"src/components/Operation/ShortOperationDisplay/ShortOperationDisplay.tsx#ShortOperationDisplay"})}catch(__react_docgen_typescript_loader_error){}const ShortOperationDisplay_stories={title:"Компоненты/Operation/ShortOperationDisplay",component:ShortOperationDisplay_ShortOperationDisplay_ShortOperationDisplay,tags:["autodocs"]};var Операция_1={args:{operation:{id:1,name:"Хлеб",desc:"Магазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин Пятёрочка",createAt:"01.01.2023 23:59:59",amount:56,category:{id:1,name:"Продукты",photo:""},type:"Расход"}}},Операция_2={args:{operation:{id:2,name:"Молоко",desc:"Магазин Магнит",createAt:"01.01.2023 23:59:59",amount:44,category:{id:1,name:"Продукты",photo:""},type:"Расход"}}},Операция_3={args:{operation:{id:3,name:"Аванс",desc:"Получил аванс на работе",createAt:"01.01.2023 23:59:59",amount:1e4,category:{id:4,name:"Зарплата",photo:""},type:"Доход"}}},Операция_4={args:{operation:{id:4,name:"АИ-95",desc:"Газпромнефть",createAt:"01.01.2023 23:59:59",amount:1e3,category:{id:2,name:"Бензин",photo:""},type:"Расход"}}},Операция_5={args:{operation:{id:5,name:"Кино",desc:"Звёздные войны",createAt:"01.01.2023 23:59:59",amount:145,category:{id:3,name:"Развлечения",photo:""},type:"Расход"}}},Операция_6={args:{operation:{id:6,name:"Сделал сайт",desc:"Сделал сайт",createAt:"01.01.2023 23:59:59",amount:11e4,category:{id:5,name:"Халтура",photo:""},type:"Доход"}}},__namedExportsOrder=["Операция_1","Операция_2","Операция_3","Операция_4","Операция_5","Операция_6"];Операция_1.parameters={...Операция_1.parameters,docs:{...Операция_1.parameters?.docs,source:{originalSource:'{\n  args: {\n    operation: {\n      id: 1,\n      name: "Хлеб",\n      desc: "Магазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин ПятёрочкаМагазин Пятёрочка",\n      createAt: "01.01.2023 23:59:59",\n      amount: 56,\n      category: {\n        id: 1,\n        name: "Продукты",\n        photo: ""\n      },\n      type: "Расход"\n    }\n  }\n}',...Операция_1.parameters?.docs?.source}}},Операция_2.parameters={...Операция_2.parameters,docs:{...Операция_2.parameters?.docs,source:{originalSource:'{\n  args: {\n    operation: {\n      id: 2,\n      name: "Молоко",\n      desc: "Магазин Магнит",\n      createAt: "01.01.2023 23:59:59",\n      amount: 44,\n      category: {\n        id: 1,\n        name: "Продукты",\n        photo: ""\n      },\n      type: "Расход"\n    }\n  }\n}',...Операция_2.parameters?.docs?.source}}},Операция_3.parameters={...Операция_3.parameters,docs:{...Операция_3.parameters?.docs,source:{originalSource:'{\n  args: {\n    operation: {\n      id: 3,\n      name: "Аванс",\n      desc: "Получил аванс на работе",\n      createAt: "01.01.2023 23:59:59",\n      amount: 10000,\n      category: {\n        id: 4,\n        name: "Зарплата",\n        photo: ""\n      },\n      type: "Доход"\n    }\n  }\n}',...Операция_3.parameters?.docs?.source}}},Операция_4.parameters={...Операция_4.parameters,docs:{...Операция_4.parameters?.docs,source:{originalSource:'{\n  args: {\n    operation: {\n      id: 4,\n      name: "АИ-95",\n      desc: "Газпромнефть",\n      createAt: "01.01.2023 23:59:59",\n      amount: 1000,\n      category: {\n        id: 2,\n        name: "Бензин",\n        photo: ""\n      },\n      type: "Расход"\n    }\n  }\n}',...Операция_4.parameters?.docs?.source}}},Операция_5.parameters={...Операция_5.parameters,docs:{...Операция_5.parameters?.docs,source:{originalSource:'{\n  args: {\n    operation: {\n      id: 5,\n      name: "Кино",\n      desc: "Звёздные войны",\n      createAt: "01.01.2023 23:59:59",\n      amount: 145,\n      category: {\n        id: 3,\n        name: "Развлечения",\n        photo: ""\n      },\n      type: "Расход"\n    }\n  }\n}',...Операция_5.parameters?.docs?.source}}},Операция_6.parameters={...Операция_6.parameters,docs:{...Операция_6.parameters?.docs,source:{originalSource:'{\n  args: {\n    operation: {\n      id: 6,\n      name: "Сделал сайт",\n      desc: "Сделал сайт",\n      createAt: "01.01.2023 23:59:59",\n      amount: 110000,\n      category: {\n        id: 5,\n        name: "Халтура",\n        photo: ""\n      },\n      type: "Доход"\n    }\n  }\n}',...Операция_6.parameters?.docs?.source}}}}}]);