// const coding = ["js","rubby","python","java","cpp"]

// const value = coding.forEach( (item) => {
//     console.log(item);
//     // return item  // foreach loop don't return any value from array
// })
// console.log(value);


 
// const myNum = [1,2,3,4,5,6,7,8,9,10] 
// const newNum1  = myNum.filter( (num) => num >4)
// // ************* or *****************//
// const newNum = myNum.filter((num) => {
//     // console.log(num);
//     return num > 5;
// }) 
// foreach loop don't retun vlaue but filter return value
// console.log(newNum1)
// console.log(newNum)

// for printing same value through foreach loops

// const value = []
// myNum.forEach((num)=>{
//     if(num > 5){
//         value.push(num)
//     }
// })
// console.log(value)





// ****************** practice on filters ****************************************//


const books = [
  {
    name: "The Silent Patient",
    genre: 'Thriller',
    publishDate: 2019
  },
  {
    name: "Atomic Habits",
    genre: 'Self-Help',
    publishDate: 2018
  },
  {
    name: "Project Hail Mary",
    genre: 'Science Fiction',
    publishDate: 2021
  },
  {
    name: "Educated",
    genre: 'Memoi',
    publishDate: 2018
  },
  {
    name: "The Midnight Library",
    genre: 'Fantas',
    publishDate: 2020
  }
];

let userBook = books.filter( (bk) => bk.genre === "Science Fiction" )

let userBook2 = books.filter( (bk) => {
    return bk.publishDate >= 2019 && bk.genre === 'Science Fiction'
})
// console.log(userBook)
console.log(userBook2)
