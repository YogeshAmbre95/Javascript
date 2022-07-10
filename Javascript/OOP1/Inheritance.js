// //Inheritance==repeatation===class==design

// class Grandfather {
//     constructor(gName, lastName) {
//         this.gName = gName
//         this.lastName = lastName
//     }
//     display() {
//         console.log(this.gName + this.lastName)
//     }
// }
// class Father extends Grandfather {
//     constructor(gName, lastName, fName) {
//         super(gName, lastName)
//         this.fName = fName
//     }
//     display() {
//         console.log(this.fName + this.lastName)
//         super.display()
//     }
// }
// class Son extends Father {
//     constructor(gName, lastName, fName, sName) {
//         super(gName, lastName, fName)
//         this.sName = sName
//     }
//     display() {
//         console.log(this.sName + this.lastName)
//         super.display()
//     }
// }

// let yogesh = new Son("maruti", "ambre", "kisan", "yogesh")
// console.log(yogesh)
// yogesh.display()


// let kisan = new Father('maruti', 'ambre', 'kisan')
// kisan.display()
// console.log(kisan)


class Parent {
    constructor(fName, mName, lastName) {
        this.fName = fName
        this.mName = mName
        this.lastName=lastName
    }
    displayFatherName() {
        console.log(this.fName + this.lastName)
    }

        displayMotherName(){
            console.log(this.mName + this.lastName)

        }
    }


      class Son1 extends Parent {

    constructor(fName, mName, lastName, sName) {
        super(fName, mName, lastName)
        this.sName = sName
    }
    displayName() {
        console.log(this.sName + this.lastName)
        super.displayFatherName()
        super.displayMotherName()
    }
}

class Daughter extends Parent {
    constructor(fName, mName, lastName, dname) {
        super(fName, mName, lastName)
        this.dname = dname
    }
    displayName() {
        console.log(this.dname + this.lastName)
        super.displayFatherName()
        super.displayMotherName()
    }

}

let sarthak = new Son1("santosh", "suman", "navale", "sarthak")
let vrushali = new Daughter("santosh", "suman", "navale", "vrushali")

sarthak.displayName()
vrushali.displayName()