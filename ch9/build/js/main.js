"use strict";
// creating a function that accepts a partial or attribute of the interface and returns a new object
const updateAssignment = (assignment, updates) => {
    return Object.assign(Object.assign({}, assignment), updates);
};
// object that is missing the verified attribute
const assignment1 = {
    id: 1,
    title: 'First Assignment',
    grade: 100,
};
// object that has the verified attribute and grade attribute that is modified
const grade1 = updateAssignment(assignment1, { grade: 90 });
const grade2 = updateAssignment(assignment1, { verified: true });
// this will fail because the taco attribute is not part of the interface
// updateAssignment(assignment1, { taco: false })1
console.log(assignment1);
// required 
const recordAssignment = (assignment) => {
    return assignment;
};
// we can now pass in an object that is missing the verified attribute to fit all interface attributes
const record1 = recordAssignment(Object.assign(Object.assign({}, assignment1), { verified: true }));
// readonly
const verifyAssignment = Object.assign(Object.assign({}, grade1), { verified: true });
const score1 = {
    id: 1,
    title: 'First Assignment',
};
const score2 = {
    grade: 100,
    verified: true,
};
const grade = "A";
// this will fail because the grade is nullable
// const grade2: NonNullableGrades = null;
