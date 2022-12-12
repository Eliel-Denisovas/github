function Pessoa(nome, sobrenome) {
  // Atributos ou metodos privados
  const ID = 123456;
  const metodoInterno = function() {};

  // Atributos ou metodos publicos
  this.nome = nome;
  this.sobrenome = sobrenome;

  this.metodo = function() {
    console.log(this.nome + `: sou um método`);
  };
}

const p1 = new Pessoa('Eliel', 'Fernando');
const p2 = new Pessoa('Maria', 'Oliveira');
