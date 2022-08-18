// * 함수 만들기
/*
function one() {
  // 함수 one을 호출하면 콘솔에 "첫번째 함수"라는 메세지를 출력하게끔 '알고리즘'을 작성하세요.
  console.log('first function');
  return 'first function';
}
one();

function two() {
  // 함수 two를 호출하면 숫자 10 이라는 값이 콘솔에 출력되게끔 '알고리즘'을 작성하세요.
  return 10;
}
console.log(two());

function three(parameter) {
  // 첫번째 매개변수 parameter에 "KDT"를 입력하면
  // "KDT"의 데이터 타입이 콘솔에 출력되게끔 알고리즘을 작성하세요.
  console.log(typeof(parameter));
}
three("KDT");

function four(param) {
  // 첫번째 매개변수 param에 "KDT"값이 들어오면
  // 콘솔화면에서 "K-digital training"이라는 문구가 출력되도록 '알고리즘'을 작성하세요.
  // "KDT"가 아니라면, "한컴타자놀이"가 출력되게끔 '알고리즘'을 추가하세요.
  if(param === 'KDT'){
    console.log("K-digital training");
  } else {
    console.log("한컴타자놀이");
  }
}
four("KDT");
four("공욱재미남");

function a() {
  return 1;
}

function b() {
  return 2;
}

function five(paramOne, paramTwo) {
  // 위에 먼저 선언된 함수 a(), b()을 덧셈하여 나온값을
  // 콘솔에 출력되게끔 '알고리즘'을 작성하세요.
  return paramOne + paramTwo;
}

console.log(a(), b());

console.log(five(a(),b() 매개변수 두개 ) + a()); // 덧셈이 실행되어 어떠한 '숫자값' 이 나오도록 작성하세요.
*/



let functionOne = function one(){
  return 'first function';
};
let functionTwo = function two(){
  return 10;
};
let functionThree = function three(parameter){
  return typeof(parameter);
};
let functionFour = function four(param){
  if(param === 'KDT'){
    return "K-digital training";
  } else {
    return "한컴타자놀이";
  }
};
let functionFive = function five(a,b){
  return a+b;
};

let arr = [
  functionOne, functionTwo, functionThree, functionFour, functionFive
];
console.log(arr[2](12));
console.log(arr[3]('KDT'));
console.log(arr[4](5,10));



