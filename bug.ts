function add(a: number, b: number): number {
  return a + b;
}

let result = add("10", 20); // Type error is not thrown at compile time
console.log(result); // Output: 1020