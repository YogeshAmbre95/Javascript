//number + string   --- string 
// string + number ---- string  
// string + string ---- string 
// number + number ---- number 


let x=10
let y=11
let z="welcome"

console.log(x+y)
console.log(y+z)
console.log(x+y+z)
console.log(x+z+y)

let firstname='yogesh'
let lastname='ambre'


//concat

console.log(firstname+" "+lastname)

//string literals, string interpolation

console.log("my firstname is "+firstname+" and my lastname is "+lastname )
console.log(`My firstname is ${firstname} and my lastname is ${lastname}`)


// comparision operator 

//<,>,<=,!==,>=,===,==,!= //boolean

console.log(5<=5)
console.log(5>9)
console.log(4==4)
console.log(5=="5")//true
console.log(5==="5")//false
console.log(5!="5")//false
console.log(5!=="5")//true
console.log(3!=4)
console.log(3!==4)


/* logical operators */
// AND
//True True   --- True
//True False   --- False
//False True   --- False
//False False   --- False

// OR 

//True True   --- True
//True False   --- True
//False True   --- True
//False False   --- False

// NOT

// True - False
// False - True


console.log(4<5 && 5<3)
console.log(!false)

// comparison and logical operator

// conditional statement 

//number of tickets ==10 =>10%
//number of tickets >10=> 20%
//if(condition){
//boolean
// //this will run if condition is true
//
//}
//else{

//}


if(5!=="5"){
    console.log("yes")
}
else{
    console.log("no")
}

if (false && true){

    console.log("yes")

}
else{
    console.log("no")
}

// truthy and False  values in javascript


// true  -1 ,1 ,'A' , 6 > 5
// false  - undefined , null , 0 , NaN , false , 7 === '7'


let ab;
console.log(ab)

if(undefined){
    console.log(" yogesh")

}
else{
    console.log("harshal")
}

if(null){
    console.log('blank')
}
else {
    console.log('filled')
}

if(0){
    console.log('yes')
}
else {
    console.log('no')
}

if(-1){
    console.log('yes')
}
else {
    console.log('no')
}

if(NaN){
    console.log('yes')
}
else {
    console.log('no')
}
