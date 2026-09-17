// STEP 1: Print text to the browser console is string ""

console.log("Hello, World!");

// STEP 2: Variables

// Store text values in variables


//const favoriteAnimal = "Blue Elephant";

const userName = "Ali";
const favoriteSport = "Jalkapallo";


// Print the variables to the console
console.log("My name is " + userName );
console.log("My favoriteSport is " + favoriteSport);
// STEP 3: User interaction
// Display a pop-up message

alert("Tervetuloa minun hienoille nettisivuilleni!");

// Ask the user for their name

const visitorName = prompt("Mikä on nimesi ?");
//const visitorName = prompt("Mikä on nimesi?");

// Print the user's answer
console.log(visitorName);


console.log("Terve " + visitorName + "! Tervetuloa javasciptin pariin!");
// Ask the user for their favorite Sport

const visitorFavoriteSport = prompt("Mikä on lempiurheilusi?");

// Create a sentence using both answers

console.log("Hello, " + visitorName + "! Your favorite sport is " + visitorFavoriteSport + ".");

// ⭐⭐ BONUS Ask the user for their favorite animal.If their favorite animal is "Blue Elephant", print: Great choice! That's my favorite animal too!
// ⭐⭐ BONUS Otherwise, print: Nice! Your favorite animal is [animal]. Can you figure out how to do this using if / else?
const lempiUrheilusi = prompt("Mikä on lempiurheilusi?");

if (lempiUrheilusi === "Jalkapalo") {
    console.log("Great choice!");
} else {
    console.log("Kivaa! Sinun lempiurheilusi on " + lempiUrheilusi + " .");
}

// const visitorFavoriteAnimal = prompt("What is your favorite animal?");

