// const wait = (time) =>
// new Promise((resolve)=>{
//   setTimeout(()=>{
//     resolve();
//   },time);
// });

// const a = async() => {
//   await wait(1000);
//   console.log('aa');
// };

// const b = async() => {
//   await wait(1000);
//   console.log('bb');
// };

// a().then(b);


async function abc() {
  await setTimeout(()=>{
    console.log("hi");
  },1000)
  return 1;
}

abc().then((data)=>{
  console.log(data);
});