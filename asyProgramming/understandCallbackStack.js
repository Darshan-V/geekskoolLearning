


// function mySetTimeout(func,func2,ms){
//   setTimeout(()=> {func()
//   func2()}, ms)
// }
// mySetTimeout(() => { console.log('hi')},()=>{console.log("hello")}, 3000)

// setTimeout(a=> {console.log(' hhh')
// return 10
// }, 2000)

function temp (ms){
  return new Promise((resolve, reject)=> {
    setTimeout(()=> {
      resolve(['hi', 'hello'])
    }, ms)
  })
}
temp(3000)
.then((msg)=> console.log(msg[0]))
// .then((msg) => console.log(msg))
// .then((msg) => console.log(msg))