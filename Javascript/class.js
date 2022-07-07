let yogesh = {
    firstname: "yogesh",
    lastname: "ambre",
    age: 26,
    rollno: 21

}

let harshal = {
    firstname: "harshal",
    lastname: "aher",
    age: 20,
    rollno: 11
}

let sachin = {
    firstname: "sachin",
    lastname: "jondhale",
    age: 25,
    rollno: 23
}

// template , blue print ===> object by defining class
// setting the value outside the class


class student {

    firstName = undefined
    lastName = undefined
    age = undefined
    rollNo = undefined


}

let vivek = new student()
console.log(vivek)

vivek.firstName = "vivek"
vivek.lastName = "datir"
vivek.age = 27
vivek.rollNo = 20
console.log(vivek)

// constructor are used to set the property value at the time of object creation

class student2 {
    constructor(fn, ln, ag, rn) {
        this.firstName = fn
        this.lastName = ln
        this.age = ag
        this.rollNo = rn
    }

}

let ganesh = new student2("ganesh", "mutkule", 13, 32)
console.log(ganesh)

let sarthak = new student2("sarthak", "navale", 20, 22)
console.log(sarthak)

//By using method

class student3 {
    setFirstname(fn) {
        this.firstName = fn
    }
    setLastname(ln) {
        this.lastName = ln

    }
    setrollNo(rn) {
        this.rollNo = rn
    }
    setage(ag) {
        this.age = ag
    }
}

let suraj = new student3()
console.log(suraj)
suraj.setFirstname("suraj")
suraj.setLastname("mutkule")
suraj.setage(25)
suraj.setrollNo(30)
console.log(suraj)
