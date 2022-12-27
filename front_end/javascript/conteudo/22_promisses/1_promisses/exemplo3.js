
function wait1(msg, time) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("wrong value");
    setTimeout(() => {
      resolve(msg);
    }, time);
  });
}

function wait2(msg, time) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("wrong value");
    setTimeout(() => {
      resolve(msg);
    }, time);
  });
}

function wait3(msg, time) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("wrong value");
    setTimeout(() => {
      resolve(msg);
    }, time);
  });
}

function wait4(msg, time) {
  return new Promise((resolve, reject) => {
    if (typeof msg !== "string") reject("wrong value");
    setTimeout(() => {
      resolve(msg);
    }, time);
  });
}

wait1("Conexão com a base de dados", 5000)
  .then((msg) => {
    console.log(msg);
    return wait2("Buscando da base", 4000);
  })
  .then((msg) => {
    console.log(msg);
    return wait3("Tratando os dados da base", 3000)
  })
  .then((msg) => {
    console.log(msg);
    return wait4("Exibe dados na tela", 2000);
  })
  .then((msg) => {
    console.log(msg);
  })
  
console.log("Exibe primeiro");
