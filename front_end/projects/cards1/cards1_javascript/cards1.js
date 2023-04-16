const cardLeft = document.getElementById("cardLeft");
const cardRight = document.getElementById("cardRight");

const numberFractionDisplay = document.getElementById("numberFraction");
const divisorFractionDisplay = document.getElementById("divisorFraction");

const numberPercentualDisplay = document.getElementById("numberPercentual");

const moneyDisplay = document.getElementById("money");

const previousStatusDisplay = document.getElementById("previousStatus");
let PointsDisplayContainer = document.getElementById("PointsDisplayContainer");

//const startButton = document.getElementById("startButton");

/* 
  startButton.addEventListener("click", function () {
  generateComputerCardsArray();
  });
*/
let currentRound = 0;
numberFractionDisplay.textContent = (currentRound + 1).toFixed(0);

let computerCardsArray = [];

let startMoney = parseFloat(prompt("Type a value", ""));
let currentMoney = parseFloat(startMoney);
let rounds = parseInt(
  prompt("TYPE HOW MANY ROUDS YOU WANT TO PLAY IN THIS MATCH", "")
);

let roundValue = parseFloat(startMoney / rounds);

let computerCard;
let userCard;
let userCardsArray = [];
let roundStatus;
let arrayLuck = [];
let luck = 0.5;

(function generateComputerCardsArray() {
  let i = 0;
  while (i < rounds) {
    computerCard = Math.floor(Math.random() * 2);
    computerCardsArray.push(computerCard);
    i++;
  }
})();

console.log(computerCardsArray);

document.querySelector(".page").classList.remove("disableElement");

function addCheckPoint() {
  const checkPoint = document.createElement("div");
  PointsDisplayContainer.appendChild(checkPoint);
  checkPoint.classList.add("checkPoint");
  checkPoint.classList.add("glass");
}

for (let i = 0; i < rounds; i++) {
  addCheckPoint();
}

PointsDisplayContainer.getElementsByClassName("checkPoint")[0].classList.add(
  "choice"
);

function checkCards(userCard, computerCard) {
  if (userCard === computerCard) {
    roundStatus = true;
  } else {
    roundStatus = false;
  }
  arrayLuck.push(roundStatus);
}

function checkLuck() {
  function rightChoicesNumber() {
    let arrayRightChoices = arrayLuck.filter(function (currentValue) {
      return currentValue === true;
    });

    return arrayRightChoices.length;
  }

  luck = rightChoicesNumber() / arrayLuck.length;
}

function checkMoney(roundStatus) {
  if (roundStatus) {
    currentMoney += roundValue;
  } else {
    currentMoney -= roundValue;
  }
}

function insertData() {
  if (currentRound > 0) {
    setTimeout(() => {
      document.getElementById("roundSound").play();
      document.getElementById("roundSound").volume = 0.5;

      document.getElementById("numberFraction").classList.add("textScaleUp");
      document.getElementById("numberFraction").classList.add("shadowText2");
      setTimeout(() => {
        document.getElementById("numberFraction").classList.remove("textScaleUp");
        document.getElementById("numberFraction").classList.remove("shadowText2");
      }, 1001);

      document.getElementById("numberFraction").classList.add("textScaleUp")
      numberFractionDisplay.textContent = (currentRound + 1).toFixed(0);
    }, 1000);
  }

  divisorFractionDisplay.textContent = rounds.toFixed(0);
  numberPercentualDisplay.textContent = luck.toFixed(2);
  moneyDisplay.textContent = currentMoney.toFixed(2);
  previousStatusDisplay.textContent = `Round Value | ${roundValue.toFixed(2)}`;
}

insertData();

function choice() {
  document.getElementById("containerCards").classList.add("choice");
}

function rejectedCardLeft() {
  document.getElementById("cardLeft").classList.add("rejectedCardLeft");
  document.getElementById("cardLeft").classList.remove("glassHover");
}

function rejectedCardRight() {
  document.getElementById("cardRight").classList.add("rejectedCardRight");
  document.getElementById("cardRight").classList.remove("glassHover");
}

function acceptedCardLeft() {
  document.getElementById("cardLeft").classList.add("acceptedCardLeft");
  document.getElementById("cardLeft").classList.remove("glassHover");
}

function acceptedCardRight() {
  document.getElementById("cardRight").classList.add("acceptedCardRight");
  document.getElementById("cardRight").classList.remove("glassHover");
}

