class Person {
  constructor(
    // public - accessible from anywhere
    // private - accessible only from within the class
    // protected - accessible from within the class and its subclasses
    // readonly - can be read but not changed after initialization

    public readonly name: string,
    private ssn: number,
    protected age: number
  ) {
    this.name = name;
    this.ssn = ssn;
    this.age = age;
  }

  public getName(): string {
    return this.name;
  }
}

class Employee extends Person {
  constructor(
    name: string,
    ssn: number,
    age: number,
    private employeeId: number
  ) {
    super(name, ssn, age);
    this.employeeId = employeeId;
  }
}

interface PersonInterface {
  name: string;
  ssn: number;
  age: number;
  getName(): string;
}

class American implements PersonInterface {
  constructor(public name: string, public ssn: number, public age: number) {
    this.name = name;
    this.ssn = ssn;
    this.age = age;
  }

  public getName(): string {
    return this.name;
  }

    
    // getters and setters
  public get getAge(): number {
    return this.age;
  }

  public set setAge(age: number) {
    this.age = age;
  }
}

class Counter {
  static count: number = 0;
  private id: number;

  constructor(private name: string) {
    Counter.count++;
    this.id = Counter.count;
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }

  public getId(): number {
    return this.id;
  }
}

const p1 = new Person("Bob", 123456789, 42);
console.log(p1.getName());

const p2 = new Counter("Bob");
const p3 = new Counter("Greg");
const p4 = new Counter("Alice");

console.log(p2.getId());
console.log(p3.getId());
console.log(p4.getId());
