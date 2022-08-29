const getApi = (number,LR) => {
  const _BASIC_URL = `https://pokeapi.co/api/v2/pokemon/${number}`;
  const request = new XMLHttpRequest();
  request.open("GET", _BASIC_URL);
  request.responseType = "json";
  request.send();
  request.addEventListener('load', () => {
    const _POKEMON_API = request.response;
    // 상수 _POKEMON_API 데이터가 사장놈이 가져온 데이터이다.
    console.log(_POKEMON_API);
    LR.children[0].setAttribute('src',_POKEMON_API.sprites.front_default);
    
    let monster = [
      _POKEMON_API.name,
      _POKEMON_API.stats[0].base_stat,
      _POKEMON_API.stats[1].base_stat,
      _POKEMON_API.stats[2].base_stat,
    ];

    for(let i=0;i<monster.length;i++){
      LR.children[1].children[i].textContent = monster[i];
    }
  });
}

const left = document.getElementById('left');
const right = document.getElementById('right');

getApi(25,left);
getApi(1,right);





