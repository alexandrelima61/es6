var sayHello = nome => `Hello ${nome}`;
var printHello = (nome) => {
  console.log(`Hello ${nome}`);
};
var getSiblings = n => ({ previous: n - 1, next: n + 1 });


console.log(sayHello);
console.log(sayHello('José'));
printHello('Alexandre');
console.log(getSiblings(10));