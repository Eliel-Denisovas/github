function User(nome, cpf) {
  this.nome = nome;
  this.cpf = cpf;
}

User.prototype.checkCpf = function () {
  this.cpfOnlyNunbers = cpfData.replace(/\D+/g, "");
  this.cpfIsvalid = this.checkCpf();
  if (this.cpfOnlyNunbers.length < 11 || this.cpfOnlyNunbers > 11) {
    console.log(`Insira 11 numeros`);
    return;
  }
};

const user = new User("Eliel", "705.484.450-2");
console.log(user);
