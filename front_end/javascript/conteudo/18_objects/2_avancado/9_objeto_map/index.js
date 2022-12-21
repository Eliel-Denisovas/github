const pessoas = [
  {id: 3, nome: 'Luiz'},
  {id: 2, nome: 'Maria'},
  {id: 1, nome: 'Helena'}
];

/* for (const i of pessoas) {
  const {id} = i;
  novasPessoas[id] = { ...i};
  console.log(novasPessoas);
} */

const novasPessoas = new Map();
for (let i of pessoas) {
  const {id} = i
  novasPessoas.set(id, {...i});
  console.log({id})
}

console.log(novasPessoas);