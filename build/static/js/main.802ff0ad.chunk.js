(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},19:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(13),l=t.n(o),i=(t(19),t(2)),u=t(3),c=t.n(u),m="/api/persons",f=function(){return c.a.get(m).then((function(e){return e.data}))},s=function(e){return c.a.post(m,e).then((function(e){return e.data}))},d=function(e){var n=m.concat("/",e);return c.a.delete(n).then((function(e){return e.data}))},h=function(e,n){var t=m.concat("/",e);return c.a.put(t,n).then((function(e){return e.data}))},p=function(e){var n=e.name,t=e.number,a=e.id,o=e.deletePerson;return r.a.createElement("p",null,n," ",t," ",r.a.createElement("button",{onClick:function(){return o(a)}},"delete"))},v=function(e){var n=e.persons,t=e.newFilter,a=e.deletePerson;return n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())})).map((function(e){return r.a.createElement(p,{key:e.name,name:e.name,number:e.number,id:e.id,deletePerson:a})}))},b=function(e){var n=e.filterValue,t=e.handleFilterChange;return r.a.createElement("div",null,"filter shown with ",r.a.createElement("input",{value:n,onChange:t}))},g=function(e){var n=e.addName,t=e.newName,a=e.newNumber,o=e.handleNameChange,l=e.handleNumberChange;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:t,onChange:o})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:a,onChange:l})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},E=function(e){var n=e.message,t=e.type;return null===n?null:"error"===t?r.a.createElement("div",{style:{fontSize:"18",fontWeight:"bold",borderStyle:"solid",borderColor:"red",background:"#ffe2e0",padding:12,margin:10}},n):r.a.createElement("div",{style:{fontSize:"18",fontWeight:"bold",borderStyle:"solid",borderColor:"green",background:"#c5cfc4",padding:12,margin:10}},n)},w=function(){var e=Object(a.useState)([]),n=Object(i.a)(e,2),t=n[0],o=n[1],l=Object(a.useState)(""),u=Object(i.a)(l,2),c=u[0],m=u[1],p=Object(a.useState)(""),w=Object(i.a)(p,2),k=w[0],C=w[1],j=Object(a.useState)(""),y=Object(i.a)(j,2),N=y[0],O=y[1],S=Object(a.useState)([null,null]),H=Object(i.a)(S,2),P=H[0],F=H[1];Object(a.useEffect)((function(){console.log("effect"),f().then((function(e){o(e)})).catch((function(e){F(["Tietoja ei saatu palvelimelta","error"])}))}),[]);return r.a.createElement("div",null,r.a.createElement("h2",null,"Phonebook"),r.a.createElement(E,{message:P[0],type:P[1]}),r.a.createElement(b,{filterValue:N,handleFilterChange:function(e){O(e.target.value)}}),r.a.createElement("h3",null,"add a new"),r.a.createElement(g,{addName:function(e){e.preventDefault();var n,a=!1;if(t.forEach((function(e){e.name===c&&(a=!0,n=e.id)})),a){var r="".concat(c," on jo puhelinluettelossa. Haluatko vaihtaa h\xe4nen puhelinnumeronsa?");if(window.confirm(r)){var l={name:c,number:k};h(n,l).then((function(e){o(t.map((function(t){return t.id!==n?t:e}))),F(["Henkil\xf6n "+e.name+" puhelinnumero on p\xe4ivitetty","ok"]),setTimeout((function(){F([null,null])}),5e3)})).catch((function(e){F(["P\xe4ivitt\xe4minen ep\xe4onnistui. Henkil\xf6\xe4 "+l.name+" ei en\xe4\xe4 ole palvelimella","error"]),o(t.filter((function(e){return e.id!==n})))})),m(""),C("")}}else{var i={name:c,number:k};s(i).then((function(e){o(t.concat(e)),F(["Lis\xe4tty "+e.name+"  puhelinluetteloon","ok"]),setTimeout((function(){F([null,null])}),5e3)})).catch((function(e){F(["Henkil\xf6n "+i.name+" lis\xe4\xe4minen ep\xe4onnistui","error"]),o(t)})),m(""),C("")}},newName:c,newNumber:k,handleNameChange:function(e){m(e.target.value)},handleNumberChange:function(e){C(e.target.value)}}),r.a.createElement("h3",null,"Numbers"),r.a.createElement(v,{persons:t,newFilter:N,deletePerson:function(e){var n=t.filter((function(n){return n.id===e}));window.confirm("Haluatko varmasti poistaa henkil\xf6n "+n[0].name+" puhelinluettelosta?")&&(console.log("poistetaan",n[0].name),d(e).then((function(a){o(t.filter((function(n){return n.id!==e}))),F([n[0].name+" on poistettu puhelinluettelosta","ok"]),setTimeout((function(){F([null,null])}),5e3)})).catch((function(a){F(["Henkil\xf6n "+n[0].name+" poistaminen ei onnistunut","error"]),o(t.filter((function(n){return n.id!==e})))})))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.802ff0ad.chunk.js.map