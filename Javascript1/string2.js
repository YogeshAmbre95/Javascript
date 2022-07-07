// string 
//  Javascript object 

// Object property and methods 

let name1 = "yogesh"
// 0 1 2 3 4 5 
// y o g e s h

console.log(name1[0])
// string - object (property and method)

let numOfChar = name1.length
console.log(numOfChar)

// 0  1  2  3  4  5
// n  a  s  h  i  k

let city = "nashik"
console.log(city[0])
console.log(city[1])
console.log(city[2])
console.log(city[3])

// loops 
let city2 = "satara"

// for(initilization; conditionCheck, incrementOrdecrement){

//     // statements
// }

for(let i = 0 ; i < 4 ; i++){ 

    //console.log(i) // 
    console.log(city2[i])

}

//i++ increment the value of i by 1

city2 = "satara"

//console.log(city2[0]) // 
console.log(city2.length)

for(let i = 0 ; i < city2.length ; i++ ){
   // console.log(i)
   console.log(city2[i])
}


let city3 = "latur"

//  0 1 2 3 4 
//  l a t u r
for(let i = 0 ; i < city3.length ; i++){
    //console.log(i)
    console.log(city3[i])
}

for(let i = city3.length -1 ; i >= 0 ; i-- ){
    //console.log(i)
    console.log(city3[i])
}


let city4 = "delhi"

// length  
// 0 1 2 3 4
// d e l h i
console.log(city4.length)
console.log(city4[city.length-1])

// property --- length 
// method --- action and return type
// Gym -- action - excercise === > muscle


let city5 = "goa"

//toUpperCase()
// action - convert all characters in captial
// return - same string 

let aaa = city5.toUpperCase()
console.log(aaa)

// toLowerCase()
// action - convert all characters in small letter
// return - same string 
let bbb = city5.toLowerCase()
console.log(bbb)

// includes 
// action - searches for substring 
// return - if found return true else false

let ccc = city5.includes('a')
console.log(ccc)