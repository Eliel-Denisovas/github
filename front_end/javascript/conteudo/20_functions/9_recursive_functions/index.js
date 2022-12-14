// Uma função recursiva chama ela mesma na propria função. É necessário que haja uma forma do codigo parar.
// Funciona como um laço de repetição

function recursive(max) {
  console.log(max);
  if (max >= 11290) return
  max++;
  recursive(max);
}

recursive(0);