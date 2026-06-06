const myArr = [0,1,2,3,4,5]
console.log(myArr)
console.log(myArr[1]);
const myArr2 = new Array(8 , 7 , 6 , 5 , 3);
console.log(myArr2);
myArr.push(6)
myArr.push(7)
console.log(myArr)
myArr.pop()
console.log(myArr)
myArr2.unshift(9)
myArr2.shift()
console.log(myArr2)
console.log(myArr.includes(3))
console.log(myArr.indexOf(3));
const newArr = myArr.join() // change the arrray into string
console.log(newArr)

// slice and splice

console.log("A : ",myArr)
const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B : ",myArr);
const myn2 = myArr.splice(1,3) 
console.log("c : ",myArr);
//**** difference between slice and splice is slice don't concider last value and splice concider last value and change main array without include the the splice range value*****//
console.log(myn2)
    