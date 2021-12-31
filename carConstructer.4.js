function Car(model, milesPerGallon){
    this.model = model;
    this.milesPerGallon = milesPerGallon;
    this.tank = 0;
    this.odometer = 0;
    this.fill = function(gallon){
        return this.tank += gallon;
    }
    this.drive = function(distance){
        if(this.tank * this.milesPerGallon <= distance){
            this.odometer = this.tank * this.milesPerGallon;
            console.log(`i run out of fuel at ${this.tank * this.milesPerGallon} miles!`);
            this.tank = 0;
        }else{
            this.tank = this.tank - (distance / milesPerGallon);
            this.odometer = +this.odometer + +distance;
        }
    }
}

let car = new Car("Ford", 100);
car.fill(1000);
console.log(car.tank);
car.drive(1000);
console.log(car.odometer);
console.log(car.tank);
car.drive(110000);
console.log(car.odometer);
console.log(car.tank);
