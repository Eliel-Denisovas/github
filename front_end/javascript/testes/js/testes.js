const pessoa = {
  nomes: 'Eliel',
  sobrenome: 'Denisovas',
  idade: 37,
  endereco: {
   //rua: 'São Vicente',
    numero: 320
  }
};

const nomes = ['Eliel', 'Fernando', 'Denisovas'];
const nome = 'Eliel Fernando Denisovas';



for (let i in pessoa) {
  console.log(i)
}

