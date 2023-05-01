const cardLeft = document.getElementById("cardLeft");
const cardRight = document.getElementById("cardRight");
const numberFractionDisplay = document.getElementById("numberFraction");
const divisorFractionDisplay = document.getElementById("divisorFraction");
const numberPercentualDisplay = document.getElementById("numberPercentual");
const moneyDisplay = document.getElementById("money");
const previousStatusDisplay = document.getElementById("previousStatus");
const PointsDisplayContainer = document.getElementById(
  "PointsDisplayContainer"
);
const containerCards = document.getElementById("containerCards");
const roundSound = document.getElementById("roundSound");
const cardLeftImage = document.getElementById("cardLeftImage");
const cardRightImage = document.getElementById("cardRightImage");
const choiceSound = document.getElementById("choiceSound");
const correctChoiceSound = document.getElementById("correctChoiceSound");
const luckWord = document.getElementById("luckWord");
const wrongChoiceSound = document.getElementById("wrongChoiceSound");
const time05 = 500;
const time08 = 800;
const time1 = 1000;
const time15 = 1500;
const time2 = 2000;
const time25 = 2500;
const time3 = 3000;
const time38 = 3800;
const time4 = 4000;
const time5 = 5000;
let startMoney = parseFloat(prompt("Bet", ""));
let startRounds = parseInt(prompt("Rounds", ""));
let currentRound = 0;
numberFractionDisplay.textContent = (currentRound + 1).toFixed(0);
let computerCardsArray = [];

let currentMoney = startMoney;
let rounds = startRounds;
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
        numberFractionDisplay.classList.remove("textScaleUp");
        numberFractionDisplay.classList.remove("shadowText2");
        numberFractionDisplay.classList.add("textScaleDown");
      }, 250);

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

function acceptedCardLeft() {
  cardLeft.classList.add("acceptedCardLeft");
  setTimeout(() => {
    cardLeft.classList.remove("acceptedCardLeft");
  }, 5000);
}

function acceptedCardRight() {
  cardRight.classList.add("acceptedCardRight");
  setTimeout(() => {
    cardRight.classList.remove("acceptedCardRight");
  }, 5000);
}

function rejectedCardLeft() {
  cardLeft.classList.add("rejectedCardLeft");
  setTimeout(() => {
    cardLeft.classList.remove("rejectedCardLeft");
  }, 5000);
}

function rejectedCardRight() {
  cardRight.classList.add("rejectedCardRight");
  setTimeout(() => {
    cardRight.classList.remove("rejectedCardRight");
  }, 5000);
}

