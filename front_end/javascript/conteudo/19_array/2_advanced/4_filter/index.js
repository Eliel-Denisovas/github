(function() {

  // filter com callback
  const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

  function callback(valor, indice, array) {
    if (valor > 10) {
      return true;
    } else {
      return false;
    }
  }

  const numerosFiltrados = numeros.filter(callback);
  console.log(numerosFiltrados);

})();

console.log('------------------------------------2');

(function() {

  // Forma mais simplificada
  const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

  function callback(valor, indice, array) {
   return valor > 10
  }

  const numerosFiltrados = numeros.filter(callback);
  console.log(numerosFiltrados);

})();

console.log('------------------------------------3');

(function() {

  // Uma outra forma é utilizar uma função anonima dentro de filter
  const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];  

  const numerosFiltrados = numeros.filter(function callback(valor, indice, array) {
    return valor > 10
   });
  console.log(numerosFiltrados);

})();

console.log('------------------------------------4');

(function() {

  // É possivel também utilizar arrow function
  const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];  

  const numerosFiltrados = numeros.filter((valor) => {
    return valor > 10
   });
  console.log(numerosFiltrados);

})();

console.log('------------------------------------4');

(function() {

  // É possivel também remover os parenteses na arrow function pois possui apenas um parametro
  const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];  

  const numerosFiltrados = numeros.filter(valor => {
    return valor > 10
   });
  console.log(numerosFiltrados);

})();

console.log('------------------------------------5');

(function() {

  // É possivel também remover as chaves e return pois a função tem apenas uma linha
  const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];  

  const numerosFiltrados = numeros.filter(valor => valor > 10);
  console.log(numerosFiltrados);

})();

console.log('------------------------------------6');

(function() {

  // Ele itera em todos os elementos
  const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];  

  const numerosFiltrados = numeros.filter((valor, indice, array) => {
    console.log(valor, indice, array)
  });
  console.log(numerosFiltrados);

})();

console.log('------------------------------------7');

(function() {

  // Filtrando um array de objetos


  const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
  ];  

  // Retorno as pessoas que tem o nome com 5 letras ou mais
  const pessoasFiltradas = pessoas.filter(valor => valor.nome.length >= 5);
  console.log(pessoasFiltradas)
  
  // Retorne as pessoas com mais de 40 anos
  const pessoasMaioresDe40Anos = pessoas.filter(valor => valor.idade >= 40);
  console.log(pessoasMaioresDe40Anos)

    // Retorne as pessoas cujo nome termina com a letra 'A' 
    const pessoasComLetraANoFinal = pessoas.filter(valor => valor.nome.toLowerCase().endsWith('a'));
    console.log(pessoasComLetraANoFinal)
})();