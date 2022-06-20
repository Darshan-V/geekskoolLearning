// Fill in the regular expressions

// /abc/	A sequence of characters
// /[abc]/	Any character from a set of characters
// /[^abc]/	Any character not in a set of characters
// /[0-9]/	Any character in a range of characters
// /x+/	One or more occurrences of the pattern x
// /x+?/	One or more occurrences, nongreedy
// /x*/	Zero or more occurrences
/*
/x?/	Zero or one occurrence
/x{2,4}/	Two to four occurrences
/(abc)/	A group
/a|b|c/	Any one of several patterns
/\d/	Any digit character
/\w/	An alphanumeric character (“word character”)
/\s/	Any whitespace character
/./	Any character except newlines
/\b/	A word boundary
/^/	Start of input
/$/	End of input
*/

// match number
const reg = /[a-z?A-Z]/g
const num = 'abC'
const matched = num.match(reg)
console.log(matched)

const myRe = /d(b+)d/g
const myArray = myRe.exec('cdbbdbsbz')
console.log(`The value of lastIndex is ${myRe.lastIndex}`)

// verify(/ca[rt]/,
//   ['my car', 'bad cats'],
//   ['camper', 'high art'])

// verify(/pr?op/,
//   ['pop culture', 'mad props'],
//   ['plop', 'prrrop'])

// verify(/ferr(et|y|ari)/,
//   ['ferret', 'ferry', 'ferrari'],
//   ['ferrum', 'transfer A'])

// verify(/ious\b/,
//   ['how delicious', 'spacious room'],
//   ['ruinous', 'consciousness'])

// verify(/\s[.,:;]/,
//   ['bad punctuation .'],
//   ['escape the period'])

// verify(/\w{7}/,
//   ['Siebentausenddreihundertzweiundzwanzig'],
//   ['no', 'three small words'])

// verify(/\b[^\We]+\b/i,
//   ['red platypus', 'wobbling nest'],
//   ['earth bed', 'learning ape', 'BEET'])

// function verify (regexp, yes, no) {
//   // Ignore unfinished exercises
//   if (regexp.source === '...') return
//   for (const str of yes) {
//     if (!regexp.test(str)) {
//       console.log(`Failure to match '${str}'`)
//     }
//   }
//   for (const str of no) {
//     if (regexp.test(str)) {
//       console.log(`Unexpected match for '${str}'`)
//     }
//   }
// }

// // quoting style
// // replacing all the dialog quotes with double quotes keeping the single quotes usend in words like it's
// const text = "'I'm the cook,' he said, 'it's my job.'"
// // Change this call.
// console.log(text.replace(/(^|\W)'|'(\W|$)/g, '$1"$2'))
// // → "I'm the cook," he said, "it's my job."

// // match javascript numbers

// const number = /^[+\-]?(\d+(\.\d*)?|\.\d+)([eE][+\-]?\d+)?$/

// // Tests:
// for (const str of ['1', '-1', '+15', '1.55', '.5', '5.',
//   '1.3e2', '1E-4', '1e+12']) {
//   if (!number.test(str)) {
//     console.log(`Failed to match '${str}'`)
//   }
// }
// for (const str of ['1a', '+-1', '1.2.3', '1+1', '1e4.5',
//   '.5.', '1f5', '.']) {
//   if (number.test(str)) {
//     console.log(`Incorrectly accepted '${str}'`)
//   }
// }
