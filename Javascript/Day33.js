//          0       1         2            3       4     
let city=["pune","nashik","Ahmednagar","satara","mumbai"]
console.log(city[3])
console.log(city[2])


let x=city.length
console.log(x)
console.log(city[city.length-2])

//Methods of Array

//push(), unshift(),shift(),pop(),includes()

let games=["cricket","chess","hockey","tennis"]

// push()
// action - adds the element to the last 
// return - new length

let b=games.push("Swimming")
console.log(b)
console.log(games)

//[ 'cricket', 'chess', 'hockey', 'tennis', 'Swimming' ]

let c=games.unshift("football")
console.log(c)
console.log(games)
//[ 'football', 'cricket', 'chess', 'hockey', 'tennis', 'Swimming' ]

let d=games.shift()
console.log(d)
console.log(games)

//[ 'cricket', 'chess', 'hockey', 'tennis', 'Swimming' ]

let e=games.pop()
console.log(e)
console.log(games)

//[ 'cricket', 'chess', 'hockey', 'tennis' ]

//includes

let f=games.includes("cricket")
console.log(f)






let number=[12,123,3456,6789,78900]

console.log(number[1])
console.log(number.length)

//loop

for(let i=0;i<=7;i++){
console.log(i)
}
// for(intialization ; conditionCheck ; increment/decrement){
//       console.log(i)
// }


for(let i=3; i<8; i++){
console.log(i)
}


console.log(city)

// //[ 'pune', 'nashik', 'Ahmednagar', 'satara', 'mumbai' ]

let=city=[ 'pune', 'nashik', 'Ahmednagar', 'satara', 'mumbai' ]
console.log(city.length)
console.log(city[4])

for(let i = 0 ; i < city.length ;i++){  //1
    console.log(city[i])
}


console.log('..reversed...')
for(let i=4; i>=0;i--){

    console.log(city[i])
}

// indexOf

let company=["Infy","Mphasis","SitusAMC"]
let aa=company.indexOf("Infy")
console.log(aa)


//reverse()

let bb=company.reverse()
console.log(bb)

//sort()

let cc=company.sort()
console.log(cc)

let info=["yogesh","ambre","9503808298"]
let rr=info.join("-")
console.log(rr)