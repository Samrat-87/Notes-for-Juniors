// {} is named a scope , but the curly brashes with object is called object
//  declaration when curly brashes comes with function and if else is known as scope 

// if(true){
//     let a = 30
//     const b = 40
//     var c = 50
// }
// console.log(a);
// console.log(b);
// console.log(c); // var value will be printed he didn't obey scope


// nested scope 
function one() {
    const username = "Samrat"
    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website); //error as not in its scope
    two()
} //for printing "Samrat" we need both function acces 1. two() 2.one()
one()

// if(true){
    // const username = "Samrat"
    // if(username === "Samrat"){
        // const website = " website : samratsamanta.me"
        // console.log(username + website)
    // }
    // console.log(website) //showing error because of scope 
// }
// console.log(username) // showing error because of scope



// +++++++++++++++++++++++++++   Interesting   ++++++++++++++++++++++++++++++++++++++++++++++++//

console.log(addOne(5)) // here this type of pre declaration is allowed
function addOne(num){
    return num + 1
}
const addTwo = function(num){ //but here above type of pre declaration is not allowed
    return num + 2
}
console.log(addTwo(5)) 