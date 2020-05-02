var good1 = { name: 'Jack', age: 32 };
var good2 = { name: 'Jack', age: 32, etc: true };
// 익명 인터페이스
var ai = { name: 'Jack', age: 32 };
function printMe(me) {
    console.log(me.etc ?
        me.name + " " + me.age + " " + me.etc :
        me.name + " " + me.age);
}
printMe(ai);
