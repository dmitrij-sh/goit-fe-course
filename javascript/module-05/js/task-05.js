const buttonRef = document.querySelector('#task_05');
class Car {
  static getSpecs(car) {
    console.log(car);
  }

  constructor({maxSpeed, speed = 0, isOn = false, distance = 0, price}) {
    this.maxSpeed = maxSpeed;
    this.speed = speed;
    this.isOn = isOn;
    this.distance = distance;
    this._price = price;
  }

  get price() {
    return this._price
  }

  set price(newPrice) {
    this._price = newPrice
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    value + this.speed <= this.maxSpeed
    ? this.speed += value
    : console.log('Превышение максимальной скорости!');

    // if (value + this.speed <= this.maxSpeed) {
    //   this.speed += value;
    // };
  }

  decelerate(value) {
    value - this.speed <= 0
    ? this.speed -= value
    : console.log('Cкорость меньше нуля!');

    // if (value - this.speed <= 0) {
    //   this.speed -= value;
    // };
  }

  drive(hours) {
    if (this.isOn) {
      this.distance += hours * this.speed;
    }
  }
}

buttonRef.addEventListener('click', () => {
  const mustang = new Car({ maxSpeed: 200, price: 2000 });

  mustang.turnOn();
  mustang.accelerate(50);
  mustang.drive(2);

  Car.getSpecs(mustang);

  mustang.decelerate(20);
  mustang.drive(1);
  mustang.turnOff();

  Car.getSpecs(mustang);

  console.log(mustang.price);
  mustang.price = 4000;
  console.log(mustang.price);
});
