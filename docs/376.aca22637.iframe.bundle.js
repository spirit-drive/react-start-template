/*! For license information please see 376.aca22637.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkreact_start_template=self.webpackChunkreact_start_template||[]).push([[376],{"./src/components/Modal/Modal.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{u:()=>Modal_Modal_Modal});__webpack_require__("./node_modules/react/index.js");var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),Modal=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Modal/Modal.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(Modal.Z,options);Modal.Z&&Modal.Z.locals&&Modal.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),Modal_Modal_Modal=function Modal(_ref){var _ref$visible=_ref.visible,visible=void 0!==_ref$visible&&_ref$visible,onCloseModalWindow=_ref.onCloseModalWindow,children=_ref.children;return(0,jsx_runtime.jsx)("div",{className:classnames_default()("modal",{open:visible}),id:"my-modal",children:(0,jsx_runtime.jsxs)("div",{className:"modal__box",children:[(0,jsx_runtime.jsx)("button",{className:"modal__close-btn",id:"close-my-modal-btn",onClick:function onClick(){return onCloseModalWindow(!1)},children:(0,jsx_runtime.jsxs)("svg",{width:"23",height:"25",viewBox:"0 0 23 25",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,jsx_runtime.jsx)("path",{d:"M2.09082 0.03125L22.9999 22.0294L20.909 24.2292L-8.73579e-05 2.23106L2.09082 0.03125Z",fill:"#333333"}),(0,jsx_runtime.jsx)("path",{d:"M0 22.0295L20.9091 0.0314368L23 2.23125L2.09091 24.2294L0 22.0295Z",fill:"#333333"})]})}),children]})})};Modal_Modal_Modal.displayName="Modal";try{Modal_Modal_Modal.displayName="Modal",Modal_Modal_Modal.__docgenInfo={description:"Компонент модального окна. Состоит из темной маски, белого квадратного окна и кнопки закрытия. Обработчики писать пока не нужно.\nОбладает пропсом visible и children, для них должны быть реализовано управление в сторибук.\nЛогики монтирования в body пока не нужно реализовывать.",displayName:"Modal",props:{visible:{defaultValue:{value:"false"},description:"Отображать/Скрыть модальное окно",name:"visible",required:!1,type:{name:"boolean"}},onCloseModalWindow:{defaultValue:null,description:"Функция, скрывающая модальное окно",name:"onCloseModalWindow",required:!1,type:{name:"(visible: boolean) => void"}},children:{defaultValue:null,description:"Внутреннее содержимое модального окна",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Modal/Modal.tsx#Modal"]={docgenInfo:Modal_Modal_Modal.__docgenInfo,name:"Modal",path:"src/components/Modal/Modal.tsx#Modal"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/Modal/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{u:()=>_Modal__WEBPACK_IMPORTED_MODULE_0__.u});var _Modal__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/Modal/Modal.tsx")},"./src/components/Operation/FullOperationDisplay/FullOperationDisplay.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>FullOperationDisplay_FullOperationDisplay_FullOperationDisplay});__webpack_require__("./node_modules/react/index.js");var Modal=__webpack_require__("./src/components/Modal/index.ts"),injectStylesIntoStyleTag=__webpack_require__("./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"),injectStylesIntoStyleTag_default=__webpack_require__.n(injectStylesIntoStyleTag),styleDomAPI=__webpack_require__("./node_modules/style-loader/dist/runtime/styleDomAPI.js"),styleDomAPI_default=__webpack_require__.n(styleDomAPI),insertBySelector=__webpack_require__("./node_modules/style-loader/dist/runtime/insertBySelector.js"),insertBySelector_default=__webpack_require__.n(insertBySelector),setAttributesWithoutAttributes=__webpack_require__("./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"),setAttributesWithoutAttributes_default=__webpack_require__.n(setAttributesWithoutAttributes),insertStyleElement=__webpack_require__("./node_modules/style-loader/dist/runtime/insertStyleElement.js"),insertStyleElement_default=__webpack_require__.n(insertStyleElement),styleTagTransform=__webpack_require__("./node_modules/style-loader/dist/runtime/styleTagTransform.js"),styleTagTransform_default=__webpack_require__.n(styleTagTransform),FullOperationDisplay=__webpack_require__("./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Operation/FullOperationDisplay/FullOperationDisplay.scss"),options={};options.styleTagTransform=styleTagTransform_default(),options.setAttributes=setAttributesWithoutAttributes_default(),options.insert=insertBySelector_default().bind(null,"head"),options.domAPI=styleDomAPI_default(),options.insertStyleElement=insertStyleElement_default();injectStylesIntoStyleTag_default()(FullOperationDisplay.Z,options);FullOperationDisplay.Z&&FullOperationDisplay.Z.locals&&FullOperationDisplay.Z.locals;var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),FullOperationDisplay_FullOperationDisplay_FullOperationDisplay=function FullOperationDisplay(_ref){var id=_ref.id,name=_ref.name,desc=_ref.desc,createAt=_ref.createAt,amount=_ref.amount,category=_ref.category,type=_ref.type,_ref$visible=_ref.visible,visible=void 0!==_ref$visible&&_ref$visible;return(0,jsx_runtime.jsx)("div",{className:"operation-description",children:(0,jsx_runtime.jsx)(Modal.u,{visible,onCloseModalWindow:null,children:(0,jsx_runtime.jsx)("div",{className:"container-fluid mb-3",children:(0,jsx_runtime.jsx)("div",{className:"row",children:(0,jsx_runtime.jsx)("div",{className:"col-12",children:(0,jsx_runtime.jsxs)("div",{className:"bg-white p-3",children:[(0,jsx_runtime.jsx)("h1",{className:"section-title h3",children:(0,jsx_runtime.jsx)("span",{children:"Операция"})}),(0,jsx_runtime.jsx)("div",{className:"row",children:(0,jsx_runtime.jsx)("div",{className:"col-md-12",children:(0,jsx_runtime.jsxs)("form",{action:"",className:"needs-validation",noValidate:!0,children:[(0,jsx_runtime.jsxs)("div",{className:"mb-3",children:[(0,jsx_runtime.jsx)("label",{htmlFor:"id",className:"form-label required",children:"ID"}),(0,jsx_runtime.jsx)("input",{type:"text",className:"form-control",id:"id",placeholder:"ID",value:id,required:!0}),(0,jsx_runtime.jsx)("div",{className:"invalid-feedback",children:"ID is required"})]}),(0,jsx_runtime.jsxs)("div",{className:"mb-3",children:[(0,jsx_runtime.jsx)("label",{htmlFor:"amount",className:"form-label required",children:"Сумма"}),(0,jsx_runtime.jsx)("input",{type:"text",className:"form-control",id:"Amount",placeholder:"Amount",value:amount,required:!0}),(0,jsx_runtime.jsx)("div",{className:"invalid-feedback",children:"Amount is required"})]}),(0,jsx_runtime.jsxs)("div",{className:"mb-3",children:[(0,jsx_runtime.jsx)("label",{htmlFor:"category",className:"form-label required",children:"Категория"}),(0,jsx_runtime.jsx)("input",{type:"category",className:"form-control",id:"category",placeholder:"Category",value:category.name,required:!0}),(0,jsx_runtime.jsx)("div",{className:"invalid-feedback",children:"Category is required"})]}),(0,jsx_runtime.jsxs)("div",{className:"mb-3",children:[(0,jsx_runtime.jsx)("label",{htmlFor:"name",className:"form-label required",children:"Название"}),(0,jsx_runtime.jsx)("input",{type:"name",className:"form-control",id:"name",placeholder:"Name",value:name,required:!0}),(0,jsx_runtime.jsx)("div",{className:"invalid-feedback",children:"Please, privide a valide name"})]}),(0,jsx_runtime.jsxs)("div",{className:"mb-3",children:[(0,jsx_runtime.jsx)("label",{htmlFor:"desc",className:"form-label required",children:"Описание"}),(0,jsx_runtime.jsx)("input",{type:"text",className:"form-control",id:"desc",placeholder:"Description",value:desc,required:!0}),(0,jsx_runtime.jsx)("div",{className:"invalid-feedback",children:"Description is required"})]}),(0,jsx_runtime.jsxs)("div",{className:"mb-3",children:[(0,jsx_runtime.jsx)("label",{htmlFor:"createAt",className:"form-label required",children:"Дата"}),(0,jsx_runtime.jsx)("input",{type:"text",className:"form-control",id:"password",placeholder:"createAt",value:createAt,required:!0}),(0,jsx_runtime.jsx)("div",{className:"invalid-feedback",children:"createAt is required"})]}),(0,jsx_runtime.jsxs)("div",{className:"mb-3",children:[(0,jsx_runtime.jsx)("label",{htmlFor:"type",className:"form-label required",children:"Тип"}),(0,jsx_runtime.jsx)("input",{type:"text",className:"form-control",id:"type",placeholder:"Type",value:type,required:!0}),(0,jsx_runtime.jsx)("div",{className:"invalid-feedback",children:"Type is required"})]}),(0,jsx_runtime.jsxs)("div",{className:"mb-3",children:[(0,jsx_runtime.jsx)("button",{type:"submit",className:"btn btn-warning",children:"Редактировать"}),(0,jsx_runtime.jsx)("button",{type:"submit",className:"btn btn-warning",children:"Сохранить"})]})]})})})]})})})})})})};FullOperationDisplay_FullOperationDisplay_FullOperationDisplay.displayName="FullOperationDisplay";try{FullOperationDisplay_FullOperationDisplay_FullOperationDisplay.displayName="FullOperationDisplay",FullOperationDisplay_FullOperationDisplay_FullOperationDisplay.__docgenInfo={description:"Компонент полного отображения операции. Содержит сумму операции, название категории, название, описание,\nдату - все это он получает из пропсов. Также в нем есть кнопка редактирования (пока не активная)",displayName:"FullOperationDisplay",props:{id:{defaultValue:null,description:"Уникальный идентификатор операции",name:"id",required:!0,type:{name:"number"}},name:{defaultValue:null,description:"Название операции",name:"name",required:!0,type:{name:"string"}},desc:{defaultValue:null,description:"Описание операции",name:"desc",required:!0,type:{name:"string"}},createAt:{defaultValue:null,description:"Дата постановки на учёт. (Дата создания записи в базе данных)",name:"createAt",required:!0,type:{name:"string"}},amount:{defaultValue:null,description:"Сумма операции",name:"amount",required:!0,type:{name:"number"}},category:{defaultValue:null,description:"Категория, к которой относится операция",name:"category",required:!0,type:{name:"Category"}},type:{defaultValue:null,description:"Тип операции. Доход/Расход",name:"type",required:!0,type:{name:"string"}},visible:{defaultValue:{value:"false"},description:"Отображать/Скрыть модальное окно",name:"visible",required:!1,type:{name:"boolean"}},onCloseModalWindow:{defaultValue:null,description:"Функция, скрывающая модальное окно",name:"onCloseModalWindow",required:!1,type:{name:"(visible: boolean) => void"}},children:{defaultValue:null,description:"Внутреннее содержимое модального окна",name:"children",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Operation/FullOperationDisplay/FullOperationDisplay.tsx#FullOperationDisplay"]={docgenInfo:FullOperationDisplay_FullOperationDisplay_FullOperationDisplay.__docgenInfo,name:"FullOperationDisplay",path:"src/components/Operation/FullOperationDisplay/FullOperationDisplay.tsx#FullOperationDisplay"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Modal/Modal.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".modal{position:fixed;left:0;top:0;width:100%;height:100vh;z-index:1021;background-color:rgba(0,0,0,.3);display:grid;align-items:center;justify-content:center;overflow-y:auto;visibility:hidden;opacity:0;transition:opacity .4s,visibility .4s;cursor:pointer}.modal .modal__box{position:relative;max-width:100vh;padding:45px;z-index:1;margin:30px 15px;background-color:#fff;box-shadow:0px 0px 17px -7px rgba(34,60,80,.2);transform:scale(0);transition:transform .8s;cursor:auto;text-align:justify}.modal .modal__box .modal__close-btn{position:absolute;top:8px;right:8px;border:none;background-color:rgba(0,0,0,0);padding:5px;cursor:pointer}.modal .modal__box .modal__close-btn svg path{transition:fill .4s}.modal .modal__box .modal__close-btn:hover svg path{fill:var(--accent-color)}.modal .modal__box .modal__close-btn:active svg path{fill:var(--accent-color)}.open{visibility:visible;opacity:1}.open .modal__box{transform:scale(1)}","",{version:3,sources:["webpack://./src/components/Modal/Modal.scss"],names:[],mappings:"AAAA,OACI,cAAA,CACA,MAAA,CACA,KAAA,CACA,UAAA,CACA,YAAA,CACA,YAAA,CACA,+BAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA,CACA,eAAA,CACA,iBAAA,CACA,SAAA,CACA,qCAAA,CACA,cAAA,CAEA,mBACI,iBAAA,CACA,eAAA,CACA,YAAA,CACA,SAAA,CACA,gBAAA,CACA,qBAAA,CACA,8CAAA,CACA,kBAAA,CACA,wBAAA,CACA,WAAA,CACA,kBAAA,CAEA,qCACI,iBAAA,CACA,OAAA,CACA,SAAA,CACA,WAAA,CACA,8BAAA,CACA,WAAA,CACA,cAAA,CAGI,8CACI,mBAAA,CAMA,oDACI,wBAAA,CAOJ,qDACI,wBAAA,CAQxB,MACI,kBAAA,CACA,SAAA,CAEA,kBACI,kBAAA",sourcesContent:[".modal {\n    position: fixed;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100vh;\n    z-index: 1021;\n    background-color: rgba(0, 0, 0, .3);\n    display: grid;\n    align-items: center;\n    justify-content: center;\n    overflow-y: auto;\n    visibility: hidden;\n    opacity: 0;\n    transition: opacity .4s, visibility .4s;\n    cursor: pointer;\n\n    .modal__box {\n        position: relative;\n        max-width: 100vh;\n        padding: 45px;\n        z-index: 1;\n        margin: 30px 15px;\n        background-color: white;\n        box-shadow: 0px 0px 17px -7px rgba(34, 60, 80, 0.2);\n        transform: scale(0);\n        transition: transform .8s;\n        cursor: auto;\n        text-align: justify;\n\n        .modal__close-btn {\n            position: absolute;\n            top: 8px;\n            right: 8px;\n            border: none;\n            background-color: transparent;\n            padding: 5px;\n            cursor: pointer;\n\n            svg {\n                path {\n                    transition: fill .4s;\n                }\n            }\n\n            &:hover {\n                svg {\n                    path {\n                        fill: var(--accent-color);\n                    }\n                }\n            }\n\n            &:active {\n                svg {\n                    path {\n                        fill: var(--accent-color);\n                    }\n                }\n            }\n        }\n    }\n}\n\n.open {\n    visibility: visible;\n    opacity: 1;\n\n    .modal__box {\n        transform: scale(1);\n    }\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/components/Operation/FullOperationDisplay/FullOperationDisplay.scss":(module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/css-loader/dist/runtime/sourceMaps.js"),_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__),_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js"),___CSS_LOADER_EXPORT___=__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default());___CSS_LOADER_EXPORT___.push([module.id,".operation-description .modal__box{min-width:50vw}.operation-description .modal__box .section-title span{background-color:#fff}.needs-validation div:last-child{text-align:right}.needs-validation div:last-child button{margin-left:20px}","",{version:3,sources:["webpack://./src/components/Operation/FullOperationDisplay/FullOperationDisplay.scss"],names:[],mappings:"AACI,mCACI,cAAA,CAGI,uDACI,qBAAA,CAOZ,iCACI,gBAAA,CAEA,wCACI,gBAAA",sourcesContent:[".operation-description {\n    .modal__box {\n        min-width: 50vw;\n\n        .section-title {\n            span {\n                background-color: #fff;\n            }\n        }\n    }\n}\n\n.needs-validation {\n    div:last-child {\n        text-align: right;\n        \n        button {\n            margin-left: 20px;\n        }\n    }\n}"],sourceRoot:""}]);const __WEBPACK_DEFAULT_EXPORT__=___CSS_LOADER_EXPORT___},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);