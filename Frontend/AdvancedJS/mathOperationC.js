//named export

function add(a,b){
    return a+b;
}

function sub(a,b){
    return b-a;
}

function multiply(a,b){
    return a*b;
}

module.exports={
    add,
    sub,
    multiply
}