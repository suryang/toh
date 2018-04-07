// 생성자 함수에서의 this의 의미
function Person() {
    this.someValue = 2;
    var someValue2 = 3;
}

//console.log(Person()); //실행결과는? 그 이유는?

console.log(new Person()); // 생성자 함수로 생성시 실행결과는?

console.log(someValue); // 실행결과와, 이유를 말하시오

// 생성자 함수일 경우 내보루직
// this가 없을 경우 자기자신을 가리키는 this가 생성.
// this = {}; this는 처음에 비어 있는 객체
//return이 없을 경우 이 this가 리턴.


//글로벌 변수 먼저 인식 후 함수 로딩
//따라서, console.log(someValue);만 호출 시 에러 
