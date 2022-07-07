// function one(){
//     console.log('hello')
// }

// function two(){
//     console.log('two')
// }
// two()
// one()

//program

// function one() {
//     setTimeout(function () {
//         console.log('one')
//     }, 2000)
// }
// function two() {
//     console.log('two')

// }
// one()
// two()

//async code ====sync manage

//api==usercreate//async
//id==getInfo//async
//printInfo//async

// function getUserInfo() {
//     //createUser

//     setTimeout(function () {
//         console.log('user created')
//     }, 3000)

//     //getUserID

//     setTimeout(function () {
//         console.log('get user id')
//     }, 2000)
//     // getUserInfo
//     setTimeout(function () {
//         console.log('get user info')
//     }, 1000)
// }
// getUserInfo()

//async code ==sync ==call back hell

//call back hell

// function getUserInfo2() {
//     setTimeout(function () {
//         console.log('user created')
//         setTimeout(function () {
//             console.log('get user id')
//             setTimeout(function () {
//                 console.log('get user info')
//             }, 1000)
//         }, 2000)
//     }, 3000)
// }
// getUserInfo2()

//promises

// let pro1= new Promise(function(resolve,reject){
//     let a=10
//     let b=10

//     if(a==b){
//         resolve('hello')

//     }
//     else{
//         reject('bye')
//     }
// })
// pro1.then(function(str){
//     console.log(str)
// },function(str){
//     console.log(str)
// })

// let a = new Promise(function (resolve, reject) {
//     let fullName = 'yogesh Ambre'
//     if (fullName.length > 10) {
//         resolve(['SQL', 'Python'])
//     }
//     else {
//         reject(['C#', 'Cypress'])
//     }
// })
// a.then(function (arr) {
//     console.log(arr[1])
// })
//     .catch(function (arr) {
//         console.log(arr[1])
//     })

// let bb = new Promise(function (resolve, reject) {
//     let a = 10
//     let b = 2

//     if (a > b) {
//         resolve('a is greater')
//     }
//     else {
//         reject('b is greater')
//     }
// })
// bb.then(function (str) {
//     console.log(str)
// }).catch(function (str) {
//     console.log(str)
// }).finally(function () {
//     console.log('I will run always')
// })


//Problem

// function getUserInfo2() {
//     setTimeout(function () {
//         console.log('user created')
//         setTimeout(function () {
//             console.log('get user id')
//             setTimeout(function () {
//                 console.log('get user info')
//             }, 1000)
//         }, 2000)
//     }, 3000)
// }
// getUserInfo2()

//Solution


// let pro = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         if ('usercreated') {
//             resolve('user created')
//         }
//         else {
//             reject('user not created')
//         }
//     }, 3000)
// })
// function getUserId() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if ('userId') {
//                 resolve('get user id')
//             }
//             else {
//                 reject('user id not found')
//             }
//         }, 2000)
//     })
// }

// function getUserInfo() {
//     return new Promise(function (resolve, reject) {
//         setTimeout(function () {
//             if ('userInfo') {
//                 resolve('get user info')
//             }
//             else {
//                 reject('user info not found')
//             }
//         }, 1000)
//     })
// }
// pro.then(function (str) {
//     console.log(str)
//     return getUserId()
// })
//     .then(function (str) {
//         console.log(str)
//         return getUserInfo()
//     })
//     .then(function (str) {
//         console.log(str)
//     })
//     .catch(function (str) {
//         console.log(str)
//     })
//     .finally(function () {
//         console.log('i will run')
//     })

// asyn function

function createUser() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if ('usercreated') {
                resolve('user created')
            }
            else {
                reject('user not created')
            }
        }, 3000)
    })
}
function getUserID() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if ('userId') {
                resolve('get user id')
            }
            else {
                reject('user id not found')
            }
        }, 2000)
    })
}

function getUserInfo() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if ('userInfo') {
                resolve('get user info')
            }
            else {
                reject('user info not found')
            }
        }, 1000)
    })
}

let getInfo = async function () {
    let a = await createUser()
    console.log(a)
    let b = await getUserID()
    console.log(b)

    let c = await getUserInfo()
    console.log(c)
}
// getInfo()


//API

//https://reqres.in/api/users?page=2 
// https://reqres.in/api/users/2

function getUserInfo(pageNumber) {
    let request = new XMLHttpRequest()
    request.open('GET', `https://reqres.in/api/users?page=${pageNumber}`)
    request.send()
    request.addEventListener('load', function () {
        //console.log(this.responseText)
        let obj = JSON.parse(this.responseText)
        console.log(obj)
        let id = obj['data'][0]['id']
        console.log(id)
        let request = new XMLHttpRequest()
        request.open('GET', `https://reqres.in/api/users/${id}`)
        request.send()

        request.addEventListener('load', function () {
            let obj = JSON.parse(this.responseText)
            console.log(obj.data)
        })
    })

}
//getUserInfo(2)


// cypress asyn ===> execution sync ===> javscript ===> asyn 
// cypress ===> POM ====> class === javascript == asyn ====>  promises

function getUsers(pageNumber) {
    return fetch(`https://reqres.in/api/users?page=${pageNumber}`)

}
function getUserInfo(id) {
    return fetch (`https://reqres.in/api/users/${id}`)
}
getUsers(2).then(function (res) {
    return res.json()
}).then(function (response) {
    let id = response.data[0]['id']
    return id
}).then(function (id) {
    return getUserInfo(id)
}).then(function (response) {
    return response.json()
}).then(function (response) {
    console.log(response.data)
})

// async await

let getInfoForSingleUser= async function(){
    let res = await getUsers(2)
    let obj= await res.json()
    let id= obj['data'][0]['id']
    let resB= await getUserInfo(id)
    let objB= await resB.json()
    
}