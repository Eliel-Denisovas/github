let pedido = "Baguette";
let shopItenValue = 5.30;
let saladsClicked = 0;
const shopItenElements = document.querySelectorAll(".shopIten");
const breadItensDivs = document.querySelectorAll("#breadItensDiv .shopItem");
const meatItens = document.querySelectorAll("#meatItensDiv .shopItem");

const ceaserWrapDiv = document.getElementById("ceaserWrap");
const jalapenoWrapDiv = document.getElementById("jalapenoWrap");
const tunaPiadinaDiv = document.getElementById("tunaPiadina");

const plainBaguetteDiv = document.getElementById("plainBaguette");
const plainWrapDiv = document.getElementById("plainWrap");
const plainSandwichDiv = document.getElementById("plainSandwich");
const brownBaguetteDiv = document.getElementById("brownBaguette");
const brownWrapDiv = document.getElementById("brownWrap");
const brownSandwichDiv = document.getElementById("brownSandwich");
const plainBapDiv = document.getElementById("plainBap");
const multiseedBapDiv = document.getElementById("multiseedBap");
const italianBreadDiv = document.getElementById("italianBread");
const betrootBreadDiv = document.getElementById("betrootBread");
const plainHotDogDiv = document.getElementById("plainHotDog");
const franchHotDogDiv = document.getElementById("franchHotDog");

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
    createOrderText();
  });
});

// Selecione todos os elementos que possuem a classe desejada (substitua 'cliked' pelo nome da classe que você deseja remover)
function removeClickedClass() {
  const clickedClassElements = document.querySelectorAll(".cliked");
  clickedClassElements.forEach((element) => {
    element.classList.remove("clicked");
  });
  //location.reload();
}

plainBaguetteDiv.addEventListener("click", function (event) {});

function countSalads() {
  return document.querySelectorAll("#saladsItensDiv .clicked").length;
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

function extraSaladText() {
  let extraSaladNumber;
  if (countSalads() > 3) {
    extraSaladNumber = countSalads() - 3;
    return `(${extraSaladNumber} extra)`;
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
  orderDisplayTitlesDiv.textContent = `1 ${pedido} ${countSalads()} ${saladWordGrammarCorrection()} ${extraSaladText()} Meat:1 `;

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
  // removeClickedClass();
}

/* brownBaguetteDiv.addEventListener("click", function (event) {
  if (!pedido.includes("Baguette")) {
    pedido += "Baguette";
  }
});
 */
printerButton.addEventListener("click", printerButtonFunction);
