// Validação de CPF
(function () {
  let cpf = "705.484.450-52";

  function somaCPF(cpf) {

    // Set numbers
    let cpfNumbers = cpf.replace(/\D+/g, "");
    let cpfArray = Array.from(cpfNumbers);
    cpfArrayReduced = cpfArray.slice(0, -2);
    let cpfArrayReducedCopy = [...cpfArrayReduced];

    // Multiply numbers
    let multiplicator = cpfArrayReduced.length + 1;
    for (let i = 0; i < cpfArrayReduced.length; i++) {
      cpfArrayReducedCopy[i] = cpfArrayReducedCopy[i] * multiplicator;
      multiplicator--;
    }

    // Sum result
    let sumNumbers = cpfArrayReducedCopy.reduce(function (acumulador, valor) {
      acumulador += Number(valor);
      return acumulador;
    }, 0);

    // return values
    let arraySumNumbers = [sumNumbers, cpfArray, cpfNumbers];
    return arraySumNumbers;
  }

  // Set digit
  let somaCpfReturn = somaCPF(cpf);
  function setDigit() {
    let digit = 11 - (somaCpfReturn[0] % 11);
    if (digit > 9) {
      return 0;
    } else {
      return digit;
    }
  }
  setDigit();

  // Add digit
  let array2 = [...somaCpfReturn[1]];
  if (array2 < cpfArrayReduced.length) {
    array2.push(setDigit());
  }

  // Convert Number to String
  let array2String = String(array2.join(""));

  // Second calculation
  const finalResult = somaCPF(array2String)[2];
  
  // check
  if (somaCpfReturn[2] == finalResult) {
    console.log(`Validation concluded`)
  } else {
    console.log('This CPF is not valid')
  }

})();
