type One = string
type Two = string
type Three = string


let a: One = "hello"
let b = a as string
let c = a as string



const addOrConcat = (v1: string, v2: string, v3: "add" | "concat"): (number | string) => {

    if (c === "add") {
        return v1 + v2
    }

    return "" + v1 + v2
}


let v1: string = addOrConcat("hello", "world", "add") as string
console.log(v1)


let v2: number = addOrConcat("hello", "world", "concat") as number
console.log(v2)