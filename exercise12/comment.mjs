import { parse } from './exercise12.mjs'

function skipSpace (string) {
  const first = string.match(/^(\s|#.*)*/)

  return string.slice(first[0].length)
}

console.log(parse('# hello\nx'))

console.log(parse('a # one\n   # two\n()'))
