function ramdom_(max, min) {
  min *= 1000;
  max *= 1000;
  return Math.floor(Math.random() * (max - min) + min);
}

function wait(msg, time) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("wrong value");
    setTimeout(() => {
      resolve(msg);
    }, time);
  });
}

wait("Conexão com a base de dados", ramdom_(1, 3))
  .then((msg) => {
    console.log(msg);
    return wait("Buscando da base", ramdom_(1, 3));
  })
  .then((msg) => {
    console.log(msg);
    return wait("Tratando os dados da base", ramdom_(1, 3));
  })
  .then((msg) => {
    console.log("Exibe dados na tela");
  })
  .then((msg) => {
    console.log("sss");
  });

console.log("Exibe primeiro");
