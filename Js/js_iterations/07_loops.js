//  maps 

const myNum = [1,2,3,4,5,6,7,8,9,10] 

// const mynumber = myNum.map( (item) => {
//     // console.log(item)
//     return item + 10
// })
// // ********************** or ************************//
// console.log(mynumber)
// const newNum = myNum.map( (num) => num + 10)
// console.log(newNum)

// chaining 

const newNumber = myNum
                        .map( (num) => num * 10)
                        .map( (num) => num +1) // here filter under map and map under filter this is called chaining
                        .filter( (num) => num > 51 )
console.log(newNumber)