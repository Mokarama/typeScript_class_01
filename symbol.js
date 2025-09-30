"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var sym = Symbol();
var sym2 = Symbol();
var sym3 = Symbol('abc');
var sym4 = Symbol('abc');
// console.log(sym3 === sym4);
// console.log(sym==sym2);
// console.log(sym);
// console.log(sym2);
// console.log(sym===sym2);
/********* */
const id = Symbol('id');
const obj = {
    id: 100,
    name: "Abu sufyan"
};
console.log(obj.id);
console.log(obj.name);
console.log(id);
//# sourceMappingURL=symbol.js.map