var Car = /** @class */ (function () {
    function Car(brand) {
        this.brand = brand;
    }
    Car.prototype.drive = function () {
        console.log("".concat(this.brand, " is driving"));
    };
    return Car;
}());
var myCar = new Car("Tesla");
myCar.drive();
