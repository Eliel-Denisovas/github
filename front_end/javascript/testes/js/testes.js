const numeros = [1, 3, 4, 1, 4, 5, 3, 5, 8, 9];

const numerosUnicos = numeros.reduce((a, c, i, ar) => {
  if (a.indexOf(c) < 0) {
    a.push(c);
  }
  return a;
}, []);

console.log(numerosUnicos);
