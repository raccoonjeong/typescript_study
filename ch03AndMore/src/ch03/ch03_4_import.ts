import {IPerson, ICompany} from './ch03_4_export';

// 구조화된 데이터
let jack: IPerson = {name: 'Jack', age: 32}, 
    jane: IPerson = {name: 'Jane', age: 32};

let apple: ICompany = {name: 'Apple Computer, Inc', age:43},
    ms: ICompany = {name: 'Microsoft', age: 44};

    console.log(jack);

// 구조화된 데이터는 어떤 시점에서 데이터의 일부만 필요하기도.
// 이처럼 분해 - 비구조화 destructuring
let name1 = jack.name, age1 = jack.age;

// 비구조화 할당 destructuring
let {name, age} = jack;


// 잔여 연산자 rest operator 
let address: any = {
    country: 'Korea',
    city: 'Seoul',
    address1: 'Gangnam-gu',
    address2: '123',
    address3: '456'
}

const {country, city, ...detail} = address;
console.log(detail)


// 전개 연산자 spread operator - 객체의 속성을 모두 전개해 새로운 객체로 만듦.
let coord = {...{x: 0}, ...{y: 0}};
console.log(coord);

