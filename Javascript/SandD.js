//structure and destructure

let a = [12, 13, 14, 15, 25]
console.log(a[1])
console.log(a[3])

let b = a[0]
let c = a[1]
let d = a[2]
let e = a[3]
let f = a[4]

console.log(b)
console.log(c)
console.log(d)
console.log(e)
console.log(f)

a = [12, 13, 14, 15, 25]

let [aa, bb, cc, dd, ee] = a

console.log(aa)
console.log(bb)
console.log(cc)
console.log(dd)
console.log(ee)


let name = ["yogesh", "ganesh", "harshal", "suraj", "sarthak", "jayesh"]

let [abc, cdf] = name
console.log(abc)
console.log(cdf)

//object

let student = {
    firstname: "yogesh",
    lastname: "ambre",
    rollno: 30

}

// let {firstname,lastname,rollno}= student

// console.log(firstname)
// console.log(lastname)
// console.log(rollno)

let { firstname: fn, lastname: ln, rollno: rn } = student

console.log(fn)
console.log(ln)



let student1 = {

    firstname: "yogesh",
    lastname: "ambre",
    company: ["infosys", "mphasis"]


}
let { firstname: fn1, lastname: ln1, company: [aaa, bbb] } = student1

console.log(fn1)
console.log(bbb)
console.log(ln1)
console.log(aaa)

let xyz = [["math", "physics"], ["chem", "stat"]]

let [[p, q], [h, g]] = xyz
console.log(p)
console.log(q)
console.log(h)
console.log(g)


let student2 = {

    user1: {
        firstname: "yogesh",
        lastname: "ambre"
    },
    user2: {
        firstname: "harshal",
        lastname: "ambre"
    }

}
let { user1: { firstname: f3, lastname: l3 }, user2: { firstname: f4, lastname: l4 } } = student2
console.log(f3)
console.log(l3)
console.log(f4)
console.log(l4)

let vehicles = [
    {
        type: "SUV",
        color: "red",
        company: "mahindra"
    },
    {
        type: "TUV",
        color: "black",
        company: "TATA"
    }

]

let [{type:t1,color:c1,company:co1},{type:t2,color:c2,company:co2}] = vehicles
console.log(t1)
console.log(co2)
console.log(c2)

// spread operator and rest operator 

function add(...xyy){
console.log(xyy)
let asdf=xyy.reduce(function(acc,el){

    return acc+el
},0)

return asdf
}
let asdfg=add(1,2,3,4,5,6,7,7,8,8)
console.log(asdfg)