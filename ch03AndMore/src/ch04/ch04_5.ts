export type Person = {name: string, age: number};

// 매개변수 기본값
export const makePerson1 = (name: string, age: number = 10): Person => {
    // 단축구문 shorthand, = "const person = {name: name, age: age};"
    const person = {name, age};
    return person;
}


// 객체 반환하는 화살표 함수
export const makePerson2 = (name: string, age: number = 10): Person => ({name, age});


// 매개변수에 비구조화 할당문 사용
const printPerson = ({name, age}: Person): void => console.log(`name: ${name}, age: ${age}`);
printPerson({name: 'Jack', age: 90});


// 색인 키와 값으로 객체 만들기
// 객체의 속성 이름을 변수로 만들려고 할 때.
const makeObject1 = (key, value) => ({[key]: value});
console.log(makeObject1('name', 'value')); // { name: 'value' }
console.log(makeObject1('firstName', 'James')); // { firstName: 'James' }
// 타입스크립트에서는 {[key]: value} 형태의 타입을 '색인 가능 타입 indexable type'이라고 부른다.

// 타입으로 활용
export type KeyValueType = {
    [key: string]: string
}
export const makeObject2 = (key: string, value: string): KeyValueType => ({[key]: value});