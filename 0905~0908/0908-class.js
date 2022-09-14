function OldClass(id, name, type) {
  this.id = id;
  this.name = name;
  this.type = type;
}
const aaa = new OldClass(1,'jongin','aa');
console.log(aaa);

class NewClass {
  constructor(id, name, type) {
    this.id = id;
    this.name = name;
    this.type = type;
  }
}

const bbb = new NewClass (2,'qwer','bb');
console.log(bbb);