/*1. The class Movie is stated below.An instance of class Movie represents a film.*/

class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }
    getPG = function (arr) {
        return arr.filter((m) => {
            return m.rating === "PG";
        });
    };
}

let movie1 = new Movie("Casino Royale", "Eon Productions", "PG13");
let movie2 = new Movie("Avengers", "Disney", "PG15");
let movie3 = new Movie("Harry Potter", "Warner Bros", "PG18");
let movie4 = new Movie("Avengers End Game", "Disney");
let movie5 = new Movie("Captain America", "Marvels");
const arr = [movie1, movie2, movie3, movie4, movie5];
let a = movie1.getPG(arr);
console.log(a); // return movies with PG rating

//2.circle


class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }
    getCircumference() {
        let res = 2 * Math.PI * this.radius;
        return res;
    }
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

let circle1 = new Circle(2, "red");
let circle2 = new Circle(5, "yellow");
let circle3 = new Circle(10, "black");
console.log(circle3.getCircumference());
console.log(circle1.radius);
console.log(circle2.getArea());


/*output:

62.83185307179586
2
78.53981633974483*/


//3. Write a “person” class to hold all the details.

class Person {
    constructor(name, age, place) {
        this.name = name;
        this.age = age;
        this.place = place;
    }

    get userName() {
        return this.name;
    }

    set userName(updateName) {
        this.name = updateName;
    }
}

const newUser = new Person('Sunny', '20', 'Bangalore');

console.log(newUser.name);
console.log(newUser.place);
console.log(newUser.age);

newUser.name = 'Joe';
console.log(newUser.name);

console.log("Hi ! My name is " + newUser.name + ". I'm " + newUser.age + " years old and reside in " + newUser.place);


/*output:

Sunny
Bangalore
20
Joe
Hi! My name is Joe.I'm 20 years old and reside in Bangalore*/

//4. write a class to calculate uber price.

class Uber {
    constructor(pickup, destination, TotalKms) {
        this.pickup = pickup;
        this.destination = destination;
        this.TotalKms = TotalKms;
    }

    get pickup() {
        return this.pickup;
    }

    set pickup(updatedPickup) {
        this.updatedPickup = updatedPickup;
    }

    cost() {
        let price = Customer.TotalKms * 10;
        return price;
    }
}
const Customer = new Uber("Electronic City", "Vijaynagar", 30);

console.log("The Price of Uber for " + Customer.TotalKms + " Kms is " + Customer.cost() + " rupees");

//output:The Price of Uber for 30 Kms is 300 rupees