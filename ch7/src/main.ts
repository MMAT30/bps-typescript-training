
// index signature

interface Transaction {
  // index signature that must exist in the object
  Pizza: number;
  Book: number;
  Job: number;

  // dynamic index signatures that cannot be reassinged after initialization
  readonly [index: string]: number;
}


interface Student {

  // index signature that are required
  [key: string]: string | number | number[] | undefined;

  name: string;
  gpa: number;
  classes?: number[];
}


const transaction: Transaction = {

  // index signature that are required
  "Pizza": 100,
  "Book": 200,
  "Job": 300,


  // dynamic index signatures that are optional
  "Car": 400,
  "House": 500,
  "Salary": 600,
}



// valid as strings
console.log(transaction['Pizza']);
console.log(transaction['Book']);
console.log(transaction['Job']);



// valid by dynamic property
const prop: string = 'Pizza';
console.log(transaction[prop]);


// valid by dynamic propertys in for loop
const props: string[] = ['Pizza', 'Book', 'Job'];
for (const prop of props) {
  console.log(transaction[prop]);
}



// declarring interface
const student: Student = {
  name: 'John',
  gpa: 123,
  classes: [1, 2, 3],
  grades: [4, 5, 6],
}

for (const key in student) {
  console.log(key, student[key as keyof Student]);
}



// union with a record type
type GradeTypes = string | number | boolean;
type Grades = Record<string,  GradeTypes>;


const grades: Grades = {
  'Math': 100,
  'English': "A",
  'Science': true,
}