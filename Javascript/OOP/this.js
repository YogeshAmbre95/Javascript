let yogesh={
    firstName:"yogesh",
    lastName:"ambre",
    printName:function(){
        console.log(this.firstName+" "+this.lastName)
    }
}
yogesh.printName()
console.log(yogesh.printName)

let printName2=function(){
    console.log(this.firstName+this.lastName)
}
printName2();

console.log(undefined+undefined)

//program

let harshal={
    firstName:"harshal",
    lastName:"ambre",
    displayName:function(){
        console.log(this.firstName+this.lastName)
    }
}
harshal.displayName()
console.log(harshal.displayName)

// function(){
//     console.log(this.firstName+this.lastName)
// }

let a=harshal.displayName

let xy=function(){
    console.log(this.firstName+this.lastName)
}

xy()


let vaibhav={
    firstName:"vaibhav",
    lastName:"aher"
}

let sagar={
    firstName:"sagar",
    lastName:"ambre"
}

let displayName=function(){
    console.log(this.firstName+" "+this.lastName)
}

let fn=displayName.bind(vaibhav)
fn()

let fn1=displayName.bind(sagar)
fn1()

displayName.bind(sagar)()
function add(){
    return function(){
        console.log("hello")
    }
}
add()()

//program3

function displayName3(){
    console.log(`Hi ${this.firstName} ${this.lastName}`)
}

let suraj={
    firstName:"suraj",
    lastName:"nawale"
}
let vrushali={
    firstName:"vrushali",
    lastName:"nawale"
}

displayName3.call(suraj)
displayName.call(vrushali)

//apply

let display4=function(greet){
    console.log(`${greet}${this.firstName} ${this.lastName}`)
}

let vishal={
    firstName:"vishal",
    lastName:"ambre"
}

let jayesh={
    firstName:"jayesh",
    lastName:"gadekar"
}

display4.apply(vishal,["good morning"])


//  bind apply call

//program

let x={
    firstName:"yogesh",
    lastName:"ambre",
    displayName:function(){
        console.log(this)
        console.log(this.firstName,this.lastName)
    }
}
x.displayName()


let c={
    firstName:"harshal",
    lastName:"ambre",
    displayName:()=>{
        console.log(this.firstName+this.lastName)
    }

}

c.displayName()