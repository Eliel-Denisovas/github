(function () {

  function Produto(nome, preco) {
    this.nome = nome;
    this.preco = preco;
  }

  Produto.prototype.desconto = function (percentual) {
    this.preco = this.preco - this.preco * (percentual / 100);
  };
  Produto.prototype.aumento = function (percentual) {
    this.preco = this.preco + this.preco * (percentual / 100);
  };

  const p1 = new Produto("Camiseta", 50);
  p1.desconto(10);

  const p2 = {
    nome: "caneca",
    preco: 70,
  };

  Object.setPrototypeOf(p2, Produto.prototype);

  const p3 = Object.create(Produto.prototype);
  p3.preco = 30

  const p4 = Object.create(Produto.prototype, {
    preco: {
      writable: true,
      configurable: true,
      enumerable: true,
      value: 60
    },
    tamanho: {
      writable: true,
      configurable: true,
      enumerable: true,
      value: 42
    }
  });

  p4.aumento(50)

  p2.aumento(10)

  console.log(p1);
  console.log(p2);
  console.log(p3);
  console.log(p4);

})();
