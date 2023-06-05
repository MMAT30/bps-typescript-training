"use strict";
// typed arrays - unfixed length
let stuff = ["something", "something else", "another thing"];
console.log(stuff);
// array methods
stuff.push("something new");
// typed tuples - fixed length
let tupleStuff = ["something", 42];
console.log(tupleStuff);
// tuple methods
tupleStuff.push("something else");
console.log(tupleStuff);
// typed objects
let person;
// object is forced to match the Person type
person = {
    name: "Bob",
    age: 42,
    isAlive: true
};
// object as parameters
const greetPerson = (person) => {
    if (person.name) {
        return `Hello ${person.name}!`;
    }
    return "Hello!";
};
// calling method
console.log(greetPerson(person));
// enum type
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
for (const x in Color) {
    console.log(x, "here");
}
