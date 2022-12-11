const sectionDiv = document.querySelector('.section-div');
const sectionDivParagraphs = sectionDiv.querySelectorAll('p')
const bodyStyle = getComputedStyle(document.body)
const bodyBackgroundColor = bodyStyle.backgroundColor;

for (let p of sectionDivParagraphs) {
  p.style.backgroundColor = bodyBackgroundColor;
}

