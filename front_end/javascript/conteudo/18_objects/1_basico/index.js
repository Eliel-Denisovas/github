console.log('-----------------------------------1');

(function () {
  // Declaração literal
  // nome do obj
  // Entre as chaves estão o corpo do objeto, que por sua vez são constituidos de chaves e valores
  const pessoa1 = {
    nome: "Eliel",
    sobrenome: "Denisovas",
    idade: 37,
    nacionalidade: "brasileiro",
  };

  // Formas de acesso: (2)
  console.log(pessoa1.nome);
  console.log(pessoa1["nome"]);

  // É possivel tambem armazenar as chaves dentro de uma variavel:
  const chave1 = "nome";
  console.log(pessoa1[chave1]);
})();

console.log('-----------------------------------2');

(function () {
  // Declaração construtora:
  const pessoa1 = new Object();
  pessoa1.nome = "Eliel";
  pessoa1.sobrenome = "Denisovas";
  pessoa1.idade = 37;
  pessoa1.nacionalidade = "brasileiro";

  console.log(pessoa1.nome);
  console.log(pessoa1["nome"]);
})();

console.log('-----------------------------------3');

(function () {
  const pessoa1 = {
    nome: "Eliel",
    sobrenome: "Denisovas",
    idade: 37,
    nacionalidade: "brasileiro",
  };

  delete pessoa1.nome;
  console.log(pessoa1);
})();

console.log('-----------------------------------4');
// Metodo: É uma função dentro do objeto. As vantagem é que o método tem acesso as chaves do objeto em que ele está inserido.

(function () {
  const pessoa1 = {
    nome: "Eliel",
    sobrenome: "Denisovas",
    idade: 37,
    nacionalidade: "brasileiro",
    falaNome: function() {
      console.log(`Meu nome é ${this.nome}`)
    },
    AnoNascimento: function() {
      const dataAtual = new Date();
      return dataAtual.getFullYear() - this.idade
    }
  };
  pessoa1.falaNome();
  console.log(pessoa1.AnoNascimento());
})();

console.log('-----------------------------------5');

(function () {
  // Para impedir que objetos sejam alterados utilizamos: 'Freeze'

  const pessoa1 = new Object();
  pessoa1.nome = "Eliel";
  pessoa1.sobrenome = "Denisovas";
  pessoa1.idade = 37;
  pessoa1.nacionalidade = "brasileiro";

  console.log(pessoa1.nome);
  console.log(pessoa1["nome"]);
})();