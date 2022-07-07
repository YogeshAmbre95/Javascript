// object -- property and method

// object literal

let yogesh = {
    firstName: "yogesh",
    lastName: "ambre",
    rollNo: 23,
    skills: ["python", "java", "javascript"],
    display: function () {
        console.log(this.firstName + " " + this.lastName)
    }
}
yogesh.display()

let harshal = {
    firstName: "harshal",
    lastName: "ambre",
    rollNo: 34,
    skills: ["SAP", "ORACLE"],
    display: function () {
        console.log(this.firstName + " " + this.lastName)
    }
}
harshal.display()

//  function constructor

let Person = function (fn, ln, ag, rollNo) {
    this.firstName = fn
    this.lastName = ln
    this.age = ag
    this.rollNo = rollNo
    this.display = function () {
        console.log(this.firstName + this.lastName)
    }
}
let Sanket = new Person('sanket', 'jadhav', 26, 12)

let Vivek = new Person('Vivek', 'datir', 27, 15)
console.log(Sanket)
console.log(Vivek)

Sanket.lang="English"
Vivek.lang="Marathi"

console.log(Sanket)
console.log(Vivek)

let Person1= function(fn,ln,ag,rn){
    this.firstName = fn
    this.lastName = ln 
    this.age  = ag
    this.rn = rn
    this.display =function(){
        console.log(this.firstName , this.lastName)
    }
}
let yogesh1 = new Person("yogesh1","ambre",15,41)
let yogesh2 = new Person("yogesh2","ambre",15,42)
let yogesh3 = new Person("yogesh3","ambre",16,43)
let yogesh4 = new Person("yogesh4","ambre",16,44)
let yogesh5 = new Person("yogesh5","ambre",17,45)

let student3=[yogesh1,yogesh2,yogesh3,yogesh4,yogesh5]

console.log(student3)

//city==pune

student3.forEach(function(el){
    el.city="pune"
})
console.log(student3)

student3.forEach(function(el){
    el.display()
})


let Person3= function(firstName, lastName){
    this.firstName=firstName
    this.lastName=lastName
    this.displayName=function(){
        console.log(this.firstName+this.lastName)
    }
}
let vrushali= new Person3('Vrushali','nawale')
let Supriya= new Person3('Supriya','bhor')
console.log(vrushali)
console.log(Supriya)

//object==>__proto__

vrushali.displayName()
Supriya.displayName()

console.log(vrushali.__proto__ === Person3.prototype)
console.log(Supriya.__proto__=== Person3.prototype)

