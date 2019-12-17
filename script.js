'use strict';

function calc() {
    const main = prompt("Выберите математическое действие: 1) плюс, 2) минус, 3) умножить, 4) разделить");
    const a = prompt("Введите число 1");
    const b = prompt("Введите число 2");
    const result = {
      1 : +a + +b,
      2 : a - b,
      3 : a * b,
      4 : a / b
    }[main];
    return result == +result && result | "Непонятно";
  }
  alert(calc());


