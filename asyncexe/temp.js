
const a = new Promise(resolve => {
  resolve()
})

const c = a.then(() => {
  console.log('1st stage')
  return 5
  console.log('2nd stage')
}).then(number => console.log(number))
