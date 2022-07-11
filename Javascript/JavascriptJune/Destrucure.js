// array - destructuring 

let names = ["yogesh", 'harshal', 'sarthak']

let [a, b, c] = names

console.log(a)
console.log(b)
console.log(c)

let num = [11, 12, 13, 14]

let [aa, bb, cc, dd] = num
console.log(aa)
console.log(bb)
console.log(cc)
console.log(dd)

// Object - destructuring 


let info = {
    firstName: "yogesh",
    lastName: "ambre",
    age: 27,
    rollNo: 34
}

let { firstName, lastName, age, rollNo } = info

console.log(firstName)
console.log(lastName)
console.log(age)
console.log(rollNo)


let ns=[[11,12,23],[12,43,32],[21,22,11]]

let [[q,w,e],[r,t,y],[u,i,o]]=ns


let info2 = {
    father:{
        firstName:"kisan",
        lastName:"ambre"
    },
    mother:{
        firstName:"kusum",
        lastName:"ambre"
    }
}


let {father:{firstName:fn1,lastName:ln1},mother:{firstName:fn2,lastName:ln2}}=info2
console.log(fn1)
console.log(ln1)
console.log(fn2)
console.log(ln2)


let k = {

    skillsOne:["python","django","js"],
    skillsTwo:["java","powerbi","tableau"]

}

let {skillsOne:[s,d,f],skillsTwo:[g,h,j]}=k
console.log(s)
console.log(d)
console.log(f)
console.log(g)
console.log(h)
console.log(j)
