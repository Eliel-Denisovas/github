class cpfCheck {
  constructor(cpf) {
    this.cpf = cpf;
    this.cpfCopy = this._cpfCopy();
    this.onlyNumbers = this._onlyNumbers()
    this.numbers_array = this.numbersArray();
  }
  
  _onlyNumbers() {
    if (this.cpf === undefined) return '11111111111';
    return this.cpf.replace(/\D+/g, "").slice(0, -2);
  }

  _cpfCopy() {
    if (this.cpf === undefined) return '11111111111';
    return this.cpf.replace(/\D+/g, "");
  }

  cpfCheckStart() {
    if (!this.cpfCopy) return false;
    if (typeof this.cpfCopy !== "string") return false;
    if (this.cpfCopy.length !== 11) return false;
    if (this.sameCaracters() == true) return false;
    this.addDigit();
    this.convertNumberToString();
    this.secondCalculation();
    return this.compareNumbers();
  }
  sameCaracters() {
    return this.cpfCopy.charAt(0).repeat(11) === this.cpfCopy;
  }
  numbersArray() {
    return Array.from(this.onlyNumbers);
  }
  multiplyNumbers() {
    let multiplicador = this.numbersArray().length + 1;
    const total = this.numbersArray().reduce((acumulador, valor) => {
      acumulador += multiplicador * Number(valor);
      multiplicador--;
      return acumulador;
    }, 0);
    return total;
  }
  selectDigit() {
    const digit = 11 - (this.multiplyNumbers() % 11);
    if (digit > 9) return 0;
    return digit;
  }
  addDigit() {
    //checked
    this.numbers_array.push(this.selectDigit());
    return this.numbers_array;
  }
  convertNumberToString() {
    this.onlyNumbers = this.numbers_array.toString().replace(/\D+/g, "");
  }
  secondCalculation() {
    if (this.onlyNumbers.length < 11) {
      this.cpfCheckStart();
    } else {
      return this.onlyNumbers;
    }
  }
  compareNumbers() {
    return this.onlyNumbers !== this.cpfCopy
      ? "CPF não aprovado"
      : `CPF: ${this.cpfCopy} aprovado`;
  }
}

const cpf_1 = new cpfCheck('336.177.448-93');
console.log(cpf_1.cpfCheckStart());