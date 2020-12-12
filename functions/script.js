// Dec. 12, 2020 - Foundations 5
// Functions
// Lightning Exercise
// I Love JavaScript
// Define a function that logs the string "I love JavaScript!" to the console.
// Execute, or call, the function.
function loveJS () {
    console.log("I love JavaScript!");
}

loveJS()

// Lightning Excercise
// Write a function that accepts two parameters of name and destination.
function funky (name, destination) {
// The function should log a sentence to the console about where that person wants to go.
    console.log(`${name} is excited to go to ${destination} when the pandemic is over.`);
};

// Call the function three different times with different parameters. Example: if you pass in "Jessica" and "Mount Fuji" as parameters, you should see the sentence "Jessica would love to visit Mount Fuji." logged to the console.
funky("Jessica", "Mount Fuji");
funky("Dave", "Costa Rica");
funky("Mom", "Washington");

// Lightning Exercise
// Taco Truck
// Write a function to represent a taco truck's ordering system. The function should accept two parameters: typeOfShell and topping. (Both will be strings.)
function tacoOrder (typeOfShell, topping) {
// Inside the function, use string interpolation to build a sentence that announces the taco is ready. Use the information the customer passed in. For example: "Your soft shell taco with chicken is ready!"
    let orderReady = `Your ${typeOfShell} taco with ${topping} is ready!`;
// Return the taco sentence and store the returned sentence in a variable.
    return orderReady;
}

let myOrder = tacoOrder("jalapeno tortilla", "shrimp");
// Execute the function.

// Log the returned sentence to the console.
console.log(myOrder)

// 1. Calculator
// Write a function called add. It should accept two numbers as parameters and log their sum to the console.
function add (a, b) {
    console.log(a+b);
}
const a = 50;
const b = 33;
add(a, b);
// Write a function called subtract. It should accept two numbers as parameters and log the difference between the first and second number to the console.
function subtract (a, b) {
    console.log(a-b);
}
subtract(a, b);
// Write a function called multiply. It should accept two numbers as parameters and log their product to the console.
function multiply (a, b) {
    console.log(a*b);
}
multiply(a, b);
// Write a function called divide. It should accept two numbers as parameters, divide the first number by the second number, and log the result to the console.
function divide (a, b) {
    console.log(a/b);
}
divide(a, b);
// Call each function three times with different parameters.

// 2. Calculator Refactor
// Refactor your previous exercise so that each calculator function returns the result of its calculations. You should not have any console.logs inside your functions.
function add2 (a, b) {
    return (a+b);
}

function subtract2 (a, b) {
    return (a-b);
}

function multiply2 (a, b) {
    return (a*b);
}

function divide2 (a, b) {
    return (a/b);
}

// When you execute your calculator functions, store each result in a new variable and log the variable to the console. The console.logs should now be outside the scope of your functions.
const sum = add2(a,b);
console.log(sum);
const diff = subtract2(a,b);
console.log(diff);
const mltp = multiply2(a,b);
console.log(mltp);
const div = divide2(a,b);
console.log(div);

// 3. Greetings Pt. 2
// Revisit the greetings exercise you did in the conditionals chapter, where you logged a greeting to the console based on the person's preferred language.
// Write a function that accepts two parameters: name and language.
function greetings (name, language) {
// If the person's preferred language is English, the function should print "Hello, [name]!" to the console.    
    if (language === "English") {
        console.log(`Hello, ${name}!`);
    } 
// If the person's preferred language is Spanish print "Hola, [name]!" to the console.   
    else if (language === "Spanish") {
        console.log(`Hola, ${name}`);
    }
// If their preferred language is French, print "Bonjour, [name]!" to the console.   
    else if (language === "French") {
        console.log(`Bonjour, ${name}`);
    }
}
greetings("Sarah", "English")
greetings("Maria", "Spanish")
greetings("Adrianna", "French")

// 4. Sandwich Maker
// Write a function that accepts three parameters: breadType (a string), sandwichName, and isToasted (a boolean).
function makeMeASandwich (breadType, sandwichName, isToasted) {
// The function should check whether isToasted is true or false and build a sentence about the sandwich order accordingly.
// The function should return the sentence.
    if (isToasted) {
        return `Your order of a toasted ${sandwichName} sandwich on ${breadType} will be ready shortly`;
    } else {
        return `Your order of a ${sandwichName} sandwich on ${breadType} will be ready shortly`;
    }
}

// Call the function three times, passing in three different sets of parameters.
console.log(makeMeASandwich("Rye","Reuben",true));
console.log(makeMeASandwich("Asiago Bagel", "Bacon, Egg, and Cheese", true));
console.log(makeMeASandwich("Italian","Turkey Club", false));
// Example console output:

// "You ordered a toasted meatball sub sandwich on wheat."

// 5. The Rock's Hobbies
// Once again, we concern ourselves with our friend Dwayne:
let dwayneObject = {
  firstName: "Dwayne",
  nickName: "The Rock",
  lastName: "Johnson",
  favoriteFood: "Eggs",
  hobbies: ["jumping out of planes", "personally holding the  San Andreas fault together", "building incredible muscle mass"]
}

