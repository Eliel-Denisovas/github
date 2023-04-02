const cardLeft = document.getElementById("cardLeft");
const cardRight = document.getElementById("cardRight");

const numberFractionDisplay = document.getElementById("numberFraction");
const divisorFractionDisplay = document.getElementById("divisorFraction");
const numberPercentualDisplay = document.getElementById("numberPercentual");
const moneyDisplay = document.getElementById("money");
const previousStatusDisplay = document.getElementById("previousStatus");

//const startButton = document.getElementById("startButton");

/* 
  startButton.addEventListener("click", function () {
  generateComputerCardsArray();
  });
*/

let computerCardsArray = [];
let startMoney = Number(prompt("TYPE A VALUE")).toFixed(2);
let currentMoney = startMoney;
let rounds = Number(prompt("TYPE HOW MANY ROUDS YOU WANT TO PLAY IN THIS MATCH")).toFixed(0);
let roundValue = (currentMoney / rounds).toFixed(2);
let currentRound = 0;
let computerCard = 0;
let userCard = 0;
let userCardsArray = [];
let roundStatus = true;
let arrayLuck = [];
let luck = 0.75;

(function generateComputerCardsArray() {
  let i = 0;
  while (i < rounds) {
    computerCard = Math.floor(Math.random() * 2);
    computerCardsArray.push(computerCard);
    i++;
  }
  console.log(computerCardsArray)
})();

function checkCards(userCard, computerCard) {
  if (userCard === computerCard) {
    roundStatus = true;
  } else {
    roundStatus = false;
  }
}

function checkRound() {
  currentRound += 1;
}

function checkLuck() {
  function rightChoicesNumber() {
    let arrayRightChoices = arrayLuck.filter(function (currentValue) {
      return currentValue === 1;
    });

    return arrayRightChoices.length;
  }

  let checkLuck = rightChoicesNumber() / arrayLuck.length;
  return checkLuck;
}

function checkMoney(roundStatus) {
  if (roundStatus) {
    currentMoney += roundValue;
  } else {
    currentMoney -= roundValue;
  }
}

function insertData() {
  numberFractionDisplay.textContent = currentRound;
  divisorFractionDisplay.textContent = rounds;
  numberPercentualDisplay.textContent = luck;
  moneyDisplay.textContent = currentMoney;
  previousStatusDisplay.textContent = `Round Value | ${roundValue}`;
}

insertData();
function choice() {
  let element = document.getElementById("containerCards");
  element.classList.add("choice");
}

function rejectedCardLeft() {
  let element = document.getElementById("cardLeft");
  element.classList.add("rejectedCardLeft");

  let element2 = document.getElementById("cardLeft");
  element2.classList.remove("glassHover");
}

function rejectedCardRight() {
  let element = document.getElementById("cardRight");
  element.classList.add("rejectedCardRight");

  let element2 = document.getElementById("cardRight");
  element2.classList.remove("glassHover");
}

function acceptedCardLeft() {
  let element = document.getElementById("cardLeft");
  element.classList.add("acceptedCardLeft");

  let element2 = document.getElementById("cardLeft");
  element2.classList.remove("glassHover");
}

function acceptedCardRight() {
  let element = document.getElementById("cardRight");
  element.classList.add("acceptedCardRight");

  let element3 = document.getElementById("cardRight");
  element3.classList.remove("glassHover");
}

function roundFunctions() {

  checkCards(userCardsArray[currentRound], computerCardsArray[currentRound]);
  checkRound();
  checkLuck();
  checkMoney(roundStatus);
  checkLuck();
  insertData();
  currentRound += 1;
}
roundFunctions();

cardRight.addEventListener("click", function () {
  userCard = 1;
  userCardsArray.push(userCard);
  console.log(userCardsArray);
  console.log(computerCardsArray);
  choice();
  rejectedCardLeft();
  acceptedCardRight();

  setTimeout(() => {
    let element = document.getElementById("cardRight");
    element.classList.remove("acceptedCardRight");
    element.classList.add("acceptedCardRightBack");
  }, 500);

  setTimeout(() => {
    let element = document.getElementById("cardLeft");
    element.classList.remove("rejectedCardLeft");
    document.getElementById("cardLeftImage").src =
      "../images/Playing Cards/PNG-cards-1.3/red_joker.png";
    element.classList.add("rejectedCardLeftBack");
  }, 500);

  setTimeout(() => {
    let element = document.getElementById("cardLeft");

    element.classList.add("rejectedCardLeftTurn");
  }, 800);

  setTimeout(() => {
    document.getElementById("cardLeftImage").src =
      "../images/Playing Cards/PNG-cards-1.3/king_of_clubs2.png";

    let element = document.getElementById("cardLeft");
    element.classList.add("rejectedCardLeftTurn2");
  }, 1350);

  setTimeout(() => {
    document.getElementById("containerCards").classList.remove("choice");
    if (false) {
      document.getElementById("containerCards").classList.add("correctChoice");
    } else {
      document.getElementById("containerCards").classList.add("wrongChoice");
    }
  }, 1500);
});

cardLeft.addEventListener("click", function () {
  userCard = 0;
  userCardsArray.push(userCard);
  console.log(userCardsArray);
  choice();
  rejectedCardRight();
  acceptedCardLeft();

  setTimeout(() => {
    let element = document.getElementById("cardLeft");
    element.classList.remove("acceptedCardLeft");
    element.classList.add("acceptedCardLeftBack");
  }, 500);

  setTimeout(() => {
    let element = document.getElementById("cardRight");
    element.classList.remove("rejectedCardRight");
    document.getElementById("cardRightImage").src =
      "../images/Playing Cards/PNG-cards-1.3/red_joker.png";
    element.classList.add("rejectedCardRightBack");
  }, 500);

  setTimeout(() => {
    let element = document.getElementById("cardRight");

    element.classList.add("rejectedCardRightTurn");
  }, 800);

  setTimeout(() => {
    document.getElementById("cardRightImage").src =
      "../images/Playing Cards/PNG-cards-1.3/king_of_clubs2.png";

    let element = document.getElementById("cardRight");
    element.classList.add("rejectedCardRightTurn2");
  }, 1350);

  setTimeout(() => {
    document.getElementById("containerCards").classList.remove("choice");
    if (true) {
      document.getElementById("containerCards").classList.add("correctChoice");
    } else {
      document.getElementById("containerCards").classList.add("wrongChoice");
    }
  }, 1400);
});
