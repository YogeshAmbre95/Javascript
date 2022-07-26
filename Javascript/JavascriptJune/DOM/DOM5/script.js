
//To find the even and odd li from the given list


let liList=document.querySelectorAll('li')
console.log(liList)

for(let i=0;i<=liList.length;i++){
    if(i%2==0){
        liList[i].style.color="green"
    }
    else{
        liList[i].style.color="red"
    }
}