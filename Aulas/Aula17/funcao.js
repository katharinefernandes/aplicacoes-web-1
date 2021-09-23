// Definindo uma Function
var dot = function quadrada(num = 4) {
  return num * num;
};

// Arrow Function
var dot = (num) => num * num;

console.log(`Quadrado: ${dot(5)}`);

// Function nativa(globais)
var numbers = [1, 4, 9];

var result = numbers.map((num) => {
  return Math.sqrt(num);
});

console.log(result);

// Function nativa(globais)
var str = "12345";

// Function split sem um argumento faz a divisão letra por letra.
// Function reverse inverte a ordem do vetor.
// Function join faz a junção de um vetor e transforma em uma string
str = str.split("").reverse().join("");

console.log(str);

// Function nativa(globais)
var data = new Date();

console.log(data.getDate());
console.log(data.getMonth());
console.log(data.getFullYear());