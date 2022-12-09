"use strict";var e=require("../../../../common/vendor.js");const t={name:"UniNoticeBar",emits:["click","getmore","close"],props:{text:{type:String,default:""},moreText:{type:String,default:""},backgroundColor:{type:String,default:"#FFF9EA"},speed:{type:Number,default:100},color:{type:String,default:"#FF9A43"},moreColor:{type:String,default:"#FF9A43"},single:{type:[Boolean,String],default:!1},scrollable:{type:[Boolean,String],default:!1},showIcon:{type:[Boolean,String],default:!1},showGetMore:{type:[Boolean,String],default:!1},showClose:{type:[Boolean,String],default:!1}},data:()=>({textWidth:0,boxWidth:0,wrapWidth:"",webviewHide:!1,elId:`Uni_${Math.ceil(1e6*Math.random()).toString(36)}`,elIdBox:`Uni_${Math.ceil(1e6*Math.random()).toString(36)}`,show:!0,animationDuration:"none",animationPlayState:"paused",animationDelay:"0s"}),mounted(){this.$nextTick((()=>{this.initSize()}))},methods:{initSize(){if(this.scrollable){let t=[],o=new Promise(((t,o)=>{e.index.createSelectorQuery().in(this).select(`#${this.elId}`).boundingClientRect().exec((e=>{this.textWidth=e[0].width,t()}))})),i=new Promise(((t,o)=>{e.index.createSelectorQuery().in(this).select(`#${this.elIdBox}`).boundingClientRect().exec((e=>{this.boxWidth=e[0].width,t()}))}));t.push(o),t.push(i),Promise.all(t).then((()=>{this.animationDuration=this.textWidth/this.speed+"s",this.animationDelay=`-${this.boxWidth/this.speed}s`,setTimeout((()=>{this.animationPlayState="running"}),1e3)}))}},loopAnimation(){},clickMore(){this.$emit("getmore")},close(){this.show=!1,this.$emit("close")},onClick(){this.$emit("click")}}};if(!Array){e.resolveComponent("uni-icons")()}Math;var o=e._export_sfc(t,[["render",function(t,o,i,l,n,r){return e.e({a:n.show},n.show?e.e({b:!0===i.showIcon||"true"===i.showIcon},!0===i.showIcon||"true"===i.showIcon?{c:e.p({type:"sound",color:i.color,size:"22"})}:{},{d:e.t(i.text),e:n.elId,f:i.scrollable?1:"",g:i.scrollable||!i.single&&!i.showGetMore?"":1,h:i.color,i:n.wrapWidth+"px",j:n.animationDuration,k:n.animationDuration,l:n.webviewHide?"paused":n.animationPlayState,m:n.webviewHide?"paused":n.animationPlayState,n:n.animationDelay,o:n.animationDelay,p:n.elIdBox,q:i.scrollable?1:"",r:i.scrollable||!i.single&&!i.moreText?"":1,s:i.scrollable?1:"",t:i.scrollable||!i.single&&!i.moreText?"":1,v:!0===i.showGetMore||"true"===i.showGetMore},!0===i.showGetMore||"true"===i.showGetMore?e.e({w:i.moreText.length>0},i.moreText.length>0?{x:e.t(i.moreText),y:i.moreColor}:{z:e.p({type:"right",color:i.moreColor,size:"16"})},{A:e.o(((...e)=>r.clickMore&&r.clickMore(...e)))}):{},{B:!(!0!==i.showClose&&"true"!==i.showClose||!1!==i.showGetMore&&"false"!==i.showGetMore)},!0!==i.showClose&&"true"!==i.showClose||!1!==i.showGetMore&&"false"!==i.showGetMore?{}:{C:e.o(r.close),D:e.p({type:"closeempty",color:i.color,size:"16"})},{E:i.backgroundColor,F:e.o(((...e)=>r.onClick&&r.onClick(...e)))}):{})}],["__scopeId","data-v-554f4e16"]]);qq.createComponent(o);