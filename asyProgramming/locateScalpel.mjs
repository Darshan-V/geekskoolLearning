import { anyStorage } from './11_async.mjs'
import { bigOak } from './crow-tech.mjs'
async function locateScalpel (nest) {
  let cur = nest.name
  for (; ;) {
    const next = await anyStorage(nest, cur, 'scalpel')
    if (next === cur) {
      return cur
    }
    cur = next
  }
}

async function locateScalpel2 (nest) {
  function loop (cur) {
    return anyStorage(nest, cur, 'scalpel').then(next => {
      if (next === cur) return cur
      return loop(next)
    })
  }
  return loop(nest.name)
}

locateScalpel(bigOak).then(console.log)
