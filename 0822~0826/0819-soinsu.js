let arr = []


let a = 12;

while(a%2 === 0){
  a /= 2;
}
console.log(a);




function soinsu(number){
  let arr = [];
  let abc = number;
  for(i=2;i<=(number/2);i++){
    while(abc%i === 0){
    abc /= i;
    arr.push(i);
    }
  }
  console.log(arr);
}

soinsu(432);