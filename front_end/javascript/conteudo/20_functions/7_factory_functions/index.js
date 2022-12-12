function criaPessoa(nome, sobrenome, altura, peso) {
  return {
    nome,
    sobrenome,
     //getter (somente retorna, não recebe argumentos)
     get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`
    },
    // setter
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
      console.log(valor)
    },
    fala: function(assunto) {
      return `${this.nome} esta falando sobre ${assunto}.`
    },
    altura,
    peso,
    imc() {
      const indiceMC = this.peso / (this.altura ** 2);
      return indiceMC.toFixed(2)
    },
  };
}

const p3 = criaPessoa('Manoel', 'Pereira', 1.8, 80)
console.log(p3.imc());
console.log(p3.nomeCompleto)
p3.nomeCompleto = 'Maria Oliveira Silva'
console.log(p3.nomeCompleto);
p3.fala()

