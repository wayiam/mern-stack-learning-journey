//Classes are a template for creating objects. They encapsulate data with code to work on that data. 
//Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes.
//Since classes don't use parameters like functions, we use special method(function is called method when used inside classes)
//Using Construture we can intiliase ano obeject

//a class can be defined in two ways: a class declaration or a class expression
//Class declaration example below:

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}



// Encapsulation

class BankAccount {

    #balance = 0;

    getAmount(amount){
       this.#balance += amount;
       return this.#balance;
    }

     getBalance() {
        return ` $ ${this.#balance}`
     }
}

let account = new BankAccount()
console.log(account.getBalance());


//Abstraction

class coffeMachine{

    start(){
        //Call db
        //check data 
        //Do any calculation
        return `Starting..`
    }

    brew(){
        //Do complex calculation
        return `Brewing your coffee`
    }

    startMyCoffeMachine(){
       return `${this.start()}
        now ${this.brew()}` 
        
    }
}

let myCoffeMachine = new coffeMachine();
// console.log(myCoffeMachine.start());
// console.log(myCoffeMachine.brew());
console.log(myCoffeMachine.startMyCoffeMachine());


//Polymorphism

class Bird {
    fly() {
        return `I can Fly`
    }
}

class penguin extends Bird {
    fly() {
        return `I can't fly even though i am a Bird`
    }
}
let crow = new Bird();
let myPenguin = new penguin();
console.log(crow.fly());
console.log(myPenguin.fly());



//Static Method

class Calculator {
    add(a, b) {
        return `I am not a static method and addition of a and b is ${a+b}.`
    }

    static sum(a,b) {
        return `I am a static method and sum of a and b is ${a+b}.`
    }
}

let calculate = new Calculator()
console.log(calculate.add(2,3));
console.log(Calculator.sum(2,7));

//Getter and setter

class ClassWithGetSet {
    #msg = 'Hello, from Getter function!'

    get msg(){
        return this.#msg;
    }
    set msg(myMsg){
        this.#msg = myMsg;
    }
}

let checkGetterfnc = new ClassWithGetSet();
console.log(checkGetterfnc.msg);
checkGetterfnc.msg = 'Hello, from setter, I have set the value'
console.log(checkGetterfnc.msg);
