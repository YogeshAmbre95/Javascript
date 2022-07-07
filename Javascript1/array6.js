let fruit=["mango","banana","apple","pineapple"]
console.log(fruit[1])
console.log(fruit[2])

console.log(fruit.length)

// Loop  syntax

// for(intilialization ; conditionCheck ; increment/ decrement){
//     console.log(i)
// }

for(let i=0; i<fruit.length; i++){

    console.log(fruit[i])
}
//push()
let names=["amol","sanket","vivek","vaibhav"]

let a=names.push("sagar")
console.log(a)
console.log(names)

//unshift

let b=names.unshift("avinash")
console.log(b)
console.log(names)

//pop()

let c=names.pop()
console.log(c)
console.log(names)
//[ 'avinash', 'amol', 'sanket', 'vivek', 'vaibhav' ]

let d=names.shift()
console.log(d)
console.log(names)
//[ 'amol', 'sanket', 'vivek', 'vaibhav' ]

//includes()

let e=names.includes("amol")
console.log(e)

let f=names.includes("sagar")
console.log(f)



// //map

let num=[1,3,5,7,9,11,13,15,17]

let g=num.map(function(el,index,arr){
    return el*3
})
console.log(g)

//filter

let h=num.filter(function(el,index,arr){
    return el>10
})
console.log(h)

//reduce

let i=num.reduce(function(acc,el,index,arr){
    return acc+el
},2)
console.log(i)
console.log(num)

//forEach

let j=["pune","sangamner","nashik"]

j.forEach(function(el,index,arr){
    console.log('welocome '+ el)

})

// map --- works with every element returs - array
// filter - filter out the elements return array 
// reduce -- return single expression 
// forEach - works with every element return nothing 


//some()
let k=[41,43,46,51,54,59]
let l=k.some(function(el,index,arr){
    return el>50
})

console.log(l)


//every

let m=k.every(function(el,index,arr){

    return el>50
})
console.log(m)

let n=k.every(function(el,index,arr){

    return el>40
})
console.log(n)

// every() -- true when all memebers of array satisfy the condition
// some()- returns if one member of array satisfy the condition

//filter

let p= [21,22,23,24,31,32,33,34,41,43,45]
let q=p.filter(function(el,index,arr){
    return el > 30
})
console.log(q)

//find

let r=p.find(function(el,index,arr){
    return el >40
    
})
console.log(r)

//findindex


let s=p.findIndex(function(el,index,arr){
    return el >40
    
})
console.log(s)


//slice
//          0       1      2          3       4
let city=["pune","mumbai","nagpur","latur","nashik"]
//          -5      -4       -3      -2       -1

let t=city.slice(1)
console.log(t)
let u=city.slice(0,-2)
console.log(u)
let v=city.slice(-1,-5)
console.log(v)

//reverse

let w=city.reverse()
console.log(w)

//sort()

let x=city.sort()
console.log(x)

//concat

let frndA=["amol","yogesh","vivek"]
let frndb=["akshay","yogesh","pravin"]

let y=frndA.concat(frndb)
console.log(y)

let z=frndb.concat(frndA)
console.log(z)

//flat

aa=[[1,2,3],[4,5,6],[7,8,9]]

let bb=aa.flat()
console.log(bb)