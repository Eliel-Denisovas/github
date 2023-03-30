(function () {
  function activeCardLeft () {
    alert('Olá');

    userCard = 0;

    if (roundStatus) {
      correctChoice()
    } else {
      wrongChoice()
    };

    roundFunctions();
    
  };
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
  let roundStatus = true;
  let currentRound = 5;
  let rounds = 11;

  let luck = 0.75;
  let arrayLuck = [];
  let UserCardsArray = [];
  let currentMoney = 530;
  const roundValue = currentMoney / rounds;

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

  function glassNormalSize() {
    let element = document.getElementById("cardLeft");
    element.classList.remove("glassHover");
    let element2 = document.getElementById("cardRight");
    element2.classList.remove("glassHover");
  };

  function correctChoice() {
    let element = document.getElementById("containerCards");
    element.classList.add("correctChoice");
    setTimeout(glassNormalSize, 1500);
  };

  function wrongChoice() {
    let element = document.getElementById("containerCards");
    element.classList.add("wrongChoice");
    setTimeout(glassNormalSize, 1500);
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

    if (roundStatus) {
      correctChoice();
    } else {
      wrongChoice();
    }

    roundFunctions();
  });
  
})();
