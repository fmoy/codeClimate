let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("Welcome !!"); }, 3000);
});

myPromise.then(function(value) {
    document.getElementById('msg').innerHTML = value;
});

class Car {
    constructor(name, year) {
        this.name = name;
        this.year = year;
        console.log(this);
    }
}

let myCar1 = new Car("Ford", 2014);
let myCar2 = new Car("Audi", 2019);