function cleanClasses() {
  document.getElementById("containerCards").classList.remove("choice");
  document.getElementById("containerCards").classList.remove("correctChoice");
  document.getElementById("containerCards").classList.remove("wrongChoice");

  document.getElementById("cardLeft").classList.remove("rejectedCardLeft");
  document.getElementById("cardRight").classList.remove("rejectedCardRight");

  document.getElementById("cardLeft").classList.remove("acceptedCardLeft");
  document.getElementById("cardRight").classList.remove("acceptedCardRight");

  document
    .getElementById("cardRight")
    .classList.remove("acceptedCardRightBack");
  document.getElementById("cardLeft").classList.remove("acceptedCardLeftBack");

  document
    .getElementById("cardRight")
    .classList.remove("rejectedCardRightBack");
  document.getElementById("cardLeft").classList.remove("rejectedCardLeftBack");

  document.getElementById("cardLeft").classList.remove("rejectedCardLeftTurn");
  document
    .getElementById("cardRight")
    .classList.remove("rejectedCardRightTurn");

  document.getElementById("cardLeft").classList.remove("rejectedCardLeftTurn2");
  document
    .getElementById("cardRight")
    .classList.remove("rejectedCardRightTurn2");

  document.getElementById("containerCards").classList.add("glass");
  document.getElementById("cardRight").classList.add("glass");
  document.getElementById("cardLeft").classList.add("glass");

  if (computerCard === undefined) {
    document.getElementById("cardLeft").classList.remove("glassHover");
    document.getElementById("cardRight").classList.remove("glassHover");
    document.getElementById("cardLeftImage").src =
      "../images/Playing Cards/PNG-cards-1.3/red_joker.png";
    document.getElementById("cardRightImage").src =
      "../images/Playing Cards/PNG-cards-1.3/red_joker.png";
  } else {
    document.getElementById("cardLeftImage").src =
      "../images/Playing Cards/PNG-cards-1.3/king_of_clubs2.png";
    document.getElementById("cardRightImage").src =
      "../images/Playing Cards/PNG-cards-1.3/queen_of_clubs2.png";
    document.getElementById("cardLeft").classList.add("glassHover");
    document.getElementById("cardRight").classList.add("glassHover");
  }
}

function disableCards() {
  document.getElementById("cardRight").classList.add("cancelEvent");
  document.getElementById("cardLeft").classList.add("cancelEvent");
}

function ableCards() {
  document.getElementById("cardRight").classList.remove("cancelEvent");
  document.getElementById("cardLeft").classList.remove("cancelEvent");
}

function setCheckPoints() {
  let checkPointsValue = currentRound;
  let functionTime = 3800;

  setTimeout(() => {
    PointsDisplayContainer.getElementsByClassName("checkPoint")[
      checkPointsValue
    ].classList.remove("choice");
  }, functionTime);

  if (roundStatus) {
    setTimeout(() => {
      PointsDisplayContainer.getElementsByClassName("checkPoint")[
        checkPointsValue
      ].classList.add("greenLightBox");
    }, functionTime);
  } else {
    setTimeout(() => {
      PointsDisplayContainer.getElementsByClassName("checkPoint")[
        checkPointsValue
      ].classList.add("redLightBox");
    }, functionTime);
  }

  if (checkPointsValue <= rounds - 2) {
    setTimeout(() => {
      PointsDisplayContainer.getElementsByClassName("checkPoint")[
        checkPointsValue + 1
      ].classList.add("choice");
    }, functionTime);
  }
}

function roundFunctions() {
  disableCards();
  if (currentRound >= rounds - 1) {
    computerCard = computerCardsArray[currentRound];
    checkCards(userCard, computerCard);
    checkLuck();
    checkMoney(roundStatus);
    choice();
    setTimeout(() => {
      insertData();
    }, 3000);
    setCheckPoints();
    return;
  } else {
    computerCard = computerCardsArray[currentRound];
    checkCards(userCard, computerCard);
    checkLuck();
    checkMoney(roundStatus);
    choice();
    setTimeout(() => {
      insertData();
    }, 3000);
    setCheckPoints();
    setTimeout(() => {
      ableCards();
    }, 5000);
    currentRound += 1;
  }
}

