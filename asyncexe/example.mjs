const stocks = {
  Fruits: ['strawberry', 'grapes', 'banana', 'apple'],
  liquid: ['water', 'ice'],
  holder: ['cone', 'cup', 'stick'],
  toppings: ['chocolate', 'peanuts']
}
export default stocks

const isShopOpen = true
const order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      setTimeout(() => {
        resolve(work())
      }, time)
    } else if (!isShopOpen) {
      reject(console.log('shop closed'))
    } else {
      resolve(work())
    }
  })
}

function makeOrder () {
  order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
    // step 2
    .then(() => {
      return order(0, () => {
        console.log('production has started')
      })
    })

    // step 3
    .then(() => {
      return order(2000, () => console.log('Fruit has been chopped'))
    })

    // step 4
    .then(() => {
      return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
    })

    // step 5
    .then(() => {
      return order(1000, () => console.log('start the machine'))
    })

    // step 6
    .then(() => {
      return order(2000, () => console.log(`ice cream placed on ${stocks.holder[1]}`))
    })

    // step 7
    .then(() => {
      return order(3000, () => console.log(`${stocks.toppings[0]} as toppings`))
    })

    // Step 8
    .then(() => {
      return order(2000, () => console.log('Serve Ice Cream'))
    })

    .catch(() => {
      console.log('customers left')
    })

  // .finally(() => {
  //   console.log('end of day')
  // })
}

async function improvedMakeOrder () {
  try {
    await order(2000, () => console.log(`${stocks.Fruits[0]} was selected`))
    await order(2000, () => console.log('production has started'))
    await order(3000, () => console.log('fruit has been chopped'))
    await order(2000, () => console.log(`select base ${stocks.liquid[0]}`))
    await order(1000, () => console.log('start the machine'))
    await order(2000, () => console.log(`icecream type-> ${stocks.holder[2]}`))
    await order(1000, () => console.log(`toppings ${stocks.toppings[0]}`))
    await order(2000, () => console.log('ready'))
  } catch (error) {
    console.log('closed!')
  }
}

export function toppings_choice () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(console.log('which topping would you love?'))
    }, 3000)
  })
}
export function time (ms) {
  return new Promise((resolve, reject) => {
    if (isShopOpen) {
      // setTimeout(makeOrder, ms)
      setTimeout(improvedMakeOrder, ms)
    } else {
      const error = {
        why: 'idontknow'
      }

      reject(error)
    }
  })
}
