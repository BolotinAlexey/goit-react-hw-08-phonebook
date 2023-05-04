"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[495],{5495:function(n,e,t){t.r(e),t.d(e,{default:function(){return A}});var r,a=t(6382),o=t(1686),i=t.n(o),c=t(9434),s=t(168),d=t(7691),l=d.ZP.form(r||(r=(0,s.Z)(["\n  width: max-content;\n  padding: 25px;\n  border: 2px solid black;\n\n  label {\n    display: block;\n    margin-bottom: 7px;\n  }\n\n  input {\n    display: block;\n    margin-bottom: 15px;\n  }\n\n  button {\n    padding: 2px 5px;\n    margin-left: 10px;\n    background-color: #0c0;\n    color: white;\n    border: none;\n    border-radius: 5px;\n\n    :hover {\n      background-color: #0f0;\n      color: #f9f;\n    }\n    :active {\n      transform: scale(1.1);\n    }\n  }\n"]))),u=t(3634),m=function(n){return n.contacts.contacts.items},p=function(n){return n.contacts.contacts.isLoading},b=function(n){var e=m(n),t=function(n){return n.contacts.filter}(n);return e.filter((function(n){return n.name.toLowerCase().includes(t)}))},h=t(3329);var x,f,g=function(){var n=(0,c.I0)(),e=(0,c.v9)(m);return(0,h.jsxs)(l,{onSubmit:function(t){t.preventDefault();var r=t.target.elements.name.value;if(e.find((function(n){return n.name===r})))return i().Notify.warning('Name "'+r+'" already exists in the phone book'),void t.target.reset();var o=t.target.elements.number.value,c={id:(0,a.x0)(),name:r,number:o};n((0,u.uK)(c)),t.target.reset()},children:[(0,h.jsx)("label",{htmlFor:"name",children:"Name "}),(0,h.jsx)("input",{id:"name",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0}),(0,h.jsx)("label",{htmlFor:"tel",children:"Number "}),(0,h.jsx)("input",{id:"tel",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0}),(0,h.jsx)("br",{}),(0,h.jsx)("button",{type:"submit",children:"Add contact"})]})},v=d.ZP.ul(x||(x=(0,s.Z)(["\n  width: max-content;\n  border: 1px solid black;\n"]))),j=d.ZP.li(f||(f=(0,s.Z)(["\n  width: 300px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  :nth-of-type(odd) {\n    background-color: #ddd;\n  }\n  button {\n    padding: 2px 5px;\n    margin-left: 10px;\n    background-color: #c00;\n    color: white;\n    border: none;\n    border-radius: 5px;\n\n    :hover {\n      background-color: #f00;\n      color: white;\n    }\n    :active {\n      transform: scale(1.1);\n    }\n  }\n"])));var k=function(n){var e=n.name,t=n.number,r=n.id,a=(0,c.I0)();return(0,h.jsxs)(j,{children:[(0,h.jsxs)("p",{children:[e,": ",t]}),(0,h.jsx)("button",{onClick:function(){a((0,u.GK)(r))},children:"Delete"})]})};var y,w=function(){var n=(0,c.v9)(b);return(0,h.jsx)(v,{children:n.map((function(n){var e=n.name,t=n.id,r=n.number;return(0,h.jsx)(k,{id:t,number:r,name:e},t)}))})},Z=t(4808),C=d.ZP.label(y||(y=(0,s.Z)(["\n  display: block;\n  margin-bottom: 10px;\n  ~ input {\n    margin-bottom: 10px;\n  }\n"])));var _=function(){var n=(0,c.I0)();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(C,{htmlFor:"filter",children:"Find contacts by name:"}),(0,h.jsx)("input",{id:"filter",type:"text",name:"filter",onChange:function(e){n((0,Z.T)(e.target.value.toLowerCase().trim()))}})]})},F=t(2791);function A(){var n=(0,c.I0)(),e=(0,c.v9)(p);return(0,F.useEffect)((function(){n((0,u.yF)())}),[n]),(0,h.jsxs)("div",{children:[(0,h.jsx)("h1",{children:"Phonebook"}),(0,h.jsx)(g,{}),e&&(0,h.jsx)("p",{children:"Loading..."}),(0,h.jsx)("h2",{children:"Contacts"}),(0,h.jsx)(_,{}),(0,h.jsx)(w,{})]})}}}]);
//# sourceMappingURL=495.d907d981.chunk.js.map