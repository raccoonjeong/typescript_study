"use strict";
// 일등 함수를 제공하는 언어에서 함수는 '함수 표현식'이라는 일종의 값
// 함수 표현식을 매개변수로 받아 동작하는 함수를 콜백 함수라 부름
exports.__esModule = true;
var f = function (callback) { return callback(); };
exports.init = function (callback) {
    console.log('default init finished.');
    callback();
    console.log('all init finished.');
};
