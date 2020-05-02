var Person1 = /** @class */ (function () {
    function Person1() {
    }
    return Person1;
}());
var jack1 = new Person1();
jack1.name = 'Jack';
jack1.age = 32;
console.log(jack1);
// 접근제한자 생략하면 모두 public으로 간주
var Person2 = /** @class */ (function () {
    function Person2(name, age) {
        this.name = name;
        this.age = age;
    }
    return Person2;
}());
var jack2 = new Person2('Jack', 32);
console.log(jack2);
