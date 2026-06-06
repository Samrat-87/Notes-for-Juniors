// const marvel_heros = ["Ironman" ,"Thor" , "Spiderman"]
// const dc_heros = ["Superman" , "Flash" , "Batman"]
// // console.log(marvel_heros);
// // console.log(dc_heros);
// // marvel_heros.push(dc_heros)
// // console.log(marvel_heros) // here array takes one array in an array
// // console.log(marvel_heros[3][1]);

// // to avoid array in array we need to use concat
// const allHeros = marvel_heros.concat(dc_heros);
// console.log(allHeros); // ["Ironman", "Thor", "Spiderman", "Superman", "Flash", "Batman"]
// console.log(allHeros.join()) // the array converted into string

// // allternative of concat spread 

// const all_new_heros = [...marvel_heros,...dc_heros]
// console.log(all_new_heros)

// const another_array = [1,2,3,[4,5,6],7 ,[6,7,[4,3]]]
// console.log(another_array)
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)
const arr = (Array.isArray("Samrat"))
console.log(arr)
console.log(Array.from("Samrat")) // change into array from
console.log(Array.from({name: "Samrat"})) // when we make it as a string is this not convert a array it gives back empty array
let score1 = 100
let score2 = 200 
let score3 = 300
console.log(Array.of(score1,score2,score3))