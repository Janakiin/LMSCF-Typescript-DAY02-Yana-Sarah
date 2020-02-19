class Vehicle {
	constructor (public type, public img){
		this.type = type;
		this.img = img;
	}

	info(){
		return [this.type, this.img];
	}
}

class Details extends Vehicle {
	brand : string = "";
	model : string = "";
	color : string = "";
	numDoors  : number = 0;
	numWheels : number = 0;
	fuel : string = "";
	horsepower : number = 0;
	transmission : string = "";

	constructor (type, img, brand, model, color, numDoors, numWheels, fuel, horsepower, transmission){
		super(type, img);
		this.brand = brand;
		this.model = model;
		this.color = color;
		this.numDoors = numDoors;
		this.numWheels = numWheels;
		this.fuel = fuel;
		this.horsepower = horsepower;
		this.transmission = transmission;
	}

	printInfo(i){
		return `
		<div class="card mx-3" style="width: 18rem;">
	<img src="${ super.info()[1] }" class="card-img-top" height="165px"alt="...">
	<div class="card-body">
		<h5 class="card-title text-center">${ super.info()[0] } : ${this.brand}</h5>
		<a class="btn btn-primary ml-5" data-toggle="modal" data-target="#myModal${i}">Learn More</a>
	</div>
</div>

<div class="modal" id="myModal${i}" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <p>Model : ${this.model}</p>
        <p>Color : ${this.color}</p>
        <p># Doors : ${this.numDoors}</p>
        <p># Wheels : ${this.numWheels}</p>
        <p>Fuel : ${this.fuel}</p>
        <p>Horse Power : ${this.horsepower}</p>
        <p>Transmission : ${this.transmission}</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>`;
	}
}



let bicycle = new Details ("Bicycle", "img/bicycke.jpg", "Puch", "Fastxx", "Red", 0, 2, "Manpower", 0, "none");
let motorcycle = new Details ("Motorcycle", "img/motorcycle.jpg", "Harley", "3000Furious", "Black", 0, 2, "Petrol", 300, "none")
let car = new Details ("Car", "img/car.jpg", "BMW", "360new", "White", 4, 4, "Gasoline", 4000, "Automatic");
let truck = new Details ("Truck", "img/truck.jpg", "Mercedes", "345xFast", "Black", 2, 10, "Petrol", 234, "Automatic");


let vehiclesArray = [bicycle, motorcycle, car, truck];
var p = 0 ;
for (let i of vehiclesArray){
	document.getElementById("result").innerHTML += i.printInfo(p);
	p++;
}

