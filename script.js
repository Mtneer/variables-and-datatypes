// alert("Hello, world!")
console.log('Howdy World');

/* Dec 5, 2020 - Foundations 1
In your JavaScript file, declare and assign the following variables with information about yourself:
firstName should hold a string of your first name
lastName should hold a string of your last name
age should hold a number of your age
likesTravel should hold a boolean representing whether or not you like to travel
Log each variable to the console.
*/

// Declaring and assigning variables
const firstName = "David";
const lastName = "Billups";
const age = 28;
const likesTravel = true;

// Printing to the console
console.log(firstName);
console.log(lastName);
console.log(age);
console.log(likesTravel);
      
console.log(`My name is ${firstName} ${lastName}. I am ${age} years old and it is ${likesTravel} that I like to travel.`);

/* Dec 8, 2020 - Foundations 2
Favorite Movies
In your JavaScript file, instantiate and assign a variable called movieArray. This variable should hold an array of your favorite movie titles. (Don't go overboard- two or three is fine).
Log each movie in the array to the console.
*/

const movieArray = ["Step Brothers", "Forest Gump", "Fast and Furious"];

console.log(movieArray[0]);
console.log(movieArray[1]);
console.log(movieArray[2]);

/*
Instead of storing the data from your first lightning exercise in separate variables, store them in an object. 
Your object should have a property of firstName, lastName, age, likesToTravel. 
It should also have a property called favoriteMovies, which should hold the array of your favorite movies you created in the last lightning exercise.
*/
const me = {
    firstName: "David",
    lastName: "Billups",
    age: 28,
    likesToTravel: true,
    favoriteMovies: ["Step Brothers", "Forest Gump", "Fast and Furious"]
};

console.log(me.lastName);

me.fun = true;

console.log(me);