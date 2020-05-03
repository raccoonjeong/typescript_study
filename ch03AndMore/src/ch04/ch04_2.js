// 함수는 Function 클래스의 인스턴스
let add1 = new Function('a', 'b', 'return a+b');
let result = add1(1,2);
console.log(result);

// 함수 선언식
function add2(a, b) {return a + b;}

// 함수 표현식 : 함수형 언어의 핵심 기능 - 일등 함수. 컴파일러가 표현식을 만나면 느긋한 계산법 적용
let add3 = function(a, b) {return a + b;};

// 호출문 : 호출문을 만나면 조급한 계산법을 적용해 함수 표현식을 값으로 바꿈
let value1 = add3(1, 2); 

// 익명 함수 
let value2 = (function(a, b) {return a + b;})(1, 2); 
// 연산자 우선순위를 고려해 분해된 코드
// let value =
// (function(a, b) {return a + b}) 여기까진 느긋한 계산
// (1, 2) 여기서 조급한 계산이 적용됨 => value에 값을 담음


// 함수 표현식을 담는 변수는 const로 선언하는 것이 바람직. 함수 내용이 절대 변하면 안됨



