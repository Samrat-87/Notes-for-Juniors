// const email = "sa@gmail.com" // we get true condition (if is run)
// const email = "" // we get false condition (else is run)
// const email = []  // we get true condition (if is run)

// this type of thing is known as truthy value and falsy value 

// if(email){
//     console.log("we got the email");
    
// }else{
//     console.log("we don't have email")
// }


// falsy value => false , 0 ,-0 ,BigInt ex : 0n,""(empty String),null ,udefine,NaN(not a number)

// truthy value => "0"(zero under String),'false'(false under string)," "(Space in string),[](empty array),{}(empty Object),function(){}

// array under if

// if(email.length === 0){
//     console.log("Array is empty")
// }

// object under if

// const myObj = {}
// if(Object.keys(myObj).length === 0){
//     console.log("the object is empty");
    
// }

//some interview type question

// console.log(false == 0)
// console.log(false == '')
// console.log(0 == '')


// ************* nullish Coalescing Operator (??):null undefined ************

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
// val1 = 10 ?? 15 ?? 20
val1 = undefined ?? 15 ?? 10
console.log(val1)


//  terniary Operator 

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")   