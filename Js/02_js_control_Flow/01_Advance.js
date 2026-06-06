// if statement

// if(2==="2"){     // === is check the type of value is the value are same type the === work good
//     console.log("looks all good")
// }else{
//     console.log("there is some error in type of value")
// }
// const temparature = 41
// if(temparature < 50){
//     console.log("less than 50")
// }else{
//     console.log("greater than 50")
// }


// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`user power : ${power}`);
// }


// const balance = 1000
// // if(balance > 500) console.log("yes"),console.log("yes yes");  // here we don't use scope its called implicite scope but avoid this type of code because it made the code unreadable
// if(balance < 500){
//     console.log("less than 500");
// }else if(balance < 750){
//     console.log("less than 750");   
// }else if(balance < 950){
//     console.log("less than 950");   
// }else{
//     console.log("less than 1200");
// }

const isUserLoggedIn = true
const Debitcard = true
const loggedInFromGoogle = true 
const loggedInFromEmail = false 
if(isUserLoggedIn && Debitcard){
    console.log("allow to by course")
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("user logged in")
}