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