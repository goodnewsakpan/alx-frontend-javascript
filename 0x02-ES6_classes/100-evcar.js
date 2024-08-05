import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  cloneCar() {
    const clonedCar = new Car(this.brand, this.motor, this.color);
    return clonedCar;
  }
}
