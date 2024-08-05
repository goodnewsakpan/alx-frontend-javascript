import Car from './10-car.js';

const car1 = new Car('Toyota', 'v6', 'red');
const car2 = car1.cloneCar();

console.log(car1);
console.log(car2);
