(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){},18:function(e,a,t){},27:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(5),c=t.n(r),o=(t(16),t(1)),u=(t(18),t(6));var s=function(){var e=Object(l.useState)(!1),a=Object(o.a)(e,2),t=a[0],r=a[1],c=Object(l.useState)(),s=Object(o.a)(c,2),i=s[0],m=s[1],p=Object(l.useState)(),E=Object(o.a)(p,2),b=E[0],d=E[1],v=Object(l.useState)(),g=Object(o.a)(v,2),O=g[0],C=g[1],F=Object(l.useState)(),j=Object(o.a)(F,2),h=j[0],x=j[1],y=Object(l.useState)(),S=Object(o.a)(y,2),f=S[0],N=S[1],k=Object(l.useState)(),R=Object(o.a)(k,2),P=R[0],w=R[1],_=Object(l.useState)(),T=Object(o.a)(_,2),D=T[0],L=T[1],B=Object(l.useState)(),I=Object(o.a)(B,2),J=I[0],V=I[1],A=Object(l.useState)(),M=Object(o.a)(A,2),Y=M[0],q=M[1],z=Object(l.useState)(),G=Object(o.a)(z,2),H=G[0],K=G[1],Q=Object(l.useState)(),U=Object(o.a)(Q,2),W=U[0],X=U[1],Z=Object(l.useState)(),$=Object(o.a)(Z,2),ee=$[0],ae=$[1],te=Object(l.useState)(),le=Object(o.a)(te,2),ne=le[0],re=le[1],ce=Object(l.useState)(),oe=Object(o.a)(ce,2),ue=oe[0],se=oe[1],ie=Object(l.useState)(),me=Object(o.a)(ie,2),pe=me[0],Ee=me[1],be=Object(l.useState)(),de=Object(o.a)(be,2),ve=de[0],ge=de[1],Oe=Object(l.useState)(""),Ce=Object(o.a)(Oe,2),Fe=Ce[0],je=Ce[1],he=Object(l.useState)(""),xe=Object(o.a)(he,2),ye=xe[0],Se=xe[1],fe=Object(l.useState)(""),Ne=Object(o.a)(fe,2),ke=Ne[0],Re=Ne[1],Pe=Object(l.useState)(""),we=Object(o.a)(Pe,2),_e=we[0],Te=we[1];function De(e){var a=e.target.name.replace(/[0-9]/g,""),t=e.target.name.replace(/^\D+/g,"");if("rate"===a)switch(t){case"1":m(e.target.value),C(parseFloat(b/e.target.value).toFixed(2));break;case"2":x(e.target.value),w(parseFloat(f/e.target.value).toFixed(2));break;case"3":L(e.target.value),q(parseFloat(J/e.target.value).toFixed(2));break;case"4":K(e.target.value),ae(parseFloat(W/e.target.value).toFixed(2));break;case"5":re(e.target.value),Ee(parseFloat(ue/e.target.value).toFixed(2))}if("amount"===a)switch(t){case"1":d(e.target.value),C(parseFloat(e.target.value/i).toFixed(2));break;case"2":N(e.target.value),w(parseFloat(e.target.value/h).toFixed(2));break;case"3":V(e.target.value),q(parseFloat(e.target.value/D).toFixed(2));break;case"4":X(e.target.value),ae(parseFloat(e.target.value/H).toFixed(2));break;case"5":se(e.target.value),Ee(parseFloat(e.target.value/ne).toFixed(2))}}var Le={data:[{rate:i,amount:b,coins:O,selling_rate:ve,total_spend:ye,total_earning:ke,profit:Fe,total_coins:_e},{rate:h,amount:f,coins:P},{rate:D,amount:J,coins:Y},{rate:H,amount:W,coins:ee},{rate:ne,amount:ue,coins:pe}],headers:[{label:"Rate",key:"rate"},{label:"Amount",key:"amount"},{label:"Coins",key:"coins"},{label:"Selling Rate",key:"selling_rate"},{label:"Total Spend",key:"total_spend"},{label:"Total Earning",key:"total_earning"},{label:"Profit",key:"profit"},{label:"Total Coins",key:"total_coins"}],filename:"Coin_Report.csv"};return n.a.createElement("div",{className:"app"},n.a.createElement("div",{className:"container"},n.a.createElement("h2",{className:"center"},"Profit Calculator"),n.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i=i?parseFloat(i):1,b=b?parseFloat(b):0,h=h?parseFloat(h):1,f=f?parseFloat(f):0,D=D?parseFloat(D):1,J=J?parseFloat(J):0,H=H?parseFloat(H):1,W=W?parseFloat(W):0,ne=ne?parseFloat(ne):1,ue=ue?parseFloat(ue):0,ve=ve?parseFloat(ve):0;var a=b/i+f/h+J/D+W/H+ue/ne,t=a*ve,l=b+f+J+W+ue,n=t-l;Se(parseFloat(l).toFixed(2)),Re(parseFloat(t).toFixed(2)),je(parseFloat(n).toFixed(2)),Te(parseFloat(a).toFixed(2)),r(!0)}},n.a.createElement("div",{className:"rowC"},n.a.createElement("div",{className:"rateCol"},n.a.createElement("label",null,"Rate - 1st round"),n.a.createElement("input",{type:"text",placeholder:"Enter Rate",name:"rate1",value:i,onChange:De})),n.a.createElement("div",{className:"rateCol"},n.a.createElement("label",null,"Price"),n.a.createElement("input",{type:"text",placeholder:"Enter Price",name:"amount1",value:b,onChange:De})),n.a.createElement("div",null,n.a.createElement("label",null,"Coins"),n.a.createElement("input",{type:"text",readOnly:!0,placeholder:"No of Coins",name:"coin1",value:O}))),n.a.createElement("div",{className:"rowC"},n.a.createElement("div",{className:"rateCol"},n.a.createElement("label",null,"Rate - 2nd round"),n.a.createElement("input",{type:"text",placeholder:"Enter Rate",name:"rate2",value:h,onChange:De})),n.a.createElement("div",{className:"rateCol"},n.a.createElement("label",null,"Price"),n.a.createElement("input",{type:"text",placeholder:"Enter Price",name:"amount2",value:f,onChange:De})),n.a.createElement("div",null,n.a.createElement("label",null,"Coins"),n.a.createElement("input",{type:"text",readOnly:!0,placeholder:"No of Coins",name:"coin2",value:P}))),n.a.createElement("div",{className:"rowC"},n.a.createElement("div",{className:"rateCol"},n.a.createElement("label",null,"Rate - 3rd round"),n.a.createElement("input",{type:"text",placeholder:"Enter Rate",name:"rate3",value:D,onChange:De})),n.a.createElement("div",{className:"rateCol"},n.a.createElement("label",null,"Price"),n.a.createElement("input",{type:"text",placeholder:"Enter Price",name:"amount3",value:J,onChange:De})),n.a.createElement("div",null,n.a.createElement("label",null,"Coins"),n.a.createElement("input",{type:"text",readOnly:!0,placeholder:"No of Coins",name:"coin3",value:Y}))),n.a.createElement("div",{className:"rowC"},n.a.createElement("div",{className:"rateCol"},n.a.createElement("label",null,"Rate - 4th round"),n.a.createElement("input",{type:"text",placeholder:"Enter Rate",name:"rate4",value:H,onChange:De})),n.a.createElement("div",{className:"rateCol"},n.a.createElement("label",null,"Price"),n.a.createElement("input",{type:"text",placeholder:"Enter Price",name:"amount4",value:W,onChange:De})),n.a.createElement("div",null,n.a.createElement("label",null,"Coins"),n.a.createElement("input",{type:"text",readOnly:!0,placeholder:"No of Coins",name:"coin4",value:ee}))),n.a.createElement("div",{className:"rowC"},n.a.createElement("div",{className:"rateCol"},n.a.createElement("label",null,"Rate - 5th round"),n.a.createElement("input",{type:"text",placeholder:"Enter Rate",name:"rate5",value:ne,onChange:De})),n.a.createElement("div",{className:"rateCol"},n.a.createElement("label",null,"Price"),n.a.createElement("input",{type:"text",placeholder:"Enter Price",name:"amount5",value:ue,onChange:De})),n.a.createElement("div",null,n.a.createElement("label",null,"Coins"),n.a.createElement("input",{type:"text",readOnly:!0,placeholder:"No of Coins",name:"coin5",value:pe}))),n.a.createElement("div",null,n.a.createElement("label",null,"Selling Rate"),n.a.createElement("input",{type:"text",placeholder:"Enter Selling Rate",name:"sellingRate",value:ve,onChange:function(e){return ge(e.target.value)}})),n.a.createElement("div",null,n.a.createElement("button",{className:"btn",type:"submit"},"Submit"))),t&&n.a.createElement("div",{className:"center"},n.a.createElement("h3",null,"Total Coins are: ",_e),n.a.createElement("h3",null,"Total Expense is: ",ye),n.a.createElement("h3",null,"Total Earning is: ",ke),n.a.createElement("h3",null,"Your Profit is: ",Fe),n.a.createElement("a",{className:"btn download"},n.a.createElement(u.CSVLink,Le,"Export to CSV")))))},i=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,28)).then(function(a){var t=a.getCLS,l=a.getFID,n=a.getFCP,r=a.getLCP,c=a.getTTFB;t(e),l(e),n(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(s,null))),i()},7:function(e,a,t){e.exports=t(27)}},[[7,3,2]]]);
//# sourceMappingURL=main.b7245c8b.chunk.js.map