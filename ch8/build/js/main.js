"use strict";
// index signature
const transaction = {
    // index signature that are required
    "Pizza": 100,
    "Book": 200,
    "Job": 300,
    // dynamic index signatures that are optional
    "Car": 400,
    "House": 500,
    "Salary": 600,
};
// valid as strings
console.log(transaction['Pizza']);
console.log(transaction['Book']);
console.log(transaction['Job']);
// valid by dynamic property
const prop = 'Pizza';
console.log(transaction[prop]);
// valid by dynamic propertys in for loop
const props = ['Pizza', 'Book', 'Job'];
for (const prop of props) {
    console.log(transaction[prop]);
}
// declarring interface
const student = {
    name: 'John',
    gpa: 123,
    classes: [1, 2, 3],
    grades: [4, 5, 6],
};
for (const key in student) {
    console.log(key, student[key]);
}
const grades = {
    'Math': 100,
    'English': "A",
    'Science': true,
};
