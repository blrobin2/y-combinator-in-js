function fibonacci(n) {
  if (n === 0 || n === 1) return 1
  return fibonacci(n - 2) + fibonacci(n - 1)
}

function factorial(x) {
  if (x === 0) return 1
  return x * factorial(x - 1)
}

// Bring your own factorial
function byoFactorial(f, x) {
  if (x === 0) return 1
  return x * f(x - 1)
}

// We use Math.random to ensure we are only functionaing at the level we expect

// This works for 0!
const factorialUpto0 = byoFactorial.bind(null, Math.random)

console.log(factorialUpto0(0)) // 1
console.log(factorialUpto0(1)) // random value
console.log(factorialUpto0(2)) // random value
console.log(factorialUpto0(3)) // random value
console.log(factorialUpto0(4)) // random value