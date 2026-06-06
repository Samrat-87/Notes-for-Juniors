// const myNum = [1,2,3,4]
// const myTotal = myNum.reduce( (acc , currval) => {
//     return acc +currval
// } , 0 )
// console.log(myTotal)

const shoppingCart = [
    {
        itemName : "js Course",
        price : 500
        
    },    
    {
        itemName : "py Course",
        price : 900

    },    
    {
        itemName : "cpp Course",
        price : 700

    } , 
    {
        itemName : "java Course",
        price : 5000

    },
];
const priceToPay = shoppingCart.reduce( (acc ,item) => acc + item.price , 0 )
console.log(priceToPay)