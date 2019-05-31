require('./style.css')
import {phrase, paragraph, madLib} from 'coder-ipsum'

function getParagraphElements(count) {
  return new Array(count).fill().map( (e, i) => {
    const paragraphElement = document.createElement('p')
    paragraphElement.innerHTML = paragraph()
    return paragraphElement
  })
}

function getMadLibParagraphElements(count) {
  return new Array(count).fill().map((e, i) => {
    const paragraphElement = document.createElement('p')
    paragraphElement.innerHTML = madLib()
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

  // Clear output and then replace with new paragraphs
  outputContainer.innerHTML = ""

  paragraphNodes.forEach(element => {
    outputContainer.appendChild(element)
  });
}

document.getElementById('madlibs-form').onsubmit = function (e) {
  e.preventDefault()
  const count = parseInt(document.getElementById('madlibs-count').value, 10)
  const paragraphNodes = getMadLibParagraphElements(count)
  const outputContainer = document.querySelector('#madlibs-output')

  // Clear output and then replace with new paragraphs
  outputContainer.innerHTML = ""

  paragraphNodes.forEach(element => {
    outputContainer.appendChild(element)
  });
}
