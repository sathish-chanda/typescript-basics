"use strict";
let x = 5; // TypeScript infers the type of x to be number
let y = 10; // Explicitly declaring the type of y to be number
let z = "Alice"; // Declaring a variable of type string
let a;
let b;
// b = 12 // Error: Type 'number' is not assignable to type 'string[]'
// b = "Hello!" as any // This totally contradicts the use of typescript in the first place. It means we are saying the typescript compiler don't do the type checking we got you covered. DON'T EVER DO THIS MISTAKE.
let c;
c = "Hello";
c = 4343;
