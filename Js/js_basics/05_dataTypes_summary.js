// premitive

// 7 types : String , Number , Boolean , null , undefined , Symbol , BigInt

const score = 123
const score2 = 123.3

//js is dynamically types languaage because we don't need mention the type of data 

const Id = Symbol('123')
const anotherId = Symbol('123') //if value of Id and anotherId id also same but because of Symbol both consider as different string
console.log(Id === anotherId)
// Reference or non premitive

// 3 types : Array , Objects , Function

const heros = ["ironman" , "thor" , "hulk" ,"Captain america"]
console.log(heros)

let myObj = {
    name : "Samrat",
    age : 21,
}
console.log(myObj)

const myfunction = function(){
    console.log("hello World")
}
console.log(myfunction())

//stack memory - primitive => we get copy of original memory references and changes of commit into the copy => call by value

//heap memory - non-primitive => we get original memory references and changes of commit into the original => call by reference

