//set Map

//class

let bike1 = {
    color: "black",
    name: "unicorn",
    type: "sport"
}

let bike2 = {
    color: "red",
    name: "pulsor",
    type: "sport"
}

//setting the value outside the class

class bike {
    color = undefined
    name = undefined
    type = undefined
}

let fz = new bike()
let apache = new bike()
console.log(fz)
console.log(apache)


//fz

fz.color = "white"
fz.name = "s"
fz.type = "sport"

console.log(fz)


class bike3 {
    constructor(clr, name, type) {
        this.color = clr
        this.name = name
        this.type = type
    }
}

let pulsor1=new bike3("red","220","sport")
console.log(pulsor1)



//using set function

class bike4{
    setColor(cl){
        this.color=cl
    }
    setName(nm){
        this.name=nm
    }
    setType(tp){
        this.type=tp
    }

}

let splender=new bike4()
console.log(bike4)
splender.setColor("black")
splender.setName("pro")
splender.setType("100cc")

console.log(splender)

//array object set

//set does not stores the duplicate value


let setA= new Set([1,2,3,2,4,5,4,5,6,7,8])
console.log(setA)

for (let item of setA){
    console.log(item)
}

let numbers=[12,13,12,14,151,6,34,33,33,23]
let setB=new Set(numbers)
console.log(setB)
Array.from(setB)
console.log(Array.from(setB))


let person1={
    firstname:"yogesh",
    lastname:"ambre",
    age:26
}


//Map

let mapA=new Map()
let array1=new Array()
let st=new String()
let ob=new Object()

//Map=== property and methods

console.log(mapA.size)


mapA.set([11,12,13],"rollno")
console.log(mapA)

mapA.set(true,"isPass")
console.log(mapA.get(true))

let abc=mapA.has(false)
console.log(abc)


mapA.clear()
console.log(mapA)

mapA.delete(true)
console.log(mapA)

let mapB = new Map([
    [1,"rollnumber"],
    ["color","red"],
    [true,"ismarried"],
    [{a:"s",b:"q"},33]

])
console.log(mapB.size)

for(let a of mapB.keys()){
    console.log(a)
}
for(let a of mapB.values()){
    console.log(a)
}

for(let [key,val] of mapB.entries()){
    console.log(key,val)
}






