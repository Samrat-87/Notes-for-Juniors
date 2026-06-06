// singleton

// Object.create //(this type of object creation is made through constructor known as singleton object)



// object literals

const mySym = Symbol("Key1") 
const jsUser = {
    name: "Samrat",
    age: 20,
    location : "Kolkata",
    Email:"samratsamanta018@gmail.com",
    isLoggedIn: false ,
    lastLoggedIn:["monday","tuesday"] ,
    "full name" : "Samrat Samanta" ,
    [mySym] : "myKey1"
}
console.log(jsUser.Email)
console.log(jsUser["Email"])
console.log(jsUser["full name"]) // for this type of cases squre notation is used
console.log(jsUser[mySym])
console.log(typeof jsUser[mySym])
jsUser.Email = "samratsamanta792@gmail.com"
// Object.freeze(jsUser)
jsUser.Email = "random@gmail.com"
console.log(jsUser)

jsUser.greeting = function(){
    console.log(`hello js user , ${this.name}`)
}
jsUser.greeting2 = function(){
    console.log(`js user age is ,${this.age}`)
}
console.log(jsUser.greeting())
console.log(jsUser.greeting2())

