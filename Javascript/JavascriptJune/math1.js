//actual difference between for loop and while loop

//Math

console.log(Math.floor(11.7))//11
console.log(Math.ceil(23.4))//24
console.log(Math.round(33.4))//33
console.log(Math.round(33.6))//34
console.log(Math.random())// 0-1
console.log(Math.random() * 6)// 0-5.99
console.log(Math.floor(Math.random() * 6))// 0,1,2,3,4,5
console.log(Math.floor(Math.random() * 6) + 1)

//guess one time

// let randomNumber=Math.floor(Math.random()*6)+1
// console.log(randomNumber)
// let userInput=prompt('Enter any number between 1 to 6')
// if(randomNumber==userInput){
//     console.log('your guess is correct')
// }
// else{
//     console.log('your guress is incorrect')
// }

//guess 5 times (for loop)

// let randomNumber = Math.floor(Math.random() * 6 + 1)//5
// console.log(randomNumber)
// for (let i = 0; i < 5; i++) {
//     let userInput = prompt('Enter any number between 1 to 6')
//     if (randomNumber == userInput) {
//         console.log('your guess is correct')
//         break
//     }
//     else {
//         console.log('incorrect guess,please try again')
//     }
// }

//program 3

// let randomNumber = Math.floor(Math.random() * 6) + 1 //3

// console.log(randomNumber)
// let userInput = prompt('Please Enter any number from 1 to 6')
// while (randomNumber != userInput) {
//     userInput = prompt('Please Enter any number from 1 to 6')
//     if (userInput == randomNumber) {
//         console.log('your guess is correct')
//         break
//     }
//     else {
//         console.log('your guess is incorrect, please try again')
//     }
// }


//program 4

let randomNumber=Math.floor(Math.random()*6)+1 //
console.log(randomNumber)
do{
    let userInput =prompt('Please Enter any number from 1 to 6')
    if(randomNumber==userInput){
        console.log('your guess is correct')
        break
    }
    else{
        console.log('your guess is incorrect, please try again')
    }
}
while(userInput!=randomNumber)






