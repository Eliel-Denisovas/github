const pessoa = {
  nome: 'Eliel',
  sobrenome: 'Denisovas',
  idade: 37,
  endereco: {
   //rua: 'São Vicente',
    numero: 320
  }
};

// Atribuição via desestruturação

const {vizinho = "joao", rua = "qualquer", sobrenome, idade} = pessoa;

console.log(vizinho, rua, sobrenome, idade);