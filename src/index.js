require('./style.css')
import sampleSize from 'lodash/sampleSize'
const words = require('./words.json')

function getPhrases(count) {
  return sampleSize(words, count).join(' ')
}

function getRandomInt(min=3, max=5) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function makeSentence(words) {
  return words.charAt(0).toUpperCase() + words.slice(1) + '.'
}

function getSentences(count) {
  const sentenceArray = new Array(count).fill().map( element => {
    const phraseCount = getRandomInt(6, 10)
    const phrases = getPhrases(phraseCount)

    return makeSentence(phrases)
  })
  return sentenceArray.join(' ')
}

function getParagraphElements(count) {
  return new Array(count).fill().map( (e, i) => {
    const sentenceCount = getRandomInt(3, 5)
    const sentences  = getSentences(sentenceCount)
    const paragraphElement = document.createElement('p')

    paragraphElement.innerHTML = sentences
    return paragraphElement
  })
}

document.getElementById('phrase-form').onsubmit = function(e) {
  e.preventDefault()
  const count = parseInt(document.getElementById('phrase-count').value, 10)
  const outputContainer = document.querySelector('#phrase-output')

  outputContainer.innerHTML = getPhrases(count)
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
