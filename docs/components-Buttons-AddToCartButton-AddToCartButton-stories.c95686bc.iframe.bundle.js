/*! For license information please see components-Buttons-AddToCartButton-AddToCartButton-stories.c95686bc.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[654],{"./src/components/Buttons/AddToCartButton/AddToCartButton.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>AddToCartButton_AddToCartButton_AddToCartButton});__webpack_require__("./node_modules/react/index.js");var injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),AddToCartButton=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Buttons/AddToCartButton/AddToCartButton.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(AddToCartButton.Z,options);AddToCartButton.Z&&AddToCartButton.Z.locals&&AddToCartButton.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),AddToCartButton_AddToCartButton_AddToCartButton=function AddToCartButton(_ref){var _ref$counter=_ref.counter,counter=void 0===_ref$counter?0:_ref$counter;return(0,jsx_runtime.jsx)("div",{className:"product-add2cart",children:(0,jsx_runtime.jsx)("div",{className:"input-group",children:counter>0?(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)("button",{className:"btn btn-warning",children:(0,jsx_runtime.jsx)("i",{className:"fa-sharp fa-solid fa-minus"})}),(0,jsx_runtime.jsx)("input",{className:"form-control",type:"text",value:counter,disabled:!0}),(0,jsx_runtime.jsx)("button",{className:"btn btn-warning",children:(0,jsx_runtime.jsx)("i",{className:"fa-sharp fa-solid fa-plus"})})]}):(0,jsx_runtime.jsxs)("button",{className:"btn btn-warning",children:[(0,jsx_runtime.jsx)("i",{className:"fas fa-shopping-cart"})," Add to cart"]})})})};AddToCartButton_AddToCartButton_AddToCartButton.displayName="AddToCartButton";try{AddToCartButton_AddToCartButton_AddToCartButton.displayName="AddToCartButton",AddToCartButton_AddToCartButton_AddToCartButton.__docgenInfo={description:'Компонент Кнопка "в корзину". Компонент принимает в качестве пропса счетчик, если счетчик равен нулю, это кнопка,\nесли больше нуля, то это инпут с отображением количества товара и двумя кнопками по краям (увеличения/уменьшения).\nПока обработчиков не надо',displayName:"AddToCartButton",props:{counter:{defaultValue:{value:"0"},description:"Если счётчик равен нулю, это кнопка, если больше нуля, то это инпут\nс отображением количества товара и двумя кнопками по краям (увеличения/уменьшения)",name:"counter",required:!1,type:{name:"number"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Buttons/AddToCartButton/AddToCartButton.tsx#AddToCartButton"]={docgenInfo:AddToCartButton_AddToCartButton_AddToCartButton.__docgenInfo,name:"AddToCartButton",path:"src/components/Buttons/AddToCartButton/AddToCartButton.tsx#AddToCartButton"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Buttons/AddToCartButton/AddToCartButton.scss":(module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".product-add2cart .input-group{position:relative;display:flex;flex-wrap:wrap;align-items:stretch;width:250px}.product-add2cart .input-group input{text-align:center;background-color:#fff;border-color:var(--accent-color)}.product-add2cart .input-group button{border-color:var(--accent-color)}","",{version:3,sources:["webpack://./src/components/Buttons/AddToCartButton/AddToCartButton.scss"],names:[],mappings:"AACI,+BACI,iBAAA,CACA,YAAA,CACA,cAAA,CACA,mBAAA,CACA,WAAA,CAEA,qCACI,iBAAA,CACA,qBAAA,CACA,gCAAA,CAGJ,sCACI,gCAAA",sourcesContent:[".product-add2cart {\n    .input-group {\n        position: relative;\n        display: flex;\n        flex-wrap: wrap;\n        align-items: stretch;\n        width: 250px;\n\n        input {\n            text-align: center;\n            background-color: #fff;\n            border-color: var(--accent-color);\n        }\n\n        button {\n            border-color: var(--accent-color);\n        }\n    }\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./src/components/Buttons/AddToCartButton/AddToCartButton.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,Счётчик_больше_нуля:()=>Счётчик_больше_нуля,Счётчик_меньше_нуля:()=>Счётчик_меньше_нуля,Счётчик_равен_нулю:()=>Счётчик_равен_нулю});const __WEBPACK_DEFAULT_EXPORT__={title:"Компоненты/Buttons/AddToCartButton",component:__webpack_require__("./src/components/Buttons/AddToCartButton/AddToCartButton.tsx").a,tags:["autodocs"],argTypes:{counter:{control:"number"}}};var Счётчик_равен_нулю={args:{counter:0}},Счётчик_меньше_нуля={args:{counter:-1}},Счётчик_больше_нуля={args:{counter:3}},__namedExportsOrder=["Счётчик_равен_нулю","Счётчик_меньше_нуля","Счётчик_больше_нуля"];Счётчик_равен_нулю.parameters={...Счётчик_равен_нулю.parameters,docs:{...Счётчик_равен_нулю.parameters?.docs,source:{originalSource:"{\n  args: {\n    counter: 0\n  }\n}",...Счётчик_равен_нулю.parameters?.docs?.source}}},Счётчик_меньше_нуля.parameters={...Счётчик_меньше_нуля.parameters,docs:{...Счётчик_меньше_нуля.parameters?.docs,source:{originalSource:"{\n  args: {\n    counter: -1\n  }\n}",...Счётчик_меньше_нуля.parameters?.docs?.source}}},Счётчик_больше_нуля.parameters={...Счётчик_больше_нуля.parameters,docs:{...Счётчик_больше_нуля.parameters?.docs,source:{originalSource:"{\n  args: {\n    counter: 3\n  }\n}",...Счётчик_больше_нуля.parameters?.docs?.source}}}}}]);