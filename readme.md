# coder-ipsum

Coder Ipsum is a programming-inspired ipsum generator. You can see it live at [siakaramalegos.github.io/coder-ipsum/](https://siakaramalegos.github.io/coder-ipsum/). This npm package exposes the API to use in your projects directly.

# Installing

```
npm install coder-ipsum
```

# Usage

## Importing

ES5:

```javascript
const phrase = require('coder-ipsum').phrase
const sentence = require('coder-ipsum').sentence
const paragraph = require('coder-ipsum').paragraph
```

ES6:

```javascript
import { phrase, sentence, paragraph } from 'coder-ipsum'
```

## API

The API includes 3 functions:

- `phrase` - Returns a String of a set of unformatted coder ipsum "words". Optionally input the number of "words" to include.
- `sentence` - Returns a String of a set of coder ipsum "words" in the format of a sentence - with capitalization and period punctionation. Optionally input the number of "words" to include.
- `paragraph` - Returns a String of a set of coder ipsum "words" in the format of a paragraph with multiple sentences, including capitalization and period punctionation. Optionally input the number of sentences to include. Sentences will have 6-10 "words" each.

**Note that some "words" are more than one word like "Lil' Bobby Tables".**

Both `phrase` and `sentence` will randomly pick 6-10 "words" if no input is given. `paragraph` will randomly generate 3-5 sentences within the paragraph if no input is given.

Examples:

```javascript
const myPhrase = phrase(4)
// => JQuery pairing tech debt queue

const mySentence = sentence(7)
// => XML perf matters public Safari transpile tabs vs spaces OTP.

const myParagraph = paragraph(2)
// => Byzantine fault tolerance S3 homebrew spy object library callback hell flexbox idiosyncratic contexts scale gradle. Mock dynamic types GraphQL domain specific language modern bundle terminal proof of stake AWS responsive.
```
