let name = "chinmay"
let lastName = 'Deshpande'
let middleName = `shirish`

console.log(name,lastName,middleName)

// string ---- 

// Everthing in js is object 
// String is also object -- property and method


// Array stores the value by index - true
// Object also stores the value by index - false
// string stores the character by index 



let city = "Pune"
// 0  1  2  3
// P  u  n  e
console.log(city[0])

// string -- object --- property and  methos
console.log(city.length)

let country = "India"

// 0 1 2 3 4
// I n d i a 
console.log(country.length)
console.log(country[country.length-1])

// length -1 is always the last index

let fruit = "Apple"
//console.log(fruit[0])
for(let i = 0 ; i < fruit.length ; i++){  // 1 // 2 // 3 // 4 // 5
    //console.log(i)  // 0 // 1  // 2 // 3 // 4
    console.log(fruit[i])
}


// Methods 

// action 

// return
let subject = "English"
let aaa = subject.toUpperCase()
console.log(aaa)

let subject2 = "Mathematics"
let bbb = subject2.toLowerCase()
console.log(bbb)

let subject3 = "Algebra"
let cc =subject3.includes('Al')
console.log(cc)

let subject4 = "Hindi"
let rrr = subject4.startsWith("Hi")
console.log(rrr)

let subject5 = "Marathi"
let qqq = subject5.endsWith("hi")
console.log(qqq)
