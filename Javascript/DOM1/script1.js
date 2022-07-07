//program 4

// selecting the element 
// creat the li element with text in input
// based on useraction add the elemtn to the list

let ul = document.querySelector('ul')
let inputText = document.querySelector('input')
let addButton = document.querySelector('button')



addButton.addEventListener("click",function(){

    let liText=inputText.value

    let newLi=document.createElement("li")
    newLi.textContent=liText
    ul.appendChild(newLi)
    inputText.value=""
})

