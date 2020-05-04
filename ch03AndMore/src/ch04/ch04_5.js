"use strict";
exports.__esModule = true;
// 매개변수 기본값
exports.makePerson1 = function (name, age) {
    if (age === void 0) { age = 10; }
    // 단축구문 shorthand, = "const person = {name: name, age: age};"
    var person = { name: name, age: age };
    return person;
};
// 객체 반환하는 화살표 함수
exports.makePerson2 = function (name, age) {
    if (age === void 0) { age = 10; }
    return ({ name: name, age: age });
};
// 매개변수에 비구조화 할당문 사용
var printPerson = function (_a) {
    var name = _a.name, age = _a.age;
    return console.log("name: " + name + ", age: " + age);
};
printPerson({ name: 'Jack', age: 90 });
// 색인 키와 값으로 객체 만들기
// 객체의 속성 이름을 변수로 만들려고 할 때.
var makeObject = function (key, value) {
    var _a;
    return (_a = {}, _a[key] = value, _a);
};
console.log(makeObject('name', 'value'));
console.log(makeObject('firstName', 'James'));
