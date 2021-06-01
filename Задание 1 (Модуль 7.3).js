/* Задание 1. 
Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль все ключи 
и значения только собственных свойств. Данная функция не должна возвращать значение.*/

const brick = {
    name:"brick",
    color:"orange",
    density:1200,
    width:120,
    length:250,
    height:65
  }
function material(obj) {
    for (let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        console.log(prop);
      }
    }
  }
  
  console.log(material(brick));