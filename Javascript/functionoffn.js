function mul(x, y) {
    console.log(x * y)
}
mul(10, 20)

let x = 20
console.log(x)

let multiplication = function (x, y) {
    console.log(x * y)
}
multiplication(10, 15)
console.log(multiplication)// printing the function definition for arrow function

let addition = function (x, y) {
    return x + y
}
let abc = addition(11, 12)
console.log(abc)
function addition1(fn1) {
    let fn = function (x, y) {
        return x + y
    }
    let lkj = fn1(20, 20)
    return lkj
}
let lkjj = addition1(addition)
console.log(lkjj)


//**************************** */

function returnStory() {

    return 2 + 2
}
let xyz = returnStory()
console.log(xyz)

function returnStory1() {
    return "yogesh ambre"
}
let wxy = returnStory1()
console.log(wxy)
console.log(wxy[2])

function returnStory2() {
    return [1, 2, 3, 4, 5, 6, 7, 8]
}

let aaaa = returnStory2()
console.log(aaaa[aaaa.length - 1])

function returnStory3() {
    return {
        firstname: "yogesh",
        lastname: "ambre"

    }
}
let abcd = returnStory3()
console.log(abcd)

let bbb = returnStory3()
for (let key in bbb) {
    console.log(key, bbb[key])

}

function addition3() {
    let x = function () {
        console.log("yogesh")
    }
    return x

}
let cdf = addition3()
cdf()

function substraction2(x,y) {
    console.log(x+y)

}
substraction2(23,24)

