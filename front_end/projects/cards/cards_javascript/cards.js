const matchPrompt = document.getElementById("matchPrompt");
const matchPromptInformation = document.getElementById(
  "matchPromptInformation"
);
const betInput = document.getElementById("betInput");
const roundInput = document.getElementById("roundInput");
const matchPromptButtonYes = document.getElementById("matchPromptButtonYes");
const matchPromptButtonNo = document.getElementById("matchPromptButtonNo");

const playerNameSpan = document.getElementById("playerNameSpan");
const playerLuckSpan = document.getElementById("playerLuckSpan");
const playerMoneySpan = document.getElementById("playerMoneySpan");

const cardLeft = document.getElementById("cardLeft");
const cardRight = document.getElementById("cardRight");

const numberFractionDisplay = document.getElementById("numberFraction");
const divisorFractionDisplay = document.getElementById("divisorFraction");
const numberPercentualDisplay = document.getElementById("numberPercentual");
const moneyDisplay = document.getElementById("moneyDiv");
const moneyDisplayChild = document.getElementById("moneyDivChild");
const previousStatusDisplay = document.getElementById("previousStatusDiv");
const previousStatusDisplayChild = document.getElementById(
  "previousStatusDivChild"
);

const roundValueSpan = document.getElementById("roundValueSpan");
const inicialValueSpan = document.getElementById("inicialValueSpan");
const PointsDisplayContainer = document.getElementById(
  "PointsDisplayContainer"
);
const containerCards = document.getElementById("containerCards");
const roundSound = document.getElementById("roundSound");
const cardLeftImage = document.getElementById("cardLeftImage");
const cardRightImage = document.getElementById("cardRightImage");
const choiceSound = document.getElementById("choiceSound");
const clickSound = document.getElementById("clickSound");
const coinSound = document.getElementById("coinSound");
const correctChoiceSound = document.getElementById("correctChoiceSound");
const luckWord = document.getElementById("luckWord");
const wrongChoiceSound = document.getElementById("wrongChoiceSound");

let playerName = "Eliel Denisovas";
let playerLuck = 0.5;
let playerMoney = 500;
let playerLuckArray = [];

let startMoney = 0;
let currentRound;
let computerCardsArray;
let computerCard;
let userCard;
let userCardsArray;
let roundStatus;
let arrayLuck;
let luck;
let currentMoney;
let rounds;
let roundValue;

function initialDataInsert () {
  playerNameSpan.innerText = playerName;
  playerLuckSpan.innerText = `${playerLuck * 100}%`;
  playerMoneySpan.innerText = `\u20AC ${playerMoney.toFixed(2)}`;
};
initialDataInsert()

function showMatchPrompt() {
  const earnedLostText = function () {
    if (
      currentMoney <= 0 ||
      currentMoney === undefined ||
      currentMoney - startMoney <= 0
    ) {
      return ``;
    } else {
      const earn = (currentMoney - startMoney).toFixed(2);
      return `You earned \u20AC${earn}`;
    }
  };

  const yesButtonText = function () {
    if (currentMoney <= 0 || currentMoney === undefined) {
      return `Play`;
    } else {
      return `Play Amount: \u20AC${currentMoney.toFixed(2)}`;
    }
  };
  matchPromptButtonYes.value = yesButtonText();
  matchPromptInformation.innerText = earnedLostText();
  betInput.value = "";
  roundInput.value = "";

  if (currentMoney <= 0 || currentMoney === undefined) {
    ableMatchBetInput();
  }

  ableMatchPrompt();
}

function submitMatchPromptButtonYes() {
  if (
    roundInput.value == "" ||
    (currentMoney <= 0 || currentMoney === undefined) & (betInput.value == "")
  ) {
    alert("Set Bet and Round(s)");
    showMatchPrompt();
    return;
  }

  if (currentMoney <= 0 || currentMoney === undefined) {
    if (playerMoney < betInput.value) {
      alert("You do not have available money to bet this value, if your ammount is zero, please reload the page");
      showMatchPrompt();
      return
    } else {
    startMoney = parseFloat(betInput.value);
    currentMoney = parseFloat(startMoney);
    playerMoney -= startMoney;
    }
  } else {
    playerMoney -= currentMoney;
  }
  rounds = parseFloat(roundInput.value);

  disableMatchPrompt();
  disableMatchBetInput();
  //disableInputStyle();

  match();
}

function submitMatchPromptButtonNo() {
  disableMatchPrompt();
  //disableInputStyle();
}

