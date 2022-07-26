let names = "121"

let ReverseName = () => {
   let myRevName = names.toString().split("").reverse().join("")
    // let myRevName = names.reverse()
    let myName = names.toString()
    if (myName == myRevName) {
        console.log("Palindrome")
    } else {
        console.log("Not a Palindrome")
    }
}

ReverseName()

// let names1="121"

// let ReverseName1=function(){
//     let myRevName1=names1.toString().split("").reverse().join("")
//     let myName1=names1.toString()
//     if (myName1==myRevName1){
//         console.log("Palindrome")
    
//     }else{
//         console.log("Not a Palindrome")
//     }
// }
//ReverseName1()



// let arr=[1,2,3,4,5]
// let sum=0
// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2!==0){
//           sum=sum+arr[i]
//     }
  
// }
// console.log(sum)

let arr=[1,2,3,4,5]
let sum=0
arr.forEach(function(el,index){
if(el%2==0){
    sum=sum+el
}
})

console.log(sum)

