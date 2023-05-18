const startMoney = parseFloat(prompt("Bet", ""));
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

let currentRound = 0;
numberFractionDisplay.textContent = (currentRound + 1).toFixed(0);
let computerCardsArray = [];
let computerCard;
let userCard;
let userCardsArray = [];
let roundStatus = true;
let arrayLuck = [];
let luck = 0.5;
let currentMoney = 0;
let rounds;
let roundValue;

currentMoney = startMoney;

function setRounds () {
  rounds = parseInt(prompt("Rounds", ""));
}
setRounds();

function setRoundValue () {
roundValue = parseFloat(currentMoney / rounds);
}
setRoundValue();

numberFractionDisplay.textContent = (currentRound + 1).toFixed(0);

function generateComputerCardsArray() {
    let i = 0;
    while (i < rounds) {
        computerCard = Math.floor(Math.random() * 2);
        computerCardsArray.push(computerCard);
        i++;
    };
    console.log(computerCardsArray);
}

generateComputerCardsArray();



document.querySelector(".page").classList.remove("disableElement");

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

function createCheckPointElements () {
  for (let i = 0; i < rounds; i++) {
      addCheckPoint();
  };
};
createCheckPointElements();

function setInicialNumerator () {
  PointsDisplayContainer.getElementsByClassName("checkPoint")[0].classList.add(
      "choice"
  );
};

setInicialNumerator();

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

            numberFractionDisplay.classList.add("textScaleUp2");
            numberFractionDisplay.classList.add("shadowText2");
            setTimeout(() => {
                numberFractionDisplay.classList.remove("textScaleUp2");
                numberFractionDisplay.classList.remove("shadowText2");
                numberFractionDisplay.classList.add("textScaleDown");
            }, 250);

            numberFractionDisplay.textContent = (currentRound + 1).toFixed(0);
        }, time1);
    }
    setTimeout(() => {
        divisorFractionDisplay.textContent = "/" + rounds.toFixed(0);
        numberPercentualDisplay.textContent = (luck * 100).toFixed(0) + "%";
        setTimeout(() => {
            moneyDisplayChild.innerHTML = "\u20AC" + currentMoney.toFixed(2);
        }, 500);

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

        previousStatusDisplayChild.textContent = `Round Value \u20AC${roundValue.toFixed(
            2
        )} - - - - - - - Inicial Value \u20AC${startMoney.toFixed(2)}`;
    }, 1450);
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
        cardLeftImage.src =
            "../images/Playing Cards/PNG-cards-1.3/red_joker.png";
        cardRightImage.src =
            "../images/Playing Cards/PNG-cards-1.3/red_joker.png";
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

function rematch() {
    if (currentMoney > 0) {
        currentRound = 0;
        computerCardsArray = [];
        arrayLuck = [];
        arrayRightChoices = [];
        removeCheckPoint();
        setRounds();
        setRoundValue()
        createCheckPointElements();  
        generateComputerCardsArray();      
        setInicialNumerator()
        insertData();
        ableCards();
    } else {
      location.reload();
    }
}

function createMatchButton() {
    const matchButtonDivParent = document.getElementById("fundo");
    const matchButtonDiv = document.createElement("div");
    const matchInformationDiv = document.createElement("div");
    const matchInformationDivP = document.createElement("p");
    const matchButtonYes = document.createElement("div");
    const matchButtonYesP = document.createElement("p");
    const matchButtonNo = document.createElement("div");
    const matchButtonNoP = document.createElement("p");

    const earnedLostText = function () {
        if (currentMoney <= startMoney) {
            return ``;
        } else {
            const earn = (currentMoney - startMoney).toFixed(2);
            return `You earned \u20AC${earn}`;
        }
    };

    const yesButtonText = function () {
        if (currentMoney <= startMoney) {
            return `Play Again`;
        } else {
            return `Play Amount: \u20AC${currentMoney.toFixed(2)}`;
        }
    };

    const matchInformationDivText = document.createTextNode(earnedLostText());
    const matchButtonYesText = document.createTextNode(yesButtonText());
    const matchButtonNoText = document.createTextNode("Exit");

    matchInformationDivP.appendChild(matchInformationDivText);
    matchInformationDiv.appendChild(matchInformationDivP);

    matchButtonNoP.appendChild(matchButtonNoText);
    matchButtonNo.appendChild(matchButtonNoP);

    matchButtonYesP.appendChild(matchButtonYesText);
    matchButtonYes.appendChild(matchButtonYesP);

    if (currentMoney >= startMoney) {
        matchButtonDiv.appendChild(matchInformationDiv);
    }

    matchButtonDiv.appendChild(matchButtonYes);

    matchButtonDiv.appendChild(matchButtonNo);

    matchButtonDivParent.appendChild(matchButtonDiv);

    matchInformationDiv.classList.add("matchInformationDiv");
    matchButtonDiv.classList.add("displayFlex");
    matchButtonDiv.classList.add("glass2");

    matchButtonNo.classList.add("glass2");
    matchButtonNo.classList.add("matchButton");
    matchButtonNo.classList.add("glassHover");

    matchButtonYes.classList.add("glass2");
    matchButtonYes.classList.add("matchButton");
    matchButtonYes.classList.add("glassHover");

    matchButtonYesP.classList.add("shadowText");
    matchButtonNoP.classList.add("shadowText");

    matchInformationDivP.classList.add("shadowText");
    if (currentMoney > startMoney) {
        matchInformationDivP.classList.add("yellowLightText");
    }

    matchButtonYesP.classList.add("greenLightTextHover");
    matchButtonNoP.classList.add("redLightTextHover");

    matchButtonDiv.setAttribute("id", "matchButtonDiv");

    function removeMatchButton() {
        matchInformationDivP.removeChild(matchInformationDivText);
        matchInformationDiv.removeChild(matchInformationDivP);

        matchButtonNoP.removeChild(matchButtonNoText);
        matchButtonNo.removeChild(matchButtonNoP);

        matchButtonYesP.removeChild(matchButtonYesText);
        matchButtonYes.removeChild(matchButtonYesP);

        matchButtonDiv.removeChild(matchButtonYes);

        matchButtonDiv.removeChild(matchButtonNo);
        if (currentMoney > startMoney) {
            matchButtonDiv.removeChild(matchInformationDiv);
        }
        matchButtonDivParent.removeChild(matchButtonDiv);
    }

    matchButtonYes.addEventListener("click", function () {
        removeMatchButton();
        rematch();
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
    rejectedCardRight();
    acceptedCardLeft();

    clickSound.play();
    clickSound.volume = 0.3;

    setTimeout(() => {
        cardRightImage.src =
            "../images/Playing Cards/PNG-cards-1.3/red_joker.png";
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
        cardRightImage.src =
            "../images/Playing Cards/PNG-cards-1.3/red_joker.png";
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
    }, time15);
}

function cardRightEfect() {
    rejectedCardLeft();
    acceptedCardRight();

    clickSound.play();
    clickSound.volume = 1;

    setTimeout(() => {
        cardLeftImage.src =
            "../images/Playing Cards/PNG-cards-1.3/red_joker.png";
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
        cardLeftImage.src =
            "../images/Playing Cards/PNG-cards-1.3/red_joker.png";
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

