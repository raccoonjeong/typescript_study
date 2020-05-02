"use strict";
exports.__esModule = true;
// 타입 변환
var person = { name: "J", age: 22 };
// person.name; object에는 name이란 프로퍼티 없어서 에러남
person.name;
var obj = { name: 'ddd' };
var name1 = obj.name;
var name2 = obj.name;
console.log(name1, name2);
