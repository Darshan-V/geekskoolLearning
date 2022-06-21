// callbacks

// big Oak nest- food cache
import { bigOak } from './crow-tech.js'

setTimeout(() => console.log('something'), 500)

bigOak.readStorage('food caches', caches => {
  const firstCache = caches[0]
  bigOak.readStorage(firstCache, info => {
    console.log(info)
  })
})

// Asynchronous programming - relation between now and later
