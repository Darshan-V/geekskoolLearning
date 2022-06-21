// callbacks

// big Oak nest- food cache
import { bigOak, defineRequestType } from './crow-tech.js'

defineRequestType('note', (nest, content, source, done) => {
  console.log(`${nest.name} reveived note: ${content}`)
  done() // callback function, when it must call when thr request is done
})
setTimeout(() => console.log('something'), 500)

bigOak.readStorage('food caches', caches => {
  const firstCache = caches[0]
  bigOak.readStorage(firstCache, info => {
    console.log(info)
  })
})

// Asynchronous programming - relation between now and later
// any function that calls a function that works asynchronously, must be itself asynchronous
// ==> by using a callback or similar metohd to deliver the result

bigOak.send('Cow Pasture', 'note', "Let's caw loudly at 7PM",
  () => console.log('Note delivered.'))
