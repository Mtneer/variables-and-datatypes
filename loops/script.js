// Dec 10, 2020 - Foundations 4
// Loooops!

// Lightning Exercise
// Psychotic Bird
// In your JavaScript file, write a while loop that outputs the phrase "TWEET TWEET" 100 times to the console.
let i = 0;
while (i<100) {
    console.log("TWEET TWEET!");
    i++;
}

// Lightning Exercise
// Psychotic Bird: For Loop Edition
// In your JavaScript, write a for loop that outputs the phrase "TWEET TWEET TWEET" 100 times to the console.
for (i=0; i<100; i++) {
    console.log("TWEET TWEET!")
};
// Favorite Foods
// In your JavaScript, create a new variable called favoriteFoods. It should store an array of strings representing five of your favorite foods.
const favoriteFoods = ["Pizza", "Tacos", "Blueberries", "French Toast", "Pie"];
// Loop through the array and print each food item to the console.
for (i = 0; i<favoriteFoods.length; i++) {
    console.log(favoriteFoods[i]);
}