// function Animal() {
// }

// Animal.prototype.speak = function() {
//     return 'Animal speaking'
// }

// function Dog() {
// }

// Dog.prototype = Object.create(Animal.prototype);


// Dog.prototype.bark = function(){
//     return 'Woof!'
// }

// let myDog = new Dog()
// console.log(myDog.bark());
// console.log(myDog.speak());

function Person(name, age) {
    if (age < 0){
        throw new Error ('Wrong')
    }
    else{
        this.name = name;
        this.age = age;
    }
}

Person.prototype.greet = function() {
    return `Hello, my name is ${this.name}`
}

let newPerson = new Person('Ram', 28)

console.log(newPerson.greet());
