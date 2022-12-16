console.log('--------------------------------4');

(function () {
  // Object.define.property / define.properties (define as propriedades (comportamento) de uma propriedade)

// 'enumarable' (An enumerable property in JavaScript means that a property can be viewed if it is iterated using the for…in loop or Object.keys() method. All the properties which are created by simple assignment or property initializer are enumerable by default.)
  function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    Object.defineProperty(this, 'estoque', {
      enumerable: true, //mostra a chave
      value: estoque // atribui valor
    });
  }
  const p1 = new Produto("Camiseta", 20, 3);
  for (let chave in p1) {
    console.log(chave)
  };
})();

console.log('--------------------------------5');

(function () {
// Definindo se o valor de propriedade pode/não pode ser alterada
  function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    Object.defineProperty(this, 'estoque', {
      enumerable: true,
      value: estoque,
      writable: false // Pode ou não ser reatribuido o valor (true/false)
    });
  }
  const p1 = new Produto("Camiseta", 20, 3);
  p1.estoque = 15
  console.log(p1)
})();

console.log('--------------------------------6');

(function () {
  function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    Object.defineProperty(this, 'estoque', {
      enumerable: true,
      value: estoque,
      writable: false,
      configurable: false // Pode/ Não pode reconfigurar a chave
    });
  }
  const p1 = new Produto("Camiseta", 20, 3);
  p1.estoque = 15
  delete p1.estoque;
  console.log(p1)
})();



