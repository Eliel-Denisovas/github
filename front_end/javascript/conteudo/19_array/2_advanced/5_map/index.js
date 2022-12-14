// Sempre modificara e retornará o arry inteiro
(function() {

/*   const pessoas = [
    {nome: 'Luiz', idade: 62, sexo: 'Masculino'},
    {nome: 'Maria', idade: 23, sexo: 'Feminino'},
    {nome: 'Eduardo', idade: 55, sexo: 'Masculino'},
    {nome: 'leticia', idade: 19, sexo: 'Feminino'},
    {nome: 'Rosana', idade: 32, sexo: 'Feminino'},
    {nome: 'Wallace', idade: 47, sexo: 'Masculino'},
  ];   */

  const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];  

  const numerosEmDobro = numeros.map((valor) => {
    return valor * 2
  });
  console.log(numerosEmDobro);

})();

console.log('---------------------------------2');

(function() {

    const pessoas = [
      {nome: 'Luiz', idade: 62, sexo: 'Masculino'},
      {nome: 'Maria', idade: 23, sexo: 'Feminino'},
      {nome: 'Eduardo', idade: 55, sexo: 'Masculino'},
      {nome: 'leticia', idade: 19, sexo: 'Feminino'},
      {nome: 'Rosana', idade: 32, sexo: 'Feminino'},
      {nome: 'Wallace', idade: 47, sexo: 'Masculino'},
    ];  
  
/*     const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];   */
  
    const nomes = pessoas.map((valor) => {
      return valor.nome
    });
    console.log(nomes);
  
  })();


  console.log('---------------------------------3');

  (function() {

    const pessoas = [
      {nome: 'Luiz', idade: 62, sexo: 'Masculino'},
      {nome: 'Maria', idade: 23, sexo: 'Feminino'},
      {nome: 'Eduardo', idade: 55, sexo: 'Masculino'},
      {nome: 'leticia', idade: 19, sexo: 'Feminino'},
      {nome: 'Rosana', idade: 32, sexo: 'Feminino'},
      {nome: 'Wallace', idade: 47, sexo: 'Masculino'},
    ];  
  
/*     const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];   */
  
// Acrescente 'Sr. ou 'Sra. nos nomes
    const nomes = pessoas.map((valor) => {
      if (valor.sexo === 'Masculino') {
      return `Sr. ${valor.nome}`
      } else {
        return `Sra. ${valor.nome}`
      }
    });
    console.log(nomes);
  
  })();

  console.log('---------------------------------4');

  (function() {

    const pessoas = [
      {nome: 'Luiz', idade: 62, sexo: 'Masculino'},
      {nome: 'Maria', idade: 23, sexo: 'Feminino'},
      {nome: 'Eduardo', idade: 55, sexo: 'Masculino'},
      {nome: 'leticia', idade: 19, sexo: 'Feminino'},
      {nome: 'Rosana', idade: 32, sexo: 'Feminino'},
      {nome: 'Wallace', idade: 47, sexo: 'Masculino'},
    ];  
  
/*     const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];   */
  
    // delete as chaves das idades
    const deleteIdade = pessoas.map((valor) => {
      delete valor.idade;
      return valor;
    });
    console.log (deleteIdade);
  
  })();

  console.log('---------------------------------5');

  (function() {

    const pessoas = [
      {nome: 'Luiz', idade: 62, sexo: 'Masculino'},
      {nome: 'Maria', idade: 23, sexo: 'Feminino'},
      {nome: 'Eduardo', idade: 55, sexo: 'Masculino'},
      {nome: 'leticia', idade: 19, sexo: 'Feminino'},
      {nome: 'Rosana', idade: 32, sexo: 'Feminino'},
      {nome: 'Wallace', idade: 47, sexo: 'Masculino'},
    ];  
  
/*     const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];   */
  // Insira uma chave 'profissao
  // neste caso ele altera o array original
    const insereChaveProfissao = pessoas.map((valor) => {
      valor.profissao = undefined
      return valor
    });
    console.log(insereChaveProfissao);
    console.log(pessoas)
  
  })();

  console.log('---------------------------------6');

  (function() {

    const pessoas = [
      {nome: 'Luiz', idade: 62, sexo: 'Masculino'},
      {nome: 'Maria', idade: 23, sexo: 'Feminino'},
      {nome: 'Eduardo', idade: 55, sexo: 'Masculino'},
      {nome: 'leticia', idade: 19, sexo: 'Feminino'},
      {nome: 'Rosana', idade: 32, sexo: 'Feminino'},
      {nome: 'Wallace', idade: 47, sexo: 'Masculino'},
    ];  
  
/*     const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];   */
  // Insira uma chave 'endereço'
  // neste caso ele cria um novo array
    const insereChaveEndereco = pessoas.map((valor) => {
      const newObj = {...valor};
      newObj.endereco = undefined
      return newObj
    });
    console.log(insereChaveEndereco);
    console.log(pessoas)
  
  })();
