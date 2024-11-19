//Closures in JS
//Closures are just functions which contains funtions within itself
//In this below example we can see that the closure function has the memory of data in which they are present
//a closure gives a function access to its outer scope.
// In JavaScript, closures are created every time a function is created, at function creation time.
function outer() {
    let count = 0;
    return function inner() {
        return count++;
    }
}
let increment = outer();
console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
