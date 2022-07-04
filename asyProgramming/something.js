function a() {
  return 10
}

setTimeout(() => {
  const val = a()
  const bVal = b(val)
}, 3000)

function b(x) {
  return x + 20
}
