let createCounter = function (init) {
  let count = init;

  const increment = () => ++count;
  const decrement = () => --count;
  const reset = () => ++count;
  return {
    increment,
    decrement,
    reset,
  };
};

let counter = createCounter(10);

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.reset());
console.log(counter.decrement());
