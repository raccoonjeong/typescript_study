
// 타입스크립트 문법에서는 중괄호 사용 여부에 따라 
// 실행문(execution statement / statement), 표현식(expression)이 갈린다.
const arrow1 = (a: number, b: number): number => {return a + b;}; // 실행문 방식 몸통
const arrow2 = (a: number, b: number): number => a + b; // 표현식 방식 몸통

// 실행문 지향 언어(execution-oriented language) : C언어
// 표현식 지향 언어(expression-oriented language) : 스칼라

// 자바스크립트 ES5까지 실행문 지향 언어였으나
// 그 이후와 타입스크립트는 동시에 지원. "다중 패러다임 언어 multi-paradihm language"

// 실행문은 CPU에서만 실행되고 결과를 알려주지 않는다. 결과를 알려면 return 써야함.
// 표현식 문은 return 쓰지않아도 결과를 알려줌.

// 대표적 실행문
let a1;
a1 = 1; 

let a2 = 10;
if ( a2 > 0 ) // return 키워드없이 결과값 반환. 표현식.. "IF 표현식"
a2 = 1;

// IF표현식은 결과값을 반환하므로 아래 구문 작성 가능.....?
// var x = if(a1 > a2) a1 else a2

// return 키워드는 반드시 함수 몸통에서만 사용가능.
function isGreater1(a: number, b: number): boolean {
    a > b // 실행문은 CPU에서 실행된 결과를 반환하지 않음
    return a > b // true/false 반환
}

// 표현식 문 스타일
const isGreater2 = (a: number, b: number): boolean => {
    return a > b 
}

// 위를 단순화
const isGreater3 = (a: number, b: number): boolean => a > b;


// * 표현식과 표현식 문 차이
// 책이 너무 별로다... 두 단어를 함부로 섞어가면서 실컷 설명해놓고 
// 마지막단락에서 이 두 단어는 사실 차이가 있었다고 하면 
// 다시 찾아서 읽어봐야하고, 혼란만 잔뜩 가중시키는 것 같다.
// 설명에 따르면 차이가 명확하지도 않은 듯. 

// 표현식같으나 사실은 실행문인 것이 표현식 문이라는 것 아닌가?

// 타입스크립트는 관습적으로 표현식 문에는 세미콜론을 붙이지 않는다. ?

