let baseType = "";
let shopItenValue = 5.3;
let saladsClicked = 0;
const shopItenElements = document.querySelectorAll(".shopIten");
const meatItens = document.querySelectorAll("#meatItensDiv .shopItem");

const breadItensDiv = document.getElementById("breadItensDiv");
const breakfastItensDiv = document.getElementById("breakfastItensDiv");
const salads = document.getElementById("salads");
const hotSnacking = document.getElementById("hotSnacking");
const hotMeals = document.getElementById("hotMeals");
const hotDogs = document.getElementById("hotDogs");
const prices = document.getElementById("prices");
const meatItensDiv = document.getElementById("meatItensDiv");
const saladsItensDiv = document.getElementById("saladsItensDiv");
const hotSnackingItensDiv = document.getElementById("hotSnackingItensDiv");
const hotMealsItensDiv = document.getElementById("hotMealsItensDiv");
const hotDogsItensDiv = document.getElementById("hotDogsItensDiv");
const pricesDiv = document.getElementById("pricesDiv");
const baguettesMenuItensDiv = document.getElementById("baguettesMenuItensDiv");
const baguettesPreparedItensDiv = document.getElementById("baguettesPreparedItensDiv");
const breakfastMenuItensDiv = document.getElementById("breakfastMenuItensDiv");
const breakfastItensDivByo = document.getElementById("breakfastItensDivByo");
const mainItensDiv = document.getElementById("mainItensDiv");

const meatItensTitlebackButton = document.getElementById("meatItensTitlebackButton");
const meatItensTitleGoButton = document.getElementById("meatItensTitleGoButton");
const saladItensTitleBackButton = document.getElementById("saladItensTitlebackButton");

const bagueteEtc = document.getElementById("bagueteEtc");
const baguettesByo = document.getElementById("baguettesByo");
const baguettesPreparedDishes = document.getElementById("baguettesPreparedDishes");
const breakfast = document.getElementById("breakfast");
const breakfastByo = document.getElementById("breakfastByo");
const breakfastByoItensTitleGoButton = document.getElementById("breakfastByoItensTitleGoButton");
const breakfastItens = document.getElementById("breakfastItens");

const ceaserWrapDiv = document.getElementById("ceaserWrap");
const jalapenoWrapDiv = document.getElementById("jalapenoWrap");
const tunaPiadinaDiv = document.getElementById("tunaPiadina");

const plainBaguetteDiv = document.getElementById("plainBaguette");
const brownBaguetteDiv = document.getElementById("brownBaguette");
const plainWrapDiv = document.getElementById("plainWrap");
const brownWrapDiv = document.getElementById("brownWrap");
const plainSandwichDiv = document.getElementById("plainSandwich");
const brownSandwichDiv = document.getElementById("brownSandwich");
const plainBapDiv = document.getElementById("plainBap");
const multiseedBapDiv = document.getElementById("multiseedBap");
const italianBreadDiv = document.getElementById("italianBread");
const betrootBreadDiv = document.getElementById("betrootBread");
const plainHotDogDiv = document.getElementById("plainHotDog");

const plainChickenFilletDiv = document.getElementById("plainChickenFillet");
const southernChickenFilletDiv = document.getElementById("southernChickenFillet");
const spicyChickenFilletDiv = document.getElementById("spicyChickenFillet");

const pulledChickenDiv = document.getElementById("pulledChicken");
const cajunChickenDiv = document.getElementById("cajunChicken");
const grilledChickenDiv = document.getElementById("grilledChicken");
const chickenKebabsDiv = document.getElementById("chickenKebabs");

const hamDiv = document.getElementById("ham");
const turkeyDiv = document.getElementById("turkey");
const tunaDiv = document.getElementById("tuna");

const chorizoDiv = document.getElementById("chorizo");
const streakyBaconDiv = document.getElementById("streakyBacon");
const falafelDiv = document.getElementById("falafel");

