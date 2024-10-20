
function myfunc() {
    console.log("Hello from function");
}
myfunc();

//Parameters in function is pass by value see below example.

function doubleTheNumber(num) {
    num = num * 2;
    console.log(`Num value within function is ${num}`);
    return num;
}
let num = 44;
doubleTheNumber(num);
console.log(`Num value outside function is ${num}`);

/* When you pass an object as a parameter, 
if the function changes the object's properties, 
that change is visible outside the function, as shown in the following example:
*/

function myFunc(theObject) {
    theObject.make = "Toyota";
  }
  
  const mycar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
  };
  
  console.log(`Before Function Executed object value is ${mycar.make}`); // "Honda"
  myFunc(mycar);
  console.log(`Before Function Executed object value is ${mycar.make}`); // "Toyota"

//Another example with array

let arr = [1,2]

function changeArrayValue(arr){
    arr[0] = 7;
}

console.log(`Array's value before function is called ${arr}`);
changeArrayValue(arr);
console.log(`Array's value After function is called ${arr}`);


//Nested Function the square is nested funciton of add squares

function addSquares(a, b) {
    function square(x) {
      return x * x;
    }
    return square(a) + square(b);
  }
  
  console.log(addSquares(2, 3)); // 13
  console.log(addSquares(3, 4)); // 25
  console.log(addSquares(4, 5)); // 41
  
