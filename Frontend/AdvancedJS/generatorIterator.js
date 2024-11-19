function* generatorIterator(){
 yield 1;
 yield 2;
 yield 3;
}

let gen = generatorIterator();
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

let genTwo = generatorIterator();
console.log(genTwo.next().value);
console.log(genTwo.next().value);
console.log(genTwo.next().value);
