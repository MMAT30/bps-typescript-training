"use strict";
class Person {
    constructor(
    // public - accessible from anywhere
    // private - accessible only from within the class
    // protected - accessible from within the class and its subclasses
    // readonly - can be read but not changed after initialization
    name, ssn, age) {
        this.name = name;
        this.ssn = ssn;
        this.age = age;
        this.name = name;
        this.ssn = ssn;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
class Employee extends Person {
    constructor(name, ssn, age, employeeId) {
        super(name, ssn, age);
        this.employeeId = employeeId;
        this.employeeId = employeeId;
    }
}
class American {
    constructor(name, ssn, age) {
        this.name = name;
        this.ssn = ssn;
        this.age = age;
        this.name = name;
        this.ssn = ssn;
        this.age = age;
    }
    getName() {
        return this.name;
    }
}
class Counter {
    constructor(name) {
        this.name = name;
        Counter.count++;
        this.id = Counter.count;
        this.name = name;
    }
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
}
Counter.count = 0;
const p1 = new Person("Bob", 123456789, 42);
console.log(p1.getName());
const p2 = new Counter("Bob");
const p3 = new Counter("Greg");
const p4 = new Counter("Alice");
console.log(p2.getId());
console.log(p3.getId());
console.log(p4.getId());
