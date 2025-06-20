//ARROW FUNCTIONS

// function greet(){
//     console.log("regular function");
    
// }
// greet()


// const greet = () =>{
//     console.log("arrow function");
// }
// greet();

//--------------------------------------------------------------------
//HOISTIONG cannot be applied in arrow functions
//-------------------------------------------------------------------

// const add = (a,b) => {
//     return a+b;
// }
// const result = add(4,5);
// console.log(result);


//SPREAD OPERATOR
const add = (...args) => {
    console.log(args);
}
add(3,4,7,5,2,4,8); 