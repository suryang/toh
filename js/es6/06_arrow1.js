
let circleArea = function(pi, r) {
    let area = pi * r * r;
    return area;
};

// 익명함수를 에로우 펑션으로 변경 가능
// function을 없애고 파라미터와 {} 사이에 => 삽입
// 파라미터가 한 개면 괄호가 생략 가능
// 중괄호가 한 줄이면 중괄호가 생략 가능
// 한 줄일 경우에는 return도 생략 가능
let circleArea = (pi, r) => pi * r * r;


// 위의 문장을 한줄로 작성하시오.
let result = circleArea(3.14, 3);

console.log(result); //실행 결과 "28.26"
