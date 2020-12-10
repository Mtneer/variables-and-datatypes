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

/* December 9, 2020 - Foundations 3
Arrays and Objects Practice Problems
*/
// 1. Weather Data
let highTemperatures = [55, 57, 53, 47, 56, 50];
let lowTemperatures = [33, 30, 29, 35, 31, 32];

console.log(highTemperatures[0]);
console.log(lowTemperatures[lowTemperatures.length-1]);

// 2. Weather Object
let weather = {
    temperature: {
        high: highTemperatures,
        low: lowTemperatures,
        current: 46
    },
    conditions: "overcast"
};

console.log(weather.temperature.current);

console.log(`It's ${weather.temperature.current} degrees and ${weather.conditions}.`);

// 3. Nested Weather Objects
weather.temperature.high = 55;
weather.temperature.low = 32;
weather.astronomy = {
    sunrise: "7:43 AM",
    sunset: "5:09 PM"
};

console.log(weather.temperature.high);
console.log(weather.temperature.low);
console.log(weather.conditions);
console.log(weather.astronomy.sunrise);

console.log(`Today's weather has a high of ${weather.temperature.high} F, a low of ${weather.temperature.low}, and ${weather.conditions} skies. 
Sunrise will occur at ${weather.astronomy.sunrise} and sunset is at ${weather.astronomy.sunset}.`);

// 4. Weather Forecast
let weatherForecast = [
    {
     day: "Today",
     temperature: {
       high: 55,
       low: 32
     },
     conditions: "sunny",
     astronomy: {
       sunrise: "7:43 AM",
       sunset: "5:09 PM"
     }
    },
    {
     day: "Saturday",
     temperature: {
       high: 50,
       low: 29
      },
     conditions: "cloudy",
     astronomy: {
       sunrise: "7:44 AM",
       sunset: "5:08 PM"
     }
    },
    {
     day: "Sunday",
     temperature: {
       high: 47,
       low: 35
      },
     conditions: "chance of rain",
     astronomy: {
       sunrise: "7:45 AM",
       sunset: "5:07 PM"
     }
    }
   ];

for (let i=0; i<weatherForecast.length; i++) {
   if (weatherForecast[i].day === "Today") {
       // 4.1 Log today's weather conditions to the console.
        console.log(weatherForecast[i].conditions);
   } else if (weatherForecast[i].day==="Saturday") {
       // 4.2 Log Saturday's high temperature to the console.
        console.log(weatherForecast[i].temperature.high);
        // 4.3 Log Saturday's sunrise time to the console.
        console.log(weatherForecast[i].astronomy.sunrise);
   } else if (weatherForecast[i].day==="Sunday") {
       // 4.4 Log Sunday's conditions to the console.
       console.log(weatherForecast[i].conditions);
       // 4.5 Log Sunday's sunset time to the console.
       console.log(weatherForecast[i].astronomy.sunset);
   }
}

console.log(`The high on ${weatherForecast[2].day} will be ${weatherForecast[2].temperature.high} F and the low will be ${weatherForecast[2].temperature.low} F. We're predicting a ${weatherForecast[2].conditions}. The sun will rise at ${weatherForecast[2].astronomy.sunrise} and set at ${weatherForecast[2].astronomy.sunset}.`)
