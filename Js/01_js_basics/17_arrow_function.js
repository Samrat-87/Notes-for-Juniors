// const user ={
//     username : "Samrat",
//     price : 999,
//     welcomeMessage : function(){
//         console.log(`${this.username} , welcome to website`)
//         console.log(this)// this help us to print current context that means current value of the username
//     }
// }
// user.welcomeMessage()
// user.username = "Sammy"
// user.welcomeMessage()
// user.username = "Tammy"
// user.welcomeMessage()
// console.log(this)  // this print empty object in node environment 

// function sam(){
//     console.log(this) // we print this under the function in node environment
// }
// sam()
// function chai(){
//     let username = "Samrat"
//     console.log(this.username)  //we can not use this in the function this print undefine
// }
// chai()


// const chai = function(){
//     let username = "Samrat"
//     console.log(this.username)    //we can not use this in the function this print also undefine
// }
// chai()


// arrow funtion


// difference between arrow funtion and this function
// ans. in arrow funtion this gives empty curly brases and regular function this gives runtuime bsed on execution context

// const arrow = () => {
//     let username = "Samrat"
//     console.log(this) // return us empty curly brases 
//     console.log(this.username)  //we can not use this in the function this print also undefine
// }
// arrow()


const addTwo = (num1 ,num2) => {
    return num1 + num2
}
console.log(addTwo(2,3))

// another way to represent arrow function called ++++ implecite return +++++++

const add = (num1 ,num2) => num1 + num2
console.log(add(2,3))


const name = () => ({
    user : "Samrat"
}) // for object return we need to add object under parenthesis 
console.log(name())