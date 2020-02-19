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
    Details.prototype.printInfo = function () {
        return "<div class=\"card\" style=\"width: 18rem;\">\n\t<img src=\"" + _super.prototype.info.call(this)[1] + "\" class=\"card-img-top\" alt=\"...\">\n\t<div class=\"card-body\">\n\t\t<h5 class=\"card-title\">" + _super.prototype.info.call(this)[0] + " : " + this.brand + "</h5>\n\t\t<a href=\"#\" class=\"btn btn-primary\">Learn More</a>\n\t</div>\n</div>";
    };
    return Details;
}(Vehicle));
var bicycle = new Details("Bicycle", "", "Puch", "Fastxx", "Red", 0, 2, "Manpower", 0, "none");
var motorcycle = new Details("Motorcycle", "", "Harley Davidson", "3000Furious", "Black", 0, 2, "Petrol", 300, "none");
var car = new Details("Car", "", "BMW", "360new", "White", 4, 4, "Gasoline", 4000, "Automatic");
var truck = new Details("Truck", "", "Mercedes", "345xFast", "Black", 2, 10, "Petrol", 234, "Automatic");
var vehiclesArray = [bicycle, motorcycle, car, truck];
for (var _i = 0, vehiclesArray_1 = vehiclesArray; _i < vehiclesArray_1.length; _i++) {
    var i = vehiclesArray_1[_i];
    document.getElementById("result").innerHTML += i.printInfo();
}
