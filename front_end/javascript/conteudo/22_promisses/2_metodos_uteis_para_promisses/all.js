
// all
(function() {
  function ramdom_(max, min) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  function wait(msg, time) {
    return new Promise((resolve, reject) => {
      if (typeof msg !== "string") {
        reject("wrong value");
        return;
      } 
      setTimeout(() => {
        resolve(msg.toUpperCase() + ' - Passei na promise');
      }, time);
    });
  }
  
  const promises = [
    wait('Promise 1', ramdom_(1, 5)),
    wait('Promise 2', ramdom_(1, 5)),
    wait('Promise 3', ramdom_(1, 5)),
    wait('Promise 4', ramdom_(1, 5)),
  ];
  
  Promise.all(promises)
  .then((valor) => {
    console.log(valor);
  })
  .catch((erro) => {
    console.log('erro')
  })
  })();

  console.log('----------------------------------------');

