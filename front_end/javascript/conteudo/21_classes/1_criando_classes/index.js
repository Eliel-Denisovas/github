(function () {

  class Pessoa {
    constructor(nome, sobrenome) {
      this.nome = nome;
      this.sobrenome = sobrenome;
    }
    falar() {
      console.log(`${this.nome} está falando`);
    }
    comer() {
      console.log(`${this.nome} está falando`);
    }
    beber() {
      console.log(`${this.nome} está falando`);
    }
  }

  const p1 = new Pessoa("Luiz", "Silva");
  const p2 = new Pessoa("Marcos", "Pereira");
  const p3 = new Pessoa("Lucas", "Carvalho");
  const p4 = new Pessoa("Gabriel", "Meireles");
  console.log(p1);
  console.log(p2);
  console.log(p3);
  console.log(p4);

})();
