# TypeScript String and Number Addition

This repository demonstrates a potential issue in TypeScript where string and number addition is allowed, leading to unexpected behavior.  The compiler does not throw a type error, resulting in implicit type coercion that might not be intended.

## Bug Description

In TypeScript, when a string is added to a number, instead of throwing an error, it performs string concatenation. This behavior differs from strict type systems where such an operation would result in a compile-time error.

## Reproduction

1. Clone the repository.
2. Compile and run the TypeScript code in `bug.ts`.

You will observe that the addition operation `add("10", 20)` produces the unexpected output `"1020"`, demonstrating the string concatenation rather than numeric addition.

## Solution

The `bugSolution.ts` file provides a solution by implementing stricter type checking to prevent this type of addition.

## Proposed Improvements

The TypeScript compiler could be improved to produce compile-time errors when attempting to add a string and a number to enforce type safety and prevent unexpected behavior. This would enhance type correctness and reduce runtime errors.
