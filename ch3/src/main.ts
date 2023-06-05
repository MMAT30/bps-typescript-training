

// typed arrays - unfixed length
let stuff: string[] = ["something", "something else", "another thing"]
console.log(stuff)

// array methods
stuff.push("something new")




// typed tuples - fixed length
let tupleStuff: [string, number] = ["something", 42]
console.log(tupleStuff)

// tuple methods
tupleStuff.push("something else")
console.log(tupleStuff)


// custom types
type Person = {
    name: string,

    // creating optional properties
    age?: number,
    isAlive: boolean
    friends?: (string | number)[]
}


// interface - almost the same as type
interface PersonInterface {
    name?: string,

    // creating optional properties
    age?: number,
    isAlive: boolean
    friends?: (string | number)[]
}



// typed objects
let person: Person;

// object is forced to match the Person type
person = {
    name: "Bob",
    age: 42,
    isAlive: true
}


// object as parameters
const greetPerson = (person: Person) => {
    if (person.name) {
        return `Hello ${person.name}!`
    }

    return "Hello!"
}

// calling method
console.log(greetPerson(person))



// enum type
enum Color {
    Red,
    Green,
    Blue
}

for (const x in Color) {
    console.log(x, "here")
}