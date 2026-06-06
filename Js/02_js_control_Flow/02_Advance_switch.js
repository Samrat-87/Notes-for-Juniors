// switch case 

const month = 3
switch (month) {
    case 1:
        console.log("Month is : January");
        break;
    case 2:
        console.log("Month is : February");
        break;
    case 3:
        console.log("Month is : March");
        break;      

    default:
        console.log("invalid")
        break;
}
const month2 = "april"
switch (month2) {
    case "january":
        console.log("Month 2 is : January");  //*********  we can use switch number as well as string     **********//
        break;
    case "february":
        console.log("Month 2 is : February");
        break;
    case "march":
        console.log("Month 2 is : March");
        break;      
    case "april":
        console.log("Month 2 is : April");
        break;      

    default:
        console.log("invalid")
        break;
}