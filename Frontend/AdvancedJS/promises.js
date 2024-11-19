
// Promises In JS is an object which contains a value which represents a eventual completion
//failure of an asynchronous operations.

function fetchData() {
    //Here we have created a promise object within this  promise we have an asynchronus
    //operation i.e setTimeout(), at any  point of time any function will have 
    //Either of three state pending, fulfilled or rejected
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let success = true;
            if (success) {
                resolve('Data has been fetched')
            }
            else {
                reject('Data has not been fetched')
            }
        }, 3000);
    })
}
// calling fetchData function will return an promise object
let promiseObj  = fetchData();

//The promise object will has then and catch methods which are associated with the resolve and reject para respectively

promiseObj.
    then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    })

    