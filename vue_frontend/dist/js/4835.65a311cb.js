(self["webpackChunk_coreui_coreui_free_vue_admin_template"]=self["webpackChunk_coreui_coreui_free_vue_admin_template"]||[]).push([[4835],{1373:function(e,t){!function(e,t){for(var l in t)e[l]=t[l]}(t,function(e){var t={};function l(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,l),o.l=!0,o.exports}return l.m=e,l.c=t,l.d=function(e,t,i){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},l.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(l.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(i,o,function(t){return e[t]}.bind(null,o));return i},l.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l(l.s=0)}([function(e,t,l){"use strict";l.r(t),l.d(t,"deepObjectsMerge",(function(){return i})),l.d(t,"getColor",(function(){return n})),l.d(t,"getStyle",(function(){return s})),l.d(t,"hexToRgb",(function(){return c})),l.d(t,"hexToRgba",(function(){return u})),l.d(t,"makeUid",(function(){return d})),l.d(t,"omitByKeys",(function(){return m})),l.d(t,"pickByKeys",(function(){return f})),l.d(t,"rgbToHex",(function(){return p}));var i=function e(t,l){for(var i=0,o=Object.keys(l);i<o.length;i++){var r=o[i];l[r]instanceof Object&&Object.assign(l[r],e(t[r],l[r]))}return Object.assign(t||{},l),t},o=function(){for(var e={},t=document.styleSheets,l="",i=t.length-1;i>-1;i--){for(var o=t[i].cssRules,r=o.length-1;r>-1;r--)if(".ie-custom-properties"===o[r].selectorText){l=o[r].cssText;break}if(l)break}return(l=l.substring(l.lastIndexOf("{")+1,l.lastIndexOf("}"))).split(";").forEach((function(t){if(t){var l=t.split(": ")[0],i=t.split(": ")[1];l&&i&&(e["--".concat(l.trim())]=i.trim())}})),e},r=function(){return Boolean(document.documentMode)&&document.documentMode>=10},a=function(e){return e.match(/^--.*/i)},s=function(e){var t,l=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;if(a(e)&&r()){var i=o();t=i[e]}else t=window.getComputedStyle(l,null).getPropertyValue(e).replace(/^\s/,"");return t},n=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body,l="--".concat(e),i=s(l,t);return i||e},c=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");var t,l,i;if(!e.match(/^#(?:[0-9a-f]{3}){1,2}$/i))throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(t=parseInt(e.slice(1,3),16),l=parseInt(e.slice(3,5),16),i=parseInt(e.slice(5,7),16)):(t=parseInt(e.slice(1,2),16),l=parseInt(e.slice(2,3),16),i=parseInt(e.slice(3,5),16)),"rgba(".concat(t,", ").concat(l,", ").concat(i,")")},u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;if(void 0===e)throw new TypeError("Hex color is not defined");var l,i,o,r=e.match(/^#(?:[0-9a-f]{3}){1,2}$/i);if(!r)throw new Error("".concat(e," is not a valid hex color"));return 7===e.length?(l=parseInt(e.slice(1,3),16),i=parseInt(e.slice(3,5),16),o=parseInt(e.slice(5,7),16)):(l=parseInt(e.slice(1,2),16),i=parseInt(e.slice(2,3),16),o=parseInt(e.slice(3,5),16)),"rgba(".concat(l,", ").concat(i,", ").concat(o,", ").concat(t/100,")")},d=function(){return"uid-"+Math.random().toString(36).substr(2)},m=function(e,t){for(var l={},i=Object.keys(e),o=0;o<i.length;o++)!t.includes(i[o])&&(l[i[o]]=e[i[o]]);return l},f=function(e,t){for(var l={},i=0;i<t.length;i++)l[t[i]]=e[t[i]];return l},p=function(e){if(void 0===e)throw new TypeError("Hex color is not defined");if("transparent"===e)return"#00000000";var t=e.match(/^rgba?[\s+]?\([\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?,[\s+]?(\d+)[\s+]?/i);if(!t)throw new Error("".concat(e," is not a valid rgb color"));var l="0".concat(parseInt(t[1],10).toString(16)),i="0".concat(parseInt(t[2],10).toString(16)),o="0".concat(parseInt(t[3],10).toString(16));return"#".concat(l.slice(-2)).concat(i.slice(-2)).concat(o.slice(-2))},g={deepObjectsMerge:i,getColor:n,getStyle:s,hexToRgb:c,hexToRgba:u,makeUid:d,omitByKeys:m,pickByKeys:f,rgbToHex:p};t.default=g}]))},4835:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return f}});var i=l(3396);const o=(0,i._)("strong",null,"Vue Widgets",-1);function r(e,t,l,r,a,s){const n=(0,i.up)("CCardHeader"),c=(0,i.up)("WidgetsStatsA"),u=(0,i.up)("DocsExample"),d=(0,i.up)("CWidgetStatsB"),m=(0,i.up)("CCol"),f=(0,i.up)("CRow"),p=(0,i.up)("CChart"),g=(0,i.up)("CWidgetStatsE"),W=(0,i.up)("CIcon"),w=(0,i.up)("CWidgetStatsF"),h=(0,i.up)("CLink"),_=(0,i.up)("WidgetsStatsD"),v=(0,i.up)("CWidgetStatsC"),x=(0,i.up)("CCardGroup"),b=(0,i.up)("CCardBody"),y=(0,i.up)("CCard");return(0,i.wg)(),(0,i.j4)(f,null,{default:(0,i.w5)((()=>[(0,i.Wm)(m,null,{default:(0,i.w5)((()=>[(0,i.Wm)(y,{class:"mb-4"},{default:(0,i.w5)((()=>[(0,i.Wm)(n,null,{default:(0,i.w5)((()=>[o])),_:1}),(0,i.Wm)(b,null,{default:(0,i.w5)((()=>[(0,i.Wm)(u,{href:""},{default:(0,i.w5)((()=>[(0,i.Wm)(c)])),_:1}),(0,i.Wm)(u,{href:""},{default:(0,i.w5)((()=>[(0,i.Wm)(f,null,{default:(0,i.w5)((()=>[(0,i.Wm)(m,{xs:3},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{class:"mb-3",progress:{color:"success",value:75}},{text:(0,i.w5)((()=>[(0,i.Uk)("Widget helper text")])),title:(0,i.w5)((()=>[(0,i.Uk)("Widget title")])),value:(0,i.w5)((()=>[(0,i.Uk)("89.9%")])),_:1})])),_:1}),(0,i.Wm)(m,{xs:3},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{class:"mb-3",progress:{color:"info",value:75},text:"Widget helper text",title:"Widget title",value:"12.124"})])),_:1}),(0,i.Wm)(m,{xs:3},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{class:"mb-3",progress:{color:"warning",value:75},text:"Widget helper text",title:"Widget title",value:"$98.111,00"})])),_:1}),(0,i.Wm)(m,{xs:3},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{class:"mb-3",progress:{color:"primary",value:75},text:"Widget helper text",title:"Widget title",value:"2TB"})])),_:1})])),_:1})])),_:1}),(0,i.Wm)(u,{href:""},{default:(0,i.w5)((()=>[(0,i.Wm)(f,null,{default:(0,i.w5)((()=>[(0,i.Wm)(m,{xs:3},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{class:"mb-3",color:"success",inverse:"",progress:{value:75}},{text:(0,i.w5)((()=>[(0,i.Uk)("Widget helper text")])),title:(0,i.w5)((()=>[(0,i.Uk)("Widget title")])),value:(0,i.w5)((()=>[(0,i.Uk)("89.9%")])),_:1})])),_:1}),(0,i.Wm)(m,{xs:3},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{class:"mb-3",color:"info",inverse:"",progress:{value:75},text:"Widget helper text",title:"Widget title",value:"12.124"})])),_:1}),(0,i.Wm)(m,{xs:3},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{class:"mb-3",color:"warning",inverse:"",progress:{value:75},text:"Widget helper text",title:"Widget title",value:"$98.111,00"})])),_:1}),(0,i.Wm)(m,{xs:3},{default:(0,i.w5)((()=>[(0,i.Wm)(d,{class:"mb-3",color:"primary",inverse:"",progress:{value:75},text:"Widget helper text",title:"Widget title",value:"2TB"})])),_:1})])),_:1})])),_:1}),(0,i.Wm)(u,{href:""},{default:(0,i.w5)((()=>[(0,i.Wm)(f,null,{default:(0,i.w5)((()=>[(0,i.Wm)(m,{xs:2},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{title:"title",value:"1,123"},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{class:"mx-auto",type:"bar",style:{height:"40px",width:"80px"},data:{labels:r.widgetStatsE.labels,datasets:[{backgroundColor:r.getStyle("--cui-danger"),borderColor:"transparent",borderWidth:1,data:[41,78,51,66,74,42,89,97,87,84,78,88,67,45,47]}]},options:r.widgetStatsE.optionsBar},null,8,["data","options"])])),_:1})])),_:1}),(0,i.Wm)(m,{xs:2},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{title:"title",value:"1,123"},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{class:"mx-auto",type:"bar",style:{height:"40px",width:"80px"},data:{labels:r.widgetStatsE.labels,datasets:[{backgroundColor:r.getStyle("--cui-primary"),borderColor:"transparent",borderWidth:1,data:[41,78,51,66,74,42,89,97,87,84,78,88,67,45,47]}]},options:r.widgetStatsE.optionsBar},null,8,["data","options"])])),_:1})])),_:1}),(0,i.Wm)(m,{xs:2},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{title:"title",value:"1,123"},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{class:"mx-auto",type:"bar",style:{height:"40px",width:"80px"},data:{labels:r.widgetStatsE.labels,datasets:[{backgroundColor:r.getStyle("--cui-warning"),borderColor:"transparent",borderWidth:1,data:[41,78,51,66,74,42,89,97,87,84,78,88,67,45,47]}]},options:r.widgetStatsE.optionsBar},null,8,["data","options"])])),_:1})])),_:1}),(0,i.Wm)(m,{xs:2},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{title:"title",value:"1,123"},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{class:"mx-auto",type:"line",style:{height:"40px",width:"80px"},data:{labels:r.widgetStatsE.labels,datasets:[{backgroundColor:"transparent",borderColor:r.getStyle("--cui-success"),borderWidth:2,data:[41,78,51,66,74,42,89,97,87,84,78,88,67,45,47]}]},options:r.widgetStatsE.optionsLine},null,8,["data","options"])])),_:1})])),_:1}),(0,i.Wm)(m,{xs:2},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{title:"title",value:"1,123"},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{class:"mx-auto",type:"line",style:{height:"40px",width:"80px"},data:{labels:r.widgetStatsE.labels,datasets:[{backgroundColor:"transparent",borderColor:r.getStyle("--cui-warning"),borderWidth:2,data:[41,78,51,66,74,42,89,97,87,84,78,88,67,45,47]}]},options:r.widgetStatsE.optionsLine},null,8,["data","options"])])),_:1})])),_:1}),(0,i.Wm)(m,{xs:2},{default:(0,i.w5)((()=>[(0,i.Wm)(g,{title:"title",value:"1,123"},{default:(0,i.w5)((()=>[(0,i.Wm)(p,{class:"mx-auto",type:"line",style:{height:"40px",width:"80px"},data:{labels:r.widgetStatsE.labels,datasets:[{backgroundColor:"transparent",borderColor:r.getStyle("--cui-info"),borderWidth:2,data:[41,78,51,66,74,42,89,97,87,84,78,88,67,45,47]}]},options:r.widgetStatsE.optionsLine},null,8,["data","options"])])),_:1})])),_:1})])),_:1})])),_:1}),(0,i.Wm)(u,{href:""},{default:(0,i.w5)((()=>[(0,i.Wm)(f,null,{default:(0,i.w5)((()=>[(0,i.Wm)(m,{xs:3},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{color:"primary",title:"Title",value:"$1.999,50"},{icon:(0,i.w5)((()=>[(0,i.Wm)(W,{icon:"cil-settings",size:"xl"})])),_:1})])),_:1}),(0,i.Wm)(m,{xs:3},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{color:"info",title:"Title",value:"$1.999,50"},{icon:(0,i.w5)((()=>[(0,i.Wm)(W,{icon:"cil-user",size:"xl"})])),_:1})])),_:1}),(0,i.Wm)(m,{xs:3},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{color:"warning",title:"Title",value:"$1.999,50"},{icon:(0,i.w5)((()=>[(0,i.Wm)(W,{icon:"cil-moon",size:"xl"})])),_:1})])),_:1}),(0,i.Wm)(m,{xs:3},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{color:"danger",title:"Title",value:"$1.999,50"},{icon:(0,i.w5)((()=>[(0,i.Wm)(W,{icon:"cil-bell",size:"xl"})])),_:1})])),_:1})])),_:1})])),_:1}),(0,i.Wm)(u,{href:""},{default:(0,i.w5)((()=>[(0,i.Wm)(f,null,{default:(0,i.w5)((()=>[(0,i.Wm)(m,{xs:3},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{color:"primary",title:"Title",value:"$1.999,50"},{icon:(0,i.w5)((()=>[(0,i.Wm)(W,{icon:"cil-settings",size:"xl"})])),footer:(0,i.w5)((()=>[(0,i.Wm)(h,{class:"fw-semibold font-xs text-medium-emphasis",href:"https://coreui.io/",rel:"noopener norefferer",target:"_blank"},{default:(0,i.w5)((()=>[(0,i.Uk)(" View more "),(0,i.Wm)(W,{icon:"cil-arrow-right",class:"ms-auto",width:"16"})])),_:1})])),_:1})])),_:1}),(0,i.Wm)(m,{xs:3},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{color:"info",title:"Title",value:"$1.999,50"},{icon:(0,i.w5)((()=>[(0,i.Wm)(W,{icon:"cil-user",size:"xl"})])),footer:(0,i.w5)((()=>[(0,i.Wm)(h,{class:"fw-semibold font-xs text-medium-emphasis",href:"https://coreui.io/",rel:"noopener norefferer",target:"_blank"},{default:(0,i.w5)((()=>[(0,i.Uk)(" View more "),(0,i.Wm)(W,{icon:"cil-arrow-right",class:"ms-auto",width:"16"})])),_:1})])),_:1})])),_:1}),(0,i.Wm)(m,{xs:3},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{color:"warning",title:"Title",value:"$1.999,50"},{icon:(0,i.w5)((()=>[(0,i.Wm)(W,{icon:"cil-moon",size:"xl"})])),footer:(0,i.w5)((()=>[(0,i.Wm)(h,{class:"fw-semibold font-xs text-medium-emphasis",href:"https://coreui.io/",rel:"noopener norefferer",target:"_blank"},{default:(0,i.w5)((()=>[(0,i.Uk)(" View more "),(0,i.Wm)(W,{icon:"cil-arrow-right",class:"ms-auto",width:"16"})])),_:1})])),_:1})])),_:1}),(0,i.Wm)(m,{xs:3},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{color:"danger",title:"Title",value:"$1.999,50"},{icon:(0,i.w5)((()=>[(0,i.Wm)(W,{icon:"cil-bell",size:"xl"})])),footer:(0,i.w5)((()=>[(0,i.Wm)(h,{class:"fw-semibold font-xs text-medium-emphasis",href:"https://coreui.io/",rel:"noopener norefferer",target:"_blank"},{default:(0,i.w5)((()=>[(0,i.Uk)(" View more "),(0,i.Wm)(W,{icon:"cil-arrow-right",class:"ms-auto",width:"16"})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1}),(0,i.Wm)(u,{href:""},{default:(0,i.w5)((()=>[(0,i.Wm)(f,null,{default:(0,i.w5)((()=>[(0,i.Wm)(m,{xs:3},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{color:"primary",padding:!1,title:"Title",value:"$1.999,50"},{icon:(0,i.w5)((()=>[(0,i.Wm)(W,{icon:"cil-settings",size:"xl"})])),_:1})])),_:1}),(0,i.Wm)(m,{xs:3},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{color:"info",padding:!1,title:"Title",value:"$1.999,50"},{icon:(0,i.w5)((()=>[(0,i.Wm)(W,{icon:"cil-user",size:"xl"})])),_:1})])),_:1}),(0,i.Wm)(m,{xs:3},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{color:"warning",padding:!1,title:"Title",value:"$1.999,50"},{icon:(0,i.w5)((()=>[(0,i.Wm)(W,{icon:"cil-moon",size:"xl"})])),_:1})])),_:1}),(0,i.Wm)(m,{xs:3},{default:(0,i.w5)((()=>[(0,i.Wm)(w,{color:"danger",padding:!1,title:"Title",value:"$1.999,50"},{icon:(0,i.w5)((()=>[(0,i.Wm)(W,{icon:"cil-bell",size:"xl"})])),_:1})])),_:1})])),_:1})])),_:1}),(0,i.Wm)(u,{href:""},{default:(0,i.w5)((()=>[(0,i.Wm)(_)])),_:1}),(0,i.Wm)(u,{href:""},{default:(0,i.w5)((()=>[(0,i.Wm)(x,null,{default:(0,i.w5)((()=>[(0,i.Wm)(v,{class:"mb-3",progress:{color:"info",value:75},title:"Visitors",value:"87.500"},{icon:(0,i.w5)((()=>[(0,i.Wm)(W,{icon:"cil-people",height:"36"})])),_:1}),(0,i.Wm)(v,{class:"mb-3",progress:{color:"success",value:75},title:"New Clients",value:"385"},{icon:(0,i.w5)((()=>[(0,i.Wm)(W,{icon:"cil-user-follow",height:"36"})])),_:1}),(0,i.Wm)(v,{class:"mb-3",progress:{color:"warning",value:75},title:"Products sold",value:"1238"},{icon:(0,i.w5)((()=>[(0,i.Wm)(W,{icon:"cil-basket",height:"36"})])),_:1}),(0,i.Wm)(v,{class:"mb-3",progress:{color:"primary",value:75},title:"Returning Visitors",value:"28%"},{icon:(0,i.w5)((()=>[(0,i.Wm)(W,{icon:"cil-chart-pie",height:"36"})])),_:1}),(0,i.Wm)(v,{class:"mb-3",progress:{color:"danger",value:75},title:"Avg. Time",value:"5:34:11"},{icon:(0,i.w5)((()=>[(0,i.Wm)(W,{icon:"cil-speedometer",height:"36"})])),_:1})])),_:1})])),_:1}),(0,i.Wm)(u,{href:""},{default:(0,i.w5)((()=>[(0,i.Wm)(f,null,{default:(0,i.w5)((()=>[(0,i.Wm)(m,{xs:2},{default:(0,i.w5)((()=>[(0,i.Wm)(v,{class:"mb-3",progress:{color:"info",value:75},title:"Visitors",value:"87.500"},{icon:(0,i.w5)((()=>[(0,i.Wm)(W,{icon:"cil-people",height:"36"})])),_:1})])),_:1}),(0,i.Wm)(m,{xs:2},{default:(0,i.w5)((()=>[(0,i.Wm)(v,{class:"mb-3",progress:{color:"success",value:75},title:"New Clients",value:"385"},{icon:(0,i.w5)((()=>[(0,i.Wm)(W,{icon:"cil-user-follow",height:"36"})])),_:1})])),_:1}),(0,i.Wm)(m,{xs:2},{default:(0,i.w5)((()=>[(0,i.Wm)(v,{class:"mb-3",progress:{color:"warning",value:75},title:"Products sold",value:"1238"},{icon:(0,i.w5)((()=>[(0,i.Wm)(W,{icon:"cil-basket",height:"36"})])),_:1})])),_:1}),(0,i.Wm)(m,{xs:2},{default:(0,i.w5)((()=>[(0,i.Wm)(v,{class:"mb-3",progress:{color:"primary",value:75},title:"Returning Visitors",value:"28%"},{icon:(0,i.w5)((()=>[(0,i.Wm)(W,{icon:"cil-chart-pie",height:"36"})])),_:1})])),_:1}),(0,i.Wm)(m,{xs:2},{default:(0,i.w5)((()=>[(0,i.Wm)(v,{class:"mb-3",progress:{color:"danger",value:75},title:"Avg. Time",value:"5:34:11"},{icon:(0,i.w5)((()=>[(0,i.Wm)(W,{icon:"cil-speedometer",height:"36"})])),_:1})])),_:1}),(0,i.Wm)(m,{xs:2},{default:(0,i.w5)((()=>[(0,i.Wm)(v,{class:"mb-3",progress:{color:"info",value:75},title:"Comments",value:"972"},{icon:(0,i.w5)((()=>[(0,i.Wm)(W,{icon:"cil-speech",height:"36"})])),_:1})])),_:1})])),_:1})])),_:1}),(0,i.Wm)(u,{href:""},{default:(0,i.w5)((()=>[(0,i.Wm)(f,null,{default:(0,i.w5)((()=>[(0,i.Wm)(m,{xs:2},{default:(0,i.w5)((()=>[(0,i.Wm)(v,{class:"mb-3",color:"info",inverse:"",progress:{value:75},title:"Visitors",value:"87.500"},{icon:(0,i.w5)((()=>[(0,i.Wm)(W,{icon:"cil-people",height:"36"})])),_:1})])),_:1}),(0,i.Wm)(m,{xs:2},{default:(0,i.w5)((()=>[(0,i.Wm)(v,{class:"mb-3",color:"success",inverse:"",progress:{value:75},title:"New Clients",value:"385"},{icon:(0,i.w5)((()=>[(0,i.Wm)(W,{icon:"cil-user-follow",height:"36"})])),_:1})])),_:1}),(0,i.Wm)(m,{xs:2},{default:(0,i.w5)((()=>[(0,i.Wm)(v,{class:"mb-3",color:"warning",inverse:"",progress:{value:75},title:"Products sold",value:"1238"},{icon:(0,i.w5)((()=>[(0,i.Wm)(W,{icon:"cil-basket",height:"36"})])),_:1})])),_:1}),(0,i.Wm)(m,{xs:2},{default:(0,i.w5)((()=>[(0,i.Wm)(v,{class:"mb-3",color:"primary",inverse:"",progress:{value:75},title:"Returning Visitors",value:"28%"},{icon:(0,i.w5)((()=>[(0,i.Wm)(W,{icon:"cil-chart-pie",height:"36"})])),_:1})])),_:1}),(0,i.Wm)(m,{xs:2},{default:(0,i.w5)((()=>[(0,i.Wm)(v,{class:"mb-3",color:"danger",inverse:"",progress:{value:75},title:"Avg. Time",value:"5:34:11"},{icon:(0,i.w5)((()=>[(0,i.Wm)(W,{icon:"cil-speedometer",height:"36"})])),_:1})])),_:1}),(0,i.Wm)(m,{xs:2},{default:(0,i.w5)((()=>[(0,i.Wm)(v,{class:"mb-3",color:"info",inverse:"",progress:{value:75},title:"Comments",value:"972"},{icon:(0,i.w5)((()=>[(0,i.Wm)(W,{icon:"cil-speech",height:"36"})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})])),_:1})}var a=l(1373),s=l(7311),n=l(5871),c=l(2856),u={name:"Widgets",components:{CChart:s.FR,WidgetsStatsA:n.Z,WidgetsStatsD:c.Z},setup(){const e={labels:["M","T","W","T","F","S","S","M","T","W","T","F","S","S","M"],optionsBar:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{display:!1},y:{display:!1}}},optionsLine:{maintainAspectRatio:!1,elements:{line:{tension:.4},point:{radius:0}},plugins:{legend:{display:!1}},scales:{x:{display:!1},y:{display:!1}}}};return{getStyle:a.getStyle,widgetStatsE:e,widgetProgressIconItems:[{color:"primary",icon:"cil-puzzle"},{color:"success",icon:"cil-speedometer"},{color:"danger",icon:"cil-cursor"},{color:"info",icon:"cil-drop"},{color:"secondary",icon:"cil-pencil"}]}}},d=l(89);const m=(0,d.Z)(u,[["render",r]]);var f=m}}]);
//# sourceMappingURL=4835.65a311cb.js.map