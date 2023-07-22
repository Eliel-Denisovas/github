
let playerName = "Eliel Denisovas";

let playerLuck = 0.5;
let playerLuckArray = [];

let playerMoney = 500;

const playerNameSpan = document.getElementById("playerNameSpan");
const playerLuckSpan = document.getElementById("playerLuckSpan");
const playerMoneySpan = document.getElementById("playerMoneySpan");

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
// Função para salvar o array no Local Storage
 function saveArrayToLocalStorage() {
  localStorage.setItem('playerLuckArray', JSON.stringify(playerLuckArray));
  localStorage.setItem('playerMoney', JSON.stringify(playerMoney));
}


// Função para recuperar o array do Local Storage
 function retrieveArrayFromLocalStorage() {

  const storedArray = localStorage.getItem('playerLuckArray');
  playerLuckArray = storedArray ? JSON.parse(storedArray) : [];
  
  const storedplayerMoney = localStorage.getItem('playerMoney');
  playerMoney = storedplayerMoney ? JSON.parse(storedplayerMoney) : 500;
}

// Chama a função para recuperar o array do Local Storage
retrieveArrayFromLocalStorage();


/* function saveDataInLocalStorage() {
  localStorage.setItem("playerMoneyLocalStorage", playerMoney);
  localStorage.setItem('playerLuckArray', JSON.stringify(playerLuckArray));
} */

/* function updateVariables(argumentoPlayerLuckArray, argumentoPlayerMoney) {
  playerMoney = argumentoPlayerMoney;
  playerLuckArray = argumentoPlayerLuckArray;
  saveDataInLocalStorage();
} */

function resetPlayerData() {
  localStorage.setItem("playerMoney", undefined);
  localStorage.setItem("playerLuckArray", []);
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
export { playerName, playerLuck, playerLuckArray, playerMoney, playerCheckLuck, saveArrayToLocalStorage, headerDataInsert, resetPlayerData };
