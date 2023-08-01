// Obtendo uma lista de todas as shopItenElements com a classe "shopIten"
var shopItenElements = document.querySelectorAll(".shopIten");

// Adicionando o evento de clique a cada div
shopItenElements.forEach(function(shopItenParameter) {
  shopItenParameter.addEventListener("click", function() {
    this.classList.toggle("clicked");
  });
});

