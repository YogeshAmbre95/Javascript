//async sync

//program

// function add(){
//     console.log('one')
// }
// function add2(){
//     console.log('two')
// }

// add()
// add2()

//async  ====call back hell

console.log('*************Program 2*********************')

//program2

// function add3(){
//     setTimeout(function(){
//         console.log("hello")

//     }, 2000);
// }
// function add4(){
//     console.log('bye')
// }
// add3()
// add4()

//program async

//api call ==usercreate

// id data retrive

// //user delete

// function getUser() {
//     setTimeout(function () {
//         console.log('usercreated')
//     }, 3000)

//     setTimeout(function () {
//         console.log('data retrive by id')
//     }, 2000)

//     setTimeout(function () {
//         console.log('user deleted')
//     }, 1000)
// }
// getUser()


// //call back hell

// function getUser() {
//     setTimeout(function () {
//         console.log('usercreated')
//         setTimeout(function () {
//             console.log('data retrive by id')
//             setTimeout(function () {
//                 console.log('user deleted')
//             }, 1000)
//         }, 2000)
//     }, 3000)
// }
// getUser()



console.log('**************Program 4***************')

//actual

//pagewise==id
//singleuser==renderUI


let con = document.querySelector('#container')

function renderHtml(obj){
    let html=`
    <div>
        <p>${obj.id}</p>
        <p>${obj.first_name}</p>
        <p>${obj.last_name}</p>
        <p>${obj.email}</p>
        <img src="${obj.avatar}"></img>
    </div>
    `
    
    con.insertAdjacentHTML('beforeend',html)
}

function getUser(pageNumber){
    let request= new XMLHttpRequest()
    request.open('GET',`https://reqres.in/api/users?page=${pageNumber}`)
    request.send()
    request.addEventListener('load',function(){
        // console.log(this.responseText)
        let data=JSON.parse(this.responseText)
        let id=data.data[0].id
        let request=new XMLHttpRequest()
        request.open('GET',`https://reqres.in/api/users/${id}`)
        request.send()

        request.addEventListener('load',function(){
            let data=JSON.parse(this.responseText)
            console.log(data.data)
            renderHtml(data.data)
        })

    })

}
getUser(2)

console.log('***************Program 5*******************')

let pro= new Promise(function(resolve,reject){
    let a=10
    let b=10
    
})

