let country = ["India","China","Thailand"]
let aaa = country.push("UAE")
console.log(country)
console.log(aaa)


let bbb = country.unshift("Russia")
console.log(country)
console.log(bbb)

let ccc = country.shift()
console.log(country)
console.log(ccc)
let ddd = country.pop()
console.log(country)
console.log(ddd)

let vegetable = ["potato","cabbage","tomato"]
let rrr = vegetable.includes('Cabbage')
console.log(rrr)



// program One 
//         0   1  2  3
let ages = [24,25,26,31]
let birthYear = [] 
// [1998,1997,1996,1991]
for(let i = 0 ; i < 4 ; i++){ // 1 // 2 // 3 // 4
    //console.log(2022 - ages[i]) // 0 , 1 , 2 , 3
    let byear = 2022 - ages[i]
    birthYear.push(byear)
}
console.log(birthYear)


//            0   1  2  3  4 5 
let marks =  [11,10,55,44,42,40]
let above40 = [] // [55,44,42]
// [55,44,42]
for(let i = 0 ; i < 6 ; i++){
    console.log(marks[i])

    if(marks[i] > 40){
        above40.push(marks[i])
    }
}
console.log(above40)

