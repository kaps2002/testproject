const car ={
    color:'green',
    gears:5,
    engine:"diesel"

}
// const somefunc=({color='red',engine:carengine=6}={})=>{
// console.log(color,carengine);
// }
// somefunc({});
// const {color,gears,engine:carengine}=car;
// console.log(`color ${car.color}`);
// console.log(`gears ${car.gears}`);
// console.log(`carengine ${car.engine}`);

const somarr=[1,2,3,4,5]
var [secondel]=somarr;
console.log(secondel);

const dosome = new Promise((resolve,reject) => {
    // resolve("hello");
    reject(new Error("promise has failed"));
});
dosome.then((resolvedvalue)=>{
    console.log(resolvedvalue);
    return 5;
    })
    .catch((err)=>{
    console.log('error occured:',err.message)
});