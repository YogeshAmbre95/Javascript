//1) object literal 

//2) function constructor 

//3) Es6 class

//4) Object.create() // method 


//ES6


let RBI = class {
    constructor(AccName, AccNumber, city) {
        this.AccName = AccName
        this.AccNumber = AccNumber
        this.city = city
    }

    deposit() {
        console.log('deposit RBI')
    }
    withdrawal() {
        console.log('withdrawal RBI')
    }

}
class SBI extends RBI {
    constructor(AccName, AccNumber, city, IFSC) {
        super(AccName, AccNumber, city)
        this.IFSC = IFSC
    }
    deposit() {
        console.log('deposit SBI')
        super.deposit()
    }

    withdrawal() {
        console.log('withdrwal SBI')
        super.withdrawal()
    }
}

class PNB extends RBI {
    constructor(AccName, AccNumber, city, IFSC) {
        super(AccName, AccNumber, city)
        this.IFSC = IFSC
    }
    deposit() {
        console.log('deposit PNB')
        super.deposit()
    }
    withdrawal() {
        console.log('withdrawal PNB')
        super.withdrawal()
    }
}

let yogesh = new SBI('yogesh', 1234, 'sangamner', 23432)
console.log(yogesh)
let harshal = new PNB('harshal', 2333, 'akole', 435353)
console.log(harshal)

yogesh.deposit()
yogesh.withdrawal()

console.log(yogesh.IFSC)
console.log(yogesh.city)

console.log(harshal.IFSC)
console.log(yogesh.AccNumber)

console.log('//**************************//')

//// polymorphism 

// overloading 

// same class , same method , different signature

// overloading

class Calculator {
    addition(x, y) {
        console.log(x + y)
    }
    addition(x, y, z) {
        console.log(x + y + z)
    }
    addition(x, y, z, a) {
        console.log(x + y + z + a)
    }
}
let A = new Calculator()
A.addition(4, 5)
A.addition(4, 5, 6)
A.addition(4, 5, 6, 7)


console.log('//*********************************************//')

function addition1(x, y, z, a) {
    // console.log(x)
    // console.log(y)
    // console.log(z)
    // console.log(a)

    if (x != undefined && y !== undefined && z !== undefined && a !== undefined) {
        console.log(x + y + z + a)
    }
    else if (x != undefined && y !== undefined && z !== undefined) {
        console.log(x + y + z)
    }
    else if (x != undefined && y !== undefined) {
        console.log(x + y)
    }
}
addition1(2, 3, 4, 5)
addition1(2, 3, 4)
addition1(2, 3)



console.log('//***********************************************************************************************************//')
class multiplication{
    
 multiplication(x, y, z, b){
      
        if (x !== undefined && y !== undefined && z !== undefined && b !== undefined) {
            console.log(x * y * z * b)
        }
        else if (x !== undefined && y !== undefined && z !== undefined) {
            console.log(x * y * z)

        }
        else if (x !== undefined && y !== undefined) {
            console.log(x * y)

        }

    }
}

let c = new multiplication()
c.multiplication(1, 4)
c.multiplication(1,4,3)
c.multiplication(1,4,3,5)

// overloading   ==> same class , same method name , different signature

// parent ===> oops inheritance 

// different class , same method , same 

class RBI1{
    deposit(greet){
        console.log('welcome to'+ greet)
    }
}

class SBI1 extends RBI1{
    deposit(greet){
        console.log('welcome to'+" " + greet+ "SBI")
    }
}
let abc=new SBI1()
abc.deposit('RBI delhi')

// overloading --- same method name , same class ,differnt signature
// overiding - same method , different class , same signature
