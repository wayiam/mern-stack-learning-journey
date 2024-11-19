
//Asynchronous funtion
//Since  JavaScript is Single Threaded sometimes we may face an issue that a funciton is exectuing
//while the screen is stuck, in order to avoid that we use Asynchronous functions
//In Asynchronous function we don't wait for any function to be executed if it is taking long time.
//The Event loop send the time taking function to the Environment(ex- browser,node, bun etc) instead of 
//keeping it in the call stack where the event loop is constantly looking.
//For example the below fnc will be executed after 3000 secs after it was called meanwhile below code can execute
setTimeout(myFunction, 3000);

function myFunction() {
    console.log('I love JS');
}


