// 자바스크립트에서 배열은 객체다. Array 클래스의 인스턴스이기때문.
let a = [1, 2, 3];
let o = {name: 'g', age: 1};
console.log(Array.isArray(a), Array.isArray(o)); // true, false

let numArray: number[] = [1,2,3];

// 문자열과 배열 간 변환
export const split = (str: string, delim: string = ''): string[] => str.split(delim);
console.log(
    split('hello'),
    split('h_e_l_l_o', '_')
);
// 반대
export const join = (strArray: string[], delim: string=''): string => strArray.join(delim);
console.log(
    join([ 'h', 'e', 'l', 'l', 'o' ]),
    join([ 'h', 'e', 'l', 'l', 'o' ], '_')
);    


// 배열의 비구조화 할당
let array: number[] = [1, 2, 3, 4, 5];
let [first, second, third, ...rest] = array;
console.log(first, second, third, rest); // 1 2 3 [ 4, 5 ]


// for...in 문 
// for(변수 in 배열/객체)
// 배열 사용시 변수에 index 등장, 객체 사용시 property 등장.

// for...of문
// for(변수 of 객체)
// 아이템값만을 대상으로 순회한다.


// 제네릭 방식 타입
// 타입을 T와 같은 일종의 (타입)변수 취급하는 것
const arrayLength1 = (array) => array.length;
// 위 자바스크립트 코드를 타입스크립트와 제네릭을 이용하여 아래처럼 변환.
const arrayLength2 = <T>(array: T[]): number => array.length;
const isEmpty = <T>(array: T[]): boolean => arrayLength2<T>(array) == 0;
// 다양한 배열 타입에 모두 정상적으로 대응함.


// 제네릭 함수의 타입 추론
const identity = <T>(n: T): T => n;
console.log(
    identity<boolean>(true),
    identity(true),
    identity(1)
);
// 제네릭 형태로 구현된 함수는 함수이름<타입변수>(매개변수) 형태로 표기가 원칙이지만
// 타입변수가 생략된 제네릭 함수를 만나면 타입추론을 하여 생략된 타입을 찾아냄.


// range 함수 구현
const range = (from: number, to: number): number[] => 
from < to ? [from, ...range(from + 1, to)] : [];
// 1, 5  -> [1, [2, [3, [4, []]]]]
console.log(range(1,10));
