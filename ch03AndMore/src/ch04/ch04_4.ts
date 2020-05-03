// 중첩 nested 함수
const calc = (value: number, cb: (number) => void): void => {
    let add = (a, b) => a + b;
    function multiply(a, b) {return a * b}

    let result = multiply(add(1, 2), value);
    cb(result);
}

calc(30, (result: number) => console.log(`result is ${result}`));


// 고차함수 High-order function : 또 다른 함수를 반환하는 함수. 함수형 언어에서 매우 중요
const add1 = (a: number, b: number): number => a + b; // 일반 함수
const add2 = (a: number): (number) => number => (b: number): number => a + b; // 고차 함수

const result = add2(1)(2);
console.log(result);

// number를 받아 number 반환하는 함수 시그니쳐 정의
type NumberToNumberFunc = (number) => number;

export const add = (a: number): NumberToNumberFunc => {
    // NumberToNumberFunc 타입의 함수 반환
    const _add: NumberToNumberFunc = (b: number): number => {
        // number 타입 값 반환
        return a + b; // 클로저.. a: add함수의 매개변수, b: _add함수의 매개변수
    }
    return _add;
}


// add(1)을 저장하는 임시 변수. 
// 아직 값이 아닌 함수 '부분 애플리케이션 partical application' 
// = '부분 적용 함수 partically applied function'
let fn1: NumberToNumberFunc = add(1); 

let fn2 = fn1(2);

console.log(fn2);
console.log(add(1)(2));
