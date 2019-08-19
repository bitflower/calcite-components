import{r as t,c as s,h,H as i,g as e}from"./p-aef71dcb.js";import{S as c,E as a}from"./p-6415f679.js";const l=class{constructor(h){t(this,h),this.checked=!1,this.indeterminate=!1,this.name="",this.value="",this.size=null,this.disabled=!1,this.theme="light",this.toggle=()=>{this.disabled||(this.checked=!this.checked,this.indeterminate=!1)},this.indeterminatePath="M4 7h8v2H4z",this.checkedPath="M12.753 3l-7.319 7.497L3.252 8.31 2 9.373l3.434 3.434L14 4.24z",this.getPath=()=>this.indeterminate?this.indeterminatePath:this.checked?this.checkedPath:"",this.syncThisToProxyInput=()=>{this.checked=this.inputProxy.hasAttribute("checked"),this.name=this.inputProxy.name,this.value=this.inputProxy.value},this.syncProxyInputToThis=()=>{this.checked?this.inputProxy.setAttribute("checked",""):this.inputProxy.removeAttribute("checked"),this.inputProxy.name=this.name,this.inputProxy.value=this.value},this.calciteCheckboxChange=s(this,"calciteCheckboxChange",7)}onClick({target:t}){(this.el.closest("label")&&t===this.inputProxy||!this.el.closest("label")&&t===this.el)&&this.toggle()}keyDownHandler({keyCode:t}){t!==c&&t!==a||this.toggle()}checkedWatcher(){this.calciteCheckboxChange.emit(),this.checked?this.inputProxy.setAttribute("checked",""):this.inputProxy.removeAttribute("checked")}connectedCallback(){this.setupProxyInput()}disconnectedCallback(){this.observer.disconnect()}componentWillRender(){this.syncProxyInputToThis()}render(){return h(i,{role:"checkbox","aria-checked":this.checked,tabindex:this.disabled?"-1":"0"},h("svg",{class:"check-svg",viewBox:"0 0 16 16"},h("path",{d:this.getPath(),fill:"white"})),h("slot",null))}setupProxyInput(){this.inputProxy=this.el.querySelector("input"),this.inputProxy||(this.inputProxy=document.createElement("input"),this.inputProxy.type="checkbox",this.syncProxyInputToThis(),this.el.appendChild(this.inputProxy)),this.syncThisToProxyInput(),this.observer=new MutationObserver(this.syncThisToProxyInput),this.observer.observe(this.inputProxy,{attributes:!0})}get el(){return e(this)}static get watchers(){return{checked:["checkedWatcher"]}}static get style(){return"body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}::slotted(input){display:none}:host{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;tap-highlight-color:transparent}.check-svg,:host{display:inline-block;cursor:pointer}.check-svg{width:20px;height:20px;overflow:hidden;background-color:#fff;border:1px solid #757575;border-radius:2px;vertical-align:-.25em;margin-right:.25em;-webkit-transition:all .15s linear;transition:all .15s linear;-webkit-box-sizing:border-box;box-sizing:border-box}:host([theme=dark]) .check-svg{background-color:transparent;border-color:#eaeaea}:host([theme=dark][disabled]) .check-svg{border-color:#757575;background-color:#2b2b2b}:host([theme=dark][checked]) .check-svg,:host([theme=dark][indeterminate]) .check-svg{background-color:#3db8ff}:host([size=large]) .check-svg{width:24px;height:24px;border-radius:4px}:host([size=small]) .check-svg{width:16px;height:16px}:host([disabled]){pointer-events:none;cursor:default}:host([disabled]) .check-svg{background-color:#f3f3f3;border-color:#eaeaea}:host([disabled][checked]) .check-svg,:host([disabled][indeterminate]) .check-svg{background-color:#84c1e8;border-color:#84c1e8}:host([checked]) .check-svg,:host([indeterminate]) .check-svg{background-color:#007ac2;border:1px solid #007ac2}:host(:focus),:host(:hover){outline:none}:host(:focus) .check-svg,:host(:hover) .check-svg{border-color:#0079c1!important;-webkit-box-shadow:inset 0 1px 2px rgba(0,0,0,.075),0 0 5px rgba(81,167,232,.5),0 0 5px rgba(81,167,232,.5);box-shadow:inset 0 1px 2px rgba(0,0,0,.075),0 0 5px rgba(81,167,232,.5),0 0 5px rgba(81,167,232,.5)}"}};export{l as calcite_checkbox};