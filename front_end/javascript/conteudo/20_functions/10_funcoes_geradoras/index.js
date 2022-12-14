// Neste exemplo abaixo a cada vez que a função é chamada ela executa um 'yield'. A função não executa toda função de uma vez.

function* generator1() {
  // Codigo qualquer
  yield 'Valor 1';
  // Codigo qualquer
  yield 'Valor 2'
  //codigo qualquer
  yield 'Valor 3'
}

const g1 = generator1();
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);

console.log('-------------------------------');

// For aplicara as repeticões baseado no numero de yields's
function* generator2() {
  // Codigo qualquer
  yield 'Valor 1';
  // Codigo qualquer
  yield 'Valor 2'
  //codigo qualquer
  yield 'Valor 3'
}

const g2 = generator2();
for (let valor of g2) {
  console.log(valor)
}
console.log('-------------------------------');
// infinito
function* generator3() {
  let i = 0;

  while(true) {
    yield i;
    i++
  }
}

const g3 = generator3();
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);


console.log('-------------------------------');
// Delegar á geradora g5 para fazer as tarefas da geradora g4

function* generator4() {
  yield 1;
  yield 2;
  yield 3;
}

function* generator5() {
  yield* generator4();
  yield 4;
  yield 5;
  yield 6;
}

const g5 = generator5();
for (let valor of g5) {
  console.log(valor);
}

console.log('-------------------------------');

// Podemos também ordenar funções a serem executadas

function* generator6() {
  yield function() {
    console.log('y1')
  };

  yield function() {
    console.log('y2')
  };
}

const g6 = generator6();
const func1 = g6.next().value;
const func2 = g6.next().value;
func1();
func2();

console.log('-------------------------------');
// Com o mesmo exemplo, se houver algum 'return' , a função não sera mais executada

function* generator7() {
  yield function() {
    console.log('y3')
  };

  return function() {
    console.log('return');
  }

  yield function() {
    console.log('y4')
  };
}

const g7 = generator7();
const func3 = g7.next().value;
const func4 = g7.next().value;
func3();
func4();
