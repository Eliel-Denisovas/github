import {resetPlayerData} from "./perfil.js";

const resetAllButtom = document.getElementById("resetAllButtom");

resetAllButtom.addEventListener("click", function () {
    resetPlayerData();
    alert("Game reset has been applyed successfully");
  });
