function SayMyName(){
    console.log("s");
    console.log("a");
    console.log("m");
    console.log("r");
    console.log("a");
    console.log("t");    
}

SayMyName()


// add two number

// function addTwoNumber(number1 , number2){
//     console.log(number1+number2)
// }
function addTwoNumber(number1 , number2){
    let result = (number1+number2)
    return result
}
const result = addTwoNumber(2,4)
console.log("Result : ",result);


function loginUserMessage(username){
    // if(username === undefined){
    //     console.log("please enter a Username")
    //     return
    // }

     if(!username){  // above and below condition are both equivalent condition
        console.log("please enter a Username")
        return
    }
    return `${username} just logged In`
}
console.log(loginUserMessage("Samrat"))