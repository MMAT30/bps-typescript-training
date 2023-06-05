

let v1: number = 1
let v2: number = 2



// parameterized function with return type
function add(v1: number, v2: number): number {
    return v1 + v2
}

// parameterized function with no return type
function printAdd(v1: number, v2: number): void {
    console.log(v1 + v2)
}


// optional parameters
const printName = (name: string, age?: number): void => {
    console.log(name)

    if (age) {
        console.log(age)
    }
}
console.log(printName("Bob", 42))


// default parameters
const printName2 = (name: string, age: number = 0): void => {
    console.log(name)

    if (age) {
        console.log(age)
    }
}
console.log(printName2("Bob"))


// type as a function
type AddFunctionType = (v1: number, v2: number) => number;
const adder1: AddFunctionType = (v1: number, v2: number): number => {
    return v1 + v2
}
console.log(adder1(1, 2))


// type as a interface
interface AddFunctionInterface {
    (v1: number, v2: number): number
}
const adder2: AddFunctionInterface = (v1: number, v2: number): number => {
    return v1 + v2
}
console.log(adder2(1, 2))



// rest parameters
const addAll = (first: number, second: number, ...values: number[]): number => {
    return first + second + values.reduce((prev, curr) => prev + curr, 0)
}
console.log(addAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
