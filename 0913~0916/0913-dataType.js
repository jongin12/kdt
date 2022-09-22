let a = [2,3,4];
let b = a.map((value)=> value);

console.log(b);
console.log(a===b);

function cmdMap(arr){
  let temp = [];
  arr.forEach(function(value){
    temp.push(value);
  });
  return temp;
}



function cmdMapTwo (arr) {
  let temp = [];
  for(let i=0; i<arr.length; i++) {
    temp[temp.length] = arr[i];
  }
  return temp;
}






