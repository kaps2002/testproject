//Array.map()
// const a=[1,2,3,4];
// const result=a.map(function(val,idx,arr){
//     return val*3;
// });
// console.log(result);

//array.reduce()
const a=[1,2,3,4];
// {
//     0: 1,
//     1: 2,
//     2: 3,
//     3: 4
// }
const result= a.reduce(function(acc,curval,idx){
// console.log(acc,curval);
// return acc+curval;
const mappedcurrentelem={};
mappedcurrentelem[idx]=curval;
// {
//     0:1,
// }
console.log(acc);
return Object.assign(acc,mappedcurrentelem)
},{});
console.log(result);