const cardLeft = document.getElementById("cardLeft");
const cardRight = document.getElementById("cardRight");
const numberFractionDisplay = document.getElementById("numberFraction");
const divisorFractionDisplay = document.getElementById("divisorFraction");
const numberPercentualDisplay = document.getElementById("numberPercentual");
const moneyDisplay = document.getElementById("money");
const previousStatusDisplay = document.getElementById("previousStatus");
const PointsDisplayContainer = document.getElementById("PointsDisplayContainer");
const containerCards = document.getElementById("containerCards");
const roundSound = document.getElementById("roundSound");
const cardLeftImage = document.getElementById("cardLeftImage");
const cardRightImage = document.getElementById("cardRightImage");
const choiceSound = document.getElementById("choiceSound");
const correctChoiceSound = document.getElementById("correctChoiceSound");
const luckWord = document.getElementById("luckWord");
const wrongChoiceSound = document.getElementById("wrongChoiceSound");
const time05 = 500;
const time08 = 800
const time1 = 1000;
const time15 = 1500;
const time2 = 2000;
const time25 = 2500;
const time3 = 3000;
const time38 = 3800;
const time4 = 4000;
const time5 = 5000;

let currentRound = 0;
numberFractionDisplay.textContent = (currentRound + 1).toFixed(0);
console.log(typeof numberFractionDisplay);
let computerCardsArray = [];
let startMoney = parseFloat(prompt("Bet amount", ""));
let currentMoney = parseFloat(startMoney);
let rounds = parseInt(
  prompt("Rounds", "")
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
      roundSound.play();
      roundSound.volume = 0.5;

      numberFractionDisplay.classList.add("textScaleUp");
      numberFractionDisplay.classList.add("shadowText2");
      setTimeout(() => {
        document
          .getElementById("numberFraction")
          .classList.remove("textScaleUp");
        document
          .getElementById("numberFraction")
          .classList.remove("shadowText2");
      }, time1);

      numberFractionDisplay.classList.add("textScaleUp");
      numberFractionDisplay.textContent = (currentRound + 1).toFixed(0);
    }, time1);
  }

  divisorFractionDisplay.textContent = rounds.toFixed(0);
  numberPercentualDisplay.textContent = luck.toFixed(2);
  moneyDisplay.textContent = currentMoney.toFixed(2);
  previousStatusDisplay.textContent = `Round Value | ${roundValue.toFixed(2)}`;
}

insertData();

function choice() {
  containerCards.classList.add("choice");
}

function rejectedCardLeft() {
  cardLeft.classList.add("rejectedCardLeft");
  cardLeft.classList.remove("glass2Hover");
}

function rejectedCardRight() {
  cardRight.classList.add("rejectedCardRight");
  cardRight.classList.remove("glassHover");
}

function acceptedCardLeft() {
  cardLeft.classList.add("acceptedCardLeft");
  cardLeft.classList.remove("glassHover");
}

function acceptedCardRight() {
  cardRight.classList.add("acceptedCardRight");
  cardRight.classList.remove("glassHover");
}

function cleanClasses() {
  containerCards.classList.remove("choice");
  containerCards.classList.remove("correctChoice");
  containerCards.classList.remove("wrongChoice");

  cardLeft.classList.remove("rejectedCardLeft");
  cardRight.classList.remove("rejectedCardRight");

  cardLeft.classList.remove("acceptedCardLeft");
  cardRight.classList.remove("acceptedCardRight");

  document
    .getElementById("cardRight")
    .classList.remove("acceptedCardRightBack");
  cardLeft.classList.remove("acceptedCardLeftBack");

  document
    .getElementById("cardRight")
    .classList.remove("rejectedCardRightBack");
  cardLeft.classList.remove("rejectedCardLeftBack");

  cardLeft.classList.remove("rejectedCardLeftTurn");
  document
    .getElementById("cardRight")
    .classList.remove("rejectedCardRightTurn");

  cardLeft.classList.remove("rejectedCardLeftTurn2");
  document
    .getElementById("cardRight")
    .classList.remove("rejectedCardRightTurn2");

  containerCards.classList.add("glass");
  cardRight.classList.add("glass");
  cardLeft.classList.add("glass");

  if (computerCard === undefined) {
    cardLeft.classList.remove("glassHover");
    cardRight.classList.remove("glassHover");
    cardLeftImage.src =
      "../images/Playing Cards/PNG-cards-1.3/red_joker.png";
    cardRightImage.src =
      "../images/Playing Cards/PNG-cards-1.3/red_joker.png";
  } else {
    cardLeftImage.src =
      "../images/Playing Cards/PNG-cards-1.3/king_of_clubs2.png";
    cardRightImage.src =
      "../images/Playing Cards/PNG-cards-1.3/queen_of_clubs2.png";
    cardLeft.classList.add("glassHover");
    cardRight.classList.add("glassHover");
  }
}