const lettuceDiv = document.getElementById("lettuce");
const spinachDiv = document.getElementById("spinach");
const rocketDiv = document.getElementById("rocket");

const gratedCheddarDiv = document.getElementById("gratedCheddar");
const slicedCheddarDiv = document.getElementById("slicedCheddar");
const goatCheeseDiv = document.getElementById("goatCheese");
const italianCheeseDiv = document.getElementById("italianCheese");

const redOnionDiv = document.getElementById("redOnion");
const crispyOnionDiv = document.getElementById("crispyOnion");
const springOnionDiv = document.getElementById("springOnion");
const sageOnionStuffingDiv = document.getElementById("sageOnionStuffing");
const peppersDiv = document.getElementById("peppers");
const jalapenoDiv = document.getElementById("jalapeno");
const cucumberDiv = document.getElementById("cucumber");
const tomatoDiv = document.getElementById("tomato");
const sundriedTomatoDiv = document.getElementById("sundriedTomato");
const boilledEggDiv = document.getElementById("boilledEgg");
const sweetcornDiv = document.getElementById("sweetcorn");
const betrootDiv = document.getElementById("betroot");
const croutonsDiv = document.getElementById("croutons");
const eggMayoDiv = document.getElementById("eggMayo");
const beanSaladDiv = document.getElementById("beanSalad");
const coleslawDiv = document.getElementById("coleslaw");
const broccoliDiv = document.getElementById("broccoli");
const potatoSaladDiv = document.getElementById("potatoSalad");

const sausageDiv = document.getElementById("sausage");
const rasherDiv = document.getElementById("rasher");
const hashBrownDiv = document.getElementById("hashBrown");
const whitePuddingDiv = document.getElementById("whitePudding");
const blackPuddingDiv = document.getElementById("blackPudding");
const scrambedEggsDiv = document.getElementById("scrambedEggs");
const halfPotatoCubesPortionDiv = document.getElementById("halfPotatoCubesPortion");

const mexicanSaladDiv = document.getElementById("mexicanSalad");
const asianSaladDiv = document.getElementById("asianSalad");
const ceaserSaladDiv = document.getElementById("ceaserSalad");

const jambomDiv = document.getElementById("jambom");
const jumboSausageRollDiv = document.getElementById("jumboSausageRoll");
const smallSausageRollDiv = document.getElementById("smallSausageRoll");
const gourmetJambomDiv = document.getElementById("gourmetJambom");
const gourmetJumboSausageRollDiv = document.getElementById("gourmetJumboSausageRoll");
const potatoCubesPortionDiv = document.getElementById("potatoCubesPortion");

const sweetSourNuggetsDishDiv = document.getElementById("sweetSourNuggetsDish");
const hotDogDiv = document.getElementById("hotDog");
const frenchHotDogDiv = document.getElementById("frenchHotDog");

const printerButton = document.getElementById("printerButton");

// Adicionando o evento de clique a cada div
shopItenElements.forEach(function (shopItenParameter) {
  shopItenParameter.addEventListener("click", function () {
    this.classList.toggle("clicked");
    countSalads();
    countMeats();
    createOrderText();
  });
});

// Selecione todos os elementos que possuem a classe desejada (substitua 'cliked' pelo nome da classe que você deseja remover)
function removeAllClickedClass() {
  const clickedClassElements = document.querySelectorAll(".cliked");
  clickedClassElements.forEach((element) => {
    element.classList.remove("clicked");
  });
}
function removeBreadClickedClass() {
  const clickedClassElements = document.querySelectorAll("#breadItensDiv .clicked");
  clickedClassElements.forEach((element) => {
    element.classList.remove("clicked");
  });
}

