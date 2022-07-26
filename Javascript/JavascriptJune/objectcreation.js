

// Object literal

let yogesh = {
    firstName:"yogesh",
    lastName:"ambre",
    age:12,
    rollNo:122,
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}
let harshal = {
    firstName:"harshal",
    lastName:"ambre",
    age:11,
    rollNo:111,
    display:function(){
        console.log(this.firstName + this.lastName)
    }
}
yogesh.display()



console.log(harshal.firstName)
console.log(harshal.lastName)
harshal.display()



// setting property value of object outside the class

class Person {

    firstName=undefined
    lastName= undefined
    rollNo=undefined
    age = undefined

    display(){
        console.log(this.firstName + this.lastName)
    }

}

let sarthak = new Person()
console.log(sarthak)

sarthak.age = 12
sarthak.lastName = "navale"
sarthak.rollNo = 33
sarthak.firstName = "sarthak"

console.log(sarthak)
sarthak.display()

// setting the property value of object at the time of object creation 


class Person1 {
    constructor(fn,ln,roll,age){
        this.firstName = fn
        this.lastName = ln
        this.roll = roll
        this.age = age

    }

    display(){
        console.log(this.firstName + this.lastName)
    }
}

let vrushali = new Person1("vrushali","navale",22,44)
let jayesh = new Person1("jayesh","bhor",33,44)
let rutik = new Person1('rutik',"walunj",44,55)

console.log(vrushali)
vrushali.display()

jayesh.lang = "hindi"
console.log(jayesh)
console.log(rutik)

//setting the values using get function

class Student{
    setFirstName(fn){
        this.firstName=fn
    }

    setLastName(ln){
        this.lastName=ln
    }

    setRollNo(rollNo){
        this.rollNo=rollNo
    }

    setAge(ag){
        this.age=ag
    }
}

let Parag= new Student()
console.log(Parag)
Parag.setFirstName="parag"
Parag.setLastName="pawase"
Parag.setAge=18
Parag.setRollNo=13

console.log(Parag)
