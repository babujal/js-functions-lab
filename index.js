/*
Exercise 1: maxOfTwoNumbers()

In this exercise, create a function named maxOfTwoNumbers. 
It should take two numbers as inputs and return the larger number. 
If they're equal, return either one.

Exercise 1 has been completed for you:
*/

const maxOfTwoNumbers = (x, y) => {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
  }
  
  console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
  ///////////////////////////////////////////////////////////////
  /*
Exercise 2: isAdult()

Write a function named isAdult. It should take an age (number) 
and return 'Adult' if the age is 18 or over and 'Minor' otherwise.

Example: isAdult(21) should return 'Adult'.

Complete the exercise in the space below:
*/
const isAdult = (age) => {
    if (age >= 18) {
        return 'Adult'
    }else{
        return 'Minor'
    }
}


console.log('Exercise 2 Result:', isAdult(6));
////////////////////////////////////////////////////////////////
/*
Exercise 3: isCharAVowel()

Write a function named isCharAVowel that takes a single character as 
an argument. It should return true if the character is a vowel and 
false otherwise. For the purposes of this exercise, the character 
y should not be considered a vowel.

Example: isCharAVowel('a') should return true.

Complete the exercise in the space below:
*/
const isCharAVowel = char => {         //if you only have one parameter the round braket are implicit so can be removed
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const charToLow = char.toLowerCase()

    for (let i = 0; i < vowels.length; i++) {
        if (vowels[i]==charToLow){
            return 'true'
        }
        
    }
    return false
}

console.log('Exercise 3 Result:', isCharAVowel("t"));

//////string.includes method////////////Only work with strings and on array
//If the expresion has one line and you return that one line curly braces and return keyword can be removed cause are implicit
const isCharVowels2 = char => 'aeiou'.includes(char.toLowerCase())

console.log('Exercise 3 Result:', isCharVowels2("E"))
/////////////////////////////////////////////////////////////
/*
Exercise 4: generateEmail()

Create a function named generateEmail. It should take two strings: 
a name and a domain. It should return a simple email address.

Example: generateEmail('johnsmith', 'example.com') 
should return 'johnsmith@example.com'.

Complete the exercise in the space below:
*/
const generateEmail = (user, domain) => {
    return `${user}@${domain}`
}


console.log('Exercise 4 Result:', generateEmail("dercamar1", "example.com"));

/*
Exercise 5: greetUser()

Define a function called greetUser. It should take a name and a 
time of day (morning, afternoon, evening) and return a personalized 
greeting.

Example: greetUser('Sam', 'morning') should return "Good morning, Sam!"

Complete the exercise in the space below:
*/
const greetUser = (name, time) => {
    if (time == 'morning') {
        return `Good morning ${name}!`
    }else if (time == 'afternoon') {
        return `Good afternoon ${name}!`
    }else if (time == 'evening') {
        return `Good evening ${name}!`
    }
    return 'Type a time format (Morning, Afternoon, Evening)'
}


console.log('Exercise 5 Result:', greetUser("Sam", "evening"));

/*
Exercise 6: maxOfThree()

Define a function, maxOfThree. It should accept three numbers 
and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/
const maxOfThree = (numOne, numTwo, numThree) => {
    let a
    let b
    if (numOne > numTwo) {
        a = numOne
    }else if (numTwo > numOne) {
        a = numTwo
    }
    if (numThree > a) {
        a = numThree
    }
    return a
}


console.log('Exercise 6 Result:', maxOfThree(12, 10, 2));

/*
Exercise 7: calculateTip()

Create a function called calculateTip. It should take two arguments: 
the bill amount and the tip percentage (as a whole number). 
The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/
const calculateTip = (total, percentage) => {
    const tip = (total * percentage) / 100
    return tip
}


console.log('Exercise 7 Result:', calculateTip(50, 20));

/*
Exercise 8: convertTemperature()

Write a function named convertTemperature. 
It takes two arguments: a temperature and a string representing the 
scale ('C' for Celsius, 'F' for Fahrenheit). 
Convert the temperature to the other scale.

Example: convertTemperature(32, 'C') should return 89.6 (Fahrenheit).
Example: convertTemperature(32, 'F') should return 0 (Celsius).

Complete the exercise in the space below:
*/
const convertTemperature = (temp, unit) => {

    const unitType = unit.toLowerCase()
    if (unitType == 'c') {
        return (temp * 9/5) + 32
    }
    else if (unitType == 'f') {
        return (temp - 32) * 5/9
    }
    return 'Wrong imput, please insert c for Celsius and f for Fahrenheit'
}


console.log('Exercise 8 Result:', convertTemperature(32, "C"));

/*
Exercise 9: basicCalculator()

Create a function named basicCalculator. 
It should take three arguments: two numbers and a string representing 
an operation ('add', 'subtract', 'multiply', 'divide'). 
Perform the provided operation on the two numbers. 
In operations where the order of numbers is important, 
treat the first parameter as the first operand and the 
second parameter as the second operand.

Example: basicCalculator(10, 5, 'subtract') should return 5.

Complete the exercise in the space below:
*/
const basicCalculator = (numOne, numTwo, operation) => {
    
}


console.log('Exercise 9 Result:', basicCalculator(10, 5, "subtract"));
