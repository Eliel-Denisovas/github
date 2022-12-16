// getter (receber valor) e setter (configurar valor)
// * faz simular que um metodo é uma propriedade
// * Protege a propriedade (por exemplo, apenas receber numeros)
console.log("--------------------------------1");

(function () {
  function Produto(nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque; // Variavel privada
    Object.defineProperty(this, "estoque", {
      enumerable: true,
      configurable: false,
      get: function () {
        return estoquePrivado;
      },
      set: function (valor) {
        if (typeof valor !== "number") {
          throw new TypeError('not a number')
          return
        }
        estoquePrivado = valor;
      }
    });
  }
  const p1 = new Produto("Camiseta", 20, 3);
  console.log(p1);
  p1.estoque = 500;
  console.log(p1.estoque);
})();
