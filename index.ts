interface Car {
    id: number;
    make: string;
    model: string;
    year: number;
    honk():string
}
function honk(){
    console.log("This is Honk function");
    
}
let car1: Car={
    id: 111,
    make: "Japan",
    model: "Merceeds",
    year: 2019,
    honk(){
        return "This Info for Car1"
    }
}

let car2: Car={
    id:222,
    make: "Fance",
    model: "Luxes",
    year: 2020,
    honk(){
        return "This Info for Car2"
    }
}

let car3: Car={
    id: 333,
    make: "America",
    model: "Bently",
    year: 2022,
    honk(){
        return "This is my car - Car3"
    }
}

let cars : Car[] =[car1,car2,car3]

    for (const car of cars) {
    console.log(`ID: ${car.id}, Make: ${car.make}, Model: ${car.model}, Year: ${car.year}, ${car.honk()}`);
    }
    for (const car of cars) {
        console.log(`Model: ${car.model}, Year: ${car.year}`);
        }


