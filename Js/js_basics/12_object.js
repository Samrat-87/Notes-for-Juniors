// frist way (this is singleton)
const tinderUser = new Object({
    id: "124abc",
    name: "rammy",
    isloggedIn: true
});
console.log(tinderUser); //shows object with properties

// second way (this is not a singleton)
const tinderUser2 = {}
tinderUser2.id = "123abc"
tinderUser2.name = "Sammy"
tinderUser2.isloggedIn = false
console.log(tinderUser2);

const regularUser = {
    email : "some@gmail.com",
    fullname:{
        userfullname:{
            firstname : "Samrat",
            secondname : "samanta"
        }
    }
}
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);


// conbining of object

const obj1 = {1: "a" ,2: "b"}
const obj2 = {3: "c" ,4: "d"}
const obj5 = {5:"e" ,6: "f"}
const obj3 = {obj1 , obj2}
console.log(obj3) // objet take object in array same concatination problem in js
const obj4 = Object.assign({} , obj1 ,obj2,obj5) // less usage
console.log(obj4)
const obj6 = {...obj1, ...obj2 ,...obj5} //spreed operator is more usable
console.log(obj6)

// when value come form database

const users = [
    {
        id : 1,
        email : "gg@mail.com",
    },
    {
        id : 2,
        email : "ff@mail.com",
    },
    {
        id : 3,
        email : "yy@mail.com",
    }
]

users[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));





