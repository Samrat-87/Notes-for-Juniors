const name = "Samrat"
const lucky = 87
// console.log(name + age + "2004") // this type of string syntax is outdated
console.log(`Hello my name is ${name} & my lucky number is ${lucky} `)
const gameName = new String('Samrat-gc')
console.log(gameName[0])
console.log(gameName.__proto__)
console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(3))
console.log(gameName.indexOf('a'))
console.log(gameName.substring(0,4))
console.log(gameName.slice(-8,4))
console.log(gameName.split('-'))
const newStringOne = "    Samrat    "
console.log(newStringOne)
console.log(newStringOne.trim())
const url = "https://samratsamanta%me/"
console.log(url.replace('%' , '.'))
console.log(url.includes('samrat'))