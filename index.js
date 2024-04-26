function FourWheeler(name, model, engine) {
    this.name = name;
    this.model = model;
    this.engine = engine;
}


FourWheeler.prototype.booked = function() {
    console.log("Car is booked");
}


function Tata(name, model, engine) {
   
    FourWheeler.call(this, name, model, engine);
}


Tata.prototype = Object.create(FourWheeler.prototype);
Tata.prototype.constructor = Tata;


let car1 = new Tata("NEXON", "FWD", "petrol");
console.log(car1);
car1.booked();