function cleanClasses() {
  containerCards.classList.remove("choice");
  containerCards.classList.remove("correctChoice");
  containerCards.classList.remove("wrongChoice");

  containerCards.classList.add("glass");
  cardRight.classList.add("glass");
  cardLeft.classList.add("glass");
  numberFractionDisplay.classList.remove("textScaleDown");

  if (computerCard === undefined) {
    cardLeft.classList.remove("glassHover");
    cardRight.classList.remove("glassHover");
    cardLeftImage.src = "../images/Playing Cards/PNG-cards-1.3/red_joker.png";
    cardRightImage.src = "../images/Playing Cards/PNG-cards-1.3/red_joker.png";
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
  const matchInformationDiv = document.createElement("div");
  const matchButtonYes = document.createElement("div");
  const matchButtonYesP = document.createElement("p");
  const matchButtonNo = document.createElement("div");
  const earnedLostText = function () {
    if (currentMoney < startMoney) {
      const lost = (startMoney-currentMoney).toFixed(2);
      return `You lost ${lost}`;
    } else if (startMoney == currentMoney) {
      return "You have no earns";
    } else {
      const earn = (currentMoney-startMoney).toFixed(2);
      return `You earned ${earn}`;
    }
  }

  //const matchForm = document.createElement("form");
  // const betInput = document.createElement("input");
  //const roundInput = document.createElement("input");

  // betInput.type = "text";
  // roundInput.type = "text";

  const matchInformationDivText = document.createTextNode(earnedLostText());
  const matchButtonYesText = document.createTextNode(`Play Amount: ${currentMoney.toFixed(2)}`);
  const matchButtonNoText = document.createTextNode("X");

  // matchForm.appendChild(betInput);
  //matchForm.appendChild(roundInput);

  matchInformationDiv.appendChild(matchInformationDivText);
  matchButtonNo.appendChild(matchButtonNoText);
  matchButtonYes.appendChild(matchButtonYesP);
  matchButtonYesP.appendChild(matchButtonYesText);

  //matchButtonDiv.appendChild(matchForm);

  matchButtonDiv.appendChild(matchInformationDiv);
  matchButtonDiv.appendChild(matchButtonYes);
  matchButtonDiv.appendChild(matchButtonNo);

  matchButtonDivParent.appendChild(matchButtonDiv);

  matchButtonDiv.setAttribute("id", "macthButtonDiv");
  matchButtonYes.setAttribute("id", "yesMatchButton");
  matchButtonNo.setAttribute("id", "noMatchButton");
  //matchForm.setAttribute("id", "matchForm");
  // betInput.setAttribute("id", "betInput");
  // betInput.setAttribute("placeholder", "Enter Bet");
  //roundInput.setAttribute("id", "roundInput");
  //roundInput.setAttribute("placeholder", "Enter Rounds");

  matchButtonDiv.classList.add("displayFlex");
  matchButtonDiv.classList.add("glass2");
  matchButtonDiv.classList.add("shadowText");
  matchInformationDiv.classList.add("automaticFontChild");
  matchButtonYesP.classList.add("automaticFontChild");

  //matchForm.classList.add("displayFlex");
  //matchForm.classList.add("glass2");
  //matchForm.classList.add("shadowText");
  //matchForm.classList.add("matchButton");

  //betInput.classList.add("flexItem");
  //betInput.classList.add("shadowText");
  //betInput.classList.add("matchButton");
  //betInput.classList.add("greenLightText");
  //betInput.classList.add("glass2");

  //roundInput.classList.add("flexItem");
  //roundInput.classList.add("shadowText");
  //roundInput.classList.add("matchButton");
  //roundInput.classList.add("greenLightText");
  //roundInput.classList.add("glass2");

  matchButtonYes.classList.add("glass2");
  matchButtonYes.classList.add("shadowText");
  matchButtonYes.classList.add("matchButton");
  matchButtonYes.classList.add("glassHover");

  matchButtonNo.classList.add("glass2");
  matchButtonNo.classList.add("shadowText");
  matchButtonNo.classList.add("matchButton");
  matchButtonNo.classList.add("glassHover");

  function removeMatchButton() {
    //matchForm.removeChild(betInput);
    // matchForm.removeChild(roundInput);
    //matchButtonDiv.removeChild(matchForm);

    matchButtonNo.removeChild(matchButtonNoText);
    matchButtonYes.removeChild(matchButtonYesText);

    matchInformationDiv.appendChild(matchInformationDivText);
    matchButtonDiv.appendChild(matchInformationDiv);
    matchButtonDiv.removeChild(matchButtonYes);
    matchButtonDiv.removeChild(matchButtonNo);
    matchButtonDivParent.removeChild(matchButtonDiv);
  }

  matchButtonYes.addEventListener("click", function () {
    removeMatchButton();
    window.location.reload(true);
  });

  matchButtonNo.addEventListener("click", function () {
    removeMatchButton();
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
        luckWord.classList.remove("greenLightText");
        luckWord.classList.add("textScaleDown");
        setTimeout(() => {
          luckWord.classList.remove("textScaleDown");
        }, 250);
      }, 3500);
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
        luckWord.classList.remove("greenLightText");
        luckWord.classList.add("textScaleDown");
        setTimeout(() => {
          luckWord.classList.remove("textScaleDown");
        }, 250);
      }, 3500);
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
