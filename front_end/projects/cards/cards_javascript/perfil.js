let playerName = "Eliel Denisovas";
let playerNameLocalStorage = localStorage.getItem("playerNameLocalStorage");
let playerLuck = 0.5;
let playerLuckLocalStorage = parseFloat(localStorage.getItem("playerLuckLocalStorage"));
let playerLuckArray = [];
let playerLuckArrayLocalStorage = localStorage.getItem("playerLuckArrayLocalStorage");
let playerMoney = 500;
let playerMoneyLocalStorage = parseFloat(localStorage.getItem("playerMoneyLocalStorage"));

function playerCheckLuck() {
    function rightChoicesNumber() {
      let arrayRightChoices = playerLuckArray.filter(function (currentValue) {
        return currentValue === true;
      });
  
      return arrayRightChoices.length;
    }
  
    playerLuck = rightChoicesNumber() / playerLuckArray.length;
  }
  
  function saveDataInLocalStorage() {
     localStorage.setItem("playerMoneyLocalStorage", playerMoney);
     localStorage.setItem("playerLuckLocalStorage", playerLuck);
     localStorage.setItem("playerLuckArrayLocalStorage", playerLuckArray);
     localStorage.setItem("playerNameLocalStorage", playerName);
   }

  function updateVariables (argumentoPlayerLuck, argumentoPlayerLuckArray, argumentoPlayerMoney) {
    playerLuck = argumentoPlayerLuck;
    playerLuckArray = argumentoPlayerLuckArray;
    playerMoney = argumentoPlayerMoney;
    saveDataInLocalStorage()
  };

function checkLocalStorage() {
    if (playerMoneyLocalStorage) {
      playerMoney = parseFloat(playerMoneyLocalStorage).toFixed(2);
    }
    if (playerLuckLocalStorage) {
      playerLuck = parseFloat(playerLuckLocalStorage).toFixed(2);
    }
    if (playerNameLocalStorage) {
      playerName = playerNameLocalStorage;
    }
    if (playerLuckArrayLocalStorage) {
        playerLuckArray = playerLuckArrayLocalStorage;
    }
  }
  checkLocalStorage();
  function resetPlayerData() {
    localStorage.setItem("playerMoneyLocalStorage", undefined);
    localStorage.setItem("playerLuckLocalStorage", 0.5);
    localStorage.setItem("playerLuckArrayLocalStorage", []);
    localStorage.setItem("playerNameLocalStorage", "player");
    playerMoney = 500;
    playerLuck = 0.5;
    playerName = "Player";
    playerLuckArray = [];
    location.reload();
  }

  export {playerName, playerLuck, playerLuckArray, playerMoney, playerCheckLuck, checkLocalStorage, updateVariables, resetPlayerData};