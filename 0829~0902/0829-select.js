function user(name, age, index) {
  this.name = name;
  this.age = age;
  this.index = index;
  this.Admin = false;
}

let jongin = new user('jongin',25,0);

console.log(jongin);

userList =[];

for(i=1;i<100;i++){
  let newUser = new user('','',i)
  userList.push(newUser);
}

console.log(userList)