function disableCards() {
  cardRight.classList.add("cancelEvent");
  cardLeft.classList.add("cancelEvent");
}

function ableCards() {
  cardRight.classList.remove("cancelEvent");
  cardLeft.classList.remove("cancelEvent");
}

function setCheckPoints() {
  let checkPointsValue = currentRound;
  let functionTime = time38;

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

function createMatchButton() {
  const matchButtonDivParent = document.getElementById("fundo");

  const matchButtonDiv = document.createElement("div");
  const matchButtonYes = document.createElement("div");
  const matchButtonNo = document.createElement("div");

  const matchButtonDivText = document.createTextNode("Play again");
  const matchButtonYesText = document.createTextNode("Yes");
  const matchButtonNoText = document.createTextNode("No");

  matchButtonNo.appendChild(matchButtonNoText);
  matchButtonYes.appendChild(matchButtonYesText);

  matchButtonDiv.appendChild(matchButtonDivText);

  matchButtonDiv.appendChild(matchButtonYes);
  matchButtonDiv.appendChild(matchButtonNo);

  matchButtonDivParent.appendChild(matchButtonDiv);

  matchButtonDiv.setAttribute("id", "macthButtonDiv");
  matchButtonNo.setAttribute("id", "noMatchButton");
  matchButtonYes.setAttribute("id", "yesMatchButton");

  matchButtonDiv.classList.add("displayFlex");
  matchButtonDiv.classList.add("glass2");
  matchButtonDiv.classList.add("shadowText");

  matchButtonYes.classList.add("glass2");
  matchButtonYes.classList.add("shadowText");
  matchButtonYes.classList.add("matchButton");
  matchButtonYes.classList.add("glassHover");

  matchButtonNo.classList.add("glass2");
  matchButtonNo.classList.add("shadowText");
  matchButtonNo.classList.add("matchButton");
  matchButtonNo.classList.add("glassHover");

  matchButtonYes.addEventListener("click", function () {

    matchButtonNo.removeChild(matchButtonNoText);
    matchButtonYes.removeChild(matchButtonYesText);

    matchButtonDiv.removeChild(matchButtonDivText);

    matchButtonDiv.removeChild(matchButtonNo);
    matchButtonDiv.removeChild(matchButtonYes);

    matchButtonDivParent.removeChild(matchButtonDiv);

    matchButtonDiv.classList.remove("displayFlex");
    matchButtonDiv.classList.remove("glass2");
    matchButtonDiv.classList.remove("shadowText");

    matchButtonYes.classList.remove("glass2");
    matchButtonYes.classList.remove("shadowText");
    matchButtonYes.classList.remove("matchButton");
    matchButtonYes.classList.remove("glassHover");

    matchButtonNo.classList.remove("glass2");
    matchButtonNo.classList.remove("shadowText");
    matchButtonNo.classList.remove("matchButton");
    matchButtonNo.classList.remove("glassHover");
    window.location.reload(true);
  });

  matchButtonNo.addEventListener("click", function () {

    matchButtonNo.removeChild(matchButtonNoText);
    matchButtonYes.removeChild(matchButtonYesText);

    matchButtonDiv.removeChild(matchButtonDivText);

    matchButtonDiv.removeChild(matchButtonNo);
    matchButtonDiv.removeChild(matchButtonYes);

    matchButtonDivParent.removeChild(matchButtonDiv);

    matchButtonDiv.classList.remove("displayFlex");
    matchButtonDiv.classList.remove("glass2");
    matchButtonDiv.classList.remove("shadowText");

    matchButtonYes.classList.remove("glass2");
    matchButtonYes.classList.remove("shadowText");
    matchButtonYes.classList.remove("matchButton");
    matchButtonYes.classList.remove("glassHover");

    matchButtonNo.classList.remove("glass2");
    matchButtonNo.classList.remove("shadowText");
    matchButtonNo.classList.remove("matchButton");
    matchButtonNo.classList.remove("glassHover");
  });
}

function roundFunctions() {
  disableCards();
  computerCard = computerCardsArray[currentRound];
  checkCards(userCard, computerCard);
  checkLuck();
  checkMoney(roundStatus);
  choice();
  setTimeout(() => {
    insertData();
  }, time3);
  setCheckPoints();
  if (currentRound >= rounds - 1) {
    setTimeout(() => {
      createMatchButton();
    }, time5);
    return;
  } else {
    setTimeout(() => {
      ableCards();
    }, time5);
    currentRound += 1;
  }
}

function cardLeftEfect() {
  choiceSound.play();
  rejectedCardRight();
  acceptedCardLeft();

  setTimeout(() => {
    cardLeft.classList.add("acceptedCardLeftBack");
  }, time05);

  setTimeout(() => {
    cardRight.classList.remove("rejectedCardRight");
    cardRightImage.src =
      "../images/Playing Cards/PNG-cards-1.3/red_joker.png";
    cardRight.classList.add("rejectedCardRightBack");
  }, time05);

  setTimeout(() => {
    cardRight.classList.add("rejectedCardRightTurn");
  }, time08);

  setTimeout(() => {
    if (computerCard === 0) {
      cardRightImage.src =
        "../images/Playing Cards/PNG-cards-1.3/king_of_clubs2.png";
    } else if (computerCard === 1) {
      cardRightImage.src =
        "../images/Playing Cards/PNG-cards-1.3/queen_of_clubs2.png";
    } else {
      cardRightImage.src =
        "../images/Playing Cards/PNG-cards-1.3/2_of_clubs.png";
    }

    document
      .getElementById("cardRight")
      .classList.add("rejectedCardRightTurn2");
  }, time15);

  setTimeout(() => {
    containerCards.classList.remove("choice");

    if (roundStatus) {
      containerCards.classList.add("correctChoice");
      choiceSound.pause();
      correctChoiceSound.play();

      luckWord.classList.add("textScaleUp");
      luckWord.classList.add("greenLightText");
      setTimeout(() => {
        luckWord.classList.remove("textScaleUp");
        luckWord.classList.remove("greenLightText");
      }, time3);
    } else {
      containerCards.classList.add("wrongChoice");
      choiceSound.pause();
      wrongChoiceSound.play();
    }
  }, time15);
}

function cardRightEfect() {
  choiceSound.play();
  rejectedCardLeft();
  acceptedCardRight();

  setTimeout(() => {
    cardRight.classList.remove("acceptedCardRight");
    cardRight.classList.add("acceptedCardRightBack");
  }, time05);

  setTimeout(() => {
    cardLeft.classList.remove("rejectedCardLeft");
    cardLeftImage.src =
      "../images/Playing Cards/PNG-cards-1.3/red_joker.png";
    cardLeft.classList.add("rejectedCardLeftBack");
  }, time05);

  setTimeout(() => {
    cardLeft.classList.add("rejectedCardLeftTurn");
  }, time08);

  setTimeout(() => {
    if (computerCard === 0) {
      cardLeftImage.src =
        "../images/Playing Cards/PNG-cards-1.3/king_of_clubs2.png";
    } else if (computerCard === 1) {
      cardLeftImage.src =
        "../images/Playing Cards/PNG-cards-1.3/queen_of_clubs2.png";
    } else {
      cardLeftImage.src =
        "../images/Playing Cards/PNG-cards-1.3/2_of_clubs.png";
      cardRightImage.src =
        "../images/Playing Cards/PNG-cards-1.3/2_of_clubs.png";
    }

    cardLeft.classList.add("rejectedCardLeftTurn2");
  }, time15);

  setTimeout(() => {
    containerCards.classList.remove("choice");

    if (roundStatus) {
      containerCards.classList.add("correctChoice");
      choiceSound.pause();
      correctChoiceSound.play();
      luckWord.classList.add("textScaleUp");
      luckWord.classList.add("greenLightText");
      setTimeout(() => {
        luckWord.classList.remove("textScaleUp");
        luckWord.classList.remove("greenLightText");
      }, time3);
    } else {
      containerCards.classList.add("wrongChoice");
      choiceSound.pause();
      wrongChoiceSound.play();
    }
  }, time15);
}

cardLeft.addEventListener("click", function () {
  userCard = 0;
  userCardsArray.push(userCard);
  roundFunctions();
  cardLeftEfect();
  setTimeout(() => {
    choiceSound.play();
  }, time25);
  setTimeout(() => {
    cleanClasses();
  }, time3);
});

cardRight.addEventListener("click", function () {
  userCard = 1;
  userCardsArray.push(userCard);
  roundFunctions();
  cardRightEfect();
  setTimeout(() => {
    choiceSound.play();
  }, time25);
  setTimeout(() => {
    cleanClasses();
  }, time3);
});
