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

// For currying ease:
const factorialFactory = f => x => {
  if (x === 0) return 1
  return x * f(x - 1)
}

// We use Math.random to ensure we are only functionaing at the level we expect

// This works for 0!
// const factorialUpto0 = byoFactorial.bind(null, Math.random)
const factorialUpTo0 = factorialFactory(Math.random)


console.log('factorialUpTo0(0) => ', factorialUpTo0(0)) // 1
// console.log(factorialUpto0(1)) // random value
// console.log(factorialUpto0(2)) // random value
// console.log(factorialUpto0(3)) // random value
// console.log(factorialUpto0(4)) // random value

// 1!
// const factorialUpto1 = byoFactorial.bind(null, factorialUpto0)
const factorialUpTo1 = factorialFactory(factorialUpTo0)

console.log('factorialUpTo1(0) => ', factorialUpTo1(0))
console.log("factorialUpTo1(1) => ", factorialUpTo1(1))

// 2!
const factorialUpTo2 = factorialFactory(factorialUpTo1)

console.log("factorialUpTo2(0) => ", factorialUpTo2(0))
console.log("factorialUpTo2(1) => ", factorialUpTo2(1))
console.log("factorialUpTo2(2) => ", factorialUpTo2(2))

// Because we're passing a function that works for the previous value, by binding to the next one, we always have one that returns the expected value until we go past the number of times we've bound, and then it uses Math.random at the base instead of our existing function. So as long as we can infinitely pass the previous function, we'll never hit Math.random

const factorialUpto10 = factorialFactory(
  factorialFactory(
    factorialFactory(
      factorialFactory(
        factorialFactory(
          factorialFactory(
            factorialFactory(
              factorialFactory(
                factorialFactory(
                  factorialFactory(
                    factorialFactory(Math.random)
                  )
                )
              )
            )
          )
        )
      )
    )
  )
)

console.log('factorialUpTo10(10) => ', factorialUpto10(10)) // 3628800
console.log('factorialUpTo1o(11) => ', factorialUpto10(11)) // some random value