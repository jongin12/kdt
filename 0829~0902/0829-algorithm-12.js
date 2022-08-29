import makeList from './0829-front.js';
import nim from './0829-back.js';


const root = document.getElementById('root');
const digimon = ['123','41352'];

//! Q_1 프론트엔드 요청 : 배열의 갯수만큼 <li> 태그를 연출해 놓으세요.
//const makeList1 = (array,parent) => {
//for(let i=0;i<array.length;i++){
//let list = document.createElement('li');
//list.textContent = array[i];
//parent.appendChild(list);
//}
//}
//makeList1(digimon,root);

makeList(digimon,root);

//! Q_2 백엔드 요청 : 디지몬 문자열 마다 "님" 이라는 단어를 붙여 가공하세요.
//const nim1 = (array) => {
//for(let i=0;i<array.length;i++){
//array[i] = array[i] + ' 님'
//}
//}
//nim1(digimon)
//console.log(digimon);

console.log(nim(digimon));