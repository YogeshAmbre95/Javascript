// vowels // a e i o u 
// function countVowels(word){
//     // let word = "yogesh"
//     let count = 0 
//     for (let i = 0; i < word.length ; i ++){
//         word[i] = word[i].toLowerCase()
//         if ( word[i] == "a" || word[i] =="e" || word[i] =="i" || word[i] =="o" || word[i] =="u"){
//             count = count + 1

//         }
//     }
//     return count
// }

// let total = countVowels("yogesh") 
// console.log(total)


///

class Student {
    constructor(firstName,lastName,age){
        this.firstName=firstName
        this.lastName=lastName
        this.age=age
    }
    display(){
        console.log(this.firstName+this.lastName)
    }
}

class Teacher extends Student{
    constructor(firstName,lastName,age,salary){
        super(firstName,lastName,age)
        this.salary=salary
    }
    
}

let amol=new Student('amol','ambre',12)
console.log(amol)
let amol2= new Teacher('amol','ambre',12,249595)
console.log(amol2)
amol2.display()


let myMap= new Map

myMap.set(1,"firstName")
myMap.set(2,"lastName")
myMap.set(3,"age")
myMap.set(4,"Rollno")

console.log(myMap)

