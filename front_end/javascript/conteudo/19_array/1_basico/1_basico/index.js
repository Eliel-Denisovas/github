(function() {

// Array 

//construcao
// indices       0    1    2    3    4
const array1 = ['a', 'b', 'c', 'd', 'e'];

console.log('--------------------------------2');
// Pode tambem ser construido utilizando-se o 'new'
const array2 = new Array('a', 'b', 'c', 'd', 'e');

console.log('--------------------------------3');
// Os valores são passados por referencia, ou seja, aponta no mesmo local da memoria:
const array3 = ['a', 'b', 'c', 'd', 'e'];
const array4 = array3;
array4.pop();
console.log(array3, array4)

console.log('--------------------------------4');
// spread
// Os valores são passados por cópia, ou seja, não aponta para o mesmo local na memoria
const array5 = [...array2]
array5.pop();
console.log(array2, array5)

console.log('--------------------------------5');
// lenght
console.log(array5.length);

console.log('--------------------------------6');
// Push (Adiciona elemento ao final)
const array6 = ['a', 'b', 'c', 'd', 'e'];
array6.push('f');
console.log(array6);

console.log('--------------------------------7');
// Pop (remove o ultimo elemento. É possivel armazena-lo em uma variavel.)
const array7 = ['a', 'b', 'c', 'd', 'e'];
const removido1 = array7.pop();
console.log(removido1)

console.log('--------------------------------8');
// Shift (adiciona um elemento no inicio, por isso os indices dos elementos também mudam.)
const array8 = ['a', 'b', 'c', 'd', 'e'];
array8.unshift('ab');
console.log(array8);

console.log('--------------------------------9');
// Shift (remove o primeiro elemento, por isso os indices dos elementos também mudam. É possivel armazena-lo em uma variavel.)
const array9 = ['a', 'b', 'c', 'd', 'e'];
array7.shift();
console.log(array9);

console.log('--------------------------------10');
// Shift (remove o primeiro elemento, por isso os indices dos elementos também mudam. É possivel armazena-lo em uma variavel.)
const array10 = ['a', 'b', 'c', 'd', 'e'];
const array11 = array10.slice(1, 3);
console.log(array11);

const array12 = array10.slice(-2);
console.log(array12);

const array13 = array10.slice(2, -2);
console.log(array13);

console.log('--------------------------------10');
// Transformando string em array

const constant1 = 'Eliel Fernando Denisovas';
const array14 = constant1.split(' ');
console.log(array14);

console.log('--------------------------------10');
// Transformando array em string 

const array15 = ['Eliel', 'Fernando', 'Denisovas'];
const constant2 = array15.join(' ');
console.log(constant2);

})();


