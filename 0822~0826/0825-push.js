arr = [1,2,3,4,123,123,]

arr.push(6); //!push = 맨 뒤에 요소 추가

arr.pop(); //! pop = 맨 뒤의 요소 제거하고 그 요소를 반환

arr.shift(); //! shift = 맨 앞의 요소 제거

arr.unshift(123); //! unshift = 맨 앞에 요소 추가

console.log(arr);

console.log(arr.indexOf(123));//! indexOf(a) a라는 요소중 맨앞의 index를 반환

console.log(arr.lastIndexOf(123));//! indexOf(a) a라는 요소중 마지막의 index를 반환

arr.splice(0,2);//! splice(a,b) 배열의 a번째부터 2개의 요소 삭제

console.log(arr.slice(0,2));//! slice(a,b) 배열의 a번째부터 b번째 앞의 요소까지 복사해서 다른 배열을 만듦.

console.log(arr);

console.log(Array.from('hello'));

