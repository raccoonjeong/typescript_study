"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
// 자바스크립트에서 배열은 객체다. Array 클래스의 인스턴스이기때문.
var a = [1, 2, 3];
var o = { name: 'g', age: 1 };
console.log(Array.isArray(a), Array.isArray(o)); // true, false
var numArray = [1, 2, 3];
// 문자열과 배열 간 변환
exports.split = function (str, delim) {
    if (delim === void 0) { delim = ''; }
    return str.split(delim);
};
console.log(exports.split('hello'), exports.split('h_e_l_l_o', '_'));
// 반대
exports.join = function (strArray, delim) {
    if (delim === void 0) { delim = ''; }
    return strArray.join(delim);
};
console.log(exports.join(['h', 'e', 'l', 'l', 'o']), exports.join(['h', 'e', 'l', 'l', 'o'], '_'));
// 배열의 비구조화 할당
var array = [1, 2, 3, 4, 5];
var first = array[0], second = array[1], third = array[2], rest = array.slice(3);
console.log(first, second, third, rest); // 1 2 3 [ 4, 5 ]
// for...in 문 
// for(변수 in 배열/객체)
// 배열 사용시 변수에 index 등장, 객체 사용시 property 등장.
// for...of문
// for(변수 of 객체)
// 아이템값만을 대상으로 순회한다.
// 제네릭 방식 타입
// 타입을 T와 같은 일종의 (타입)변수 취급하는 것
var arrayLength1 = function (array) { return array.length; };
// 위 자바스크립트 코드를 타입스크립트와 제네릭을 이용하여 아래처럼 변환.
var arrayLength2 = function (array) { return array.length; };
var isEmpty = function (array) { return arrayLength2(array) == 0; };
// 다양한 배열 타입에 모두 정상적으로 대응함.
// 제네릭 함수의 타입 추론
var identity = function (n) { return n; };
console.log(identity(true), identity(true), identity(1));
// 제네릭 형태로 구현된 함수는 함수이름<타입변수>(매개변수) 형태로 표기가 원칙이지만
// 타입변수가 생략된 제네릭 함수를 만나면 타입추론을 하여 생략된 타입을 찾아냄.
// range 함수 구현
var range = function (from, to) {
    return from < to ? __spreadArrays([from], range(from + 1, to)) : [];
};
// 1, 5  -> [1, [2, [3, [4, []]]]]
console.log(range(1, 10));
