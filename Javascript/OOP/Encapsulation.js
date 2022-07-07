//Encapsulation

class Person {
    constructor(name, age, rollno) {
        this.name = name
        this.age = age
        this.rollno = rollno
    }
    updateName(nm) {
        this.name = nm
    }
    updateAge(ag) {
        this.age = ag
    }
    updaterollno(rn) {
        this.rollno = rn
    }
    getName() {
        return this.name
    }
    getAge() {
        return this.age
    }
    getrollNo() {
        return this.rollno
    }
}
let yogesh = new Person("yogesh", 28, 233)

//Program one 

const a = 12
if (true) {

    let b = 13
    console.log(b)
}
{
    let c = 20
    console.log(c)
}
console.log(a)


//functions

const printName = function () {
    let firstName = "yogesh"
    let lastName = "ambre"

    let printFullName = function () {
        console.log(firstName + " " + lastName)
    }
    return printFullName
}
printName()()

//privacy

//closure

function add() {
    let a = 100
    let b = 200
    return function () {
        console.log(a)
        console.log(b)
    }
}
let aa = add()
aa()

const printName1 = function () {
    let firstName = "harshal"
    let lastName = "ambre"

    let printFullName = function () {
        console.log(firstName + " " + lastName)
    }
    return printFullName
}
printName1()()


//program3

class Person2 {
    constructor() {
        let firstName = "amol"
        let lastName = "ambre"
        this.printName = function () {
            console.log(firstName + lastName)
        }
    }
}


let abc=new Person2()
abc.printName()
// console.log(firstName)
// console.log(lastName)



console.log("*************************************************")

class Person4{
    constructor(firstName,lastName){
        this.firstName=firstName
        this.lastName=lastName
        this.printName=function(){
            return this._firstName+this._lastName
        }
    }
}

let vishal= new Person4("vishal","shinde")
console.log((vishal.printName))
console.log(vishal)

console.log("*************************************************")

