/* Задание 4.

Реализовать следующее консольное приложение подобно примеру, который разбирался в видео. 
Реализуйте его на прототипах.

Определить иерархию электроприборов. Включить некоторые в розетку. Посчитать потребляемую мощность. 

Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер). 
Выбрав прибор, подумайте, какими свойствами он обладает.

План:

-Определить родительскую функцию с методами, которые включают/выключают прибор из розетки;
-Создать делегирующую связь [[Prototype]] для двух конкретных приборов;
-У каждого из приборов должны быть собственные свойства и, желательно, методы, отличные от родительских методов;
-Создать экземпляры каждого прибора;
-Вывести в консоль и посмотреть результаты работы, гордиться собой :)

Общие требования:

-Имена функций, свойств и методов должны быть информативными
-Соблюдать best practices:
-использование camelCase нотации для переменных и методов, 
PascalCase для названия функций-конструкторов и классов;
-информативные имена (а не a, b);
-четкая связь между классом и его экземплярами (класс описывает множество, а экземпляр конкретную реализацию);
-использование синтаксиса es6 (кроме функции-конструкторов) и т.д.*/

function DeviceCreate() {
  this.type = 'бытовая техника',
  this.noise = 'шумит'
};

DeviceCreate.prototype.powerOn = function() {
  console.log(`${this.name} статус: в сети`);
}
DeviceCreate.prototype.powerOff = function() {
  console.log(`${this.name} статус: отключён(а) от сети`);
}

function AddDevice1(name, power) {
  this.name = name,
  this.power = power,
  this.color = 'серый'
};

AddDevice1.prototype = new DeviceCreate();

AddDevice1.prototype.colors = function() {
  console.log(`этот ${this.name}-${this.color}`);
}

function AddDevice2(name, power, weight) {
  this.name = name,
  this.power = power,
  this.weight = weight
};

AddDevice2.prototype = new DeviceCreate();

AddDevice2.prototype.heft = function() {
  console.log(`${this.name} имеет вес ${this.weight} кг`);
}

const laptop = new AddDevice1('ноутбук', 1500);
const washMashine = new AddDevice2('стиральная машина', 2000, 50);


laptop.colors();
washMashine.heft();

laptop.powerOn();
washMashine.powerOn();

laptop.powerOff();
washMashine.powerOff();