// forof loops (this loops is known as array specific loop)


// const myArr = [1,2,3,4,5]
// for (const num of myArr) {
//     console.log(num);
// }

// const greeting = "Hello World!"
// for(const greet of greeting){
//     if(greet ==" ") continue;
//     console.log(`each char is : ${greet}`)
    
// }
// let count = 0
// for(const char of greeting){
//     if(char !== " "){
//         count++
//     }
// }
// console.log(`Length of word without spaces: ${count}`);


// Maps , it is an object in js ,Map is known is for its unique value ,

const map = new Map()
map.set('IN',"India")
map.set('UK',"United Kingdom")
map.set('RUS',"Russia")
map.set('IN',"India")
console.log(map)
// for (const key of map) { //created a array
//     console.log(key)   
// }
// for (const [key ,value ] of map) { //To print one by one own
//     console.log(`${key} :- ${value} `)   
// }

// is for of loop is working on object ??
// const myObj = {
//     'game1' : 'pubg',
//     'game2' : 'subwaysurfer',
//     'game3' : 'candycrush',
//     'game4' : 'freefire',
// }
// for (const [key ,value] of myObj) {
//     console.log(`${key} :- ${value} `)   
// }

// so we can see that Object is not iterable by using forof loop