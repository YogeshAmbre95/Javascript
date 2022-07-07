// fill(), join(),splice() ,includes()

let fruit=["mango","apple","orange","grapes"]
let a=fruit.includes("Mango")
let b=fruit.includes("mango")
console.log(a)
console.log(b)

//fill

let marks=[20,23,24,25,26,27,28,29]
marks.fill(22,2,5)
console.log(marks)

let info=["yogesh","ambre","9503808298"]
let c=info.join("-")
console.log(c)


friends=["amol","vaibhav","vishal","sanket"]

//friends.splice(startingIndex,numberofEleToBeDeleted,rep1,rep1)

// let d=friends.splice(1,2)
// console.log(friends)
// console.log(d)

let e=friends.splice(1,2,"pravin","akshay")
console.log(friends)
console.log(e)
