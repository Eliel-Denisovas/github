// Resolve
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
  
  function baixaPagina() {
    const emCache = true;

    if(emCache) {
      return Promise.resolve('Pagina em cache')
    } else {
      return wait('baixando', 3000)
    }
  }

  baixaPagina()
  .then(dadosPagina => {
    console.log(dadosPagina);
  })
  .catch((e) => console.log(e));

  })();


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

  
  function baixaPagina() {
    const emCache = false;

    if(emCache) {
      return Promise.resolve('Pagina em cache')
    } else {
      return wait('baixando', 3000)
    }
  }

  baixaPagina()
  .then(dadosPagina => {
    console.log(dadosPagina);
  })
  .catch((e) => console.log(e));

  })();