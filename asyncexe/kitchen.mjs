import stocks, { toppings_choice, time } from './example.mjs'

async function kitchen () {
  try {
    // time taken to perform this 1 task
    const customerPatience = 2000

    await time(customerPatience)
  } catch (error) {
    console.log(error.reason)
  } finally {
    console.log('Day ended, shop closed')
  }
}

// Trigger
kitchen()
