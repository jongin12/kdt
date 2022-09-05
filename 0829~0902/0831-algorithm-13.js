// Question : 1부터 20까지의 범위 중 임의의 숫자 세 개가 있다.
//    공식(formula) : (x + y + z) / 3
//    10미만은 10을 포함하지 않는다. 
// 1. 평균값이 10 미만이면 'under' 라는 메세지를 출력한다.
// 2. 평균값이 10 이상히면 'over' 라는 메세지를 출력한다.
// 3. 플로우차트(flowchart) : 순서도를 작성한다.
//
// Advanced
// a. 1부터 20까지의 범위 중 임의의 3개의 숫자가 중복되지 않은 난수를 배열, inputData에 담기도록 처리하시오.
// b. 객체 objectData의 property인 key, "first", "second", "third"에 주문 a를 통해 얻은 데이터를 각각의 키(key)의 값으로 삽입(insert)하시오.
//    const objectData = { first : 0, second : 0, third: 0};
// b. objectData에 담긴 세 개의 난수 중 중앙값에 해당하는 값을 출력하시오.

//1부터 20까지의 범위에서 겹치지않는 3개의 수를 랜덤으로 추출하기.
const randomNumber = (number,pickNumber) => {
  if(number>=pickNumber){
    array = [];
    i = 0;
    while (i < pickNumber) {
      let n = Math.floor(Math.random() * number +1);
      if (array.indexOf(n) === -1) {
        array.push(n);
        i++;
      }
    }
    console.log(array);
    return array;
  } else {
    console.log(`${number}이 ${pickNumber}보다 커야함`)
  }
}//1~number까지의 숫자중 중복되지않는 pickNumber개의 수 랜덤으로 뽑고 반환.
randomNumber(7,5);

const medium = (array,number) => {
  let sum = 0;
  array.forEach((value)=>{
    sum += value;
  })
  let medium = sum/array.length;
  console.log(medium);
  if(medium >= number){
    console.log('over');
  } else if ( medium < number) {
    console.log('under');
  }
}//배열의 요소들의 중간값을 잡고 number 이상이면 over, 미만이면 under 출력.

medium(randomNumber(20,3),10);
//