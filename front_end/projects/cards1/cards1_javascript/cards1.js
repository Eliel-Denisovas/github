// Efects
// Error red light
const cardLeft = document.getElementById("cardLeft");
const cardRight = document.getElementById("cardRight");
const roundDisplay = document.getElementById("numberFraction");
const luckDisplay = document.getElementById("divisorFraction");
const moneyDisplay = document.getElementById("numberPercentual");

let userCard = undefined;
let computerCard = undefined;
let roundStatus = true;

let currentRound = 1;
let rounds = 0;
const roundValue = currentMoney / rounds;

let luck = 0.5;
const arrayLuck = [];

let currentMoney = 0;

fun

function checkCards(userCard, computerCard) {
  if (userCard === computerCard) {
    roundStatus = true;
  } else {
    roundStatus = false;
  };

};

function checkRound () {
  roundValue += 1
};

/* function checkLuck () {
  arrayLuck.filter(function(currentValue, index, arr) {

  }

  

}; */

function checkMoney(roundStatus) {
  if (roundStatus) {
    currentMoney += roundValue;
  } else {
    currentMoney -= roundValue;
  };
};

function correctChoice() {
  let element = document.getElementById("containerCards");
  element.classList.add("correctChoice");
  setTimeout(glassNormalSize, 0);
};

function wrongChoice() {
  let element = document.getElementById("containerCards");
  element.classList.add("wrongChoice");
  setTimeout(glassNormalSize, 0);
};

function glassNormalSize() {
  let element = document.getElementById("cardLeft");
  element.classList.remove("glassHover");
  let element2 = document.getElementById("cardRight");
  element2.classList.remove("glassHover");
};

function table1Efect (){
  if (roundStatus) {
    correctChoice();
    glassNormalSize();
  } else {
    wrongChoice();
    glassNormalSize();
  };
}

function insertData() {
  roundDisplay.innerText = currentRound;
  luckDisplay.innerText = luck;
  moneyDisplay.innerText = currentMoney;
};

function roundFunctions () {
  checkCards();
  checkMoney();
  checkLuck();

};

const ages = [32, 33, 12, 40];

function checkAge(age) {
  return age > document.getElementById("ageToCheck").value;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.filter(checkAge);
}

cardLeft.addEventListener('click', function() {
  userCard = 0;

});

cardRight.addEventListener('click', function() {
  userCard = 1;
});