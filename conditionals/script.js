/* Dec 9, 2020 - Foundations 3
Conditionals Practice Problems*/

// 1. Check Your Math
// Use JavaScript to check and see if the following comparisons are true. For each of the following, log "True fact!" to the console if the condition evaluates to true and "LIES!" to the console if it doesn't.

// Is the sum of 1 and 1 greater than 5?
if (1+1 > 5) {
    console.log("True fact!");
} else {
    console.log("LIES!");
}
// Is the product of 4 and 5 less than or equal to 20?
if (4+5 <= 20) {
    console.log("True fact!");
} else {
    console.log("LIES!");
}
// Is the difference between 6 and 2 greater than or equal to 0?
if (6-2 >= 0) {
    console.log("True fact!");
} else {
    console.log("LIES!");
}

// 2. Dog People vs. Cat People
// In your JavaScript file, declare a new variable called likesDogs and set it equal to true or false.
const likesDogs = true;

// If likesDogs is true, log "You're a dog person!" to the console. If not, log "You're a cat person!" to the console.
if (likesDogs) {
    console.log("You're a dog person!");
} else {
    console.log("You're a cat person!");
};

// 3. Generation Gaps
// Declare a variable called birthYear and set it equal to your birth year.
const birthYear = 1992;

// Write a conditional statement that checks to see which generation you're part of and log a sentence about that generation to the console.
const generations = [
    {
        start: 1912,
        end: 1921,
        name: "The Depression Generation"
    },
    {
        start: 1992,
        end: 1927,
        name: "The World War II Generation"
    },
    {
        start: 1928,
        end: 1945,
        name: "The Post War Cohort"
    },
    {
        start: 1946,
        end: 1954,
        name: "The Baby Boomers"
    },
    {
        start: 1955,
        end: 1965,
        name: "Generation Jones"
    },
    {
        start: 1966,
        end: 1976,
        name: "Generation X"
    },
    {
        start: 1977,
        end: 1994,
        name: "Generation Y"
    },
    {
        start: 1995,
        end: 2012,
        name: "Generation Z"
    }
];

for (i=0; i<generations.length; i++) {
    if (birthYear >= generations[i].start && birthYear <= generations[i].end) {
        console.log(`Wow, really!? You're part of ${generations[i].name}!?`)
    }
}
// Try changing the value of birthYear and see what happens.

// 4. Greetings
// In your JavaScript file, create a new object representing a person. Your object should have at least two properties: one for the person's name and one for their preferred language.
const person = {
    name: "Lauren Cohen",
    prefLang: "Espanol"
};
// Write a conditional that checks for the following:

// If the person's preferred language is English, print "Hello, [name]!" to the console.
if (person.prefLang === "English") {
    console.log(`Hello, ${person.name}`);
}
// If the person's preferred language is Spanish print "Hola, [name]!" to the console.
else if (person.prefLang === "Espanol") {
    console.log(`Hola, ${person.name}!`);
}
// If their preferred language is French, print "Bonjour, [name]!" to the console.
else if (person.prefLang === "French") {
    console.log(`Bonjour, ${person.name}`);
};

// 5. Grandma's Kitchen
// In your JavaScript file, declare two new variables:
// A variable called time that should store a string that represents a time of day ("1:00 PM", "2:00 PM", etc)
const time = "9:00 PM";
// A variable called isHungry that stores a boolean representing whether or not you're hungry
const isHungry = false;
// Write a conditional that checks the following:
// If it's 7:30 AM and you're hungry, log "Time for breakfast!" to the console
if (time === "7:30 AM" && isHungry) {
    console.log("Time for breakfast!");
}
// If it's 12:00 PM and you're hungry, log "Time for luch!" to the console
else if (time === "12:00 PM" && isHungry) {
    console.log("TIme for lunch!");
}
// If it's 7:00 PM or 8:00 PM and you're hungry, log "Time for dinner!" to the console.
else if ((time === "7:00 PM" || time === "8:00 PM") && isHungry) {
    console.log("TIme for dinner!");
}
// If you're hungry, log "Time for a snack!" to the console.
else if (isHungry) {
    console.log("Time for a snack!");
}
// If none of the above are true, log "Have a cookie anyway!" to the console.
else {
    console.log("Have a cookie anyway!");
}
// Try changing the values of your variables. You should get different results every time you change them.

