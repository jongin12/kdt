const ho = {
  lecter : {
    name : 'kdt',
    place : '305',
    time : '0900'
  },
  tutor : {
    name : 'minam',
    age : 18
  },
  study : ['html','css','js','react'],
  qwer : {
    home : 'home',
    address : {
      region : {
        gu : 'seogu',
        dong : 'dunsan',
        detail : {
          first : 'oracle',
          second : 'green',
          third : '305'
        }
      }
    }
  }
}

console.log(ho.study[3]);

ho.study.push('hacker')

console.log(ho.qwer.address.region.detail.second);

let change = (color) => {
  let a = ho.qwer.address.region.detail.second;
  if(a === 'green'){
    ho.qwer.address.region.detail.second = color;
  }
}

change('blue');
console.log(ho.qwer.address.region.detail);