function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

let result = add(10, 20); // Correct addition
console.log(result); // Output: 30

try {
  let result2 = add("10", 20); // Throws an error now
  console.log(result2);
} catch (error) {
  console.error(error); // Output: Error: Both arguments must be numbers
}
