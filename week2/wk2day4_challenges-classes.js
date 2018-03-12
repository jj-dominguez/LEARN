// Week 2 Day 4 Challenges - Classes & Inheritance Car Factory
// Authors: Jordan Dominguez
// December 7th, 2017


class Car {
    constructor(modelYear){
        this.wheels = 4
        this.modelYear = modelYear
        this.lights = "off"
        this.turnSignal = "off"
        this.carSpeed = 0
    }

    lightSwitch(){
        if (this.lights === "off"){
            this.lights = "on"
        } else {
            this.lights ="off"
        }
    }

    signal(direction){
        this.turnSignal = direction
    }

    carInfo(){
        return "Wheels: "+this.wheels+
        ", Model Year: "+this.modelYear+
        ", Current Lights: "+this.lights+
        ", Turn Signal: "+this.turnSignal+
        ", Current Speed: "+this.carSpeed
    }

};


class Tesla extends Car{
    constructor(modelYear){
        super(modelYear)
        this.model = "Tesla"
        listOfModelYears.push(parseInt(this.modelYear))
        listOfModelYears.sort()
        listOfModels.push(this.model)
        listOfModels.sort()
        console.log(listOfModelYears);
        console.log(listOfModels);
    }

    accelerate(){
        this.carSpeed += 10
    }

    brake(){
        this.carSpeed -= 7
    }
};


class Tata extends Car{
    constructor(modelYear){
        super(modelYear)
        this.model = "Tata"
        listOfModelYears.push(parseInt(this.modelYear))
        listOfModelYears.sort()
        listOfModels.push(this.model)
        listOfModels.sort()
        console.log(listOfModelYears);
        console.log(listOfModels);
    }

    accelerate(){
        this.carSpeed += 2
    }

    brake(){
        this.carSpeed -= 1.25
    }
};


class Toyota extends Car{
    constructor(modelYear){
        super(modelYear)
        this.model = "Toyota"
        listOfModelYears.push(parseInt(this.modelYear))
        listOfModelYears.sort()
        listOfModels.push(this.model)
        listOfModels.sort()
        console.log(listOfModelYears);
        console.log(listOfModels);
    }

    accelerate(){
        this.carSpeed += 7
    }

    brake(){
        this.carSpeed -= 5
    }
};


let listOfModelYears = []
let listOfModels = []


// My whips
var myOldTesla = new Tesla(2012)
var teslaModel3 = new Tesla(2018)

var myBeaterTata = new Tata(1993)
var myOtherTata = new Tata(2000)

var myToyota = new Toyota(2007)
var myNewToyota = new Toyota(2017)

let myGarage = [myOldTesla, teslaModel3,myBeaterTata,myOtherTata, myToyota,myNewToyota]
