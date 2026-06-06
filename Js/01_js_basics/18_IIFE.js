// IIFE => Immediately Invoked Function Expression

(function chai () {
    //named IIFE
    console.log(`DB Connected`);
    
})() ; //we nee to give the semiclon 
// for handling golbal scope polution we need to use IIFE  // polution in the sence there is must be some declaration error or anything like that

((name)=>{
    // unnamed IIFE
    console.log(`DB is not Connected ${name}`)
})('Samrat') ;