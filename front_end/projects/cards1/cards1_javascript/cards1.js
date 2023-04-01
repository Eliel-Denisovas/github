(function () {
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
  let userCard = 0;
  let computerCard = 0;
  let roundStatus = false;
  let currentRound = 5;
  let rounds = 11;

  let luck = 0.75;
  let arrayLuck = [];
  let UserCardsArray = [];
  let currentMoney = (530).toFixed(2);
  const roundValue = (currentMoney / rounds).toFixed(2);

  function insertData() {
    numberFractionDisplay.textContent = currentRound;
    divisorFractionDisplay.textContent = rounds;
    numberPercentualDisplay.textContent = luck;
    moneyDisplay.textContent = currentMoney;
    previousStatusDisplay.textContent = `${currentMoney} | ${roundValue}`;
  };

  insertData();

  function generateComputerCardsArray() {
    let i = 0;
    while (i < rounds) {
      computerCard = Math.floor(Math.random() * 2);
      computerCardsArray.push(computerCard);
      i++;
    };
  };

  function checkCards(userCard, computerCard) {
    if (userCard === computerCard) {
      roundStatus = true;
    } else {
      roundStatus = false;
    };
  };

  function checkRound() {
    currentRound += 1;
  };

  function checkLuck() {
    function rightChoicesNumber() {
      let arrayRightChoices = arrayLuck.filter(function (currentValue) {
        return currentValue === 1;
      });

      return arrayRightChoices.length;
    };

    let checkLuck = rightChoicesNumber() / arrayLuck.length;
    return checkLuck;
  };

  function checkMoney(roundStatus) {
    if (roundStatus) {
      currentMoney += roundValue;
    } else {
      currentMoney -= roundValue;
    };
  };

  function choice() {
    let element = document.getElementById("containerCards");
    element.classList.add("choice");
  };

  function rejectedCardLeft() {
    let element = document.getElementById("cardLeft");
    element.classList.add("rejectedCardLeft");

    let element2 = document.getElementById("cardLeft");
    element2.classList.remove("glassHover");
  };

  function acceptedCardLeft() {
    let element = document.getElementById("cardLeft");
    element.classList.add("acceptedCardLeft");

    let element2 = document.getElementById("cardLeft");
    element2.classList.remove("glassHover");
  };
  
  function rejectedCardRight() {
    let element = document.getElementById("cardRight");
    element.classList.add("rejectedCardRight");

    let element2 = document.getElementById("cardRight");
    element2.classList.remove("glassHover");
  };

  function acceptedCardRight() {
    let element = document.getElementById("cardRight");
    element.classList.add("acceptedCardRight");
/* 
    let element2 = document.getElementById("cardRight");
    element2.classList.add("acceptedCardRightBack");
 */
    let element3 = document.getElementById("cardRight");
    element3.classList.remove("glassHover");
  };

  function correctChoice() {
    let element = document.getElementById("containerCards");
    element.classList.add("correctChoice");
  };

  function wrongChoice() {
    let element = document.getElementById("containerCards");
    element.classList.add("wrongChoice");
  };

  function roundFunctions() {
    checkCards(userCard, computerRamdomCardNumber(0, 1));
    checkRound();
    checkLuck();
    checkMoney(roundStatus);
    checkLuck();
    insertData();
  };

  cardRight.addEventListener("click", function () {
    userCard = 1;
    choice();
    rejectedCardLeft();
    acceptedCardRight();
  });

  cardLeft.addEventListener("click", function () {
    userCard = 0;
    choice();
    rejectedCardRight();
    acceptedCardLeft();

   //roundFunctions();

  });

})();
