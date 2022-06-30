//O que são vetores ou arrays



/*//Como declarar um array
let array = ['string', 1, true];
console.log(array);*/

//pode guardar vários tipos de dados
/*let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
console.log(array[6]);*/

/*//forEach
array.forEach(function(item, index){console.log(item, index)});*/

/*//push
array.push('sábadou');
console.log(array);*/

/*//pop
array.pop();
console.log(array);*/

/*//shift
array.shift();
console.log(array);*/

/*//unshift
array.unshift('novo item no inicio');
console.log(array);*/

/*//indexOf
console.log(array.indexOf(true));*/

/*///splice
array.splice(0, 3);
console.log(array);*/

/*//slice
let novoArray = array.slice(0, 3);
console.log(novoArray);*/

//Objetos - manipular
let object = {string:'meia noite', number: 11, boolean: true, array: ['array'],objectInterno: {objectInterno: 'objeto interno'}};

console.log(object.number);

//Objetos desestruturar - Exemplo 1
var string = object.string;
console.log(string);

var array = object.array;
console.log(array);

//Objetos desestruturar - Exemplo 2
var {string, boolean, number} = object;
console.log(string, boolean,number);

