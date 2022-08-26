const arr = ['a','b','c','d','e'];

let asdf = (arr) => {
  qwer = [];
  i=0;
  while(i<arr.length){
    let n = Math.floor(Math.random()*arr.length);
    if(same(n)){
      qwer.push(n);
      i++;
    }
  }
  for(let i=0; i<qwer.length;i++){
    qwer[i] = arr[qwer[i]];
  }
  for(let i=0; i<qwer.length;i++){
    arr[i] = qwer[i];
  }
}

function same(n){
  for(let j=0;j<qwer.length;j++){
    if(qwer[j]===n){
      return false;
    }
  }
  return true;
}