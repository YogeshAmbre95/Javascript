// program One 
//         0   1  2  3
let ages = [12,32,25,26]
let birthYear = [] 

for(let i = 0 ; i < 4 ; i++){ 
    //console.log(2022 - ages[i]) 
    let byear = 2022 - ages[i]
    birthYear.push(byear)
}
console.log(birthYear)

// program Two
//            0   1  2  3  4 5 
let marks =  [12,14,56,54,47,60]

let above50 = [] 

for(let i = 0 ; i < 6 ; i++){
    console.log(marks[i])

    if(marks[i] > 50){

        above50.push(marks[i])
    }
}
console.log(above50)

// Program Three 

//            0   1  2
let number = [21,22,23]

let total = 0

for(let i = 0 ; i < 3  ; i++){ 
    
    total = total + number[i]
//           0    +     21  ===> 21
//           21   +      22  ===>  33
//           33   +       23  ====> 56

}
console.log(total)

// program Four

//             0        1        2
let subject = ["hindi","marathi","english"]

// welcome  hindi
// welcome  marathi
//welcome  english
for(let i = 0 ; i < subject.length ; i++){
    console.log('welcome '+ subject[i])
}
