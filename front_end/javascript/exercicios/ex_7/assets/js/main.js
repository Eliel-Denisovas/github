function timer() {
  const display = document.querySelector(".display");
  const iniciar = document.querySelector(".iniciar");
  const pausar = document.querySelector(".pausar");
  const zerar = document.querySelector(".zerar");

  iniciar.addEventListener("click", function () {
    display.classList.remove("pausado");
    display.classList.remove("zerado");
    display.classList.add("iniciado");
    clearInterval(Interval);
    Interval = setInterval(start, 1000);
  });

  pausar.addEventListener("click", function () {
    display.classList.remove("iniciado");
    display.classList.remove("zerado");
    display.classList.add("pausado");
    clearInterval(Interval);
  });

  zerar.addEventListener("click", function () {
    display.classList.remove("iniciado");
    display.classList.remove("pausado");
    display.classList.add("zerado");
    clearInterval(Interval);
    contador = -1000 * 60 * 60;
    let time = new Date(contador);
    let setDisplay = time.toLocaleTimeString();
    display.innerHTML = setDisplay;
  });

  let contador = -1000 * 60 * 60;
  let Interval;

  function cronometer() {
    contador += 1000;
    return contador;
  }

  function start() {
    let time = new Date(cronometer(contador));
    let setDisplay = time.toLocaleTimeString();
    display.innerHTML = setDisplay;
  }
}
timer();
