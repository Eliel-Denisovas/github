let playerName = "Eliel Denisovas";
let playerNameLocalStorage = localStorage.getItem("playerNameLocalStorage");
let playerLuck = 0.5;
let playerLuckArray = [];
let playerLuckArrayLocalStorage = localStorage.getItem("playerLuckArrayLocalStorage");
let playerMoney = 500;
let playerMoneyLocalStorage = parseFloat(localStorage.getItem("playerMoneyLocalStorage"));

const playerNameSpan = document.getElementById("playerNameSpan");
const playerLuckSpan = document.getElementById("playerLuckSpan");
const playerMoneySpan = document.getElementById("playerMoneySpan");

function checkLocalStorage() {
  if (playerMoneyLocalStorage) {
    playerMoney = parseFloat(playerMoneyLocalStorage).toFixed(2);
  }
  if (playerNameLocalStorage) {
    playerName = playerNameLocalStorage;
  }
  if (playerLuckArrayLocalStorage) {
    playerLuckArray = playerLuckArrayLocalStorage;
  }
}
checkLocalStorage();

function playerCheckLuck() {
  if (playerLuckArray.length > 0) {
    function rightChoicesNumber() {
      let arrayRightChoices = playerLuckArray.filter(function (currentValue) {
        return currentValue === true;
      });

      return arrayRightChoices.length;
    }

    playerLuck = rightChoicesNumber() / playerLuckArray.length;
  } 
}

function saveDataInLocalStorage() {
  localStorage.setItem("playerMoneyLocalStorage", playerMoney);
  localStorage.setItem("playerLuckArrayLocalStorage", playerLuckArray);
  localStorage.setItem("playerNameLocalStorage", playerName);
}

function updateVariables(argumentoPlayerLuckArray, argumentoPlayerMoney) {
  playerMoney = argumentoPlayerMoney;
  playerLuckArray = argumentoPlayerLuckArray;
  saveDataInLocalStorage();
}

function resetPlayerData() {
  localStorage.setItem("playerMoneyLocalStorage", undefined);
  localStorage.setItem("playerLuckArrayLocalStorage", []);
  localStorage.setItem("playerNameLocalStorage", "player");
  playerMoney = 500;
  playerName = "Player";
  playerLuckArray = [];
  location.reload();
}

function headerDataInsert() {
  playerMoneySpan.innerText = `\u20AC ${parseFloat(playerMoney).toFixed(2)}`;
  playerLuckSpan.innerText = `${parseFloat(playerLuck * 100).toFixed(0)}%`;
  playerNameSpan.innerText = playerName;
}
headerDataInsert();
console.log(playerLuckArray);
export { playerName, playerLuck, playerLuckArray, playerMoney, checkLocalStorage, playerCheckLuck, updateVariables, headerDataInsert, resetPlayerData };
