System.register(["./p-4546c12d.system.js"],function(e){"use strict";var t,r,s,n;return{setters:[function(e){t=e.r;r=e.h;s=e.H;n=e.g}],execute:function(){var i=e("calcite_progress",function(){function e(e){t(this,e);this.type="determinate";this.value=0;this.text=null;this.reversed=false}e.prototype.render=function(){return r(s,{class:"calcite-progress",type:this.type,reversed:this.reversed,style:{"--percentage-value":this.value*100+"%"}},r("div",{class:"calcite-progress__text"},this.text),r("slot",null))};Object.defineProperty(e.prototype,"el",{get:function(){return n(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return"body{font-family:Avenir Next W01,Avenir Next W00,Avenir Next,Avenir,Helvetica Neue,sans-serif}.overflow-hidden{overflow:hidden}calcite-tab{display:none}calcite-tab[is-active]{display:block}.calcite-progress{position:relative;display:block}.calcite-progress:after,.calcite-progress:before{content:\"\";opacity:1;position:absolute;height:2px;top:0;-webkit-transition:opacity .5s ease-in-out;transition:opacity .5s ease-in-out}.calcite-progress:before{background-color:#007ac2;z-index:0;width:100%}.calcite-progress:after{background-color:hsla(0,0%,95.3%,.6);z-index:0}.calcite-progress[type=indeterminate]:after{width:20%;-webkit-animation:looping-progresss-bar-ani 1.5s linear infinite;animation:looping-progresss-bar-ani 1.5s linear infinite}.calcite-progress[type=determinate]:after{width:var(--percentage-value)}.calcite-progress__text{text-align:center}\@-webkit-keyframes looping-progresss-bar-ani{0%{left:0;width:0}20%{left:0;width:20%}80%{left:80%;width:20%}to{left:100%;width:0}}\@keyframes looping-progresss-bar-ani{0%{left:0;width:0}20%{left:0;width:20%}80%{left:80%;width:20%}to{left:100%;width:0}}"},enumerable:true,configurable:true});return e}())}}});