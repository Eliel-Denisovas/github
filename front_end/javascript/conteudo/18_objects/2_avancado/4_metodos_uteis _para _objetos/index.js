// valores por referencia (Arrays, objetos)
console.log('--------------------------------1');

(function() {

const produto1 = {nome: 'caneca', preco: 1.8};
const produto2 = produto1;
produto2.nome = 'copo'
console.log(produto1);
console.log(produto2);

})();


console.log('--------------------------------2');

(function() {

// Para fazermos uma copia podemos utilizar o spread. Ainda podemos adicionar propriedades
const produto1 = {nome: 'caneca', preco: 1.8};
const produto2 = {...produto1, material: 'porcelana'}
produto2.nome = 'copo'
console.log(produto1);
console.log(produto2);

})();

console.log('--------------------------------3');

(function() {

// Para fazermos uma copia podemos utilizar tambem object.assign. Ainda podemos adicionar propriedades
const produto1 = {nome: 'caneca', preco: 1.8};
const produto2 = Object.assign({}, produto1, {material: 'porcelana'})
produto2.nome = 'copo'
console.log(produto1);
console.log(produto2);

})();

console.log('--------------------------------4');

(function() {

// Para fazermos uma copia podemos utilizar tambem apenas alguma propriedade de outro objeto. Ainda podemos adicionar propriedades
const produto1 = {nome: 'caneca', preco: 1.8};
const produto2 = {nome: produto1.nome, material: 'porcelana'}
produto2.nome = 'copo'
console.log(produto1);
console.log(produto2);

})();

console.log('--------------------------------5');

(function() {

// Para visualizarmos as chaves do objeto
const produto1 = {nome: 'caneca', preco: 1.8};
console.log(produto1);
console.log(Object.keys(produto1));

})();

console.log('--------------------------------6');

(function() {

// Para visualizarmos os valores do objeto
const produto1 = {nome: 'caneca', preco: 1.8};
console.log(produto1);
console.log(Object.values(produto1));

})();

console.log('--------------------------------7');

(function() {

// Para visualizarmos as chaves e os valores de cada propriedade do objeto em arrays separados
const produto1 = {nome: 'caneca', preco: 1.8};
console.log(produto1);
console.log(Object.entries(produto1));
console.log(Object.entries(produto1)[1]);



})();

console.log('--------------------------------8');

(function() {

// mostra a configuracão das propriedades do objeto
const produto1 = {nome: 'caneca', preco: 1.8};
console.log(Object.getOwnPropertyDescriptor(produto1, 'nome'));
const produto2 = {nome: 'caneca', preco: 1.8};
Object.defineProperty(produto2, 'nome', {
  writable: false
} )
console.log(Object.getOwnPropertyDescriptor(produto2, 'nome'));

})();


