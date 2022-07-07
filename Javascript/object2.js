let friends = {
    name: "Amol",
    age: 28,
    company: ["Lupin", "cipla", "mylon"]

}

//retrive

console.log(friends.name)
console.log(friends["company"])

//update 

friends.age = 29
console.log(friends.age)
friends["age"]=30
console.log(friends)

//add

friends.graduation="msc"
console.log(friends)
friends["graduation"]="msc"
console.log(friends)

//add company in array

friends.company.push("sunpharma")
friends["company"].push("atul")
console.log(friends)

//delete

delete friends.graduation
console.log(friends)
friends.city="pune"// added city for delete operation
console.log(friends)
delete friends.city
console.log(friends)