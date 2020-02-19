var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(type, img) {
        this.type = type;
        this.img = img;
        this.type = type;
        this.img = img;
    }
    Vehicle.prototype.info = function () {
        return [this.type, this.img];
    };
    return Vehicle;
}());
var Details = /** @class */ (function (_super) {
    __extends(Details, _super);
    function Details(type, img, brand, model, color, numDoors, numWheels, fuel, horsepower, transmission) {
        var _this = _super.call(this, type, img) || this;
        _this.brand = "";
        _this.model = "";
        _this.color = "";
        _this.numDoors = 0;
        _this.numWheels = 0;
        _this.fuel = "";
        _this.horsepower = 0;
        _this.transmission = "";
        _this.brand = brand;
        _this.model = model;
        _this.color = color;
        _this.numDoors = numDoors;
        _this.numWheels = numWheels;
        _this.fuel = fuel;
        _this.horsepower = horsepower;
        _this.transmission = transmission;
        return _this;
    }
    Details.prototype.printInfo = function (i) {
        return "\n\t\t<div class=\"card mx-3\" style=\"width: 18rem;\">\n\t<img src=\"" + _super.prototype.info.call(this)[1] + "\" class=\"card-img-top\" height=\"165px\"alt=\"...\">\n\t<div class=\"card-body\">\n\t\t<h5 class=\"card-title text-center\">" + _super.prototype.info.call(this)[0] + " : " + this.brand + "</h5>\n\t\t<a class=\"btn btn-primary ml-5\" data-toggle=\"modal\" data-target=\"#myModal" + i + "\">Learn More</a>\n\t</div>\n</div>\n\n<div class=\"modal\" id=\"myModal" + i + "\" tabindex=\"-1\" role=\"dialog\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-body\">\n        <p>Model : " + this.model + "</p>\n        <p>Color : " + this.color + "</p>\n        <p># Doors : " + this.numDoors + "</p>\n        <p># Wheels : " + this.numWheels + "</p>\n        <p>Fuel : " + this.fuel + "</p>\n        <p>Horse Power : " + this.horsepower + "</p>\n        <p>Transmission : " + this.transmission + "</p>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>";
    };
    return Details;
}(Vehicle));
var bicycle = new Details("Bicycle", "img/bicycke.jpg", "Puch", "Fastxx", "Red", 0, 2, "Manpower", 0, "none");
var motorcycle = new Details("Motorcycle", "img/motorcycle.jpg", "Harley", "3000Furious", "Black", 0, 2, "Petrol", 300, "none");
var car = new Details("Car", "img/car.jpg", "BMW", "360new", "White", 4, 4, "Gasoline", 4000, "Automatic");
var truck = new Details("Truck", "img/truck.jpg", "Mercedes", "345xFast", "Black", 2, 10, "Petrol", 234, "Automatic");
var vehiclesArray = [bicycle, motorcycle, car, truck];
var p = 0;
for (var _i = 0, vehiclesArray_1 = vehiclesArray; _i < vehiclesArray_1.length; _i++) {
    var i = vehiclesArray_1[_i];
    document.getElementById("result").innerHTML += i.printInfo(p);
    p++;
}
