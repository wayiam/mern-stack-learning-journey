/*
Arrays are "list-like objects" they are single object which contains multiple value in a list like structure.
list numbering starts from zero
*/

//Creating an array:

const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
//print the list
console.log(shopping);
//pritnt any specific item from the list
console.log(`You're acessing "${shopping[0]}" by using index from the list`);

//find length of array 
console.log(shopping.length);

//Modify any element from array

shopping[1] = 'eggs'
console.log(shopping); //[ 'bread', 'eggs', 'cheese', 'hummus', 'noodles' ]


//Arrays can store diffrent type of Datatype together
const random = ["tree", 795, [0, 1, 2]];
console.log(random); //["tree", 795, [0, 1, 2]]

//Mutlidimensional array(nested arrays) acess
console.log(random[2][1]); //1

// To find index of any array element
console.log(random.indexOf('tree')); //0

// Add items in array it will add items at the end.

const cities = ["Manchester", "Liverpool"];
cities.push("Cardiff");
console.log(cities); // [ "Manchester", "Liverpool", "Cardiff" ]
cities.push("Mumbai", "Delhi");
console.log(cities); // [ "Manchester", "Liverpool", "Cardiff", "Bradford", "Brighton" ]

//add item at the start using unshift

cities.unshift('Bengaluru'); // [ "Bengaluru", "Manchester", "Liverpool", "Cardiff", "Bradford", "Brighton" ]
console.log(cities);

//remove item at the start using shift

cities.shift();
console.log(cities);


//Remove an item from array use pop(); it will remove last element
console.log(cities);
console.log(cities.pop());
console.log(cities);

//TO acess every element

const birds = ["Parrot", "Falcon", "Owl"];

for (const bird of birds) {
    console.log(bird); //Parrot, Falcon, Owl

}


//Sometimes we want to perform same funtion to all the element of array in that case we can use map

const numbers = [5, 2, 7, 6];

function double(number) {
    return number * 2;
}

const doubled = numbers.map(double);

console.log(doubled);


//filter elements of array using filter() function

function isLong(city) {
    if (city.length > 7) {
        return true;
    }
    return false;
}

const englandCities = ["London", "Liverpool", "Totnes", "Edinburgh"];
const filteredCities = cities.filter(isLong)
console.log(filteredCities);

//Split the String into the Arrays

const data = "Manchester,London,Liverpool,Birmingham,Leeds,Carlisle";

const arrayData = data.split(',')
console.log(arrayData);

// We can convert the array to string as well

const newString = arrayData.join(',')
console.log(newString);


//Convert into string

const dogNames = ["Rocket", "Flash", "Bella", "Slugger"];
dogNames.toString(); // Rocket,Flash,Bella,Slugger
console.log(typeof (dogNames));



    
    
    const products = [
        'Underpants:6.99',
        'Socks:5.99',
        'T-shirt:14.99',
        'Trousers:31.99',
        'Shoes:23.99'
         ];

console.log(typeof products)

const abc = [1,2,4]

// for (a of products){
//   [names, price] = a.split(':');
//   const n[] = names;
//   console.log(price);
  
// }

const pr = "46"
const price = Number(pr);
console.log(typeof price);
