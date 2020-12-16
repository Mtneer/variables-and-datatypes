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

// Practice Problems
// 1. Student Names
// In your JavaScript file, copy and paste the following array:
let cohortOneStudents = ["Sable", "David", "Joey", "Nick", "Tommy", "Connor", "Charles", "Russ", "Bobby", "Josh", "Nikki", "Matt", "Dale",  "Sydney"];
// Use a for loop to print each student's name to the console.
for (i=0; i<cohortOneStudents.length; i++) {
    console.log(cohortOneStudents[i])
}

// 2. Interests
// In your JavaScript file, create an array of 5 of your interests.
// Loop through the interests and console log the phrase "One of my interests is: [your interest]." for each of the interests in your array.
// Output:
// One of my interests is: hiking.
// One of my interests is: coding.
// One of my interests is: math.
// One of my interests is: 30 Rock.
// One of my interests is: pizza.
const interests = ["Kayaking","Climbing", "hiking", "New Girl", "food"];
for (i=0; i<interests.length; i++) {
    console.log(`One of my interests is: ${interests[i]}`)
}

// 3. Favorite Interest
// Refactor your loop from the previous exercise. Pick one of your interests as your absolute favorite interest. Add a conditional to your loop to check if each interest in the array is your favorite. When the loop gets to your favorite interest, it should print "My absolute favorite interest is:" followed by the name of your interest. Any other interests can be printed the same way that they were in the previous exercise.
// Output:
// One of my interests is: hiking.
// My absolute favorite interest is: coding.
// One of my interests is: math.
// One of my interests is: 30 Rock.
// One of my interests is: pizza.
for (i=0; i<interests.length; i++) {
    if (interests[i] === "Kayaking") {
        console.log(`My absolute favorite interest is: ${interests[i]}`)
    }
}

// 4. Harry Potter Titles
// Copy and paste the following array into your JavaScript file:
let harryPotterTitles = ["and the Sorcerer's Stone", "and the Chamber of Secrets", "and the Prisoner of Azkaban", "and the Goblet of Fire", "and the Order of the Phoenix", "and the Half-Blood Prince", "and the Deathly Hallows"];
// Use a for loop to output the complete titles to the console.
// Output:
// "Harry Potter and the Sorcerer's Stone"
// "Harry Potter and the Chamber of Secrets"
// .
// .
// .
// "Harry Potter and the Deathly Hallows"
for (i=0; i<harryPotterTitles.length; i++) {
    console.log(`Harry Potter and ${harryPotterTitles[i]}.`)
}

// 5. Student Grades
// Copy and paste the folowing array of grades into your JavaScript file:
const grades = [92, 91, 75, 66, 52, 90, 83, 85, 64, 90, 72, 88, 77, 98, 100, 73, 92]
// Loop through the grades with a for loop
for (i=0; i<grades.length; i++) {
// If the current grade is greater than or equal to 0 and less than or equal to 69, log "You got an F" to the console.
    if (grades[i]<= 69) {
        console.log("You got an F")
    }
// If it's between 70 and 76, log "You got a D" to the console.
    else if (grades[i]<=76) {
        console.log("You got a D")
    }
// If it's between 77 and 84, log "You got a C" to the console.
    else if (grades[i]<=84) {
        console.log("You got a C")
    }
// If it's between 84 and 92, log "You got a B" to the console.
    else if (grades[i]<=92) {
        console.log("You got a B")
    }
// If it's between 93 and 100, log "You got an A" to the console.
    else {
        console.log("You got an A!")
    }
}

// 6. Two, Four, Six, Eight - Who do we appreciate?! CHEER
// Write a loop that counts by 2's and creates the following output.
// Output
// 2 4 6 8 Who do we appreciate?!
i = 0;
let msg = " ";
while (i<8) {
    i += 2;
    msg += `${i} `
    if (i===8) {
        msg += ("Who do we appreciate!?")
    }
}
console.log(msg)

