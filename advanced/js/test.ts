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

	printInfo(){
		return `<div class="card" style="width: 18rem;">
	<img src="${ super.info()[1] }" class="card-img-top" alt="...">
	<div class="card-body">
		<h5 class="card-title">${ super.info()[0] } : ${this.brand}</h5>
		<a href="#" class="btn btn-primary">Learn More</a>
	</div>
</div>`;
	}
}



let bicycle = new Details ("Bicycle", "", "Puch", "Fastxx", "Red", 0, 2, "Manpower", 0, "none");
let motorcycle = new Details ("Motorcycle", "", "Harley Davidson", "3000Furious", "Black", 0, 2, "Petrol", 300, "none")
let car = new Details ("Car", "", "BMW", "360new", "White", 4, 4, "Gasoline", 4000, "Automatic");
let truck = new Details ("Truck", "", "Mercedes", "345xFast", "Black", 2, 10, "Petrol", 234, "Automatic");


let vehiclesArray = [bicycle, motorcycle, car, truck];

for (let i of vehiclesArray){
	document.getElementById("result").innerHTML += i.printInfo();
}

