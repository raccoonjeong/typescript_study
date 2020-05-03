"use strict";
exports.__esModule = true;
// 중첩 nested 함수
var calc = function (value, cb) {
    var add = function (a, b) { return a + b; };
    function multiply(a, b) { return a * b; }
    var result = multiply(add(1, 2), value);
    cb(result);
};
calc(30, function (result) { return console.log("result is " + result); });
// 고차함수 High-order function : 또 다른 함수를 반환하는 함수. 함수형 언어에서 매우 중요
var add1 = function (a, b) { return a + b; }; // 일반 함수
var add2 = function (a) { return function (b) { return a + b; }; }; // 고차 함수
var result = add2(1)(2);
console.log(result);
exports.add = function (a) {
    // NumberToNumberFunc 타입의 함수 반환
    var _add = function (b) {
        // number 타입 값 반환
        return a + b; // 클로저.. a: add함수의 매개변수, b: _add함수의 매개변수
    };
    return _add;
};
// add(1)을 저장하는 임시 변수. 
// 아직 값이 아닌 함수 '부분 애플리케이션 partical application' 
// '부분 적용 함수 partically applied function'
var fn1 = exports.add(1);
var fn2 = fn1(2);
console.log(fn2);
console.log(exports.add(1)(2));
