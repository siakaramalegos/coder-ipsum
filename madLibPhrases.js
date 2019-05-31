// Available categories:
// noun, language, person, adjective, verb, gerund, phrase, abbreviation
// combine nouns and languages for now
const sample = require('lodash/sample')
const words = require('./wordsSorted')

function noun() {
  return sample(words.noun)
}

function language() {
  return sample(words.language)
}

function person() {
  return sample(words.person)
}

function adjective() {
  return sample(words.adjective)
}

function verb() {
  return sample(words.verb)
}

function gerund() {
  return sample(words.gerund)
}

function phrase() {
  return sample(words.phrase)
}

function abbreviation() {
  return sample(words.abbreviation)
}

const templates = [
  () => `If we ${verb()} the ${noun()}, we can get to the ${abbreviation()} ${noun()} through the ${adjective()} ${abbreviation()} ${noun()}!`,
  () => `We need to ${verb()} the ${adjective()} ${abbreviation()} ${noun()}!`,
  () => `Try to ${verb()} the ${abbreviation()} ${noun()}, maybe it will ${verb()} the ${adjective()} ${noun()}!`,
  () => `You can't ${verb()} the ${noun()} without ${gerund()} the ${adjective()} ${abbreviation()} ${noun()}!`,
  () => `Use the ${adjective()} ${abbreviation()} ${noun()}, then you can ${verb()} the ${adjective()} ${noun()}!`,
  () => `The ${abbreviation()} ${noun()} is down, ${verb()} the ${adjective()} ${noun()} so we can ${verb()} the ${abbreviation()} ${noun()}!`,
  () => `So ${gerund()} the ${noun()} won't do anything, we need to ${verb()} the ${adjective()} ${abbreviation()} ${noun()}!`,
  () => `I'll ${verb()} the ${adjective()} ${abbreviation()} ${noun()}, that should ${noun()} the ${abbreviation()} ${noun()}!`
]

module.exports = function madLib() {
  return sample(templates)()
}
