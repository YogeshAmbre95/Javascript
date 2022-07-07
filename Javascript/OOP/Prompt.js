// //object literal

// let yogesh = {
//     firstName: 'yogesh',
//     lastName: 'ambre',
//     age: 27,
//     rollNumber: 45
// }

// console.log(yogesh)


// //function Constructor

// let Person = function (firstName, lastName, age, roll) {
//     this.firstName = firstName
//     this.lastName = lastName
//     this.age = age
//     this.roll = roll
// }
// let harshal = new Person("harshal", "ambre", 122, 34)
// console.log(harshal)

// //ES6

// class Person2 {
//     constructor(firstName, lastName, roll, age) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.roll = roll
//         this.age = age
//     }

// }
// let amol = new Person2("amol", "ambre", 23, 45)
// console.log(amol)


// //object create

// let sanket = Object.create({})
// console.log(sanket)


// //retrive

// //update
// //add
// sanket.firstName = "sanket"
// sanket["lastname"] = "jadhav"
// sanket.age = 28
// sanket["rollnumber"] = 34

// console.log(sanket)


// // Object create method with prototype

// let pro = {
//     cal: function () {
//         console.log(2022 - 1990)
//     }
// }

// let vivek = Object.create(pro)
// vivek.cal()
// console.log(vivek)
// console.log(vivek.__proto)

// let pro3 = {
//     cal() {
//         console.log(2022 - 1990)
//     },
//     init(firstName, lastName, age, roll) {
//         this.firstName = firstName,
//             this.lastName = lastName,
//             this.age = age,
//             this.roll = roll
//     }
// }

// let avinash=Object.create(pro3)

// avinash.init("avinash","aher",29,43)
// console.log(avinash)


// //Encapsulation --private,public, protected

// //static() method
// //OOPs

// class Bank{
//     static greet(){
//         console.log("welcome to bank")

//     }
// }
// Bank.greet()


// //for while

// //program

// for(let i=0;i<5;i++){
//     console.log(i)
// }

// for(let i = 0 ; i < 5 ; i++){
//     if(i == 2){
//         break
//     }
//     console.log(i)
// }


// for(let i = 0 ; i < 5 ; i++){
//     if(i == 2){
//         continue
//     }

//     console.log(i)
// }

// console.log("//******************/")

let random= Math.floor(Math.random()*6)+1
console.log(random)


if (random==userInput){
console.log('your guess is correct')
}

else{
    console.log('your guess is incorrect')
}

let random2=Math.floor(Math,random()*6)+1

console.log(random2)


for(let i=0;i<3;i++){
    let userInput=prompt('Guess the number')
    if (random2==userInput){
        console.log("correct guess")
        break
    }
    else{
        console.log('your guess incorrect')
    }
}


//while

let random3 = Math.floor(Math.random()*6)+1  
console.log(random3)
let userInput = prompt('Guess the number')   

while(random3 != userInput){

    userInput = prompt('Guess the number') 
    if(random3 == userInput){
        console.log('correct guess')
        break
    }
    else {
        console.log('you guess incorrect')
    }
}