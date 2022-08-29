export default function makeList (array,parent) {
  array.forEach((elment) => {
    let list = document.createElement('li');
    list.textContent = elment;
    parent.appendChild(list);
  });
}