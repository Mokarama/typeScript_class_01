"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const greeting = "Hello, GeeksforGeeks!";
console.log(greeting);
let playerName = "Mashrafi";
playerName = "34";
console.log(playerName);
//********** */
let playerName2;
playerName2 = "Mashrafi";
playerName2 = 34;
console.log(playerName);
//*********** */
function multiplay(a, b) {
    return a * b;
}
console.log(multiplay(4, 9));
// array*********
let fruits = ['apple', 'banana', 'orange'];
fruits.push("potato");
console.log(fruits);
////
let flower = [];
flower.push("Rose");
flower.push(34);
console.log(flower);
/***** */
let mixed = [34, "shanta", true];
mixed.push(false);
mixed.push(50);
mixed.push("sufyan");
console.log(mixed);
//object
let person = {
    name: "Mashrafi",
    age: 34,
    isCaptain: true,
};
person.name = "Sakib";
console.log(person);
/************************ */
//normal veriable 
let b;
//array
let a = [];
b = 'Sumit';
a.push('Sumit', 4);
console.log(a);
//object 
let ba;
ba = {
    name: 'Bangladesh',
    age: 45,
};
console.log(ba.name);
console.log(ba.age);
/*************Function */
const myFunc = (a, b) => {
    return a + b;
};
myFunc('A', 'B');
const userDetails = (id, user) => {
    console.log(`User id is ${id} , name is ${user.name} and age is ${user.age}`);
};
//# sourceMappingURL=index.js.map