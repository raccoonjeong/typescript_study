class Person1 {
    name: string
    age?: number
}

let jack1: Person1 = new Person1();
jack1.name = 'Jack'; jack1.age = 32;
console.log(jack1);

// 접근제한자 생략하면 모두 public으로 간주

class Person2 {
    constructor(public name: string, public age?: number){}
}

let jack2: Person2 = new Person2('Jack', 32);
console.log(jack2);

// 인터페이스 구현
interface IPerson4 {
    name: string
    age?: number
}

class Person4 implements IPerson4 {
    name: string
    age: number
}

class Person4_2 implements IPerson4 {
    constructor(public name: string, public age?: number) {};
}

let jack4: IPerson4 = new Person4_2('jack', 32);
console.log(jack4);


// 추상 클래스
abstract class APerson5 {
    abstract name: string
    constructor(public age?: number) {}
}

class Person5 extends APerson5 {
    constructor(public name: string, age?: number) {
        super(age);
    }
}

let jack5: Person5 = new Person5('Jack', 32);
console.log(jack5);


// static - 클래스이름.정적속성이름 형태의 점 표기법(dot notation) 사용
class A {
    static initValue = 1;
}

let initVal = A.initValue;

