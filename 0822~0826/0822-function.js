function a(){
  //* 함수 선언방식, 기명함수 방식
}
a();

let b = function(){
  //* 이름은 없지만 이름을 대체하는 '식별'이 된다.
  //* 익명함수지만, 기명함수처럼 쓸수있다.
  //* 어떤 값이 있다면, '값'처럼 쓰일것
  //* 함수 표현식(function expression)
  //* 함수 리터럴(function literal)
}

let c = () => {
  //* 마치 화살표처럼 함수를 작성한다 arrow function 화살표 함수
  //* 거의 콜백 전용함수
  //* 짧음
  //* 쓰기 편함
  //* 비교연산자와 모양이 다르다. 비교는 >= <=,
  //* 내장함수들 대부분 콜백함수를 쓰고있고, 간단하게 쓸수있기 때문에
  //* 최신문법을 채택하는 곳에서는 화살표함수를 엄청나게 만날수있다.
}

let d = a => {
  //* 매개변수가 하나일때는 소괄호조차도 생략할수있다.
}