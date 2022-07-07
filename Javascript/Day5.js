//program one

let ages=[23,32,12,28]

let birthyear=[]

for(let i=0;i<ages.length;i++){
let by=2022-ages[i]

birthyear.push(by)

}
console.log(birthyear)


//map


let aaa = ages.map(function(el){
    return 2022 - el 
 })
 console.log(aaa)
 
 let asat=[23,32,24]

 let bbb = asat.map(function(el){
    return el + 2
})

console.log(bbb)


//.....Program 2..///

// // program 2 
let numbers = [12,13,43,23,25,26,21,23,34]
let obove20 = []
for(let i = 0 ; i < numbers.length ;i++){
    //console.log(numbers[i])
    if(numbers[i] > 20){
        obove20.push(numbers[i])
    }
}
console.log(obove20)


// array -- filter()
let ccc = numbers.filter(function(el,index,arr){
    return el > 20
})
console.log(ccc)

let bn = [12,13,43,23,25,26,21,23,34,56,67,54]
let iii = bn.filter(function(el){
    return el > 50
})
console.log(iii)

// // program  3

let su = [12,23,34,45]
let total = 0 
for(let i = 0 ; i < su.length ; i++){
    total = total + su[i]

 }
 console.log(total)

// reduce
 let iiy = su.reduce(function(acc,el){
        return acc + el
 },5)
 console.log(iiy)


// program  4

 let names = ["Yogesh","Harshal","Mahesh"]
 for(let i = 0 ; i < names.length ; i++){
     console.log("welcome "+ names[i])
 }

// forEach()

 let tt = names.forEach(function(el){
     console.log('welcome '+ el)

 })
