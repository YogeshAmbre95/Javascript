//Program one
let liList=document.querySelectorAll("li")
let addButton=document.querySelector("button")
let ulList=document.querySelector("ul")
console.log(liList)
console.log(ulList)
console.log(addButton)

//<h2 class="one" id="two" name="potato">Vegetable</h2>

addButton.addEventListener('click',function(){
    for(let i = 0 ; i < liList.length ; i++){
        console.log(i)
        console.log(liList[i].textContent)
        liList[i].textContent = "Ladyfinger"

    }

})

// Javascript 

// Html element --- create retrive update delete 
// Html element ---- create retrive update delete(remove)
//on user action --- click dbClick mouseover mouseout load


// let person = {
//     firstName:"yogesh",
//     lastName:"ambre"
// }

// // 
// console.log(person.lastName)
// person.lastName = "harshal"
// person.lang = "hello"
// delete person.lang

// program 2

liList = document.querySelectorAll('li')
addButton = document.querySelector('button')
console.log(liList) 


addButton.addEventListener('click',function(){
    for(let i = 0 ; i < liList.length ; i++){
        liList[i].style.color = "black"
        liList[i].style.backgroundColor = "red"
    }
    
})


// program3
ulList.addEventListener('mouseover',function(){
    for(let i = 0 ; i < liList.length ; i++){
        liList[i].style.color = "blue"
        //liList[i].style.backgroundColor = "black"
    }
    
})


ulList.addEventListener('mouseout',function(){
    for(let i = 0 ; i < liList.length ; i++){
        liList[i].style.color = "black"
        liList[i].style.backgroundColor = "white"
    }
    
})
