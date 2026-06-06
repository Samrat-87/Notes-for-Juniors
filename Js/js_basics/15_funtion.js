function calculateCardStyle(...num1){  // here we learn how the multiple operators is passes through a function by using rest operator
    return num1
}
console.log(calculateCardStyle(200 , 400 , 500));  // ... is known as rest operator and as well as spread operator

function calculateCardStyle2(value1,value2,...num1){ 
    return num1
}
console.log(calculateCardStyle2(200 , 400 , 500)); // only 500 is remain on array because of 200 and 400 are stores in valiue1 and value2


const user = {
    username : "Samrat",
    price : 200,
}

function handleObjects(anyobject){
    console.log(`username is : ${anyobject.username} & price is : ${anyobject.price}`)
}
handleObjects(user)

handleObjects({
    username : "rony",
    price : 399
})


// return of array value by using function 

const mynewArray = [100 , 5000  , 300 , 1000 ]

function returnsecondvalue(getArray){
    return getArray[1]
}
console.log(returnsecondvalue(mynewArray));
console.log(returnsecondvalue([10000 , 200 , 700 , 800]));