function printHobbies(){
// The printHobbies function should loop through the array of Dwayne The Rock Johnson's hobbies and print each one to the console.    
    for (i=0; i < dwayneObject.hobbies.length; i++) {
        console.log(dwayneObject.hobbies[i]);
    }
}

// Call the printHobbies function.
printHobbies()

// 6. New Years Eve Party
// Copy and paste the following array into your JavaScript file:

let partyGuests = [
  {
    name: "Sam",
    age: 18
  },
  {
    name: "Jerry",
    age: 45
  },
  {
    name: "Lila",
    age: 29
  },
  {
    name: "Mary",
    age: 68
  },
  {
    name: "Todd",
    age: 10
  }
]

function msgMaker (names, ofAge, action) {
    let msg = "";
    for (i=0; i<names.length; i++) {
        if (i === 0 && names.length<=1) {
            msg += names[i]
        } else if (i === 0 && names.length<=2) {
            msg += names[i] + " and "
        } else if (i === names.length-2) {
            msg += names[i] + ", and "
        } else if (i === names.length-1) {
            msg += names[i]
        } else {
            msg += names[i] + ", "
        }
    }
    if (ofAge) {
        msg += " can " + action + "."
    } else if (ofAge === false) {
        msg += " cannot " + action + "."
    }
    return msg
}

function ageChecker (peopleArray, ageLimit, action) {
// Fill in the ageChecker function so that it does the following things:
// Loop through the partyGuests and check if each guest is at least 21.
    let isOfAge = [];
    let isNotOfAge = [];
    for (i=0; i<peopleArray.length; i++) {
        if (peopleArray[i].age >= ageLimit) {
            isOfAge.push(peopleArray[i].name);
        } else {
            isNotOfAge.push(peopleArray[i].name);
        }
    }
// Build a sentence or two about who can drink and who can't. (Example: " "Jery, Lila, and Mary can drink. Sam and Todd are too young.")
// Log the sentnece to the console.    
    const msgOfAge = msgMaker(isOfAge, true, action);
    const msgNotOfAge = msgMaker(isNotOfAge, false, action);

    return (msgOfAge + " " + msgNotOfAge)
}

console.log(ageChecker(partyGuests,21, "drink"))
console.log(ageChecker(partyGuests,18,"vote"))
// Optional Challenge- Make your function more reusable by adding parameters! Let's say that your next task is to sort through an array of people and figure out who is old enough to vote, not drink. You could write another function that does approximately the same thing, but with an array of potential voters and the cut off age of 18 instead of 21. But that would be a lot of repeat code, and our goal is to repeat ourselves as little as possible! Refactor your ageChecker function so that it accepts two parameters: an array of objects representing people (assume that they will be structured like the objects in the partyGuests array) and an age to check for. Now the function should return an array of people objects that are at or above the given cut-off age. Please ask for help with this one if you get stuck!

// 7. Celsius to Fahrenheit
// You'll be writing two functions: one that converts Celsius to Fahrenheit and the other, vice versa.

// Write a function that takes the temperature in Celsius as the parameter
// The function should do the following calculation to get the temperature in Fahrenheit: T(F) = T(C) * 1.8 + 32
function celsiusToFahrenheit (tCelsius) {
    let tF = tCelsius*1.8 + 32;
// Output the temperature in Fahrenheit to the console
    console.log(`${tCelsius} degrees Celsius converts to ${tF.toFixed(2)} degrees Fahrenheit`);
}
// Write a second function that takes the temperature in Fahrenheit as the parameter
// The function should do the following calculation to get the temperature in Celsius: T(C) = (T(F) - 32) / 1.8
function fahrenheitToCelsius (tFahrenheit) {
    let tC = (tFahrenheit - 32) / 1.8;
// Output the temperature in Celsius to the console
    console.log(`${tFahrenheit} degrees Fahrenheit converts to ${tC.toFixed(2)} degrees Celsius`);
}

celsiusToFahrenheit(8);
fahrenheitToCelsius(58);
// Example output:

// "You entered [degrees in Celsius] Celsius. That converts to [degrees in Fahrenheit] Fahrenheit." "You entered [degrees in Fahrenheit] Fahrenheit. That converts to [degrees in Celsius] Celsius."

// 8. It All Adds Up!
// Copy and paste the following code into your JavaScript file:
let outsideArray =  [4, 7, 8008, 11, 9, -1];

// In your JavaScript file, create (declare) a function named addThemUp.
// The function should accept one argument: an array of numbers.
function addThemUp (numArray) {
// Inside the function, loop over the array of numbers parameter and add them up to a running sum.
    let sum = 0;
    for (i=0; i<numArray.length; i++) {
        sum += numArray[i];
    }
// The addThemUp function should return the sum.
    return sum
}
// Call addThemUp and pass in outsideArray as an argument.
// Save the returned value in a variable called mySum.
let mySum = addThemUp(outsideArray)
// Log mySum to the console.
console.log(mySum)
// Try changing the numbers in the array or adding new numbers.