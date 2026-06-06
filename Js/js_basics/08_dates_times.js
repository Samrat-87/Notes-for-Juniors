// date
let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate)

let myCreatedDate = new Date(2004, 6 , 8 , 5 , 30)
console.log(myCreatedDate)
console.log(myCreatedDate.toDateString())
console.log(myCreatedDate.toLocaleString());

let newDate = new Date("07-08-2004");
console.log(newDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
console.log(Date.now())
console.log(Math.floor(Date.now()/1000))





