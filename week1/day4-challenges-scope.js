// Day 4 Challenges
// By scott faris && Jordan Dominguez
// November 30, 2017

// Car Object Challenge
// Story 1 Creating car Object

function createCar(newCarMake, newCarYear, newCarColor) {
  return {
    make: newCarMake,
    year: newCarYear,
    color: newCarColor,
    carInfo : function () {
      return this.color+" "+this.year+" "+this.make
    }
  }
}

let jordanCar = createCar('acura rdx', 2007, 'silver');
jordanCar.carInfo();

let scottCar = createCar("make", 2008,'color')
scottCar.year;

// Story 2 adding speed and accelerate/deccelerate functionality

function createCar(newCarMake, newCarYear, newCarColor) {
  let speed = 0;
  return {
    // car looks
    make: newCarMake,
    year: newCarYear,
    color: newCarColor,
    carInfo: function () {
      return this.color+" "+this.year+" "+this.make
    },
    // driving & stuff
    getSpeed: function () {
      return speed
    },
    accelerate: function() {
      speed += 10;
    },
    brake: function () {
      speed -= 7;
    },
  }
}

jordanCar.getSpeed();
jordanCar.accelerate();

let jordanCar = createCar('acura rdx', 2007, 'silver');
jordanCar.carInfo();

let scottCar = createCar("bmw x-5", 2002,'black')
scottCar.year;

// Story 3 w/ While Loops
function createCar(newCarMake, newCarYear, newCarColor) {
  let speed = 0;
  return {
    // car looks
    make: newCarMake,
    year: newCarYear,
    color: newCarColor,
    carInfo: function () {return this.color+" "+this.year+" "+this.make},
    // driving functionality
    getSpeed: function () {return speed},
    accelerate: function() {speed += 10;},
    brake: function () {
        let brakeSpeed = Math.floor(Math.random() * (speed/2))+1;
        speed -= brakeSpeed;
      },
    stopCar: function() {speed = Math.max(0, speed);},
    // speedLimit: function() {speed = Math.min(85, speed);},
  }
}

let jordanCar = createCar('Acura RDX', 2007, 'Silver');
let scottCar = createCar('BMW X-5', 2002,'Black')

//loops to speed up and slow down car to limits (speed limit and 0)
function speedUp(object) {
  while (object.getSpeed() < 100) {
    object.accelerate();
  }
}

function slowDown(object) {
  while (object.getSpeed() > 0) {
    object.brake();
    object.stopCar();
  }
}
