// //Constructor Funcitons:
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.describe = function(){
//         return `This is ${this.name}`
//     }
// }

// function Car(model, company){
//     this.model = model;
//     this.company = company;
// }

// //Creating an instance of the functional construcutor using this and new Keywords.
// const myName = new Person('Jatin',24);

// console.log(myName); //Person { name: 'Jatin', age: 24 }
// console.log(myName.describe());


function Animal(species) {

    if (!new.target){
        throw new Error(`Animal must be called with new Keyword`)
    }
  this.species = species;

   this.getSpecies = function (){
    return `I am ${this.species}`
   }

}

let dog = new Animal('Dog');
console.log(dog.getSpecies());

let cat = Animal('Cat')
console.log(cat.getSpecies());

