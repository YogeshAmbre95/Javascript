

//program one

class Grandfather {
    constructor(fn, ln) {
        this.firstName = fn
        this.lastName = ln
    }
    display() {
        console.log(this.firstName + " " + this.lastName)
    }

}

class Father extends Grandfather{
    greet(){
        console.log("hello")
    }
}

let kisan=new Father("maruti","ambre")
console.log(kisan.firstName)
console.log(kisan.lastName)
kisan.display()
kisan.greet()


let maruti= new Grandfather("maruti","ambre")
console.log(maruti)

maruti.display()
//maruti.greet()

//program 2

class Grandfather2{
    constructor(fn,ln){
        this.firstName=fn   
        this.lastName=ln
    }
    display(){
        console.log(this.firstName+" "+this.lastName)
    }
}

class Father2 extends Grandfather2 {
    constructor(gFatherName,lastName,fFirstName){
        super(gFatherName,lastName)
        this.fFirstName=fFirstName
    }
    display(){
        console.log(this.fFirstName+this.lastName)
        super.display()
    }
}

let kisan2=new Father2("maruti","ambre","kisan")
console.log(kisan2.firstName)
console.log(kisan2.fFirstName)
console.log(kisan2. lastName)
kisan2.display()


//program 3

class student{
    constructor(fn,ln){
        this.firstName=fn   
        this.lastName=ln
    }
    displayName(){
        console.log(this.firstName+" "+this.lastName)
    }
}

class Teacher extends student{

    constructor(fn,ln,salary){
        super(fn,ln)
        this.salary=salary
    }
    displaySalary(){
        console.log(this.salary)
    }
}
class Professor extends Teacher{
    constructor(fn,ln,salary,spec){
        super(fn,ln,salary,spec)
        this.spec=spec
    }
    displaySpec(){
        console.log(this.spec)
    }
}

let yogesh=new Professor("yogesh","ambre",123334,"physics")
console.log(yogesh.firstName)
console.log(yogesh.lastName)
console.log(yogesh.salary)
console.log(yogesh.spec)

yogesh.displayName()
yogesh.displaySalary()
yogesh.displaySpec()






