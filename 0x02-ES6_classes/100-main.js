import EVCar from './100-evcar.js';

const evCar = new EVCar('Tesla', 'electric', 'black', '500km');
const clonedEvCar = evCar.cloneCar();

console.log(evCar);
console.log(clonedEvCar);
