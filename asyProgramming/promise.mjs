import { bigOak } from './crow-tech.js'
const some = Promise.resolve(15)
some.then(value => console.log(`Got ${value}`))
function storage (nest, name) {
  return new Promise(resolve => {
    nest.readStorage(name, result => resolve(result))
  })
}

storage(bigOak, 'enemies')
  .then(value => console.log('Got', value))

// console.log('------------------------------------------------------------------->')
// new Promise((_, reject) => reject(new Error('Fail')))
//   .then(value => console.log('Handler 1'))
//   .catch(reason => {
//     console.log('Caught failure ' + reason)
//     return 'nothing'
//   })
//   .then(value => console.log('Handler 2', value))
