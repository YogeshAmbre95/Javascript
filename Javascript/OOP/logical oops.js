// // class
// class Person {

//     constructor(firstName, lastName, city, marks) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.city = city
//         this.marks = marks
//     }

//     calPercentage() {
//         return (this.marks.reduce(function (acc, el) {
//             return acc + el
//         }, 0) / 500) * 100
//     }

//     static greeting() {

//     }


// }

// let marks = [[100, 100, 100, 100, 90], [70, 70, 70, 70, 70], [11, 12, 13, 14, 15], [33, 44, 55, 66, 77], [55, 22, 33, 44, 55]]

// let students = []
// for (let i = 0; i < 5; i++) {
//     //console.log(i+1)
//     let obj = new Person(`amol-${i + 1}`, `rao-${i + 1}`, `city${i + 1}`, marks[i])
//     students.push(obj)
// }
// console.log(students)
// // [12,14,14,51,44]
// //  marks / totalMarks * 100
// let percentArray = []
// for (let i = 0; i < students.length; i++) {
//     percentArray.push(students[i].calPercentage())
// }

// console.log(percentArray)

// console.log(percentArray.reduce(function (acc, el) {
//     return acc + el
// }, 0) / students.length)

// // print name of every student 

// students.forEach(function (el) {
//     console.log(el.firstName)
// })

// // lastName of every student 
// students.forEach(function (el) {
//     console.log(el.lastName)
// })

// students.forEach(function (el) {
//     console.log(el.firstName + " " + el.calPercentage())
// })

// // highet mark --- amol 
// console.log(percentArray)
// let h = percentArray
// let min = h[0]
// let max = h[0]

// for (let i = 0; i < h.length; i++) {

//     if (h[i] < min) {
//         min = h[i]
//     }
//     else if (h[i] > max) {
//         max = h[i]
//     }
// }

// console.log(min)
// console.log(max)

// console.log(students.find(function(el){
//     return el.calPercentage() == max
// }).firstName)


// console.log(students.find(function(el){
//     return el.calPercentage() == min
// }).firstName)

// console.log(students.every(function(el){
//     return el.calPercentage() > 15
// }))

// // lang = "Hindi"
// students.forEach(function(el){
//     el.lang = "Hindi"
// })
// console.log(students)

// // Vehicle 

// class Vehicle {

//     constructor(type,color,reg){
//         this.type = type
//         this.color= color
//         this.reg = reg
//     }

// }

// let cars = [
//     new Vehicle("sedane","blue","123"),
//     new Vehicle("SUV","red","123"),
//     new Vehicle("jeep","red2","123"),
//     new Vehicle("SUV2","red3","123"),
//     new Vehicle("sedance","red4","123"),
// ]

// console.log(cars)

//  Nagpur -- SVSS ====> 6 years
// Pune -- IT prenuer ===>  25 k ---  10 k 
// 2018 ===
// 2022 ----->18 (python ---- excel , api)  // datascience ===> python

// 90

class Person {

    constructor(firstName, lastName, city, marks) {
        this.firstName = firstName
        this.lastName = lastName
        this.city = city
        this.marks = marks
    }

    calCulatePercentage() {
        return ((this.marks.reduce(function (acc, el) {
            return (acc + el)
        }, 0) / 500) * 100)

    }

    greet() {
        console.log('hello')
    }

}

let marks = [[22, 33, 55, 77, 88], [77, 99, 99, 33, 44], [66, 77, 88, 22, 99], [100, 33, 55, 66, 77], [77, 88, 44, 55, 66]]
let students = []
// for(let i = 0 ; i < marks.length ; i++){

// }

let studentss = marks.map(function (el, index) {
    return new Person(`chinmay${index + 1}`, `deshpande${index + 1}`, `city${index + 1}`, el)
})

console.log(studentss)

let calCulatePercentage = studentss.map(function (el, index) {
    return el.calCulatePercentage()
})
let max = calCulatePercentage.sort().reverse()[0]
let min = calCulatePercentage.sort()[0]


console.log(studentss.find(function (el) {
    return el.calCulatePercentage() == min
}).firstName)

console.log(studentss.find(function (el) {
    return el.calCulatePercentage() == max
}).firstName)


// adding property

studentss.forEach(function (el) {
    return el['lang'] = "Hindi"
})

//average percentage
console.log(calCulatePercentage.reduce(function (acc, el) {
    return acc + el
}, 0) / calCulatePercentage.length)


// class Vehicle 

class Vehicle {

    constructor(color, type, registrationNo) {
        this.color = color
        this.registrationNo = registrationNo
        this.type = type
    }


    displayinfo() {
        console.log(this.color)
    }

}


let cars = [

    new Vehicle('red', 'SUV', '123'),
    new Vehicle('blue', 'SUV2', '1234'),
    new Vehicle('black', 'SUV', '1235'),
    new Vehicle('red', 'SUV3', '1236'),
    new Vehicle('yellow', 'SUV4', '1237'),

]

cars.forEach(function(el){
    el.displayinfo()
})

// 9 am 7 pm - cypress 

/-------------------------------------------------------------------/ 


// polymorpshism -- 

//method overloading 

// method overriding



// method overloading --- same class , same method name , different singature 
// method overriding - different class , same method same signature 

// over loading 
class Addition {

    cal(a,b,c,d){

        if(a != undefined  && b != undefined && c != undefined && d != undefined){
            console.log(a+b+c+d)
        }
        else if(a != undefined  && b != undefined && c != undefined){
            console.log(a+b+c)
        }
        else if(a != undefined  && b != undefined ){
            console.log(a+b)
        }
        else {
            console.log('Please provide correct input')
        }

    }
}


let a = new Addition()

a.cal(12,13,14,44)
a.cal(12,13,14)
a.cal(12,13)
a.cal(12)


// overring
class Bank {

    constructor(bankName,city){
        this.bankName = bankName
        this.city = city

    }

    depoist(){
        console.log(`worldbank depoist`)
    }

}


class SBI extends Bank {

    depoist(){
        console.log(`sbi depoist`)
    }

}

let SBI1 = new SBI("sbi","pune")

SBI1.depoist()
