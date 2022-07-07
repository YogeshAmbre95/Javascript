let aa = ["yogesh", "harshal", "sarthak"]

//for loop

for (let i = 0; i < aa.length; i++) {
    console.log(aa[i])
}

for (let i = aa.length - 1; i >= 0; i--) {
    console.log(aa[i])

}

let city = ["pune", "nashik", "mumbai"]

let bb = city.length

console.log(city)

// push()
// action add the element to the last 
// return the new length of array

let cc = city.push("latur")
console.log(cc)
console.log(city)

// unshift()
// action add the element at the beginning 
// return the new length of array

let dd = city.unshift("Ahmednagar")

console.log(dd)
console.log(city)

//pop

let ee = city.pop()
console.log(ee)
console.log(city)

//shift

let ff = city.shift()
console.log(ff)
console.log(city)
//city =[ 'pune', 'nashik', 'mumbai' ]  

//includes

let gg = city.includes("pune")
console.log(gg)


//indexof

let hh = city.indexOf('pune')
console.log(hh)

//Reverse

let ii = city.reverse()
console.log(ii)


//sort

let jj = city.sort()
console.log(jj)

//join

let info = ["yogesh", "ambre", 9503808298]
let kk = info.join('-')
console.log(kk)


//Program one

//loops

let birthyear = [2003, 2009, 2000, 1998]

let ages = []

for (let i = 0; i < birthyear.length; i++) {

    let calAge = 2022 - birthyear[i]

    ages.push(calAge)

}

console.log(ages)


//Program Two

// filter>10

let ageA = [10, 12, 23, 34, 21, 32, 32, 14]
let above10 = []

for (let i = 0; i < ageA.length; i++) {
    if (ageA[i] > 10) {
        above10.push(ageA[i])
    }
}
console.log(above10)


//program Three

//sum

let numbers = [4, 5, 6, 7]

let sum = 0

for (let i = 0; i < numbers.length; i++) {

    sum = sum + numbers[i]


}
console.log(sum)


// //program Four

let names = ["Yogesh", "Harshal", "Sarthak"]

for (let i = 0; i < names.length; i++) {

    console.log('Welcome ' + names[i])
}