/* 
function disableInputStyle () {
  const input1 = document.querySelectorAll('.matchPromptInput')[0].classList.remove("matchPromptInput");
  const input1Style = window.getComputedStyle(input1, ':placeholder');
  input1Style.setProperty('content', '');

  const input2 = document.querySelectorAll('.matchPromptInput')[1].classList.remove("matchPromptInput");
  const input2Style = window.getComputedStyle(input2, ':placeholder');
  input2Style.setProperty('content', '');
}
 */
function setRoundValue() {
  roundValue = parseFloat(currentMoney / rounds);
}

function generateComputerCardsArray() {
  let i = 0;
  while (i < rounds) {
    computerCard = Math.floor(Math.random() * 2);
    computerCardsArray.push(computerCard);
    i++;
  }
  console.log(computerCardsArray);
}

function addCheckPoint() {
  const checkPoint = document.createElement("div");
  PointsDisplayContainer.appendChild(checkPoint);
  checkPoint.classList.add("checkPoint");
  checkPoint.classList.add("glass");
}

function removeCheckPoint() {
  const checkPoints = document.querySelectorAll(".checkPoint");

  checkPoints.forEach((cp) => {
    cp.remove();
  });
}

function createCheckPointElements() {
  for (let i = 0; i < rounds; i++) {
    addCheckPoint();
  }
}

function setInicialNumerator() {
  PointsDisplayContainer.getElementsByClassName("checkPoint")[0].classList.add(
    "choice"
  );
}

function checkCards(userCard, computerCard) {
  if (userCard === computerCard) {
    roundStatus = true;
  } else {
    roundStatus = false;
  }
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

function playerCheckLuck() {
  function rightChoicesNumber() {
    let arrayRightChoices = playerLuckArray.filter(function (currentValue) {
      return currentValue === true;
    });

    return arrayRightChoices.length;
  }

  playerLuck = rightChoicesNumber() / playerLuckArray.length;
}

function checkMoney(roundStatus) {
  if (roundStatus) {
    currentMoney += roundValue;
  } else {
    currentMoney -= roundValue;
  }
}

function insertData() {
  playerNameSpan.innerText = playerName;
  setTimeout(() => {
    roundSound.play();
    roundSound.volume = 0.5;

    numberFractionDisplay.classList.add("textScaleUp2");
    numberFractionDisplay.classList.add("shadowText2");

    setTimeout(() => {
      numberFractionDisplay.classList.remove("textScaleUp2");
      numberFractionDisplay.classList.remove("shadowText2");
      numberFractionDisplay.classList.add("textScaleDown");
    }, 250);

    numberFractionDisplay.textContent = (currentRound + 1).toFixed(0);
  }, 1000);

  setTimeout(() => {
    divisorFractionDisplay.textContent = "/" + rounds.toFixed();
    numberPercentualDisplay.textContent = (luck * 100).toFixed() + "%";

    setTimeout(() => {
      moneyDisplayChild.innerHTML = "\u20AC" + currentMoney.toFixed(2);
    }, 500);
    playerLuckSpan.innerText = ` ${(playerLuck * 100).toFixed()}%`;
    playerMoneySpan.innerText = ` \u20AC ${playerMoney.toFixed(2)}`;
    moneyDisplayChild.classList.add("moneyMove");
    if (roundStatus) {
      moneyDisplayChild.classList.add("greenLightText");
      //coinSound.play();
    } else {
      moneyDisplayChild.classList.add("redLightText");
    }

    setTimeout(() => {
      moneyDisplayChild.classList.remove("redLightText");
      moneyDisplayChild.classList.remove("greenLightText");
    }, 1000);

    setTimeout(() => {
      moneyDisplayChild.classList.remove("moneyMove");
    }, 6000);

    roundValueSpan.textContent = `\u20AC ${roundValue.toFixed(2)}`;
    inicialValueSpan.textContent = `\u20AC ${startMoney.toFixed(2)}`;
  }, 1450);
}

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

function disableMatchPrompt() {
  matchPrompt.classList.add("disableElement");
}

function ableMatchPrompt() {
  matchPrompt.classList.remove("disableElement");
}

function disableMatchBetInput() {
  betInput.classList.add("disableElement");
}

function ableMatchBetInput() {
  betInput.classList.remove("disableElement");
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
  computerCard = computerCardsArray[currentRound];
  checkCards(userCard, computerCard);
  arrayLuck.push(roundStatus);
  playerLuckArray.push(roundStatus);
  checkLuck();
  playerCheckLuck();
  checkMoney(roundStatus);
  choice();

  if (currentRound >= rounds - 1) {
    playerMoney += currentMoney;
  };

  setTimeout(() => {
    insertData();
  }, 3000);

  setCheckPoints();
  if (currentRound >= rounds - 1) {
    setTimeout(() => {

      showMatchPrompt();
    }, 6000);
    return;
  } else {
    setTimeout(() => {
      ableCards();
    }, 5000);
    currentRound += 1;
  }
}

function cardLeftEfect() {
  rejectedCardRight();
  acceptedCardLeft();

  clickSound.play();
  clickSound.volume = 0.3;

  setTimeout(() => {
    cardRightImage.src = "../images/Playing Cards/PNG-cards-1.3/red_joker.png";
  }, 1000);

  setTimeout(() => {
    choiceSound.load();
    choiceSound.play();
  }, 900);

  setTimeout(() => {
    choiceSound.load();
    choiceSound.play();
  }, 2450);

  setTimeout(() => {
    choiceSound.load();
    choiceSound.play();
  }, 2900);

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
  }, 1500);

  setTimeout(() => {
    cardRightImage.src = "../images/Playing Cards/PNG-cards-1.3/red_joker.png";
  }, 3100);

  setTimeout(() => {
    cardRightImage.src =
      "../images/Playing Cards/PNG-cards-1.3/queen_of_clubs2.png";
  }, 3400);

  setTimeout(() => {
    containerCards.classList.remove("choice");

    if (roundStatus) {
      containerCards.classList.add("correctChoice");
      choiceSound.pause();
      correctChoiceSound.play();

      luckWord.classList.add("textScaleUp1");
      luckWord.classList.add("greenLightText");

      setTimeout(() => {
        luckWord.classList.remove("textScaleUp1");
        luckWord.classList.remove("greenLightText");
        luckWord.classList.remove("greenLightText");
        luckWord.classList.add("textScaleDown");

        setTimeout(() => {
          luckWord.classList.remove("textScaleDown");
        }, 250);
      }, 2750);
    } else {
      containerCards.classList.add("wrongChoice");
      choiceSound.pause();
      wrongChoiceSound.play();
    }
  }, 1500);
}

