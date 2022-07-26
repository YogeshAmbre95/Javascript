// // // same method same class different signature - overloading
// // // different class same method name same signature - overriding --- inheritance

// class Calculator {
//     addition(a, b, c) {
//         if (a != undefined && b != undefined && c != undefined) {
//             console.log(a + b + c)
//         }
//         else if (a != undefined && b != undefined) {
//             console.log(a + b)
//         }
//         else {
//             console.log("Can't add one digit")
//         }
//     }

// }
// let cal = new Calculator()
// cal.addition(11, 12, 13)
// cal.addition(14, 13)
// cal.addition(1)

// let obj={
//     firstName:"yogesh",
//     firstName:"harshal"
// }
// console.log(obj.firstName)//harshal(gives updated Value)

// function add(a=1,b=1){
//     console.log(a+b)
// }
// add(12,3)



// //orverriding

// class WorldBank{
//     save(x){
//         console.log(`saving interest ${8*x}`)
//     }

//     loan(y){
//         console.log(`loan interest ${6*y}`)
//     }
// }

// class SBI extends WorldBank{
//     save(x){
//         console.log(`saving interest ${6*x}`)
//     }
//     loan(y){
//         console.log(`loan interest ${9*y}`)
//     }
// }

// class PNB extends WorldBank{

// }

// let a= new WorldBank()
// a.save(2)
// a.loan(3)


// let b = new SBI()
// b.save(1)
// b.loan(3)



// let c = new PNB()
// c.save(3)
// c.loan(3)

// ////////////////////////////////////////////

// function addition(){
//     let a=4
//     let b=6
//     return function(){
//         console.log(a+b)
//     }
// }
// addition()()
// let aa=addition()

// // // let aa = function(){
// // //     console.log(a + b)
// // // }

// aa()


// //IIFE

(function(){
    console.log(7+7)
})()

let sum = (function(x,y){
    x = 30
    y = 40
   return x + y 
})(12,34)
console.log(sum)
