'use strict';

let list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if(ev.target.tagName === "LI") {
       ev.target.classList.toggle('checked');
    } else if(ev.target.tagName === "SPAN") {
       let div = ev.target.parentNode;
       div.remove();
    }
}, false);

function newElement() {
    let li = document.createElement('li');
    let inputValue = document.getElementById('toDoEl').value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue == "") {
       alert("Поле ввода не может быть пустым!");
    } else {
       document.getElementById('list').appendChild(li);
    }
    document.getElementById('toDoEl').value = "";
    
}