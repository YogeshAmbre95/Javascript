let ulList = document.querySelector('ul')
let button = document.querySelector('button')
let inputText = document.querySelector('input')

button.addEventListener('click', function () {
    let text = inputText.value
    ulList.style.color = text
    inputText.value = ""

})