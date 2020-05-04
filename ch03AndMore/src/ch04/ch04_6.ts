// 클래스 메서드
// function 키워드로 만든 함수는 this를 사용 가능. 
// 화살표 함수로 만든 함수는 this 사용 불가.... ㅡㅡ?

export class A {
    value: number = 1
    method: () => void = function(): void {
        console.log(`value: ${this.value}`);
    }
}

let a: A = new A;
a.method();

export class B {
    constructor(public value: number = 1) {}
    method(): void { // 이건 화살표함수의 줄임이 아닌가... this 사용불가하다면서 이상하네
        console.log(`value: ${this.value}`);
    }
}
let b: B = new B(2);
b.method();

export class C {
    static whoAreYou(): string {
        return `I'm class C`;
    }
}

export class D {
    static whoAreYou(): string {
        return `I'm class D`;
    }
}

// 바로 호출 가능
console.log(C.whoAreYou());
console.log(D.whoAreYou());


// 메서드 체인. 메서드가 항상 this를 반환시키면 된다.
export class Calculater {
    constructor(public value: number = 0) {};
    add(value: number) {
        this.value += value;
        return this;
    }
    multiply(value: number) {
        this.value *= value;
        return this;
    }
}

let calc = new Calculater;
let result = calc.add(1).add(2).multiply(3).multiply(4).value;
console.log(result);