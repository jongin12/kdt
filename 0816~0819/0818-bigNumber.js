let numberData = [444,23,2022,8,16,12,22];


for(i=1;i<numberData.length;i++){
  if(numberData[i-1] > numberData[i]){
    [numberData[i-1],numberData[i]] = [numberData[i],numberData[i-1]];
  }
}
console.log(numberData);

console.log(numberData[numberData.length-1]);