


document.querySelector('h1').addEventListener('click',function(){
    document.querySelector('h1').style.color = "yellow"
})

// set map ===> sat sun

// rest  
function addition(...arr){
    console.log(arr)
    let aa = arr.reduce(function(acc,el){
        return acc + el
    },0)
    return aa
}

let bb = addition(11,22,33,44,55,11,22,33,44,55,66,77)
console.log(bb)
// 12,3,4,5,6,7  =======>   rest operator

// [22,33,44,132,4445]
function filterValues(a,...aaa){
    let qwerty = aaa.filter(function(el){
        return el > a
    })

    return qwerty
}

let rrrr = filterValues(12,34,4,5,6,22,44,55,66,77,77,44)
let qqqq = filterValues(30,34,4,5,6,22,44,55,66,77,77,44)
console.log(rrrr)
console.log(qqqq)

// spread operator 


let numbers = [11,22,33,11,22,344,55,66,33,44]

function addFive(a,b,c,d,e){
    console.log(a+b+c+d+e)
}
//addFive(numbers[0],numbers[1],numbers[2],numbers[4],numbers[3])
addFive(...numbers)


//2,3,4,5,3,44 ====> [2,3,4,5,3,44] parameters
// [3,4,5,6,7,5] ===>  3,4,5,6,7,5



