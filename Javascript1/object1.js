let info = ["yogesh", "ambre", 27, 12]

//retrive

console.log(info[1])

//update

info[2] = 28
console.log(info)

//add

info.push(9503808298)
info.unshift(1)
info.splice(0, 1, "2", "harshal")
console.log(info)

//delete

info.pop()
info.shift()
info.shift()
info.splice(0, 1)
console.log(info)


// Object does not store the value by index
// object literal 

let info2 = {

    firstname: "yogesh",
    lastname: "ambre",
    age: 27,
    rollnumber: 38


}
console.log(info2)

//retrive (dot notation and bracket notation)
console.log(info2.firstname)
console.log(info2["firstname"])

//update (dot notation and bracket notation)

info2.lastname = "arote"
info2["lastname"] = "sawant"
console.log(info2)


//add (dot notation and bracket notation)

info2.city = "sangamner"
info2["education"] = "Msc"
console.log(info2)

//delete

delete info2.city
delete info2["education"]
console.log(info2)



let vehicle = {

    color: "white",
    company: "maruti"

}

//retrive

console.log(vehicle.color)
console.log(vehicle["color"])

//update

vehicle.color = "black"
vehicle["color"] = "blue"
console.log(vehicle)

//add

vehicle.city = "sangamner"
vehicle["regno"] = "1234"
console.log(vehicle)

//delete

delete vehicle.city
delete vehicle["regno"]
console.log(vehicle)


let aaa = [1, 2, 3, 4, 5]

for (let i = 0; i < aaa.length; i++) {
    //console.log(i)
    console.log(aaa[i])
}


//looping through object

let info5 = {
    firstname: "yogesh",
    lastnameq: "ambre",
    city: "sangamner"
}

for(key in info5){
    console.log(key,info5[key])
}

