/* Задание 2.

Написать функцию, которая принимает в качестве аргументов строку и объект, а затем проверяет есть ли 
у переданного объекта свойство с данным именем. Функция должна возвращать true или false. */

const brick = {
    name:"brick",
    color:"orange",
    density:1200,
    width:120,
    length:250,
    height:65
  }

const str = "weight";
  
function getProp (obj, string) {
    console.log(string in obj);
}
  
getProp (brick, str);
