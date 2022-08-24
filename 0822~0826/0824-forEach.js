let arrr = [1,2,3,4,5,6,7,8,9];

//? 일반 명령방식
for(let i=0; i<arrr.length;i++){
  console.log(arrr[i]);
}

//? 배열 메서드 자바스크립트, 익명함수 방식
arrr.forEach(function(index,b){
  console.log(index + ':' + b);
})

//? 화살표 함수 축약 방식
arrr.forEach(a=>console.log(a));