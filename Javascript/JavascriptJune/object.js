//Object

let info=['yogesh','ambre',9503808298]

console.log(info[0])
console.log(info[2])

//retrive

console.log(info[1])

//update

info[2]= 9284377044
console.log(info)

//add

info.push('Pune')
info.unshift('Ganore')
console.log(info)

//delete

info.pop()
info.shift()

console.log(info)

console.log(info.splice(1,2))
console.log(info)


//Object

info3={
    // propertyName:Value 
    firstName:'yogesh',
    lastName: 'ambre',
    age:27,
    rollNo:43
}
// object does not stores the value by index

// retrive  (dot notation and bracket notation)
// objectName.propertyName (dot notation)
// objectName['propertyName']
console.log(info3.age)
console.log(info3['age'])


let aa = info3.firstName
let bb = info3['firstName']
console.log(aa)
console.log(bb)

info3={
    // propertyName:Value 
    firstName:'yogesh',
    lastName: 'ambre',
    age:27,
    rollNo:43
}

//update

info3.firstName = "Harshal"
info3['firstName'] = "Amol"
console.log(info3)


// delete (dot notation and bracket notation)

delete info3.firstName
delete info3['lastName']
console.log(info3)

// add (dot notation and bracket notation )

info3.lang = "English"
info3['city'] = "Nashik"
console.log(info3)

let vehicle = {

    color:"Black",
    type:"SUV",
    regNo:'123'

}


// dot notation
// retrive
console.log(vehicle.color)

// update 
vehicle.color = "Blue"

//add 
vehicle.city = "Sangamner"

// delete

delete vehicle.type

console.log(vehicle)

// bracket notation

// retrive 

console.log(vehicle['color'])

// update

vehicle['color'] = "White"
console.log(vehicle)

// add

vehicle['number'] = 55
console.log(vehicle)

// delete

delete vehicle['type']
console.log(vehicle)


//for loop

let a=['yogesh','harshal','suraj','sarthak']

for(let i=0; i<a.length;i++){
    console.log(a[i])
}

let vehicle1={
    color:'Black',
    regNo:343,
    city:'Nashik',
    state:"MH"
}

// console.log(vehicle1.regNo)
// console.log(vehicle1['color'])


for(let prop in vehicle1){
    console.log(prop,vehicle1[prop])
}

let student1={
    firstName:'Amol',
    lastName:'Ambre',
    city:'Sanagmner',
    siblings:{
        brother:'Promod',
        sister:'Rupali'
    },
    skills:['python','javascript','html']
}

console.log(student1['firstName'])
console.log(student1.firstName)
console.log(student1.siblings.sister)
console.log(student1.skills[2])
console.log(student1.skills.length)

//Object

for(let property in student1){
    console.log(property,student1[property])
}


let  Students2 = [
    {
        firstName:"yogesh",
        lastName:"ambre",
        skills:["python","java","css","html"]
    },

    {
        firstName:"harshal",
        lastName:"ambre",
        skills:["python","java","css"]
    },
    {
        firstName:"suraj",
        lastName:"navale",
        skills:["python","java"]
    }

]

Students2.forEach(function(el){
    console.log(`${el.firstName}:${el.skills.length}`)
})
