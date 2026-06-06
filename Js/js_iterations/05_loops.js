// foreach loop in array

const coding = ["js","rubby","python","java","cpp"]

// coding.forEach(function (item){
//     console.log(item)
// })

// foreach loop by using arrow funtion
// coding.forEach((item)=>{
//     console.log(item)
// })


//another way

// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)

// ********      more interesting thing                      ********** //
// coding.forEach((item ,index ,arr) => {   //in for  each we got item ,index and full array
//     console.log(item,index,arr) 
// })

const myCoding = [
    {
        languageName : "java",
        languageFile : "jv"
    },
    {
        languageName : "javaScript",
        languageFile : "js"
    },
    {
        languageName : "python",
        languageFile : "py"
    },
]
myCoding.forEach( (item) => {

    console.log(item.languageName);
    
})