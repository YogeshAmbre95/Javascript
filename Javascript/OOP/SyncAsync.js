//synchronus



function add() {
    console.log(10 + 9)
}
function add2() {
    console.log(7 + 8)
}

add2()
add()


//Asnyn

function add3() {
    setTimeout(function () {
        console.log(8 + 8)

    }, 2000)

}
function add4() {
    console.log(9 + 9)
}

add3()
add4()

//asyn

//function---Id
//id-----user info
//user info----email
//call Async----sync
console.log("////******************////")

function add5() {
    setTimeout(function () {
        console.log('Getting ID')
        setTimeout(function () {
            console.log("Getting user info")
            setTimeout(function () {
                console.log("Getting email")
            }, 2000)
        }, 3000)
    }, 4000)
}
add5()

//This is called calback hell

//Promises

//state --pending(resolve)(reject)functions

let pro=new Promise(function(resolve,reject){
    let a=12
    let b=12
    if (a==b){
        resolve("hello")
    }
    else{
        reject("bye")
    }
})

//consuming pro

pro.then(function(str){
    console.log(str)
},function(str){
    console.log(str)
})


let pro2= new Promise(function(resolve,reject){
    let a=10
    let b=100
    if(a==b){
        resolve([1,3,4,5])
    }
    else{
        reject([12,33,44])
    }
})

pro2.then(function(a){
    console.log(a[0])
})
.catch(function(b){
    console.log(b[0])
})

let pro3= new Promise(function(resolve,reject){
    let a=100
    let b=100
    if(a==b){
        resolve(1)
    }
    else{
        reject("Creation fail")
    }
})

function Getinfo(id){
    return new Promise(function(resolve,reject){
        if(id==1){
            resolve("yogeshambre95@gmail.com")
        }
        else{
            reject("unable to get info")
        }
    })
}
pro3.then(function(id){
    Getinfo(id)
    .then(function(email){
        return email
    }).then(function(email){
        console.log(email)
    })
}).catch(function(str){
    console.log(str)
})



//Interview Question

let aa = ["1",2,3,4,'four',0]

let r = aa.filter(function(el){
    return Number(el)  || el == 0
})

console.log(r)


function countV(word){
    word = word.toLowerCase()
    let count = 0

    for(let i = 0 ; i < word.length ; i++){
        if(word[i] == "a" ||  word[i] == "e" ||  word[i] == "i" || word[i] == "o" || word[i] == "e"){
            count = count + 1
        }

    }

    return count 
}

countV("chinmay")

