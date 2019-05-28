const sampleSize =require('lodash/sampleSize')
const words = require('./words.json')

function getRandomInt(min = 3, max = 5) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Returns a String of a set of unformatted coder ipsum "words". Note that some words are more than one word like "Lil' Bobby Tables".
function phrase(numWords = getRandomInt(6, 10)) {
  return sampleSize(words, numWords).join(' ')
}

// Returns a String of a set of coder ipsum "words" in the format of a sentence - with capitalization and period punctionation. Note that some words are more than one word like "Lil' Bobby Tables".
function sentence(numWords = getRandomInt(6, 10)) {
  const unformatted = phrase(numWords)
  return unformatted.charAt(0).toUpperCase() + unformatted.slice(1) + '.'
}

// Returns a String of a set of coder ipsum "words" in the format of a paragraph with multiple sentences - with capitalization and period punctionation. Note that some words are more than one word like "Lil' Bobby Tables".
function paragraph(numSentences = getRandomInt(3, 5)) {
  const sentenceArray = new Array(numSentences).fill().map(element => {
    return sentence()
  })
  return sentenceArray.join(' ')
}

module.exports = {
  phrase,
  sentence,
  paragraph
}
