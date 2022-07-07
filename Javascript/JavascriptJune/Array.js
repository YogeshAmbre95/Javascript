// let name= 'yogesh'
// let x=12
// let y=false

// console.log(typeof name)
// console.log(typeof x )
// console.log(typeof y)

// let city=['pune','mumbai','nashik','satara','latur']
// console.log(city[0])
// console.log(city[2])
// console.log(city[3])
// city[2]='latur'
// console.log(city)

// city=['pune','mumbai','nashik','satara','latur']

// console.log(city.length)

// // push()
// // action - adds the element at last 
// // return - new length of array

// console.log(city.push('sangamner'))
// console.log(city)

// // unshift()
// //action - adds the element at first
// //return - new length of array

// console.log(city.unshift('Anagar'))
// console.log(city)

// // pop()
// // action - removes the last element
// // return - same element

// console.log(city.pop())
// console.log(city)

// //shift()
// //action - removes the first element
// // return -- same element 

// console.log(city.shift())
// console.log(city)


// // push(), unshift(), pop(),shift(),includes(),indexOf()

// //concat

// let num1=[1,2,3]
// let num2=[4,5,6]

// console.log(num1.concat(num2))
// console.log(num2.concat(num1))

// //slice
//  //    0        1         2        3        4
// city=['pune','mumbai','nashik','satara','latur']
// //      -5      -4      -3        -2       -1               
// //city.slice(startPosition,endposition(includes))

// console.log(city.slice(1))
// console.log(city.slice(1,5))
// console.log(city.slice(2,4))
// console.log(city.slice(-5,-2))
// console.log(city.slice(-2,-5))

// let city1='AHMEDNAGR'

// for(let i=0;i<city1.length;i++){
//     console.log(city1[i])
// }

// // map() ,filter() , reduce() , some(), every(),find(),findIndex(),forEach()


// //map()

// //Multiple of three
// let AA=[1,2,3,4,5,6,7,8,9,10]

// let aa1=AA.map(function(el,index,array){
//     return el*3
// })
// console.log(aa1)

// let AA1=[23,21,25,54,54]

// let aaa=AA1.map(function(el,index,array){
//     return el+7
// })
// console.log(aaa)

// //filter

// let b=[1,23,24,25,34,33,32,35,36,22,21,28]// find greater than 30

// let bb= b.filter(function(el,index,array){
//     return el>30
// })
// console.log(bb)

// let cc=b.filter(function(el,index,array){
//     return el<25
// })
// console.log(cc)

// //forEach()

// let students=['yogesh','harshal','amol','suraj','ganesh']

// let dd=students.forEach(function(el,index,array){
//     console.log('welcome'+" "+el)
// })

// //find

// let rr=[12,12,223,4,4,44,556,66,55,56]
// let aaaa=rr.find(function(el){
//     return el>40  // find first element which is greater than 40
// })
// console.log(aaaa)

// //findIndex

// let rrr=rr.findIndex(function(el,index,array){
//     return el>40 // Find the index of first element which is greater than 40
// })
// console.log(rrr)

// rr=[12,12,223,4,4,44,556,66,55,56]

// let ss=rr.every(function(el,index,array){
//     return el>10 // If every elements are greater than 10 then gives True output else gives False
// })
// console.log(ss)

// let sss=rr.some(function(el,index,array){
//     return el>10 // If some elements are greater than 10 then gives True output else gives False
// })
// console.log(sss)


// console.log('*********************************************************************')
// //Map

let num=[11,22,24,45,66,665,44,33,34,35]

let a=num.map(function(el,index,arr){
    return el+3
})
console.log(a)

//filter

let bbb=num.filter(function(el,index,arr){
   return el>40
})
console.log(bbb)


// //find  

num= [1,2,3,4,55,6,4,56,77,44,3,333,33,22,43,32,22]

let ab=num.find(function(el,index,arr){
    return el>40
})
console.log(ab)

//findIndex

let abb=num.findIndex(function(el,index,arr){
    return el>20
})
console.log(abb)

// forEach()

num.forEach(function(el,index,arr){
    console.log(el*2)
})

//Some()

num= [1,2,3,4,55,6,4,56,77,44,3,333,33,22,43,32,22]

let ccc=num.some(function(el,index,arr){
    return el>20
})
console.log(ccc)

//every()

num= [1,2,3,4,55,6,4,56,77,44,3,333,33,22,43,32,22]

let ddd =num.every(function(el,index,arr){
    return el>=1
})
console.log(ddd)

//reduce

let marks=[23,34,35,36,34,36]

let total=marks.reduce(function(acc,el,index,array){
    return acc+el
},5)
console.log(total)

let marks1 = [11,22,33]  // 33 + 33
let total1 = marks1.reduce(function(acc,el,index,arr){
    return acc + el /// 33
},4)
console.log(total1)

//sort()

let city=['pune','nashik','sangamner','mumbai','ahmednagar']

let aaa=city.sort()
console.log(aaa)

//reverse()

let aaaa=city.reverse()
console.log(aaaa)

// flat()

let num2=[[10,11,12],[23,34,35],[77,78,79]]

console.log(num2[0][1])
console.log(num2[1][2])
console.log(num2[2][2])
console.log(num2.flat())

//fill()

//arrC.fill('rep',startposition,endposition(not included))

let A=['Akole','Sangamner','Rahuri','Rahata','Shirdi']

// let rr=A.fill('Shrigonda',2)

let rr=A.fill('A',1,4)
console.log(rr)

// splice()

let country = ["India","UAE","USA","JAPAN","CHINA"]
// country.pop()
// console.log(country)

// country.shift()
// console.log(country)

// let AA=country.splice(2,4)
// console.log(AA)
// console.log(country)

let AA=country.splice(0,1,"yogesh","harshal")
console.log(AA)
console.log(country)

//// join()

let info = ["Yogesh","Ambre",9503808298]
let aa = info.join('-') 
console.log(aa)
