/* 10 Object Creation
Create an object using an object literal, constructor function, and es6 class.
The object should have the fields name and age.*/

//object literal
let Peter = {
    name: 'Peter',
    age: 22
}

//constructor function
function person2(name, age){
    this.name = name
    this.age = age
}

//es6 class
class person3{
    name
    age
    constructor(name, age){
        this.name = name
        this.age = age
    }
}

// console.log(`name is ${Peter.name}, age is ${Peter.age}`);

// let Jerry = new person2("Jerry", 32)
// console.log(`name is ${Jerry.name}, age is ${Jerry.age}`);

// let Tom = new person3("Tom", 21)
// console.log(`name is ${Tom.name}, age is ${Tom.age}`);