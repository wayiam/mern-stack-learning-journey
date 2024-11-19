const Person = {
    name: "Jon",

    greet() {
        console.log(`Hi, I am ${this.name}`)
    }
}

Person.greet();
const newPerson = Person.greet;
newPerson();
const bindNewPerson = Person.greet.bind({name:'Ram'})
bindNewPerson()


