'use strict';

let c = prompt("Введите действие которое хотите совершить: +, -, *, /");

let a = +prompt('Введите первое число');

// do {
//     let a = +prompt('Введите первое число');
// }while (isNaN(a));


let b = +prompt('Введите второе число');
// do {
//     let b = +prompt('Введите второе число');
// }while (isNaN(b));

let res;


switch (c) {
    case '+':
          alert(res = a + b);
      break;
  
      case '-':
          alert(res = a - b);
      break;
  
      case '*':
          alert(res = a * b);
      break;
  
      case '/':
          alert(res = a / b);
      break;
  
      default: 
          alert(res ='Непонятно');
  }
  
  










