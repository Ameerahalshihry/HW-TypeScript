function honk() {
    console.log("This is Honk function");
}
var car1 = {
    id: 111,
    make: "Japan",
    model: "Merceeds",
    year: 2019,
    honk: function () {
        return "This Info for Car1";
    }
};
var car2 = {
    id: 222,
    make: "Fance",
    model: "Luxes",
    year: 2020,
    honk: function () {
        return "This Info for Car2";
    }
};
var car3 = {
    id: 333,
    make: "America",
    model: "Bently",
    year: 2022,
    honk: function () {
        return "This is my car - Car3";
    }
};
var cars = [car1, car2, car3];
for (var _i = 0, cars_1 = cars; _i < cars_1.length; _i++) {
    var car = cars_1[_i];
    console.log("ID: ".concat(car.id, ", Make: ").concat(car.make, ", Model: ").concat(car.model, ", Year: ").concat(car.year, ", ").concat(car.honk()));
}
for (var _a = 0, cars_2 = cars; _a < cars_2.length; _a++) {
    var car = cars_2[_a];
    console.log("Model: ".concat(car.model, ", Year: ").concat(car.year));
}
