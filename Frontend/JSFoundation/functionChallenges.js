/* 
Create a function named `orderTea`that takes one parameter 'teaType`. Inside this function, create another 
fucntion named `confirmOrder` that return a message like "Ordered confirmed for chai"
call `confirmOrder` within the `orderTea` and return the result.
*/

function orderShoe(shoeType) {

  function confirmOrder() {
    return 'Order Confirmed for Nike'
  }
  return confirmOrder();
}

const orderConfirmation = orderShoe('Jordans');
console.log(orderConfirmation);

//JavaScript Execution context - 

/*
Arrow Functions: Write an arrow function named `calculateTotal` that takes two parameter `price`
and `quantity`. The function should return the total cost by multiplying the `price and quatity`
Store the result in variable called `totalCost`.
*/

const calculateTotal = (price, quantity) => price * quantity;

let totalCost = calculateTotal(399, 100)
console.log(totalCost);




/*
Write a function named `processTeaOrder` that takes another function, `makeTea`,
as a parameter and calls it with the argument "early grey" .
Return  the result of calling `makeTea`.
*/

//Function that takes function as parameter or returnf function are called the Higher order function

function processTeaOrder(makeTea) {
  return makeTea("early grey");
}

function makeTea(param) {
  return `makeTea: ${param}`
}

console.log(processTeaOrder(makeTea));


/*
5. Write a function named 'createMaker' that return another function.The returned function.
should take one parameter ,  `teaType` , and  return a message like "Making green tea".
Store the function returned in a variable named `teaMaker` and call it with `green tea`.
*/



function createMaker(){
 return function (teaType){
    return "Making green tea."
  }
}

console.log(createMaker());
