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
var Person = /** @class */ (function () {
    function Person(name, age, jobTitle) {
        this.name = "";
        this.age = 0;
        this.jobTitle = "";
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    Person.prototype.greetings = function () {
        return "Hello there, my name is " + this.name + " and I am " + this.age + " years old, and I am a " + this.jobTitle + ".";
    };
    return Person;
}());
var Identity = new Person("Jana", 21, "Dreamer");
console.log(Identity.greetings());
var Hobby = /** @class */ (function (_super) {
    __extends(Hobby, _super);
    function Hobby(name, age, jobTitle, activity) {
        var _this = _super.call(this, name, age, jobTitle) || this;
        _this.activity = activity;
        return _this;
    }
    Hobby.prototype.yourHobby = function () {
        return _super.prototype.greetings.call(this) + " and my favorite hobby is " + this.activity;
    };
    return Hobby;
}(Person));
var identity = new Hobby("Jana", 21, "Dreamer", "Swimming");
console.log(identity.yourHobby());
