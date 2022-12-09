
const tagsContentsArray = [
  {tag: 'p', tagContent: 'Frase 1'},
  {tag: 'div', tagContent: 'Frase 2'},
  {tag: 'section', tagContent: 'Frase 3'},
  {tag: 'footer', tagContent: 'Frase 4'},
];

function addElements (tagType, tagContent) {
  const container = document.querySelector('.container')
  const newCreation = document.createElement(tagType)
  const newElement = container.appendChild(newCreation)
  newElement.innerHTML += tagContent
}

for (let i = 0; i < 4; i++) {
  const tag = tagsContentsArray[i].tag;
  const tagContent =  tagsContentsArray[i].tagContent;
  addElements(tag, tagContent );
}