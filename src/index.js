require('./style.css')
import {phrase, paragraph} from 'coder-ipsum'

function getParagraphElements(count) {
  return new Array(count).fill().map( (e, i) => {
    const paragraphElement = document.createElement('p')
    paragraphElement.innerHTML = paragraph()
    return paragraphElement
  })
}

document.getElementById('phrase-form').onsubmit = function(e) {
  e.preventDefault()
  const count = parseInt(document.getElementById('phrase-count').value, 10)
  const outputContainer = document.querySelector('#phrase-output')

  outputContainer.innerHTML = phrase(count)
}

document.getElementById('paragraph-form').onsubmit = function (e) {
  e.preventDefault()
  const count = parseInt(document.getElementById('paragraph-count').value, 10)
  const paragraphNodes = getParagraphElements(count)
  const outputContainer = document.querySelector('#paragraph-output')

  paragraphNodes.forEach(element => {
    outputContainer.appendChild(element)
  });
}
