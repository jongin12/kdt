let num = 0;
let a = setInterval(function() {
  console.log(num);
  num++
  if(num ===10){
    clearInterval(a);
  }
},1000);