import { myMod2} from "./mod2.js";

function myMod1() {
  console.log('myMod1 executado');
  return 'Valor retornado de myMod1'
}

export function myMod1_nomeada () {
  return 'Função exportada nomeada';
}

export const pi = Math.PI

export default myMod1;

export const pessoa = {
  nome: 'Eliel',
  idade: 37,
  nacionalidade: 'brasileiro'
}

const carro = 'uno';
const moto = 'honda';

export{carro, moto}

console.log(new myMod1())