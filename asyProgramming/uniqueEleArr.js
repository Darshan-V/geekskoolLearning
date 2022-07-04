function uniqueEle (arr) {
  arr.sort()
  console.log(arr)
  let b = []
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        b = arr.pop(arr[i])
      }
    }
  }
  return arr
}
console.log(uniqueEle([4, 2, 2, 3, 1, 1, 5, 5]))
