//Function declaration

function add(a,b){

    console.log(a+b)
}
add(20,22)

//Function expression

let add1=function(a,b){
console.log(a+b)

}
add(20,22)

//Arrow function

let add2=(a,b)=>{
console.log(a+b)

}
add(20,22)


//String

//string===object===property and method


let Name="yogesh"

console.log(Name[0])

console.log(Name[3])


//Property = lenght

let city="sangamner"

let bbb=city.length

console.log(bbb)

//Method

let fruit="Mango"

let aa=fruit.length
console.log(aa)


let ddd=fruit.toUpperCase()
console.log(ddd)
console.log(typeof ddd)

let eee=fruit.toLowerCase()
console.log(eee)
console.log(typeof eee)

let vegetable="potato"

let hhh=vegetable.includes("M")
console.log(hhh)

let iii=vegetable.includes("t")

console.log(iii)
