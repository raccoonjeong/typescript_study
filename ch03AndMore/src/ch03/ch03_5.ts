// 타입 변환
let person: object = {name: "J", age: 22};
// person.name; object에는 name이란 프로퍼티 없어서 에러남
(<{name: string}>person).name;

// 용어 정리
// Type Conversion : Conversion + Casting
// Type Casting : 명시적 타입 변환(코드상에 명시)
// Type Coercion : 암시적 타입 변환(컴파일러가 알아서 처리)

// 타입 단언 : 자바스크립트의 타입 변환과는 다르다.
// (<타입>객체)
// (객체 as 타입)
// 두가지 형태
import INameable from './INameable'
let obj: object = {name: 'ddd'};

let name1 = (<INameable>obj).name;
let name2 = (obj as INameable).name;
console.log(name1, name2);

