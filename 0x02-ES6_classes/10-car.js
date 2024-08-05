export default class Car {
  constructor(brand, motor, color) {
    this.brand = brand;
    this.motor = motor;
    this.color = color;
  }

  cloneCar() {
    const clonedCar = new this.constructor(this.brand, this.motor, this.color);
    return clonedCar;
  }
}
