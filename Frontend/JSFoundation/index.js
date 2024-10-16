//Printing a value

console.log("Hello from codespaces!");


// Varaibles - var, let and const

var iamOutdated = 25;

let iAmblockScopedVariable = 'Blocky'

const iamRigid = 'I will not change my value'

console.log(iamOutdated);
console.log(iAmblockScopedVariable);
console.log(iamRigid);


//Data Types: 
//Primitive Datatypes: Number, string, boolean, BigInt, null, undefined

//Number 

let balance = 120;
//Primitive type can be converted to non primitive type (now it is object)
let balanceUpdated = new Number(125);
console.log(balance);
console.log(balanceUpdated);

console.log(typeof(balance));
console.log(typeof(balanceUpdated));

// Null and Undefined
let unknownValue;
let value = null;
let anotherValue = undefined;

console.log(unknownValue); // This is undefined as their is a memory allocated to it it's just unknow and not defined
console.log(value); // null means nothing no value is present.
console.log(anotherValue); //undefined again.



// Non-primitive datatype: Objects (function, arrays, object)

//obj
let user1 = {
   firstName: "John",
   isLoggedIn: false 
}
console.log(user1);
console.log(typeof user1);

const user2  = {
   firstName: "David",
   isLoggedIn: true
}

console.log(user2);
console.log(typeof user2);

//Object are mutable even if it is defined by the "let"

user2.firstName = "Steve"
console.log(user2);


// Arrays

let iamArray = [1, "a", true, null]

console.log(iamArray);
console.log(iamArray[0])

console.log(iamArray[2])


// Type conversion

let foo = true;
let num = 7;

console.log(foo+num); // foo(boolean) value is implicitily converted by JS to Number to perform arthe oper

