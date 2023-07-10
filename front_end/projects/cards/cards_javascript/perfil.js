let playerName = "Eliel Denisovas";
let playerNameLocalStorage = localStorage.getItem("playerNameLocalStorage");
let playerLuck;
let playerLuckArray = [];
let playerLuckArrayLocalStorage = localStorage.getItem("playerLuckArrayLocalStorage");
let playerMoney = 500;
let playerMoneyLocalStorage = parseFloat(localStorage.getItem("playerMoneyLocalStorage"));

function playerCheckLuck() {
  if (playerLuckArray.length > 0) {
    function rightChoicesNumber() {
      let arrayRightChoices = playerLuckArray.filter(function (currentValue) {
        return currentValue === true;
      });

      return arrayRightChoices.length;
    }

    playerLuck = rightChoicesNumber() / playerLuckArray.length;
  } else {
    playerLuck = 0.5;
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
  playerCheckLuck();
  saveDataInLocalStorage();
  console.log("playerLuck", playerLuck);
}

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
playerCheckLuck();
function resetPlayerData() {
  localStorage.setItem("playerMoneyLocalStorage", undefined);
  localStorage.setItem("playerLuckArrayLocalStorage", []);
  localStorage.setItem("playerNameLocalStorage", "player");
  playerMoney = 500;
  playerName = "Player";
  playerLuckArray = [];
  location.reload();
}

export { playerName, playerLuck, playerLuckArray, playerMoney, checkLocalStorage, updateVariables, resetPlayerData };
