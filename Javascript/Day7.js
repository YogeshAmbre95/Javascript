
 // slice()

 //       0  1  2   3  4  5 6
 let abcd =[21,22,23,24,25,26,27]

 //       -7 -6 -5 -4 -3 -2 -1
 
 console.log(abcd.slice(2)) //[23,24,25,26,27]
 console.log(abcd.slice(-5)) //[23,24,25,26,27]
 console.log(abcd.slice(1,4)) //[22,23,24]
 console.log(abcd.slice(-4,-1)) // [24,25,26]
 console.log(abcd.slice(-1,-4))  // []
 
 //spilce()//    0        1      2         3
  let namea = ["Yogesh","Amol","Sanket","Vivek"]
  namea.pop()
 console.log(namea)
 namea.shift()
 console.log(namea)
//  namea.splice(startingIndex,numberOfeletoBeDeleted)
 
console.log(namea)
 
//  // with replacement


 namea.splice(1,2,"Harshal","vishal")
 console.log(namea)
 
//   // flat()
//   // multiple dimensional array 
 
  //                  0             1            2
  //                0   1  2    0   1   2    0    1    2           
  let  numbers = [[11,15,20],[333,666,888],[123,456,789]]
  console.log(numbers[0][0])
  console.log(numbers[0][2])
  console.log(numbers[2][2])
 
  let abc = numbers.flat()
  console.log(abc)
 
//   // fill()
 //            0  1  2   3  4  5  6  7 8   9
  let marks = [55,65,67,69,66,76,89,44,47,63]
  let a = marks.fill('69',3,7)
  console.log(a)
 
 
 