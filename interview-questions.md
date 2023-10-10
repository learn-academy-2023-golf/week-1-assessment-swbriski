# ASSESSMENT 1: Tech Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview. If you don't know the answer a good tip is to answer a simpler version of the question.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

Type your initials here to confirm you read the instructions: SB

INSTRUCTOR EXAMPLE: What is a conditional statement?

Your answer: A conditional statement is a logical evaluation. A command or instruction is executed only if the condition is satisfied.

Researched answer: JavaScript uses the keyword if to run conditional statements. Each conditional statement must begin with an if statement. The if statement is the first condition to be evaluated. Else if statements are additional logical evaluations that can be evaluated after the if statement, but the code stops running once a condition is met. Else statements are catch all commands that are executed for any scenarios that do not satisfy an if or else if statement.

1. What is git? What is the difference between git and Github?

Your answer: git is local. Github is remote.

Researched answer: git is a version control tool. Version control allows for the managing and tracking of changes to code. As each iteration of a project is labeled, developers can revisit these iterations as needed.

GitHub is an online platform that uses git. GitHub allows developers to store and share code, test and deploy applications, and collaborate with teams on projects.

2. What is the difference between an array's index and its value?

Your answer: The value of an array is the collection of elements it contains.

var rainbowColors = ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"]

For example, the value for the array rainbowColors would be ["Red", "Orange", "Yellow", "Green", "Blue", "Indigo", "Violet"].

The index of an array's element is its position in the array. Array's are zero-indexed, meaning indexes begin at 0 and procedurally increase by 1 for each element thereafter. In this case, "Green" would have an index of 3.

An array can have elements that are also arrays. These arrays are treated as a single element and indexed the same way as other elements.

Researched answer: If an index does not exist, its output will be undefined.

By referencing an array and an index, the value of the array's elements can be redefined.

3. Compare and contrast arrays and strings. Please include ways in which they are the same and ways in which they are different.

Your answer: A string is a primitive data type and is a collection of characters. An array is a combined data type and is a collection of data elements. A string can be converted into an array and an array can be converted into a string. Both are zero-indexed and have a length. Some built-in methods are designed only for strings. Some built-in methods are designed only for arrays.

Researched answer: An array is actually considered a composite data type, not a combined data type. Composite data types are collections of other data types. Strings are denoted by quotation marks ('' or ""). Arrays are denoted by brackets ([]).

4. STRETCH: What are the four pillars of object oriented programming?

Your answer: I do not know.

Researched answer: Object Oriented Programming (OOP) is a computer programming model centralized around objects and classes. Objects are defined by their attributes and what they can do. Classes are broad categories of objects. The four pillars of OOP are abstraction, polymorphism, inheritance, and encapsulation.

Abstraction is the process of only showing the necessary details to the user or object.

Polymorphism allows a specific routine to use different variables at different times. This allows different objects to respond in unique ways to the same method.

Inheritance allows for the reusability of code. It is the extension of attributes and behaviors from a parent class to a child class.

Encapsulation is the process of enclosing data by containing it within an object. Important data is hidden within the object. Only selected information is exposed to other objects and the external world.

## Looking Ahead: Terms for Next Week

Research and define the following terms. Hint: use the syllabus!

1. Higher Order Functions: A Higher Order Function is a built-in method that takes in a function as an argument. They are typically designed for arrays and ideal for iteration.

2. Jest: Jest is a JavaScript testing framework. By using files called dependencies, developers become able to write and run tests for their code.

3. Objects: An object is a key:value pair stored in curly braces. Keys are of the symbol data type. Values can be of any valid JavaScript data type. Objects can contain functions. Objects can also be single elements of arrays.
