//CALLBACK FUNCTIONS

// let f1 = () => {
//     console.log("f1 called");
// }
// let main = (x)=> {
//     x();
// }
// main(f1);


// let main = (x) => {
//     x();
// }
// main(() => {
//     console.log("hello");
// });


let f1 = (x) => {
    console.log(x);
}
const main = () => f1(5)
main();
// console.log(typeof(main));
