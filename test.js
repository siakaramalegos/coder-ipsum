const coderIpsum = require('./index')

console.log("Invoking phrase with no number of words set...");
console.log(coderIpsum.phrase());

console.log("Invoking phrases of 5 words...");
console.log(coderIpsum.phrase(5));

console.log("Invoking sentence with no length set...");
console.log(coderIpsum.sentence());

console.log("Invoking sentence with 8 words...");
console.log(coderIpsum.sentence(8));

console.log("Invoking paragraph with no length set...");
console.log(coderIpsum.paragraph());

console.log("Invoking paragraph with 2 sentences...");
console.log(coderIpsum.paragraph(2));
