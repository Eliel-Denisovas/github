// 'freeze'
(function () {
  // Caso queira que o objeto criado seja inalterado, utiliza-se 'freeze'
  function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function () {
      console.log(this.nome + `: sou um método`);
    };
  }
  const p1 = new Pessoa("Eliel", "Fernando");
  Object.freeze(p1)
  const p2 = new Pessoa("Maria", "Oliveira");
  p1.nome = 'João'
  p2.nome = 'Joana'
  console.log(p1, p2)
})();

console.log('--------------------------------2');

(function () {
  // Caso queira que qualquer objeto criado pelo construtor seja inalterado, utiliza-se 'freeze' no construtor na palavra 'this'.
  function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.metodo = function () {
      console.log(this.nome + `: sou um método`);
    };
    Object.freeze(this);
  }
  const p1 = new Pessoa("Eliel", "Fernando");
  const p2 = new Pessoa("Maria", "Oliveira");
  p1.nome = 'João'
  p2.nome = 'Joana'
  console.log(p1, p2)
})();
