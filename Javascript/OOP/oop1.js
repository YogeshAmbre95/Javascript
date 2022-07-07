// //property and methods

// //object literals

// let yogesh={
//     firstName:"yogesh",
//     lastName:"ambre",
//     age:32,
//     calBirthYear:function(){
//         console.log(2022-this.age)
//     }
// }

// //dot notation and bracket notation

// console.log(yogesh.firstName)
// console.log(yogesh.age)
// yogesh.age=27
// console.log(yogesh)
// yogesh.city="pune"
// console.log(yogesh)
// delete yogesh.city
// console.log(yogesh)
// yogesh.calBirthYear()
// console.log(yogesh)


// yogesh={
//     firstName:"yogesh",
//     lastName:"ambre",
//     age:32,
//     calBirthYear:function(){
//         console.log(2022-this.age)
//     }
// }
// yogesh.calBirthYear()

// let harshal={
//     firstName:"harshal",
//     lastName:"ambre",
//     age:23,
//     calBirthYear:function(){
//         console.log(2022-this.age)
//     }
// }
// harshal.calBirthYear()

// //different way to create object

// //object literal
// //function constructor
// //Es6 class
// //object create


// //function constructor

// let student=function(fn,ln){
//     this.firstName=fn
//     this.lastName=ln
// }

// let amol=new student("amol","ambre")
// console.log(amol)

// let student2=function(fn,ln,rn,skills){
//     this.firstName=fn
//     this.lastName=ln
//     this.rollNo=rn
//     this.skills=skills
// }

// let sachin= new student2("sachin","jondhale",12,["python","javascript"])
// console.log(sachin)

// let ganesh=new student2("ganesh","deshmukh",12,["SQL","css"])
// console.log(ganesh)

// let sanket=new student2("sanket","jadhav",["SQL","css"])
// console.log(sanket)
// ganesh.age=27
// console.log(ganesh)

// //method

student2 = function (fn, ln, rn, skills) {
    this.firstName = fn
    this.lastName = ln
    this.rollNo = rn
    this.skills = skills
    this.numberSkills = function () {
        console.log(this.skills.length)
    }
}

let swastik = new student2("swastik", "jadhav", 12, ["python", "java"])
console.log(swastik)
let swastik2 = new student2("swastik1", "jadhav1", 13, ["python1", "java1"])
console.log(swastik2)


swastik.numberSkills()
console.log(swastik)

console.log(swastik2 instanceof student2)
console.log(swastik instanceof student2)

console.log(swastik.__proto__ === student2.prototype)


//-----------------------/ 
// Object - property and method
// Object ---> _proto_
// _proto_ == parent.Protype

let amol1 = {
    fullname: "amol ambre",
    age: 28,
    city: "pune",
    skills: ["analytical", "inorganic"]

}

let vaibhav = {
    fullname: "vaibhav kadlag",
    age: 27,
    city: "nashik",
    skills: ["analytical1", "inorganic1"]

}

//function constructor

let Employee = function (fn, ag, cy, sk) {
    this.fullname = fn
    this.age = ag
    this.city = cy
    this.skills = sk
}

let vivek = new Employee("vivek datir", 28, "sangamner", "leadership")
console.log(vivek)
let mahesh = new Employee("mahesh aher", 24, "akole", ["js,cypress"])
console.log(mahesh)


//object ---property and method

//program

let Student3 = function (name, marks, sub) {
    this.name = name
    this.marks = marks
    this.subject = sub
    this.class = function () {
       console.log(this.class)
   }
}

let rushi = new Student3("rushi", 45, "marathi")
console.log(rushi)


//object==>

//syntax==> obj.__proto__===>parent.prototype
console.log(rushi.__proto__===Student3.prototype)
console.log(rushi instanceof Student3)


//solution

Student3 = function (name, marks, sub) {
    this.name = name
    this.marks = marks
    this.subject = sub
   // this.class = function () {
     //  console.log(this.class)
  // }
}

Student3.prototype.class=function(){
    console.log(this.class)
}

let rushi1 = new Student3("rushi", 45, "marathi")
console.log(rushi1)
