// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
console.log(colors.push("indigo"))

// a) Your answer: The terminal will return the value 5.
// b) Verify and explain: My answer is correct.
    // The .push() command adds an element to the end of the array. In the terminal, it returns the length of the new array. The length of an array is the number of elements in the array.

// --------------------1) What will this log?

const cohort = "LEARN 2023"
console.log(cohort.length)

// a) Your answer: The terminal will return the value 10.
// b) Verify and explain: My answer is correct.
    // The .length command will return the number of characters in the string.

// --------------------2) What will this log?

const greeting = "Hello World!"
console.log(greeting[4])

// a) Your answer: The terminal will return the value o.
// b) Verify and explain: My answer is correct.
    // The brackets at the end of the variable refers to a specifc index. In this command, greeting[4] refers to the character in the variable located at position 4. Strings and arrays are zero-indexed, meaning the first character or element starts at the index of zero and the index of each character or element after procedurally increases by one.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
console.log(languages[index])

// a) Your answer: The terminal will return the value "Ruby".
// b) Verify and explain: My answer was close, but not completely correct. It was the correct element, but it was displayed as Ruby.
    //This command instructs the terminal to return the element in the array at the indexed position indicated by the variable. Arrays are zero-indexed, so the indexed position of "Ruby" is 1.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: The terminal will display an error.
// b) Verify and explain: My answer is correct. It displayed the error: TypeError: weekendDays.toUpperCase is not a function.
    // The built-in method .toUpperCase() is for strings, not arrays.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: The terminal will display number.
// b) Verify and explain: My answer is correct.
    // The length of the array is 4. The data type for this value is number.
