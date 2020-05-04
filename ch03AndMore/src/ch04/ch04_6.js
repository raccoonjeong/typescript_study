"use strict";
// 클래스 메서드
// function 키워드로 만든 함수는 this를 사용 가능. 
// 화살표 함수로 만든 함수는 this 사용 불가.... ㅡㅡ?
exports.__esModule = true;
var A = /** @class */ (function () {
    function A() {
        this.value = 1;
        this.method = function () {
            console.log("value: " + this.value);
        };
    }
    return A;
}());
exports.A = A;
var a = new A;
a.method();
var B = /** @class */ (function () {
    function B(value) {
        if (value === void 0) { value = 1; }
        this.value = value;
    }
    B.prototype.method = function () {
        console.log("value: " + this.value);
    };
    return B;
}());
exports.B = B;
var b = new B(2);
b.method();
var C = /** @class */ (function () {
    function C() {
    }
    C.whoAreYou = function () {
        return "I'm class C";
    };
    return C;
}());
exports.C = C;
var D = /** @class */ (function () {
    function D() {
    }
    D.whoAreYou = function () {
        return "I'm class D";
    };
    return D;
}());
exports.D = D;
// 바로 호출 가능
console.log(C.whoAreYou());
console.log(D.whoAreYou());
// 메서드 체인. 메서드가 항상 this를 반환시키면 된다.
var Calculater = /** @class */ (function () {
    function Calculater(value) {
        if (value === void 0) { value = 0; }
        this.value = value;
    }
    ;
    Calculater.prototype.add = function (value) {
        this.value += value;
        return this;
    };
    Calculater.prototype.multiply = function (value) {
        this.value *= value;
        return this;
    };
    return Calculater;
}());
exports.Calculater = Calculater;
var calc = new Calculater;
var result = calc.add(1).add(2).multiply(3).multiply(4).value;
console.log(result);
