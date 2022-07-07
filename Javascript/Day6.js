// // pop()  push() includes() shif() unshift() sort() index()
// // join()


// // program  One 

// //          0  1   2
let ages = [22,21,24]

let birthYear = [] 
for(let i = 0 ; i <ages.length ; i++){
   let by = 2022 - ages[i]
   birthYear.push(by)
}
console.log(birthYear)

// // map
let aaa = ages.map(function(el){
   return 2022 - el 
})
console.log(aaa)

let xyz = [12,23,35]


let aa = xyz.map(function(el){
    return el + 5
})

console.log(aa)


///************************* *//

// // program 2 
let numbers = [22,33,44,25,26,22,23,44,31,34]
let above25 = []
for(let i = 0 ; i < numbers.length ;i++){
    //console.log(numbers[i])
    if(numbers[i] > 25){
        above25.push(numbers[i])
    }
}
console.log(above25)

let digits=[5,6,3,6,7,4]
let above5=[]
for(i=0;i<digits.length;i++){
    if(digits[i]>5){
        above5.push(digits[i])
    }
}
console.log(above5)


// // array -- filter()
let bbb = numbers.filter(function(el,index,arr){
    return el > 30
})
console.log(bbb)

let ddd=digits.filter(function(el,index,arr){
    return el>5
})
console.log(ddd)


let abc = [23,34,22,24,21,26,27]
let jjj = abc.filter(function(el){
    return el > 20
})
console.log(jjj)


// program  3
let sum = [12,23,34]
let total = 0 
for(let i = 0 ; i < sum.length ; i++){
    total = total + sum[i]
   
 }
 console.log(total)

//  // reduce
 let hhh = sum.reduce(function(acc,el){
        return acc + el 
 },6)
 console.log(hhh)


 //  // program  4

 let names = ["Yogesh","Harshal","Sarthak"]
 for(let i = 0 ; i < names.length ; i++){
     console.log("welcome "+ names[i])
 }

 // forEach()

 let tt = names.forEach(function(el){
     console.log('welcome '+ el)

 })


 


//  // map ()
let ijk = [1,2,3,4,5,6,7,8,9,10]



let ljk = ijk.map(function(el,index,arr){
    return el * 3
})
console.log(ljk)

// // filter()

let kkk = [200,400,-43,22,-600]


let deposit = kkk.filter(function(el,index,arr){
    return el > 0
})
let withdrawl = kkk.filter(function(el,index,arr){
    return el < 0
})
console.log(deposit)
console.log(withdrawl)

// // reduce()

let totalD = deposit.reduce(function(acc,el){
    return acc + el  
},0)
console.log(totalD)

let totalW = withdrawl.reduce(function(acc,el){
    return acc + el  
},0)
console.log(totalW)

//  // forEach()

 let firstname = ["Yogesh","Harshal","Sanket"]
 firstname.forEach(function(el){
    console.log('welcome '+ el)
 })


//  // find()
//        0  1   2  3 4  5  6  7
 let a = [12,13,14,15,17,19,44,25]

 let aaaa = a.filter(function(el){
     return el > 30
 })
 console.log(aaaa)


let bbbb = a.find(function(el){
    return el > 10
})
console.log(bbbb)

let ccc = a.findIndex(function(el){
    return el > 30
})
console.log(ccc)

let j = [12,13,23,34,32,35,18]

let yyy = j.every(function(el,index,arr){
    return el > 20
})
console.log(yyy)

let zzz = j.some(function(el,index,arr){
    return el > 1000
})
console.log(zzz)


// // map() -- el ,index ,arr ==> array 

// // filter() - el,index,arr ===> array

// // reduce() -- acc ,el,index arr ===> expression value 

// // forEach --- el ,index ,arr ==> void

// // find() ---- el , index,arr ===> single element 

// // findIndex() --- el , index ,arr ==== Number (index)

// // some() ---- el ,index,arr ====> boolean

// // every() ---- el, index,arr ===> boolean



//  //slice()

//           0        1        2       3      4    5  
 let xy = ["Amol","Vaibhav","mayur","Sanket","Vivek","Nilesh"]
 //           -6       -5       -4     -3    -2     -1
 //mn.slice(start,end(//not included))
 
 console.log(xy.slice(2,5))
 console.log(xy.slice(1,4))
 console.log(xy.slice(2))


///........OUTPUT.................//

[ 2000, 2001, 1998 ]
[ 2000, 2001, 1998 ]      
[ 17, 28, 40 ]
[ 33, 44, 26, 44, 31, 34 ]
[ 6, 6, 7 ]
[ 33, 44, 44, 31, 34 ]    
[ 6, 6, 7 ]
[
  23, 34, 22, 24,
  21, 26, 27
]
69
75
welcome Yogesh
welcome Harshal
welcome Sarthak
welcome Yogesh
welcome Harshal
welcome Sarthak
[
   3,  6,  9, 12, 15,
  18, 21, 24, 27, 30
]
[ 200, 400, 22 ]
[ -43, -600 ]
622
-643
welcome Yogesh
welcome Harshal
welcome Sanket
[ 44 ]
12
6
false
false
[ 'mayur', 'Sanket', 'Vivek' ]
[ 'Vaibhav', 'mayur', 'Sanket' ]
[ 'mayur', 'Sanket', 'Vivek', 'Nilesh' ]






