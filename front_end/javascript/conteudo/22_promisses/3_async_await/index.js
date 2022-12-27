(function () {

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

  async function executa() {

    try {
      console.log(await wait("fase 1", 3000));

      console.log(await wait("fase 2", 2000));

      console.log(await wait("fase 3", 1000));

      console.log('Terminamos na fase');
    } 
    
    catch (e) {
      console.log(e);
    }
  }

  executa();

})();


