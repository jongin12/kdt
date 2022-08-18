let members = 30;
let price = 1500;
let result = members * price ;

function icecreamPrice(members, price){
  return members * price;
}
function icecreamPrice2(members,price){
  return members * price;
}


console.log(icecreamPrice(29,1000)+icecreamPrice2(1,2000));


function plus(final){
  return (1+final)*(final)/2
}

console.log(plus(1000))


result = [0,1]
for(i=0;i<10;i++){
  result[i+2] = result[i] + result[i+1]
  console.log(result[i+2])
}

