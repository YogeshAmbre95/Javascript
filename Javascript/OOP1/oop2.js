//object

let yogesh = {
    firstName: 'yogesh',
    lastName: 'ambre',
    age: 27,
    rollNo: 25,
    display: function () {
        console.log(this.firstName + this.lastName)
    }
}

let harshal = {
    firstName: 'harshal',
    lastName: 'ambre',
    age: 25,
    rollNo: 45,
    display: function () {
        console.log(this.firstName + this.lastName)
    }
}

console.log(yogesh)
console.log(harshal)

//function constructor


let Person = function (firstName, lastName, age, rollNo) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.rollNo = rollNo
    this.display = function () {
        console.log(this.firstName + this.lastName)
    }
}
let amol = new Person('amol', 'ambre', 23, 34)
console.log(amol)
let sanket = new Person('sanket', 'jadhav', 28, 34)
console.log(sanket)


console.log(Person.prototype === amol.__proto__)
console.log(Person.prototype === sanket.__proto__)

console.log(amol instanceof (Person))
Person.prototype.display = function () {
    console.log(this.firstName + this.lastName)
}
console.log(Person.prototype.lang = "hindi")

console.log(amol.lang)

amol.display()
sanket.display()
console.log(amol)

console.log(amol.hasOwnProperty('lang'))
console.log(amol.hasOwnProperty('firstName'))

//Es6 class


let Person1 = class {

}
//set object property outside class
//at the time of object creation using constructor
//using set


class Person2 {
    constructor(firstName, lastName, age, rollNo) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.rollNo = rollNo
        //this.display=function(){
        //console.log(this.firstName+this.lastName)
    }

}
this.display = function () {
    console.log(this.firstName + this.lastName)
}
let jayesh = new Person2('jayesh', 'bhor', 22, 34)
console.log(jayesh)

console.log(jayesh.__proto__ === Person2.prototype)

// object literal 
// function constructor 
// es6 class
// Object.create()

//Object Create method

let sarthak = Object.create({})

console.log(sarthak)
sarthak.firstName = 'sarthak'
sarthak.lastName = 'navale'
sarthak.age = 22
sarthak.rollNo = 34

console.log(sarthak)


let proto = {
    display: function () {
        console.log(this.firstName + this.lastName)
    },
    init: function (fn, ln, rollNo, age) {
        this.firstName = fn
        this.lastName = ln
        this.age = age
        this.rollNo = rollNo
    }
}
let rutik = Object.create(proto)
console.log(rutik)
rutik.init('rutik', 'walunj', 20, 23)
console.log(rutik)
rutik.display()


// class ---->
// Oops 
// Encapsulation   ---
// Inheritance  ---- we can
// Polymorphism  ---- 
// Abstraction---- typescript

//program 1

class Student {
    firstName = 'vrushali'
    lastName = 'navale'
    rollNo = 21
    age = 20
}

class Teacher extends Student {
    salary = 50000
}

class Professor extends Teacher {
    specialization = 'Physics'
}

let vrushali = new Professor()
console.log(vrushali)


//Program 2

//parent constuctor, no constructor in child

class Students2 {
    constructor(firstName, lastName, city, skill) {
        this.firstName = firstName
        this.lastName = lastName
        this.city = city
        this.skill = skill
    }
}

class Teacher2 extends Students2 {
    salary = 50000
}


let parag = new Teacher2('parag', 'pawase', 'nashik', 'excel')
console.log(parag)
console.log(parag.firstName)
console.log(parag.lastName)
console.log(parag.skill)

//Program 3

class Analyst {
    constructor(firstName, lastName, skill, company) {
        this.firstName = firstName
        this.lastName = lastName
        this.skill = skill
        this.company = company
    }
}

class Manager extends Analyst {
    constructor(firstName, lastName, skill, company, salary) {
        super(firstName, lastName, skill, company)
        this.salary = salary
    }
}
let Nikhil= new Manager('nikhil','ambre','javascript','infosys','50000')

console.log(Nikhil)
console.log(Nikhil.firstName)
console.log(Nikhil.skill)
console.log(Nikhil.company)
console.log(Nikhil.salary)






