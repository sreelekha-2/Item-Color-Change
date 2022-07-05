console.log('Hello!');

let list = document.querySelectorAll('li');
console.log(list);

for (let item of list) {
  item.onclick = function () {
    match(item.id);
  };
}

function match(id) {
  for (let listItem of list) {
    if (listItem.id === id) {
      listItem.classList.add('active');
    } else {
      listItem.classList.remove('active');
    }
  }
}
