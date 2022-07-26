//closure

function countNumber(){
    let count=0
    return function increase(){
        count=count+1
        console.log(count)
    }
}
// let aa=countNumber()
// aa()
// aa()
// aa()
// console.log(count)

//let and const

// {
//     let b=10
//     let c=20

// }
// console.log(b)
// console.log(c)

class Student{
    constructor(){
        //data privacy

        let marks=200
        let age=23
        this.getMarks=function(){
            this.marks=marks
            console.log(marks)
        }
        this.getAge=function(){
            this.age=age
            console.log(age)
        }

    }
}
// let yogesh=new Student()
// yogesh.getAge()
// yogesh.getMarks()
// console.log(yogesh.age)

class StudentB{
    constructor(firstName, lastName, age){
        this._firstName=firstName
        this._lastName=lastName
        this._age=age
    }
    getAge(){
        console.log(this._age)
    }
    getFirstName(){
        console.log(this._firstName)
    }
    getLastName(){
        console.log(this._lastName)
    }
}
let harshal=new StudentB('harshal','ambre',25)
console.log(harshal)

harshal.getFirstName()


//Abstraction

class Employee{
    constructor(firstName,lastName,age,basicS){
        this.firstName=firstName
        this.lastName=lastName
        this.age=age
        this.basicS=basicS
        this.bonus=500
    }
    updatetotalSalary(){
        this.totalSalary=this.basicSSalary+this.bonus
    }
    getTotalSalary(){
        console.log(this.totalSalary)
    }
}

let sarthak= new Employee('sarthak','navale',20,10000)
sarthak.bonus=50000
sarthak.updatetotalSalary=function(){
    this.totalSalary=this.bonus+this.basicSSalary
}
sarthak.updatetotalSalary()
sarthak.getTotalSalary()

//solution - use function constructor
let Employee3 = function (firstName, lastName, age, basicS) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.basicSalary = basicS
    let bonus = 500

    let updateSalary = function(){
        this.totalSalary = this.basicSalary + bonus;
    };
    this.getTotalSalary= function(){
        updateSalary()
        console.log(this.totalSalary)
    };
}
let amolF = new Employee3("amol","rao",23,4444)
console.log(amolF.bonus)
amolF.updateSalary()

// With Class 

class Employee4 {

    constructor(firstName, lastName, age, basicS) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.basicSalary = basicS
        let bonus = 500

        let updateSalary = function () {
            this.totalSalary = this.basicSalary + bonus;
        };
        this.getTotalSalary = function () {
            updateSalary()
            console.log(this.totalSalary)
        };

    }

}

let amolD = new Employee4("amol",'rao',12,4555)
console.log(amolD.bonus)
console.log(amol.updateSalary())
