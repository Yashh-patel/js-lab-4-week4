// Geting user input for  their marks
let marks = prompt("Enter the student's marks:");

// Convert the input to a number from any tyep to data 
score = Number(marks);

// Check the grade based on the score
let grade;

if (marks >= 80 && marks <= 100) {
    grade = 'A';
} else if (marks >= 70 && marks <= 79) {
    grade = 'B';
} else if (marks>= 60 && marks <= 69) {
    grade = 'C';
} else if (marks >= 50 && marks <= 59) {
    grade = 'D';
} else if (marks >= 0 && marks <= 49) {
    grade = 'F';
} else {
    grade = 'emter a valid number';  // In case the input is out of range
}

console.log(`your grade is: ${grade}`);
