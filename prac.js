// Hoisting is a behavior in JavaScript where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. It means you can use a variable or function before it's declared in the code. However, it's important to understand that only the declarations are hoisted, not the initializations.

// Here's an example of hoisting in JavaScript:

// javascript
// Copy code
// console.log(x); // Outputs: undefined
// var x = 10;

// // This is essentially equivalent to:
// // var x;
// // console.log(x);
// // x = 10;
// In this example:

// We first attempt to console.log(x) before x is actually declared or initialized. This doesn't result in an error; instead, it logs undefined because x is hoisted to the top of its scope.

// The variable x is declared and initialized with the value 10 after the console.log statement.

// Function declarations are also hoisted. Here's an example with a function declaration:

// javascript
// Copy code
// foo(); // Outputs: "Hello, World!"

// function foo() {
//     console.log("Hello, World!");
// }

// // This is essentially equivalent to:
// // function foo() {
// //     console.log("Hello, World!");
// // }
// // foo();
// In this example:

// We call the foo function before it's defined in the code. This works because the function declaration is hoisted to the top of its scope.

// The foo function is defined later in the code, but it doesn't matter because the declaration was hoisted.

// It's important to note that variable declarations using let and const are also hoisted but are not initialized with a value (undefined) until they are reached in the code. This is known as the "temporal dead zone."

// Here's an example with let:

// javascript
// Copy code
// console.log(y); // Throws a ReferenceError
// let y = 20;
// In this case, you'll get a ReferenceError because y is in the temporal dead zone until it's declared.