function cardRightEfect() {
  rejectedCardLeft();
  acceptedCardRight();

  clickSound.play();
  clickSound.volume = 1;

  setTimeout(() => {
    cardLeftImage.src = "../images/Playing Cards/PNG-cards-1.3/red_joker.png";
  }, 1000);

  setTimeout(() => {
    choiceSound.play();
  }, 1000);

  setTimeout(() => {
    choiceSound.play();
  }, 3200);

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
    }
  }, 1500);

  setTimeout(() => {
    cardLeftImage.src = "../images/Playing Cards/PNG-cards-1.3/red_joker.png";
  }, 3100);

  setTimeout(() => {
    cardLeftImage.src =
      "../images/Playing Cards/PNG-cards-1.3/King_of_clubs2.png";
  }, 3400);

  setTimeout(() => {
    containerCards.classList.remove("choice");

    if (roundStatus) {
      containerCards.classList.add("correctChoice");
      choiceSound.pause();
      correctChoiceSound.play();
      luckWord.classList.add("textScaleUp1");
      luckWord.classList.add("greenLightText");
      setTimeout(() => {
        luckWord.classList.remove("textScaleUp1");
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
  }, 1000);
}

matchPromptButtonYes.addEventListener("click", function () {
  submitMatchPromptButtonYes();
});

matchPromptButtonNo.addEventListener("click", function () {
  submitMatchPromptButtonNo();
});

cardLeft.addEventListener("click", function () {
  userCard = 0;
  userCardsArray.push(userCard);
  roundFunctions();
  cardLeftEfect();

  setTimeout(() => {
    choiceSound.play();
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
    choiceSound.play();
  }, 2500);
  setTimeout(() => {
    cleanClasses();
  }, 3000);
});

function match() {
  currentRound = 0;
  computerCardsArray = [];
  arrayLuck = [];
  luck = 0.5;
  userCardsArray = [];
  roundStatus = true;
  arrayRightChoices = [];

  removeCheckPoint();
  setRoundValue();
  generateComputerCardsArray();
  createCheckPointElements();
  setInicialNumerator();
  insertData();
  ableCards();
  document.querySelector(".table1").classList.remove("disableElement");
}

showMatchPrompt();
