function teste() {
  console.log('Este é meu teste')
}

class ControleRemoto {
  constructor(tv) {
    this.tv = tv;
    this.volume = 0;
    teste();
  }

  // Métodos de instancia
  aumentarVolume() {
    this.volume +=2;
  }
  diminuirVolume() {
    this.volume -=2;
  }

  //Metodo estatico
  static soma(x, y) {
    return x + y;
  }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
controle1.aumentarVolume();
controle1.aumentarVolume();
console.log(controle1);

// Só é possivel assessar pela classe, não tem assesso aos dados da intancia.
console.log(ControleRemoto.soma(10, 2));
