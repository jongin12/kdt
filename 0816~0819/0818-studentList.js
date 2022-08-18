let studentList = ["강예훈","김성현","류주완","마근원","문예찬","박종인","박재형","송형주","양상희","원두진","유민호","이상호","이소영","이은수","정동욱","정윤환","정정원","지영빈","한용준","황초영","김근수","김승현","김지애","전형민","정연주","이아연","최화연","한가람"
];

console.log(studentList[studentList.length-1]);

studentList[studentList.length] = '공욱재'

for(i=0;i<studentList.length;i++){
  studentList[i] += ' 님'
}

console.log(studentList)

count=0;
for(i=0;i<100;i++){
  if(studentList[i] != undefined){
    count++
  }
}   //! .length


console.log(count);
console.log(studentList.length);
