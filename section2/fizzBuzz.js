const maxCount = 100;

for (i = 1; i <= maxCount; i++) {
  if (i % 5 === 0 && i % 3 === 0) {
    console.log("FizzBuzz")
  } else if (i % 5 === 0 && i % 3 !== 0) {
    console.log("Buzz")
  } else if (i % 3 === 0) {
    console.log("Fizz")
  } else {
    console.log(i)
  }
}