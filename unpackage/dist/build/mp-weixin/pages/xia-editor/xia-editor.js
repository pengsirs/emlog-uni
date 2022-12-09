"use strict";var e=require("../../common/vendor.js"),t=require("../../api.js");require("../../setting.js");const a={props:{value:{type:String,default:""},placeholder:{type:String,default:"开始输入..."}},data:()=>({blogSortName:[],code:">_",readOnly:!1,formats:{},htmls:"",title:"",excerpt:"",sort:1,cover:[],flg:!1,tags:"",sid:"1",blogSorts:[]}),created(){},onShow(){var t=this;e.index.getStorage({key:"appData",success:function(e){t.appData=e.data}}),e.index.getStorage({key:"apikey",success:function(e){console.log("success"),t.appData.data.apikey==e.data&&(t.flg=!0)},fail(){t.flg=!1}})},onPullDownRefresh(){var t=this;e.index.getStorage({key:"apikey",success:function(e){console.log("success"),t.appData.data.apikey==e.data?t.flg=!0:t.flg=!1}}),e.index.stopPullDownRefresh()},methods:{setting(){e.index.navigateTo({url:"../setting/admin"})},messageToggle(e,t){this.msgType=e,this.messageText=`${t}`,this.$refs.message.open()},bindPickerChange:function(e){console.log("picker发送选择改变，携带值为",this.blogSorts[e.detail.value].sid),this.sort=e.detail.value,this.sid=this.blogSorts[e.detail.value].sid},change(e){},async fabu(){var a=this.$data.title,o=this.$data.htmls,s=this.$data.excerpt,i=this.$data.tags,n=this.$data.sid,r=this.$data.cover,l=new Date,d=l.getFullYear(),c=l.getMonth()+1,p=l.getDate(),u=l.getHours(),g=l.getMinutes(),m=l.getSeconds(),h=String((l.getTime()/1e3).toFixed(0)),f=h+this.appData.data.apikey,x=e.md5(f);const y=await t.myRequest({url:"/?rest-api=article_post",data:{req_sign:x,req_time:h,title:a,content:o,excerpt:s,cover:r[0]||"",sort_id:n,author_uid:"1",tags:i,post_date:d+"-"+c+"-"+p+" "+u+":"+g+":"+m}});"ok"==y.data.msg&&(e.index.showToast({title:"发布成功"}),e.index.reLaunch({url:"../index/index"})),this.dataa=y.data,console.log(this.dataa)},editText(e){this.$emit("editorChange",e.detail.html),this.htmls=e.detail.html},readOnlyChange(){this.readOnly=!this.readOnly},onEditorReady(){e.index.createSelectorQuery().select("#editor").context((e=>{this.editorCtx=e.context})).exec()},undo(){this.editorCtx.undo()},redo(){this.editorCtx.redo()},format(e){let{name:t,value:a}=e.target.dataset;t&&this.editorCtx.format(t,a)},onStatusChange(e){const t=e.detail;this.formats=t},insertDivider(){this.editorCtx.insertDivider({success:function(){console.log("insert divider success")}})},clear(){this.editorCtx.clear({success:function(e){console.log("clear success")}})},removeFormat(){this.editorCtx.insertText({text:"<pre>代码块</pre>"})},insertDate(){const e=new Date,t=`${e.getFullYear()}/${e.getMonth()+1}/${e.getDate()}`;this.editorCtx.insertText({text:t})},insertImage(){const t=this;e.index.chooseImage({count:1,success:a=>{e.index.showLoading({title:"正在上传..."}),console.log(a.tempFilePaths[0]),console.log(t.appData.data.accessKey),console.log(t.appData.data.secretKey),e.index.uploadFile({url:"https://tp.hkiii.cn/index.php/index/index/img",filePath:a.tempFilePaths[0],name:"file",method:"POST",fileType:"image",formData:{ak:t.appData.data.accessKey,sk:t.appData.data.secretKey,kj:t.appData.data.bucket,ym:t.appData.data.ym},success:function(a){var o=JSON.parse(a.data);console.log(o.data),t.editorCtx.insertImage({src:o.data,alt:o.data,success:function(){t.cover.push(o.data),t.messageToggle("success","上传成功"),e.index.hideLoading()}})},fail:function(){t.messageToggle("error","上传失败"),e.index.hideLoading()}})}})},async getSorts(){const e=await t.myRequest({url:"/?rest-api=sort_list",method:"GET"});this.blogSorts=e.data.data.sorts;for(var a=Object.keys(this.blogSorts),o=0;o<=a.length;o++)this.blogSortName.push(e.data.data.sorts[o].sortname);console.log(this.blogSortName)}},onLoad(){this.getSorts(),e.index.loadFontFace({family:"Pacifico",source:'url("./Pacifico.ttf")'})}};if(!Array){(e.resolveComponent("uni-easyinput")+e.resolveComponent("uni-collapse-item")+e.resolveComponent("uni-collapse")+e.resolveComponent("uni-popup-message")+e.resolveComponent("uni-popup"))()}Math||((()=>"../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js")+(()=>"../../uni_modules/uni-collapse/components/uni-collapse-item/uni-collapse-item.js")+(()=>"../../uni_modules/uni-collapse/components/uni-collapse/uni-collapse.js")+(()=>"../../uni_modules/uni-popup/components/uni-popup-message/uni-popup-message.js")+(()=>"../../uni_modules/uni-popup/components/uni-popup/uni-popup.js"))();var o=e._export_sfc(a,[["render",function(t,a,o,s,i,n){return e.e({a:i.flg},i.flg?{b:i.title,c:e.o((e=>i.title=e.detail.value)),d:e.n(i.formats.bold?"ql-active":""),e:e.n(i.formats.italic?"ql-active":""),f:e.n(i.formats.underline?"ql-active":""),g:e.n(i.formats.strike?"ql-active":""),h:e.n("left"===i.formats.align?"ql-active":""),i:e.n("center"===i.formats.align?"ql-active":""),j:e.n("right"===i.formats.align?"ql-active":""),k:e.n("ordered"===i.formats.list?"ql-active":""),l:e.n("bullet"===i.formats.list?"ql-active":""),m:e.o(((...e)=>n.undo&&n.undo(...e))),n:e.o(((...e)=>n.redo&&n.redo(...e))),o:e.o(((...e)=>n.insertDivider&&n.insertDivider(...e))),p:e.o(((...e)=>n.insertImage&&n.insertImage(...e))),q:e.n(1===i.formats.header?"ql-active":""),r:e.n(2===i.formats.header?"ql-active":""),s:e.n(3===i.formats.header?"ql-active":""),t:e.o(((...e)=>n.format&&n.format(...e))),v:e.o(((...e)=>n.editText&&n.editText(...e))),w:o.placeholder,x:e.o(((...e)=>n.onStatusChange&&n.onStatusChange(...e))),y:i.readOnly,z:e.o(((...e)=>n.onEditorReady&&n.onEditorReady(...e))),A:e.o((e=>i.excerpt=e)),B:e.p({type:"text",placeholder:"请输入文章描述,可留空",modelValue:i.excerpt}),C:e.p({"show-animation":!0,open:!0,title:"文章描述"}),D:e.t(i.blogSorts[i.sort].sortname||"请选择分类"),E:e.o(((...e)=>n.bindPickerChange&&n.bindPickerChange(...e))),F:i.sort,G:i.blogSortName,H:e.p({"show-animation":!0,title:"选择分类"}),I:e.o((e=>i.tags=e)),J:e.p({type:"text",placeholder:"文章标签，多个半角逗号分隔，如：PHP,MySQL",modelValue:i.tags}),K:e.p({"show-animation":!0,title:"文章标签"}),L:e.o(n.change),M:e.o((e=>t.accordionVal=e)),N:e.p({accordion:!0,modelValue:t.accordionVal}),O:e.o((e=>n.fabu()))}:{},{P:e.p({type:t.msgType,message:t.messageText,duration:2e3}),Q:e.sr("message","277d7266-6"),R:e.p({type:"message"}),S:!i.flg},i.flg?{}:{T:e.o((e=>n.setting()))})}]]);wx.createPage(o);