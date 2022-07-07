// comparision 

//< , > == , != , === , <= , >= , !== , ==

// basic --- === or ==

console.log(7 === "7")
console.log(4 == "4")
console.log(3 !== '7')
console.log(8 !== '8')

// AND 
// True True  - True
// True False - False
// False True - False
// False False  - False


// OR
// True True  - True
// True False - True
// False True  - True
// False False - False

// NOT 
// ! True - False
// !False - True
// ----------------------------------------------- /

// mark==>'A'||'B'||'c'
// marks>80===>A
// marks>60&&marks<=80===>B
// marks<60===>C



let marks = 70
if (marks > 80) {
    console.log('you got A grade')

}
if (marks > 60 && marks <= 80) {
    console.log('you got B grade')
}
else if (marks < 60) {
    console.log('you got C grade')
}
else {
    console.log('hello')
}


//Switch case

let subject = "Politics"
switch (subject) {
    case "Mathematics":
        console.log('Science')

    case "Politics":
        console.log('Art')
    case "Account":
        console.log('Commerce')

    default:
        console.log('Please Enter correct subject')

}


let subject1 = "Politics"
switch (subject1) {
    case "Mathematics":
        console.log('Science')
        break

    case "Politics":
        console.log('Art')
        break
    case "Account":
        console.log('Commerce')
        break

    default:
        console.log('Please Enter correct subject1')

}

//loops

for (let i = 0; i < 4; i++) {
    console.log(i)
}
for (let i = 5; i >= 0; i--) {
    console.log(i)
}

// for(intialization;conditioCheck;increment/decrement){
//     // statements
// }


let k = 0
for (; k < 3;) {
    console.log(k)
    k++

}

//break keyword

for (let i = 0; i < 5; i++) {

    if (i == 2) {
        break
    }
    console.log(i)

}

console.log("......................")

for(let i = 0 ; i < 7 ; i++){
    if(i == 2){
        continue
    }
    console.log(i)  
}

