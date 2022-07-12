//function declare and function expression
// function hello(){
//     console.log('karan');
// }
// const hello2 = function(){
// console.log('karan');
// };
// hello();
// hello2();
function myname(){
    return "karan";
}
myname();
const myname2 =(myname,myage) => {
    console.log(myname);
    console.log(myage);

};
myname2('karan',undefined);