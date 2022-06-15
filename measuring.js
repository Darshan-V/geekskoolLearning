import { buildGraph, goalOrientedRobot, findRoute, routeRobot, randomRobot, randomPick, runRobot } from './robot.js'

function compareRobots (robot1, memory1, robot2, memory2) {
  // Your code here
  let tR1 = 0
  let tR2 = 0
  for (let i = 0; i < 100; i++) {
    const state = VillageState.random()
    tR1 += countSteps(state, robot1, memory1)
    tR2 += countSteps(state, robot2, memory2)
  }
  console.log(`robot1 need ${tR1 / 100} steps per task`)
  console.log(`robot2 need ${tR2 / 100}`)
}
function countSteps (state, robot, memory) {
  for (let steps = 0; ; steps++) {
    if (state.parcels.length === 0) return steps
    const action = robot(state, memory)
    state = state.move(action.direction)
    memory = action.memory
  }
}

compareRobots(routeRobot, [], goalOrientedRobot, [])
