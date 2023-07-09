import {playerMoney, playerLuck, playerName} from "./perfil.js";

const playerNameSpan = document.getElementById("playerNameSpan");
const playerLuckSpan = document.getElementById("playerLuckSpan");
const playerMoneySpan = document.getElementById("playerMoneySpan");
export function headerDataInsert() {
  playerMoneySpan.innerText = `\u20AC ${parseFloat(playerMoney).toFixed(2)}`;
  playerLuckSpan.innerText = `${parseFloat(playerLuck * 100).toFixed(0)}%`;
  playerNameSpan.innerText = playerName;
}
headerDataInsert();
