(()=>{"use strict";var t={56:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},72:t=>{var e=[];function n(t){for(var n=-1,o=0;o<e.length;o++)if(e[o].identifier===t){n=o;break}return n}function o(t,o){for(var a={},i=[],d=0;d<t.length;d++){var c=t[d],u=o.base?c[0]+o.base:c[0],s=a[u]||0,l="".concat(u," ").concat(s);a[u]=s+1;var f=n(l),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)e[f].references++,e[f].updater(p);else{var y=r(p,o);o.byIndex=d,e.splice(d,0,{identifier:l,updater:y,references:1})}i.push(l)}return i}function r(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,r){var a=o(t=t||[],r=r||{});return function(t){t=t||[];for(var i=0;i<a.length;i++){var d=n(a[i]);e[d].references--}for(var c=o(t,r),u=0;u<a.length;u++){var s=n(a[u]);0===e[s].references&&(e[s].updater(),e.splice(s,1))}a=c}}},113:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},314:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",o=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),o&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),o&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,o,r,a){"string"==typeof t&&(t=[[null,t,void 0]]);var i={};if(o)for(var d=0;d<this.length;d++){var c=this[d][0];null!=c&&(i[c]=!0)}for(var u=0;u<t.length;u++){var s=[].concat(t[u]);o&&i[s[0]]||(void 0!==a&&(void 0===s[5]||(s[1]="@layer".concat(s[5].length>0?" ".concat(s[5]):""," {").concat(s[1],"}")),s[5]=a),n&&(s[2]?(s[1]="@media ".concat(s[2]," {").concat(s[1],"}"),s[2]=n):s[2]=n),r&&(s[4]?(s[1]="@supports (".concat(s[4],") {").concat(s[1],"}"),s[4]=r):s[4]="".concat(r)),e.push(s))}},e}},365:(t,e,n)=>{n.d(e,{A:()=>d});var o=n(601),r=n.n(o),a=n(314),i=n.n(a)()(r());i.push([t.id,"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --sidebar-bg: #FFEBE8;\n    --header-bg: #FCC9C5;\n    --button-hover: #FEDDD8;\n}\n\ninput, button, textarea, select {\n    font: inherit;\n    color: black;\n}\n\n:root {\n    font-family: Verdana, Geneva, Tahoma, sans-serif;\n}\n\n#main-container {\n    height: 100vh;\n}\n\n#body-container {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    height: calc(100vh - 100px);\n}\n\n#header {\n    display: flex;\n    background-color: var(--header-bg);\n    align-items: center;\n    justify-content: space-between;\n    padding: 24px;\n    grid-column: 1 / 3;\n    height: 100px;\n}\n\n#sidebar {\n    padding: 24px;\n    background-color: var(--sidebar-bg);\n\n    #title {\n        display: flex;\n        justify-content: space-between;\n    }\n\n    #add-project-btn {\n        font-weight: bolder;\n        border: none;\n        background: transparent;\n        margin-left: 24px;\n    }\n    \n    .delete-project-btn {\n        margin-left: 24px;\n    }\n\n    #add-project-btn:hover,\n    .delete-project-btn:hover {\n        scale: 1.2;\n    }\n\n    .category-btn:hover {\n        background-color: var(--button-hover);\n    }\n    \n    .active {\n        background-color: var(--button-hover);\n    }\n\n    button  {\n        background-color: var(--sidebar-bg);\n        border: none;\n    }\n\n    .category-row {\n        display: flex;\n        justify-content: space-between;\n    }\n\n    .category-btn {\n        border-radius: 6px;\n        text-align: left;\n        padding: 6px 12px;\n        max-width: 20ch;\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n    }\n\n    #sidebar-content {\n        margin-top: 12px;\n        display: grid;\n        gap: 6px;\n    }\n\n    #dates {\n        display: flex;\n        flex-direction: column;\n        margin-bottom: 12px;\n\n        button {\n            text-align: left;\n            font-weight: bold;\n            padding: 6px 12px;\n        }\n\n        button:hover {\n            background-color: var(--button-hover);\n        }\n    }\n}\n\n#dropdown,\n#dropdown + label {\n    display: none;\n}\n\n@media screen and (max-width: 700px) {\n    #dropdown + label {\n        font-size: 24px;\n        display: block;\n    }\n\n    #sidebar {\n        display: none;\n        position: absolute;\n        right: 0px;\n        top: 100px;\n    }\n\n    #content {\n        grid-column: 1 / span 2;\n    }\n}\n\n#content {\n    padding: 24px;\n    overflow: auto;\n\n    #add-todo-btn {\n        border: none;\n        background-color: #CFE3E2;\n        padding: 6px 12px;\n        border-radius: 6px;\n        margin-top: 12px;\n        font-weight: bolder;\n    }\n\n    #add-todo-btn:hover {\n        background-color: #8fbebc;\n    }\n\n    .high-priority {\n        color: #fd6666;\n    }\n\n    .medium-priority {\n        color: #ffb265;\n    }\n    \n    .low-priority {\n        color: #7270ff;\n    }\n\n    .todo-card {\n        padding: 24px;\n        border-bottom: 1px solid #CFE3E2;\n    }\n\n    .edit-todo-btn,\n    .delete-todo-btn {\n        background-color: #FFF;\n        border: none;\n        margin-top: 12px;\n    }\n\n    .delete-todo-btn {\n        margin-left: 12px;\n    }\n\n    .edit-todo-btn:hover,\n    .delete-todo-btn:hover {\n        scale: 1.2;\n    }\n}\n\n#add-todo-form,\n#edit-todo-form,\n#add-project-form,\n#delete-project-form {\n    display: grid;\n    gap: 12px;\n    padding: 24px;\n\n    input,\n    button,\n    select,\n    textarea {\n        padding: 6px 12px;\n    }\n\n    button  {\n        background-color: var(--sidebar-bg);\n        border: none;\n    }\n\n    button:hover  {\n        background-color: var(--header-bg);\n    }\n}\n\n#add-todo-dialog,\n#edit-todo-dialog,\n#add-project-dialog,\n#delete-project-dialog {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    border: none;\n}",""]);const d=i},540:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},601:t=>{t.exports=function(t){return t[1]}},659:t=>{var e={};t.exports=function(t,n){var o=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},825:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var r=void 0!==n.layer;r&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,r&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}}},e={};function n(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return t[o](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0;var o=n(72),r=n.n(o),a=n(825),i=n.n(a),d=n(659),c=n.n(d),u=n(56),s=n.n(u),l=n(540),f=n.n(l),p=n(113),y=n.n(p),g=n(365),v={};function m(t){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},m(t)}function b(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,h(o.key),o)}}function h(t){var e=function(t){if("object"!=m(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=m(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==m(e)?e:e+""}v.styleTagTransform=y(),v.setAttributes=s(),v.insert=c().bind(null,"head"),v.domAPI=i(),v.insertStyleElement=f(),r()(g.A,v),g.A&&g.A.locals&&g.A.locals;var x=function(){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._title=e,this._todos=n}return e=t,o=[{key:"fromJSON",value:function(e){return Object.assign(new t,e)}}],(n=[{key:"title",get:function(){return this._title},set:function(t){this._title=t}},{key:"todos",get:function(){return this._todos},set:function(t){this._todos=t}},{key:"addTodo",value:function(t){this._todos.push(t)}},{key:"getIndexFromId",value:function(t){return this._todos.findIndex((function(e){return e.id===t}))}},{key:"deleteTodo",value:function(t){var e=this.getIndexFromId(t);this._todos.splice(e,1)}},{key:"editTodo",value:function(t,e){var n=this.getIndexFromId(t);this._todos[n]=e}},{key:"getTodo",value:function(t){var e=this.getIndexFromId(t);return this._todos[e]}},{key:"logCategory",value:function(){console.log(this._title,this._todos)}}])&&b(e.prototype,n),o&&b(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,n,o}();function C(t){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},C(t)}function S(t,e){for(var n=0;n<e.length;n++){var o=e[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,w(o.key),o)}}function w(t){var e=function(t){if("object"!=C(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var n=e.call(t,"string");if("object"!=C(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==C(e)?e:e+""}var k,T=function(){function t(e,n,o,r,a){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._id=Date.now().toString(),this._title=e,this._dueDate=n,this._priority=o,this._notes=r,this._category=a}return e=t,o=[{key:"fromJSON",value:function(e){return Object.assign(new t,e)}}],(n=[{key:"id",get:function(){return this._id}},{key:"title",get:function(){return this._title},set:function(t){this._title=t}},{key:"dueDate",get:function(){return this._dueDate},set:function(t){this._dueDate=t}},{key:"priority",get:function(){return this._priority},set:function(t){this._priority=t}},{key:"notes",get:function(){return this._notes},set:function(t){this._notes=t}},{key:"category",get:function(){return this._category}}])&&S(e.prototype,n),o&&S(e,o),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,n,o}();const E=(k="categories",{saveCategories:function(t){localStorage.setItem(k,JSON.stringify(t))},loadCategories:function(){return(JSON.parse(localStorage.getItem(k))||[{title:"Home",todos:[]}]).map((function(t){var e=x.fromJSON(t),n=e.todos.map((function(t){return T.fromJSON(t)}));return new x(e.title,n)}))}}),j=(Math.pow(10,8),Symbol.for("constructDateFrom"));function I(t,e){return"function"==typeof t?t(e):t&&"object"==typeof t&&j in t?t[j](e):t instanceof Date?new t.constructor(e):new Date(e)}function D(t,e){return I(e||t,t)}function L(t,e){const n=D(t,e?.in);return n.setHours(0,0,0,0),n}function q(t,e){return function(t,e,n){const[o,r]=function(t,...e){const n=I.bind(null,t||e.find((t=>"object"==typeof t)));return e.map(n)}(n?.in,t,e);return+L(o)==+L(r)}(I(e?.in||t,t),function(t){return I(t,Date.now())}(e?.in||t))}function _(t,e){const n=+D(t)-+D(e);return n<0?-1:n>0?1:n}let F={};function M(){return F}function O(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,o=Array(e);n<e;n++)o[n]=t[n];return o}const A=function(){var t=E.loadCategories(),e=0,n=t[e];function o(){return t.flatMap((function(t){return t.todos}))}return{getCategories:function(){return t},addCategory:function(e){t.push(new x(e)),E.saveCategories(t)},deleteCategory:function(e){t.splice(e,1),E.saveCategories(t)},addTodoToCategory:function(o,r,a,i){var d=new T(o,r,a,i,e);n.addTodo(d),E.saveCategories(t)},deleteTodoFromCategory:function(e,n){t[n].deleteTodo(e),E.saveCategories(t)},editTodoInCategory:function(e,n,o,r,a,i){var d=new T(o,r,a,i,n);t[n].editTodo(e,d),E.saveCategories(t)},changeCurrentCategory:function(o){n=t[e=o]},getCurrentCategoryIndex:function(){return e},getCurrentCategory:function(){return t[e].title},getCurrentCategoryTodos:function(){return n.todos},getTodoFromCategory:function(e,n){return t[n].getTodo(e)},getTodayTodos:function(){return o().filter((function(t){return q(t.dueDate)}))},getWeekTodos:function(){var t=new Date;return o().filter((function(e){return-1===_(e.dueDate,function(t,e){const n=M(),o=e?.weekStartsOn??e?.locale?.options?.weekStartsOn??n.weekStartsOn??n.locale?.options?.weekStartsOn??0,r=D(t,e?.in),a=r.getDay(),i=6+(a<o?-7:0)-(a-o);return r.setDate(r.getDate()+i),r.setHours(23,59,59,999),r}(t,{weekStartsOn:1}))}))},getMonthTodos:function(){var t=new Date;return o().filter((function(e){return-1===_(e.dueDate,function(t,e){const n=D(t,e?.in),o=n.getMonth();return n.setFullYear(n.getFullYear(),o+1,0),n.setHours(23,59,59,999),n}(t))}))},logCategories:function(){var e,n=function(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return O(t,e);var n={}.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?O(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var o=0,r=function(){};return{s:r,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,d=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return i=t.done,t},e:function(t){d=!0,a=t},f:function(){try{i||null==n.return||n.return()}finally{if(d)throw a}}}}(t);try{for(n.s();!(e=n.n()).done;)e.value.logCategory()}catch(t){n.e(t)}finally{n.f()}}}}(),P=function(){function t(){var t=A.getCategories(),e=parseInt(A.getCurrentCategoryIndex()),n=document.querySelector("#sidebar-content");n.textContent="",t.map((function(t,o){var r=document.createElement("button"),a=document.createElement("button"),i=document.createElement("div");r.textContent=t.title,r.classList.add("category-btn"),r.dataset.index=o,o===e&&r.classList.add("active"),a.innerHTML='<i class="fa-solid fa-trash"></i>',a.classList.add("delete-project-btn"),a.dataset.index=o,i.classList.add("category-row"),i.appendChild(r),0!==o&&i.appendChild(a),n.appendChild(i)}))}function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;null===t&&(t=A.getCurrentCategoryTodos());var n=document.querySelector("#todo-container");n.textContent="";var o=document.querySelector("#current-project-title"),r=document.querySelector("#add-todo-btn");e?(r.style.display="none",o.textContent=e):(r.style.display="block",o.textContent=A.getCurrentCategory()),t.map((function(t){var e=document.createElement("h3"),o=document.createElement("p"),r=document.createElement("p"),a=document.createElement("div"),i=document.createElement("button"),d=document.createElement("button");e.textContent=t.title;var c=t.priority;"High"===c?e.classList.add("high-priority"):"Medium"===c?e.classList.add("medium-priority"):e.classList.add("low-priority"),o.textContent=t.dueDate,r.textContent=t.notes,i.innerHTML='<i class="fa-solid fa-trash"></i>',i.classList.add("delete-todo-btn"),i.dataset.todoId=t.id,i.dataset.categoryIndex=t.category,d.innerHTML='<i class="fa fa-pencil-square-o" aria-hidden="true"></i>',d.dataset.todoId=t.id,d.dataset.categoryIndex=t.category,d.classList.add("edit-todo-btn"),a.classList.add("todo-card"),a.appendChild(e),a.appendChild(o),a.appendChild(r),a.appendChild(d),a.appendChild(i),n.appendChild(a)}))}return{renderSidebar:t,renderContent:e,initialiseEventListeners:function(){var n,o,r,a,i,d,c,u,s,l,f,p,y,g,v,m,b,h,x,C,S,w;n=document.querySelector("#dropdown"),o=document.querySelector("#sidebar"),n.addEventListener("change",(function(){o.style.display=n.checked?"block":"none"})),r=document.querySelector("#add-project-btn"),a=document.querySelector("#add-project-dialog"),i=document.querySelector("#add-project-form"),d=document.querySelector("#project-title"),c=document.querySelector("#delete-project-dialog"),u=document.querySelector("#delete-project-form"),s=document.querySelector("#sidebar-content"),l=document.querySelector("#today-btn"),f=document.querySelector("#week-btn"),p=document.querySelector("#month-btn"),r.addEventListener("click",(function(){a.showModal()})),a.addEventListener("click",(function(t){t.target===a&&(t.preventDefault(),a.close())})),i.addEventListener("submit",(function(e){e.preventDefault(),A.addCategory(d.value),a.close(),i.reset(),t()})),c.addEventListener("click",(function(t){t.target===c&&(t.preventDefault(),c.close())})),u.addEventListener("submit",(function(n){n.preventDefault();var o=u.dataset.index;A.deleteCategory(o),A.changeCurrentCategory(o-1),t(),e()})),s.addEventListener("click",(function(n){var o=n.target.closest(".delete-project-btn"),r=n.target.closest(".category-btn");o&&(u.dataset.index=o.dataset.index,c.showModal()),r&&(A.changeCurrentCategory(r.dataset.index),e(),t())})),l.addEventListener("click",(function(){e(A.getTodayTodos(),"Due today")})),f.addEventListener("click",(function(){e(A.getWeekTodos(),"Due this week")})),p.addEventListener("click",(function(){e(A.getMonthTodos(),"Due this month")})),y=document.querySelector("#todo-container"),g=document.querySelector("#add-todo-btn"),v=document.querySelector("#add-todo-dialog"),m=document.querySelector("#add-todo-form"),b=document.querySelector("#edit-todo-dialog"),h=document.querySelector("#edit-todo-form"),x=document.querySelector("#edit-todo-title"),C=document.querySelector("#edit-todo-due-date"),S=document.querySelector("#edit-todo-priority"),w=document.querySelector("#edit-todo-notes"),g.addEventListener("click",(function(){v.showModal()})),v.addEventListener("click",(function(t){t.target===v&&(t.preventDefault(),v.close())})),m.addEventListener("submit",(function(t){t.preventDefault();var n=document.querySelector("#todo-title"),o=document.querySelector("#todo-due-date"),r=document.querySelector("#todo-priority"),a=document.querySelector("#todo-notes");A.addTodoToCategory(n.value,o.value,r.value,a.value),v.close(),m.reset(),e()})),y.addEventListener("click",(function(t){var n=t.target.closest(".edit-todo-btn"),o=t.target.closest(".delete-todo-btn");if(o&&(A.deleteTodoFromCategory(o.dataset.index,o.dataset.categoryIndex),e()),n){var r=A.getTodoFromCategory(n.dataset.todoId,n.dataset.categoryIndex);h.dataset.todoId=n.dataset.todoId,h.dataset.categoryIndex=n.dataset.categoryIndex,x.value=r.title,C.value=r.dueDate,S.value=r.priority,w.value=r.notes,b.showModal()}})),b.addEventListener("click",(function(t){t.target===b&&(t.preventDefault(),b.close())})),h.addEventListener("submit",(function(t){t.preventDefault(),A.editTodoInCategory(h.dataset.todoId,h.dataset.categoryIndex,x.value,C.value,S.value,w.value),b.close(),e()}))}}}();P.initialiseEventListeners(),P.renderSidebar(),P.renderContent()})();