plainBaguetteDiv.addEventListener("click", function () {
  baseType = "Baguette";
  removeBreadClickedClass();
  this.classList.add("clicked");
  breadItensDiv.classList.add("displayNone");
  meatItensDiv.classList.remove("displayNone");
});
brownBaguetteDiv.addEventListener("click", function () {
  baseType = "Baguette";
  removeBreadClickedClass();
  this.classList.add("clicked");
  breadItensDiv.classList.add("displayNone");
  meatItensDiv.classList.remove("displayNone");
});
plainWrapDiv.addEventListener("click", function () {
  baseType = "Wrap";
  removeBreadClickedClass();
  this.classList.add("clicked");
  breadItensDiv.classList.add("displayNone");
  meatItensDiv.classList.remove("displayNone");
});
brownWrapDiv.addEventListener("click", function () {
  baseType = "Wrap";
  removeBreadClickedClass();
  this.classList.add("clicked");
  breadItensDiv.classList.add("displayNone");
  meatItensDiv.classList.remove("displayNone");
});
plainSandwichDiv.addEventListener("click", function () {
  baseType = "Sandwich";
  removeBreadClickedClass();
  this.classList.add("clicked");
  breadItensDiv.classList.add("displayNone");
  meatItensDiv.classList.remove("displayNone");
});
brownSandwichDiv.addEventListener("click", function () {
  baseType = "Sandwich";
  removeBreadClickedClass();
  this.classList.add("clicked");
  breadItensDiv.classList.add("displayNone");
  meatItensDiv.classList.remove("displayNone");
});
italianBreadDiv.addEventListener("click", function () {
  baseType = "Italian Bread";
  removeBreadClickedClass();
  this.classList.add("clicked");
  breadItensDiv.classList.add("displayNone");
  meatItensDiv.classList.remove("displayNone");
});
betrootBreadDiv.addEventListener("click", function () {
  baseType = "Betroot Bread";
  removeBreadClickedClass();
  this.classList.add("clicked");
  breadItensDiv.classList.add("displayNone");
  meatItensDiv.classList.remove("displayNone");
});

meatItensTitlebackButton.addEventListener("click", function () {
    meatItensDiv.classList.add("displayNone");
  breadItensDiv.classList.remove("displayNone");
});
meatItensTitleGoButton.addEventListener("click", function () {
    meatItensDiv.classList.add("displayNone");
    saladsItensDiv.classList.remove("displayNone");
});

saladItensTitleBackButton.addEventListener("click", function () {
    saladsItensDiv.classList.add("displayNone");
    meatItensDiv.classList.remove("displayNone");
});

bagueteEtc.addEventListener("click", function () {
    mainItensDiv.classList.add("displayNone");
    baguettesMenuItensDiv.classList.remove("displayNone");
});

baguettesByo.addEventListener("click", function () {
    baguettesMenuItensDiv.classList.add("displayNone");
    breadItensDiv.classList.remove("displayNone");
});

baguettesPreparedDishes.addEventListener("click", function () {
  baguettesMenuItensDiv.classList.add("displayNone");
  baguettesPreparedItensDiv.classList.remove("displayNone");
});

breakfast.addEventListener("click", function () {
  mainItensDiv.classList.add("displayNone");
  breakfastMenuItensDiv.classList.remove("displayNone");
});

breakfastByo.addEventListener("click", function () {
  breakfastMenuItensDiv.classList.add("displayNone");
  breakfastItensDivByo.classList.remove("displayNone");
});

breakfastByoItensTitleGoButton.addEventListener("click", function () {
  breakfastItensDivByo.classList.add("displayNone");
  breadItensDiv.classList.remove("displayNone");
});

breakfastItens.addEventListener("click", function () {
  breakfastMenuItensDiv.classList.add("displayNone");
  breakfastItensDiv.classList.remove("displayNone");
});

salads.addEventListener("click", function () {
  mainItensDiv.classList.add("displayNone");
  saladsItensDiv.classList.remove("displayNone");
});

hotSnacking.addEventListener("click", function () {
  mainItensDiv.classList.add("displayNone");
  hotSnackingItensDiv.classList.remove("displayNone");
});

hotMeals.addEventListener("click", function () {
  mainItensDiv.classList.add("displayNone");
  hotMealsItensDiv.classList.remove("displayNone");
});

