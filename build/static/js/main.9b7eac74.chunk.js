(window.webpackJsonpvisitorslog=window.webpackJsonpvisitorslog||[]).push([[0],{192:function(e,t){},210:function(e,t,a){e.exports=a.p+"static/media/logo.46daa66d.jpg"},246:function(e,t,a){e.exports=a(439)},251:function(e,t,a){},269:function(e,t,a){},371:function(e,t,a){},376:function(e,t){},377:function(e,t){},439:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(42),c=a.n(l),o=(a(251),a(21)),i=a(452),s=a(449),u=a(450),m=a(440),d=a(51),g=a(453),f=a(448),E=a(74),h=a.n(E),p=a(139),v=a(49),b=a.n(v),y=function(){var e=Object(p.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.a.get(t);case 3:return a=e.sent,e.abrupt("return",a.data);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),w=a(210),C=a.n(w),S=a(451),O=a(71),x=a.n(O),j={BASE_URL:"http://localhost:7000",GET:"api/getLogs",POST:"api/createLog",PUT:"api/editLog"},k=(a(269),function(e){var t=Object(n.useState)(),a=Object(o.a)(t,2),l=a[0],c=a[1],i=Object(n.useState)(),s=Object(o.a)(i,2),u=s[0],d=s[1],g=Object(n.useState)(),E=Object(o.a)(g,2),h=E[0],p=E[1],v=Object(n.useState)(),y=Object(o.a)(v,2),w=y[0],C=y[1],O=Object(n.useState)(!1),k=Object(o.a)(O,2),A=k[0],N=k[1],I=Object(n.useState)(!1),T=Object(o.a)(I,2),R=T[0],L=T[1];return r.a.createElement("div",{className:"wrapper"},r.a.createElement("form",{className:"addNewLogForm",onSubmit:function(e){e.preventDefault();var t={Name:l,Department:u,Item:h,id_no:w};b.a.post("".concat(j.BASE_URL,"/").concat(j.POST),t).then((function(e){console.log(e),N(!A)})).catch((function(e){console.log("catch the error"),L(!0)}))}},r.a.createElement("div",null,r.a.createElement("h1",null,"Add New Log")),r.a.createElement("div",{className:"textboxes-wrapper"},r.a.createElement(f.a,{placeholder:"Name",size:"large",onChange:function(e){c(e.target.value)},type:"text"}),r.a.createElement(S.a,{placeholder:"Department",options:[{key:"1",value:"Director General Secretariat",text:"DG Secretariat"},{key:"2",value:"Technical Secretariat",text:"Technical Secretariat"},{key:"3",value:"Finance and Admin Secretariat",text:"Finance and Admin Secretariat"},{key:"4",value:"Finance",text:"Finance"},{key:"5",value:"Human Resource",text:"Human Resource"},{key:"6",value:"Corporate Planning",text:"Corporate Planning"},{key:"7",value:"Internal Audit",text:"Internal Audit"},{key:"8",value:"Air Traffic Safety Eng",text:"Air Traffic Safety Eng"},{key:"9",value:"Air Traffic Services",text:"Air Traffic Services"},{key:"10",value:"Safety Regulation",text:"Safety Regulation"},{key:"11",value:"Legal and Int Relations",text:"Legal and Int Relations"},{key:"12",value:"Economic Regulation and Business Dev",text:"Economic Regulation and Business Dev"},{key:"13",value:"GATA",text:"GATA"}],onChange:function(e,t){d(t.value)},size:"large"}),r.a.createElement(f.a,{placeholder:"Item",size:"large",onChange:function(e){p(e.target.value)},type:"text"}),r.a.createElement(f.a,{placeholder:"ID No",size:"large",onChange:function(e){C(e.target.value)},type:"text"})),r.a.createElement("div",{className:"button-div"},r.a.createElement(m.a,{primary:!0,type:"submit",className:"submit-button",size:"large",disabled:!(l&&u&&h&&w)},"Create Log")),r.a.createElement(x.a,{title:"Error",show:R,onConfirm:function(){L(!R)},text:"Failed to connect to server!",type:"error"}),r.a.createElement(x.a,{title:"Log Added!",show:A,onConfirm:function(){N(!1),window.location.reload()},type:"success"})))}),A=a(222),N=a.n(A),I=(a(371),a(75)),T=a.n(I),R=a(223),L=a.n(R),D=a(224),B=a.n(D),_=function(e){var t=Object(n.useState)(1),a=Object(o.a)(t,2),l=a[0],c=a[1],E=Object(n.useState)([]),h=Object(o.a)(E,2),p=h[0],v=h[1],w=Object(n.useState)([]),S=Object(o.a)(w,2),O=S[0],A=S[1],I=Object(n.useState)(!1),R=Object(o.a)(I,2),D=R[0],_=R[1],P=Object(n.useState)([]),H=Object(o.a)(P,2),z=H[0],G=H[1],F=Object(n.useState)(0),U=Object(o.a)(F,2),J=U[0],W=U[1],Y=Object(n.useState)(!1),M=Object(o.a)(Y,2),$=M[0],q=M[1],K=Object(n.useState)(!1),Q=Object(o.a)(K,2),V=Q[0],X=Q[1],Z=B()(N.a);Object(n.useEffect)((function(){y("".concat(j.BASE_URL,"/").concat(j.GET)).then((function(e){G(e);var t=8*(l-1),a=e.slice(t,t+8),n=e.length,r=Math.ceil(n/8);W(r),v(a),A(a)})).catch((function(e){console.log("error fetching from database",e),X(!0)}))}),[l]);var ee=function(e,t){q(!$),Z.fire({title:"Return item",text:"Are you sure you want to return this item?",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Return"}).then((function(e){e.value&&(Z.fire("Item returned!","success"),b.a.put("".concat(j.BASE_URL,"/").concat(j.PUT,"/").concat(t.id)).then((function(e){console.log(e),window.location.reload()})).catch((function(e){console.log(e),X(!0),q(!1)})))})).catch((function(e){console.log(e)}))};return r.a.createElement("div",{className:"main-main-wrapper"},r.a.createElement("div",{className:"main-wrapper"},r.a.createElement("div",null,r.a.createElement("div",{className:"header-area-wrapper"},r.a.createElement("div",{className:"Name-logo-div"},r.a.createElement("div",null,r.a.createElement("img",{src:C.a,alt:"logo",style:{height:"10rem",width:"15rem"}})),r.a.createElement("div",null,r.a.createElement("h1",null,"GATA ICT Items Log"))),r.a.createElement("div",{className:"Searchbar-button-wrapper"},r.a.createElement("div",null,r.a.createElement(f.a,{focus:!0,fluid:!0,loading:D,placeholder:"Search",icon:"search",size:"large",onChange:function(e){try{_(!D);var t=e.target.value,a=z.filter((function(e){return e.Name.includes(t)||e.Item.includes(t)||e.Department.includes(t)}));A(t?a:p),_(!D)}catch(n){console.log("there's an error with the searching",n)}},type:"text"})),r.a.createElement("div",{className:"AddLogbutton"},r.a.createElement(u.a,{size:"large",closeOnDimmerClick:!0,dimmer:!0,trigger:r.a.createElement(m.a,{floated:"right",primary:!0,icon:!0,labelPosition:"left",size:"small",className:"buttonStyle"},r.a.createElement(d.a,{classnName:"Icon",name:"add"})," Add Log")},r.a.createElement(k,null))),r.a.createElement("div",null,r.a.createElement(m.a,{size:"small",labelPosition:"left",onClick:function(){var e=T.a.utils.json_to_sheet(z),t=T.a.utils.book_new();T.a.utils.book_append_sheet(t,e,"GataIct Items log Sheet");var a=T.a.write(t,{type:"binary",bookType:"xlsx"});L.a.saveAs(new Blob([function(e){for(var t=new ArrayBuffer(e.length),a=new Uint8Array(t),n=0;n<e.length;n++)a[n]=255&e.charCodeAt(n);return t}(a)],{type:"application/octet-stream"}),"GataIctItemLog.xlsx")},icon:!0},r.a.createElement(d.a,{classnName:"Icon",name:"file excel"}),"Export"))))),r.a.createElement("div",{className:"TableStyless"},r.a.createElement(i.a,{celled:!0,striped:!0,basic:"very",sortable:!0,color:"blue",size:"large",padded:!0},r.a.createElement(i.a.Header,null,r.a.createElement(i.a.Row,{style:{backgroundColor:"rgba(77,169,232,0.9)"}},r.a.createElement(i.a.HeaderCell,{style:{color:"white"}},"Date"),r.a.createElement(i.a.HeaderCell,{style:{color:"white"}},"Time In"),r.a.createElement(i.a.HeaderCell,{style:{color:"white"}},"Name"),r.a.createElement(i.a.HeaderCell,{style:{color:"white"}},"Department"),r.a.createElement(i.a.HeaderCell,{style:{color:"white"}},"Item"),r.a.createElement(i.a.HeaderCell,{style:{color:"white"}},"ID No"),r.a.createElement(i.a.HeaderCell,{style:{color:"white"}},"Time Out"),r.a.createElement(i.a.HeaderCell,{style:{color:"white"}},"Returned"))),r.a.createElement(i.a.Body,null,O.map((function(e){return function(e){return r.a.createElement(i.a.Row,{key:e.id},r.a.createElement(i.a.Cell,{style:{color:"rgb(120,120,120)"}},e.Date),r.a.createElement(i.a.Cell,{style:{color:"rgb(120,120,120)"}},e.Time_In),r.a.createElement(i.a.Cell,{style:{color:"rgb(120,120,120)"}},e.Name),r.a.createElement(i.a.Cell,{style:{color:"rgb(120,120,120)"}},e.Department),r.a.createElement(i.a.Cell,{style:{color:"rgb(120,120,120)"}},e.Item),r.a.createElement(i.a.Cell,{style:{color:"rgb(120,120,120)"}},e.ID_NO),r.a.createElement(i.a.Cell,{style:{color:"rgb(120,120,120)"}},e.Time_Out),r.a.createElement(i.a.Cell,{style:{color:"rgb(120,120,120)"}},e.Returned),r.a.createElement(i.a.Cell,null,r.a.createElement(s.a,{slider:!0,fitted:!0,toggle:!0,defaultChecked:"Yes"===e.Returned,onClick:ee,id:e.id,disabled:"Yes"===e.Returned})))}(e)})))),r.a.createElement("div",{className:"actions"},r.a.createElement(i.a.Footer,null,r.a.createElement(g.a,{activePage:l,totalPages:J,onPageChange:function(e,t){c(t.activePage)}})))),r.a.createElement(x.a,{title:"Error",show:V,onConfirm:function(){X(!V)},text:"Sorry! Can't connect to the server ",type:"error"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(438);c.a.render(r.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[246,1,2]]]);
//# sourceMappingURL=main.9b7eac74.chunk.js.map