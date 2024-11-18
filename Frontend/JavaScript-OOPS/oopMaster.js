//We can create Object and use functions inside the object to call the function and it's object

let Car = {
    model:'Model X',
    company:'Tesla',
    launched: 2020,

    getInfo : function(){
        return `${this.model} is from ${this.company} launched in the year ${this.launched}`
    }
}

console.log(Car);
console.log(Car.getInfo());

//Further now, if we want to reuse this object  with diffrent value we use constructure function
//See how can i resuse

function Vehicle(model, company, launchedYear) {
    this.model = model;
    this.company= company;
    this.launchedYear= launchedYear;

    this.getInfo = function(){
       return `${this.model} is from ${this.company} launched in the year ${this.launchedYear}`
    }
}

let myCar = new Vehicle('Model x', 'Tesla', 2020);
console.log(myCar);
console.log(myCar.getInfo());

let mySecondCar = new Vehicle('Nexon', 'Tata', 2015);
console.log(mySecondCar);
console.log(mySecondCar.getInfo());

// Prototype 
// It is an object which is attached every object
//Every object in JavaScript has a built-in property, which is called its prototype. 

function Animal(name){
    this.name= name;
}

Animal.prototype.speak = function () {
    return `${this.name} makes a sound`
}

let myAnimal = new Animal('dog');
console.log(myAnimal.speak());







