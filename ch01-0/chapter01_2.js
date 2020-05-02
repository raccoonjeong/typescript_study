// 비구조화 할당(구조분해 할당) [ECMAScript 2015, ES6]
let person = {name: "Jane", age: 22};
let {name, age} = person;
console.log(person);

let array = [1,2,3,4];
let [head, ...rest] = array;
console.log(head, rest);

let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b);

// 화살표 함수 [ECMAScript 2015, ES6]
function add(a, b) {return a + b};
const add2 = (a, b) => a + b;

// 클래스 [ECMAScript 2015, ES6] 
// .. 타입스크립트 환경 구축 전에 ES6의 문법을 소개하는 단락인데 왜 타입스크립트와 섞어서 소개하는지 모르겠다.
// abstract class Animal {
//     constructor(public name?: String, public age?: number) {}
//     abstract say(): string
// }

// 내가 수정한 코드
class Animal {

    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    say() {}
}

class Cat extends Animal {
    say() {return '야옹'}
}

class Dog extends Animal {
    say() {return '멍멍'}
}

let animals = [new Cat('야옹이', 2), new Dog('멍멍이', 3)]
let sounds = animals.map(a => a.say());
console.log(sounds);


// 모듈 [ECMAScript 2015, ES6]
// import * as js from 'fs';
// export function writeFile(filepath, content) {};


// 생성기 [ECMAScript 2015, ES6]
function* gen() {
    yield* [1, 2];
}
for(let value of gen()) { console.log(value) }


// Promise와 async/await 구문 [ECMAScript 2015, ES6]
async function get() {
    let values = [];
    values.push(await Promise.resolve(1));
    values.push(await Promise.resolve(2));
    values.push(await Promise.resolve(3));
    return values;
}
get().then(values => console.log(values));