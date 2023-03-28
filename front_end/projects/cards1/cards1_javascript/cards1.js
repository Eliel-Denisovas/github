// Efects
// Error red light
const cardLeft = document.getElementById('cardLeft');

cardLeft.addEventListener('click', function onClick(event) {
  const box = document.getElementById('containerCards');
});

function correctChoice() {
  let element = document.getElementById('containerCards');
  element.classList.add("correctChoice");
  cardLeft.classList.add("glassHoverReverse");
}
