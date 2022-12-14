(function () {
  // O acumulador definido depois da função tera efeito apenas no primeiro elemento e define o valor inicial
  const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

  const elementos = numeros.reduce((acumulador, valor, indice, array) => {
    console.log(acumulador, valor, indice, array);
  }, 0);
  
})();

console.log('---------------------------------------------2');

(function () {
  const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

  const total = numeros.reduce((acumulador, valor, indice, array) => {
    acumulador += valor;
    console.log(acumulador, valor);
    return acumulador;
  }, 0);

  console.log(total);
  
})();

console.log('---------------------------------------------3');

(function () {

  const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
  // Some somente os numeros pares
  const numerosPares = numeros.reduce((acumulador, valor) => {
    if (valor % 2 === 0) {
      acumulador += valor;
    }
    return acumulador;
  }, 0);

  console.log(numerosPares);
  
})();

console.log('---------------------------------------------3');

(function () {
// Para este exercicio veja a aula reduce a partir dos 13min
  const pessoas = [
    {nome: 'Luiz', idade: 62, sexo: 'Masculino'},
    {nome: 'Maria', idade: 23, sexo: 'Feminino'},
    {nome: 'Eduardo', idade: 55, sexo: 'Masculino'},
    {nome: 'leticia', idade: 19, sexo: 'Feminino'},
    {nome: 'Rosana', idade: 64, sexo: 'Feminino'},
    {nome: 'Wallace', idade: 47, sexo: 'Masculino'},
  ];  

  // Retorne a pessoa mais velha
  const pessoaMaisVelha = pessoas.reduce((acumulador, valor) => {
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
  });

  console.log(pessoaMaisVelha);
  
})();
