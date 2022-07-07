let city='sangamner'

console.log(city[1])
console.log(city)


//object ==property and methods

let a =city.length
console.log(a)

//Method==action and return

//toUpperCase()

let city1='nashik'

let b=city1.toUpperCase()
console.log(b)

//toLowerCase()

let city2='Mumbai'
let c=city2.toLowerCase()
console.log(c)

//include()

let city3='Latur'
let d=city3.includes('a')
let e=city3.includes('tur')
let f=city3.includes('m')
console.log(d)
console.log(e)
console.log(f)

//indexOf()

let city4="Satara"

let g=city4.indexOf('t')
let h=city4.indexOf('a')
console.log(g)
console.log(h)

//charAt()

let city5='Ahmednagar'

let j=city5.charAt(0)
console.log(j)


//for loop

// for(intialization ; conditionCheck ; increment/ decrement){
//     // statements
// }

//loop

for(let i=0;i<3;i++){
    console.log(i)
}
console.log('****************************************')
for(let i=5;i>=0;i--){
    console.log(i)
}

let city6='Sangamner'

for(let i=0;i<city6.length;i++){
    //console.log(i)
    console.log(city6[i])

}
console.log(city6)

let rr=''
// for(let i=0;i<city.length;i++){
//     rr=city6[i]+rr
// }
// console.log(rr)

for(let i=0;i<city.length;i++){
    rr=rr + city6[i]
}
console.log(rr)

let cityA="mumbai"

//slice

// 0  1  2  3  4  5
// m  u  m  b  a  i
// -6 -5 -4 -3 -2 -1

// stringName.slice(IndexstartPosition ; Indexendposition(not included))

let aa=cityA.slice(1)
console.log(aa)
console.log(cityA.slice(1,4))

console.log(cityA.slice(2,4))
console.log(cityA.slice(2,5))
console.log(cityA.slice(-5,-2))


let nameB=" yogesh"
console.log(nameB.length)
let nameA=nameB.trimStart()
console.log(nameA)

let nameC="yogesh "
console.log(nameC.trimEnd())

let nameD=" yogesh "
console.log(nameD.trim())

//startWith()
//endsWith()

let nm="yogesh"
let ab=nm.startsWith('yo')
console.log(ab)
let ac=nm.startsWith('z')
console.log(ac)
let ad=nm.endsWith("sh")


console.log(typeof 12,7)