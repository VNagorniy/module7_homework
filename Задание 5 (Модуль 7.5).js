/* Задание 5. 
Переписать консольное приложение из предыдущего юнита на классы.

Общие требования:

Имена классов, свойств и методов должны быть информативными;
Соблюдать best practices;
Использовать синтаксис ES6.*/

class ParentDevice {
  constructor() {
    this.type = 'бытовая техника',
    this.noise = 'шумит'
  }
  
  powerOn() {
    console.log(`${this.name} статус: в сети`);
  }

  powerOff() {
    console.log(`${this.name} статус: отключён(а) от сети`);
  }
}
  
class ChildDevice1 extends ParentDevice {
  constructor(name, power) { 
    super();
    this.name = name;
    this.power = power;
    this.color = 'серый'
  }
    colors() {
        console.log(`этот ${this.name}-${this.color}`); 
  }
}

class ChildDevice2 extends ParentDevice {
  constructor(name, power, weight) {
    super();
    this.name = name;
    this.power = power;
    this.weight = weight
  }
    heft() {
        console.log(`${this.name} имеет вес ${this.weight} кг`); 
  }
}

const laptop = new ChildDevice1('ноутбук', 1500);
const washMashine = new ChildDevice2('стиральная машина', 2000, 50);


laptop.colors();
washMashine.heft();

laptop.powerOn();
washMashine.powerOn();

laptop.powerOff();
washMashine.powerOff();
