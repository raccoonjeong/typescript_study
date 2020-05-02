"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
// 구조화된 데이터
var jack = { name: 'Jack', age: 32 }, jane = { name: 'Jane', age: 32 };
var apple = { name: 'Apple Computer, Inc', age: 43 }, ms = { name: 'Microsoft', age: 44 };
console.log(jack);
// 구조화된 데이터는 어떤 시점에서 데이터의 일부만 필요하기도.
// 이처럼 분해 - 비구조화 destructuring
var name1 = jack.name, age1 = jack.age;
// 비구조화 할당 destructuring
var name = jack.name, age = jack.age;
// 잔여 연산자 rest operator 
var address = {
    country: 'Korea',
    city: 'Seoul',
    address1: 'Gangnam-gu',
    address2: '123',
    address3: '456'
};
var country = address.country, city = address.city, detail = __rest(address, ["country", "city"]);
console.log(detail);
// 전개 연산자 spread operator
var coord = __assign({ x: 0 }, { y: 0 });
console.log(coord);
