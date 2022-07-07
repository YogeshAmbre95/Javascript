// // array string object function 
// // function object , function , string , number

// // number  as a parameter to function
// function sub(x, y) {
//     return x - y
// }
// let a = sub(20, 10)
// console.log(a)

// //// string as a parameter to function 

// //vowels- //a e i o u 
// function countVowels(word) {
//     //let word = "yogesh"

//     let count = 0
//     for (let i = 0; i < word.length; i++) {

//         if (word[i] == "a" || word[i] == "e" || word[i] == "i" || word[i] == "o" || word[i] == "u") {
//             count = count + 1
//         }
//     }
//     return count
// }
// let total = countVowels("yogesh")
// console.log(total)


// // string are immutable, cannot change single character

// let b = "yogesh"
// console.log(b[1])
// b[2] = "b"
// console.log(b)
// b = "harshal"
// console.log(b)

// // array as parameter to function

// let num = [3, 4, 5, 6]
// function sumAll(arr) {
//     arr[1] = 9
//     console.log(arr)

// }
// console.log(num)
// sumAll(num)
// console.log(num)


// let x = [11, 12, 13]
// let y = x
// console.log(x)
// console.log(y)
// y[0] = 19
// x[1] = 20

// console.log(x)
// console.log(y)

// let h = [11, 12, 13]
// function sumAll(arr) {
//     let i = arr.reduce(function (acc, el, index, arr) {
//         return acc + el
//     }, 0)

//     return i
// }
// let ijk = sumAll(h)
// console.log(ijk)

// //object

// let info = {
//     fullname: "yogesh Ambre",
//     age: 27

// }
// let info2 = info
// info.firstname = "Harshal Ambre"
// console.log(info2)
// console.log(info)

// // object as a parameter to another function 

// let info3 = {
//     fullname1: "yogesh ambre",
//     age: 27

// }
// function printobj(object) {
//     console.log(object)
//     object.age = 45
// }
// console.log(info3)
// printobj(info3)
// console.log(info3)



let info4 = {
    Fullname: " yogesh ambre",
    age: 26,
    skill: ["angular", "java", "c++"]

}
function printAllobj(object) {
    for (let key in object) {
        console.log(key, info4[key])
    }
}
printAllobj(info4)