function cardLeftEfect() {
  document.getElementById("choiceSound").play();
  rejectedCardRight();
  acceptedCardLeft();

  setTimeout(() => {
    document.getElementById("cardLeft").classList.remove("acceptedCardLeft");
    document.getElementById("cardLeft").classList.add("acceptedCardLeftBack");
  }, 500);

  setTimeout(() => {
    document.getElementById("cardRight").classList.remove("rejectedCardRight");
    document.getElementById("cardRightImage").src =
      "../images/Playing Cards/PNG-cards-1.3/red_joker.png";
    document.getElementById("cardRight").classList.add("rejectedCardRightBack");
  }, 500);

  setTimeout(() => {
    document.getElementById("cardRight").classList.add("rejectedCardRightTurn");
  }, 800);

  setTimeout(() => {
    if (computerCard === 0) {
      document.getElementById("cardRightImage").src =
        "../images/Playing Cards/PNG-cards-1.3/king_of_clubs2.png";
    } else if (computerCard === 1) {
      document.getElementById("cardRightImage").src =
        "../images/Playing Cards/PNG-cards-1.3/queen_of_clubs2.png";
    } else {
      document.getElementById("cardRightImage").src =
        "../images/Playing Cards/PNG-cards-1.3/2_of_clubs.png";
    }

    document
      .getElementById("cardRight")
      .classList.add("rejectedCardRightTurn2");
  }, 1500);

  setTimeout(() => {
    document.getElementById("containerCards").classList.remove("choice");

    if (roundStatus) {
      document.getElementById("containerCards").classList.add("correctChoice");
      document.getElementById("choiceSound").pause();
      document.getElementById("correctChoiceSound").play();

      document.getElementById("luckWord").classList.add("textScaleUp");
      document.getElementById("luckWord").classList.add("greenLightText");
      setTimeout(() => {
        document.getElementById("luckWord").classList.remove("textScaleUp");
        document.getElementById("luckWord").classList.remove("greenLightText");
      }, 3000);

    } else {
      document.getElementById("containerCards").classList.add("wrongChoice");
      document.getElementById("choiceSound").pause();
      document.getElementById("wrongChoiceSound").play();
    }
  }, 1500);
}

function cardRightEfect() {
  document.getElementById("choiceSound").play();
  rejectedCardLeft();
  acceptedCardRight();

  setTimeout(() => {
    document.getElementById("cardRight").classList.remove("acceptedCardRight");
    document.getElementById("cardRight").classList.add("acceptedCardRightBack");
  }, 500);

  setTimeout(() => {
    document.getElementById("cardLeft").classList.remove("rejectedCardLeft");
    document.getElementById("cardLeftImage").src =
      "../images/Playing Cards/PNG-cards-1.3/red_joker.png";
    document.getElementById("cardLeft").classList.add("rejectedCardLeftBack");
  }, 500);

  setTimeout(() => {
    document.getElementById("cardLeft").classList.add("rejectedCardLeftTurn");
  }, 800);

  setTimeout(() => {
    if (computerCard === 0) {
      document.getElementById("cardLeftImage").src =
        "../images/Playing Cards/PNG-cards-1.3/king_of_clubs2.png";
    } else if (computerCard === 1) {
      document.getElementById("cardLeftImage").src =
        "../images/Playing Cards/PNG-cards-1.3/queen_of_clubs2.png";
    } else {
      document.getElementById("cardLeftImage").src =
        "../images/Playing Cards/PNG-cards-1.3/2_of_clubs.png";
      document.getElementById("cardRightImage").src =
        "../images/Playing Cards/PNG-cards-1.3/2_of_clubs.png";
    }

    document.getElementById("cardLeft").classList.add("rejectedCardLeftTurn2");
  }, 1500);

  setTimeout(() => {
    document.getElementById("containerCards").classList.remove("choice");

    if (roundStatus) {
      document.getElementById("containerCards").classList.add("correctChoice");
      document.getElementById("choiceSound").pause();
      document.getElementById("correctChoiceSound").play();
      document.getElementById("luckWord").classList.add("textScaleUp");
      document.getElementById("luckWord").classList.add("greenLightText");
      setTimeout(() => {
        document.getElementById("luckWord").classList.remove("textScaleUp");
        document.getElementById("luckWord").classList.remove("greenLightText");
      }, 1001);
    } else {
      document.getElementById("containerCards").classList.add("wrongChoice");
      document.getElementById("choiceSound").pause();
      document.getElementById("wrongChoiceSound").play();
    }
  }, 1500);
}

cardLeft.addEventListener("click", function () {
  userCard = 0;
  userCardsArray.push(userCard);
  roundFunctions();
  cardLeftEfect();
  setTimeout(() => {
    document.getElementById("choiceSound").play();
  }, 2500);
  setTimeout(() => {
    cleanClasses();
  }, 3000);
});

cardRight.addEventListener("click", function () {
  userCard = 1;
  userCardsArray.push(userCard);
  roundFunctions();
  cardRightEfect();
  setTimeout(() => {
    document.getElementById("choiceSound").play();
  }, 2500);
  setTimeout(() => {
    cleanClasses();
  }, 3000);
});
