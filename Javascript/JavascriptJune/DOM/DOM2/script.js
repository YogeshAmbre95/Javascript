//Selecting the elements

//CSS Selector

//tagname

// <h3 class = "three" id = "four" name ="five">Hello</h3>

let tagname= document.querySelector('h3')
console.log(tagname)

// ById 
let byId = document.querySelector('#four')
console.log(byId)
// ByClass
let byClassName = document.querySelector('.three')
console.log(byClassName)
// common formula

// tagName[attribute = 'value']
let byCommon = document.querySelector('h3[name="five"]')
console.log(byCommon)

byCommon.addEventListener('click',function(){
    byCommon.style.color = "red"
})

