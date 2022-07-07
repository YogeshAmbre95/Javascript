let firstname = "yogesh"
let lastName = 'ambre'
let middleName = `kisan`

console.log(firstname, lastName, middleName)

// // string ---- 

// // Everthing in js is object 
// // String is also object -- property and method


// // Array stores the value by index - true
// // Object also stores the value by index - false
// // string stores the character by index 



let city = "Nashik"
// 0  1  2  3  4  5
// N  A  S  h  i  k
console.log(city[4])
console.log(city[3])

// // string -- object --- property and  methods

console.log(city.length)//property

let country = "japan"

// // 0 1 2 3 4
// // j a p a n

console.log(country.length)
console.log(country[country.length - 1])

// // length -1 is always the last index

let fruit = "mango"
console.log(fruit[3])


for (let i = 0; i < fruit.length; i++) {  
    
    console.log(fruit[i])
}


// // Methods

// // action and return


let fruit1 = "Mango"
let xy = fruit1.toUpperCase()
console.log(xy)

let fruit2 = "apple"
let xyz = fruit2.toLowerCase()
console.log(xyz)

let fruit3  = "banana"
let cc =fruit3.includes('n')
console.log(cc)

let name1 = "yogesh"
let abc = name1.startsWith("yo")
console.log(abc)

let name2 = "harshal"
let jkl = name2.endsWith("al")
console.log(jkl)

