(function () {
  function ramdom_(min = 0, max = 3) {
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
        resolve(msg.toUpperCase() + " - Passei na promise");
      }, time);
    });
  }

  /* 
  wait("fase 1", ramdom_())
  .then(valor => {
    console.log(valor);
    return wait('fase 2', ramdom_());
  })
  .then(fase => {
    console.log(fase);
    return wait('Fase 3', ramdom_());
  })
  .then(fase => {
    console.log(fase);
    return fase;
  })
  .then(fase => {
    console.log('Terminamos na fase', fase);
  })
  .catch(e => console.log(e));
 */

  async function executa() {

    try {
      const fase1 = await wait("fase 1", ramdom_());
      console.log(fase1);

      const fase2 = await wait("fase 2", ramdom_());
      console.log(fase2);

      const fase3 = await wait("fase 3", ramdom_());
      console.log(fase3);

      console.log('Terminamos na fase', fase3);
    } catch (e) {
      console.log(e);
    }
  }

  executa();

})();


