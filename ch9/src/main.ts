

// creating a interface
interface Assignment {
  id: number;
  title: string;
  grade: number;
  verified?: boolean;
}


// creating a function that accepts a partial or attribute of the interface and returns a new object
const updateAssignment = (assignment: Assignment, updates: Partial<Assignment>): Assignment => {
  return {...assignment, ...updates};
}


// object that is missing the verified attribute
const assignment1: Assignment = {
  id: 1,
  title: 'First Assignment',
  grade: 100,
} 



// object that has the verified attribute and grade attribute that is modified
const grade1 = updateAssignment(assignment1, { grade: 90 })
const grade2 = updateAssignment(assignment1, { verified: true })

// this will fail because the taco attribute is not part of the interface
// updateAssignment(assignment1, { taco: false })1

console.log(assignment1)










// required 
const recordAssignment = (assignment: Required<Assignment>): Assignment => {
  return assignment;
}


// we can now pass in an object that is missing the verified attribute to fit all interface attributes
const record1 = recordAssignment({...assignment1, verified: true})


// readonly
const verifyAssignment: Readonly<Assignment> = {...grade1, verified: true}


// this will fail because the verified attribute is readonly
// verifyAssignment.verified = false;













// pick - only pick the attributes that we choose
type AssignmentPick = Pick<Assignment, 'id' | 'title'>;

const score1: AssignmentPick = {
  id: 1,
  title: 'First Assignment',
}



// omit - only omit the attributes that we choose
type AssignmentOmit = Omit<Assignment, "id" | "title">;

const score2: AssignmentOmit = {
  grade: 100,
  verified: true,
}









type LetterGrades = "A" | "B" | "C" | "D" | "F";

// exclude
type adjustedGrades = Exclude<LetterGrades, "F">;

// extract
type highGrades = Extract<LetterGrades, "A" | "B">;






// nonNullable
type NullableGrades = LetterGrades | null | undefined;
type NonNullableGrades = NonNullable<NullableGrades>;

const grade: NonNullableGrades = "A";

// this will fail because the grade is nullable
// const grade2: NonNullableGrades = null;

