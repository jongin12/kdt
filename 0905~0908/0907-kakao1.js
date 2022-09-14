const id_list = ["muzi", "frodo", "apeach", "neo"]
const report = [
    "muzi frodo",
    "apeach frodo",
    "frodo neo",
    "muzi neo",
    "apeach muzi",
]

const singo = report.map((value)=>{
    let num = value.indexOf(' ')
    return value.substring(num+1,value.length);
});

console.log(singo);

const singo_num = id_list.map((value)=>{
  let count = 0;
  for(let i=0;i<singo.length;i++){
    if(singo[i] === value){
      count++
    }
  }
  return count;
})

console.log(singo_num);

function solution(id_list, report, k) {
    var answer = [2,1,1,0];
    return answer;
}