// ASSESSMENT 1: Coding Practical Questions

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Reminder: Ensure you are in the correct directory
// Run the file with the following command: $ node code - challenges.js

// --------------------INSTRUCTOR EXAMPLE: Create a conditional statement that evaluates two strings and determines which of the strings has more characters. Use the two sets of test variables provided.

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit1 = "cherry"
const fruit2 = "kiwi"
// Expected outcome: "cherry"

// Pseudo code:
    // two variables
        // each variable is a const - value cannot be modified, updated, or reassigned
        // there are two sets of the same const
            // will need to pseudo code one of the sets before running the code
    // create a decision tree using if/else
    // .length built-in-method to return number of characters in the string
    // return the following outputs:
        // fruit1 only if it has more characters than fruit2
        // fruit2 only if it has more characters than fruit1
        // "the fruit have the same number of characters" only if fruit1 and fruit2 have the same number of characters
        // "error" for all other scenarios

// Create a decision tree using if/else
    // Evaluate the number of characters of each variable using the .length built-in-method
    // The initial check utilizes a relational operator to evaluate whether fruit1 has more characters than fruit2
if(fruit1.length > fruit2.length) {
    // Use console.log to return fruit1 in the terminal only if fruit1 has more characters than fruit2
    console.log(fruit1)
// If the previous evaluation is false, proceed to evaluate whether fruit1 has fewer characters than fruit2
} else if (fruit1.length < fruit2.length) {
    // Return fruit2 only if fruit1 has fewer characters than fruit2
    console.log(fruit2)
// If the previous evaluation is false, proceed to evaluate whether fruit1 and fruit2 have the same number of characters
    // Utilize a strict equality operator ===
} else if (fruit1.length === fruit2.length) {
    // Return "the fruit have the same number of characters" only if fruit1 and fruit2 have the same number of characters
    console.log("the fruit have the same number of characters")
// For all other scenarios, use else as a catch all
} else {
    // Return "error" for all other scenarios
    console.log("error")
}


// --------------------1) Create the code that will combine the two arrays and return the length using the test variables provided below.

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

// Pseudo code:
    // two variables
        // each variable is a const - value cannot be modified, updated, or redeclared
        // each variable is an array
            // each element in the array is the same data type - numbers
    // will need to combine both arrays
        // as the variables are const, will need to use the accessor .concat() built-in-method
            // .concat() does not modify, update, or redeclare the data
    // .length to return the length of the new array

// Use console.log() to return the output into the terminal
    // Use .concat to combine the two arrays
    // Then use .length to return the length of the combined array
console.log(padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns).length)

// --------------------2) Create the code that will reverse the letters of a string using the test variable provided below.

const currentCohort = "LEARN 2023"
// Expected output: "3202 NRAEL"

// Pseudo code:
    // the variable is a const - value cannot be modified, udpated, or redeclared
    // .split() to convert the string into an array
    // .reverse() to reverse the order of each character
    // .join() to convert the array into a string

// console.log to return into the terminal
    // Use .split("") to convert the string into an array
        // "" separates each character into a different string
    // Use .reverse() to reverse the order of the array
    // Use .join("") to convert the array back into a string
        // "" converts each string into a character before merging all the characters into a single string
console.log(currentCohort.split("").reverse().join(""))

// --------------------3) Create the code that will log only the odd numbers from the array using the test variable provided below.

const stockExchange = [13, 34, -4, 42, 5, -5, 10, 27, 42, 10]
// Expected output: 13 5 -5 27

// Pseudo code:
    // the variable is a const - cannot be modifed, udpated, or redeclared
    // Use a modulo (%) to evaluate whether a number is odd
        // A positive number is odd when the statement (number%2 === 1) is true
        // A negative number is odd when the statement (number%2 === -1) is true
    // Use a loop to procedurally evaluate whether each number in the array is odd
        // Use console.log() to return the value only if the number is odd

// Setup a for loop
    // let i = 0 so the loop begins with the first position in the array
        // arrays are zero-indexed
    // The value of stockExchange.length is one greater than the index of the last datum in the array
        // i < stockExchange.length allows the loop to stop once the last datum in the array has been evaluated
    // i++ tells the loop to increase i by one for each iteration of the loop
        // Can use i = i + 1 instead of i++
for(let i = 0; i < stockExchange.length; i++) {
    // Setup a conditional statement for each iteration of the loop
        // The value of stockExchange[i] is the element positioned at index [i] of the array
        // Use the logical OR statement || to separate conditions to be evaluated
            // The logical OR statement allows for only one condition to be true in order for the conditional statement to evaluate as true
        // For positive numbers, a number is odd if stockExchange[i]%2 === 1
        // For negative numbers, a number is odd if stockExchange[i]%2 === -1
    if (stockExchange[i]%2 === 1 || stockExchange[i]%2 === -1) {
        // Return the element in the terminal only if it is ODD
        console.log(stockExchange[i])
    }
}