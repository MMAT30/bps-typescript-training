
// typed variables
let person: string = "John"
let age: number = 42
let married: boolean = true

// union type
let something: string | number = "something";

// output
console.log(person, age, married, something)


// enforcing typed parameters and return values
const sum = (a: number, b: number): number => {
    return a + b
}
