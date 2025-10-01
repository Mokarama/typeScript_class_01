"use strict";
// enum whoType{
//     student="student",
//     teacher="teacher",
//     management="management",
//     labStaff="labStaff",
// }
Object.defineProperty(exports, "__esModule", { value: true });
// var who:whoType=whoType.teacher;
// who =whoType.teacher;
// console.log(whoType.management);
// enum Fruit{
//     a="Apple",
//     b="banana",
//     c="cherry"
// }
// var myFruit:Fruit=Fruit.a;
// var myFruit=Fruit.c;
var dataType;
(function (dataType) {
    dataType[dataType["readData"] = 0] = "readData";
    dataType[dataType["saveData"] = 1] = "saveData";
    dataType[dataType["DeleteData"] = 2] = "DeleteData";
})(dataType || (dataType = {}));
console.log(dataType);
console.log(dataType.readData);
var dataType2;
(function (dataType2) {
    dataType2["readData"] = "readData";
    dataType2["deleteData"] = "deleteData";
})(dataType2 || (dataType2 = {}));
console.log(dataType2);
console.log(dataType2.deleteData);
//# sourceMappingURL=enumDatatype.js.map