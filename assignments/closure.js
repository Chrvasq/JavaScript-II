// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function greet() {
  const firstName = 'Chris';
  function getLastName() {
    const lastName = 'Vasquez';
    return lastName;
  }
  return `${firstName} ${getLastName()}`;
}

console.log(greet());

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return () => count += 1;
};
// Example usage: const newCounter = counter();
const newCounter = counter();
console.log(newCounter()); // 1
console.log(newCounter()); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  const counter = {
    count: 0,
    increment: function() {
      return this.count += 1;
    },
    decrement: function() {
      return this.count -= 1;
    }
  }
  return counter;
};

const newCounterFactory = counterFactory();
console.log(newCounterFactory.increment()); // 1
console.log(newCounterFactory.increment()); // 2
console.log(newCounterFactory.decrement()); // 1
console.log(newCounterFactory.decrement()); // 0