hotDogs.addEventListener("click", function () {
  mainItensDiv.classList.add("displayNone");
  hotDogsItensDiv.classList.remove("displayNone");
});

prices.addEventListener("click", function () {
  mainItensDiv.classList.add("displayNone");
  pricesDiv.classList.remove("displayNone");
});

/*  

const plainHotDogDiv = document.getElementById("plainHotDog");
const franchHotDogDiv = document.getElementById("franchHotDog");
 */

function countSalads() {
  return document.querySelectorAll("#saladsItensDiv .clicked").length;
}

function countMeats() {
  return document.querySelectorAll("#meatItensDiv .clicked").length;
}

function removeOrderLineDiv() {
  // Obtendo a referência para o conjunto de elementos que você adicionou
  const orderLineDiv = document.querySelector(".OrderLine"); // Use o seletor correto para selecionar a div

  // Obtendo o pai (elemento que contém o conjunto de elementos)
  const paiDoOrderLineDiv = orderLineDiv.parentElement;

  // Removendo o conjunto de elementos da div pai
  paiDoOrderLineDiv.removeChild(orderLineDiv);
}

function saladWordGrammarCorrection() {
  if (countSalads() > 1) {
    return "Salads";
  } else {
    return "Salad";
  }
}

function meatWordGrammarCorrection() {
  if (countMeats() > 1) {
    return "Meats";
  } else {
    return "Meat";
  }
}

function extraSaladWordGrammarCorrection() {
  if (countSalads() > 4) {
    return "Salads";
  } else {
    return "Salad";
  }
}

function extraMeatWordGrammarCorrection() {
  if (countMeats() > 2) {
    return "Meats";
  } else {
    return "Meat";
  }
}

function extraSaladText() {
  let extraSaladNumber;
  if (countSalads() > 3) {
    extraSaladNumber = countSalads() - 3;
    return `(${extraSaladNumber} extra ${extraSaladWordGrammarCorrection()})`;
  } else {
    return ``;
  }
}

function extraMeatText() {
  let extraMeatNumber;
  if (countMeats() > 1) {
    extraMeatNumber = countMeats() - 1;
    return `(${extraMeatNumber} extra ${extraMeatWordGrammarCorrection()})`;
  } else {
    return ``;
  }
}

function createOrderText() {
  removeOrderLineDiv();
  // Obtendo a referência para a div onde deseja adicionar o conjunto de elementos
  const orderDisplay = document.getElementById("orderDisplay");

  // Criando a div principal com a classe "OrderLine"
  const orderLineDiv = document.createElement("div");
  orderLineDiv.classList.add("OrderLine");

  // Criando a div com a classe "orderDisplayTitles" e definindo o conteúdo
  const orderDisplayTitlesDiv = document.createElement("div");
  orderDisplayTitlesDiv.classList.add("orderDisplayTitles");
  orderDisplayTitlesDiv.textContent = `${baseType} ${countMeats()} ${meatWordGrammarCorrection()} ${extraMeatText()} ${countSalads()} ${saladWordGrammarCorrection()} ${extraSaladText()}`;

  //1 Meat (1 extra meat)

  // Criando a div com a classe "orderDisplayPrice" e definindo o conteúdo
  const orderDisplayPriceDiv = document.createElement("div");
  orderDisplayPriceDiv.classList.add("orderDisplayPrice");
  orderDisplayPriceDiv.textContent = shopItenValue;

  // Aninhando os elementos adequadamente
  orderLineDiv.appendChild(orderDisplayTitlesDiv);
  orderLineDiv.appendChild(orderDisplayPriceDiv);

  // Adicionando a div principal como um filho da div container
  orderDisplay.appendChild(orderLineDiv);
}

function printerButtonFunction() {
  // removeAllClickedClass();
}

/* brownBaguetteDiv.addEventListener("click", function (event) {
  if (!baseType.includes("Baguette")) {
    baseType += "Baguette";
  }
});
 */
printerButton.addEventListener("click", printerButtonFunction);
