// getting a user from inut 
let number = prompt("Enter your favorite number:");

// using conversio operator to convert into number
number = Number(number);

// Check if the number is a multiple of 5
if (number % 5 === 0) {
    console.log(`${number} is a multiple of 5.`);
} else {
    console.log(`${number} is not a multiple of 5.`);
}
