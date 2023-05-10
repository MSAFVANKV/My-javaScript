// function myFunc (){

//     console.log("hello world");
// }
// myFunc()

// // Arrow function 1

// const myFunc2 = ()=> {
//     console.log("hello ");

// }
// myFunc2()

// // Arrow function 2

// const myFunc3 = () => console.log('running');

// myFunc3()
// // Arrow function 3

// const myFunc4 = (value) => value + 5;

// console.log(myFunc4(5));


// sort ..................

// const a = [1,6,5,9,10,52];
// a.sort ((a,b) => {
//     return a-b;
// })  

// console.log(a);

// Foreach  normal method...................
//================================\

// const globpyr = [
//     {
//     id : 0,
//     name : 'muhammed',
//     age : 22,
//     },
//     {
//         id : 1,
//         name : 'safvan',
//         age : 23,
//     },
//     {
//         id : 2,
//         name : 'kv',
//         age : 20,
//     },
// ];

// for(let i=0; i < globpyr.length; i++){
//     console.log(globpyr[i].id);
// }


// Foreach  simple method...................
//================================\

// globpyr.forEach(function(value,index,array){

//     console.log(value.name);

// });

//...
// globpyr.forEach((value,index,array) => console.log(index));


//map method .......................
///////////////////////////////

// const globpyr = [
//     {
//     id : 0,
//     name : 'muhammed',
//     age : 22,
//     },
//     {
//         id : 1,
//         name : 'safvan',
//         age : 23,
//     },
//     {
//         id : 2,
//         name : 'kv',
//         age : 20,
//     },
// ];

// // const newArray = globpyr.map((value) => value.age);

// //without map

// const newArray = [];
// for(let i=0; i<globpyr.length; i++){
//     newArray.push(globpyr[i].name)
// }

// console.log(newArray);

// only take whcih one is near the slash \ ...........
// let txt = "We are \'Vikings\" ";
// console.log(txt);
// // alert(txt);

// // only take whcih one is near the slash \ ...........
// let str1 = "\"Hello";
// let str2 = " World!\"";
// console.log(str1+str2);
// // alert(str1+str2);

// // slice
// let text = "my name is safvan";
// let x = text.slice(3,7)
// console.log(x)


// let txt2 = "safvan kv";
//  txt2 = txt2.replace("safvan", "muhammed");
// console.log(txt2);

// let array = [1,2,3,2,5]
// for(i=0; i<array.length; i++){
//     console.log(array[i]);
// }

// // lengthof the array
// const cars = ["Volvo", "Jeep", "Mercedes"];
// // alert(cars.length);

// const fruiuts = ["banana", "mango", "apple"]
// fruiuts.pop()
// console.log(fruiuts);

// setTimeOut with var................................./

// function x (){
//     for(var i=1; i <=5; i++){
//         function close (x){
//             setTimeout(function (){
//                 console.log(x);
//             },x*1000);
//         }
//         close(i);
//     }
// }
// x();


// setTimeOut with let..............................
// function x(){
//     for(let i=1; i <=5; i++){
//             setTimeout(function (){
//                 console.log(i);
//             },i*1000);
//     }
// }
// x();


// Map is use for transformation........
//  const arr = [2,5,6,2];
//  const arr1 = [5,1,3,2,6];

//  function double(x){
//     return x * 2;
//  }
//  function triple(x){
//     return x * 3;
//  }

//  const output = arr1.map((x) => x.toString(2));
// //  const output = arr.map(double);

//  console.log(output);

//  week-2=====================================================================================================================


// const arr =[42145];

// arr.sort((a,b)=>{
//    return b-a;
// })
// console.log(arr[arr.length-1])


// adding with func
// function car(arr=[1,2,5,5]) {
//    let sum=0
//    for(i=0;i<arr.length;i++){
// sum+=arr[i]
//    }
//    return sum;
   
// }
// console.log(car());


// // adding with arrow func
// let my=(x,y)=>{

//    return x+y;
// }
// console.log(my(1,2));


// // adding with func
// function m(x,v){
//    return x-v;
// }
// console.log(m(1,2));

// //=======================
// function c(a=[1,2,3,5]){
//    let s=0;
//    for(let i=0; i<a.length; i++){
//       s+=a[i]
//    }
//    return s;
// }
// console.log(c());

// let func = (a=[1,2,2]) =>{
//    s1=0
//    for(i=0; i<a.length; i--){
//       s1-=a[i];
//    }
//    return s1;
// }
// console.log(func());


// // reverse a Array digit
// let ar = 42145;
// let sum = 0;
// while(ar>1){
//    let remi = ar%10;
//    sum = remi + sum*10
//    ar = Math.floor(ar / 10);
   
// }
// console.log(sum);

// let array = [1,2,3,2,5]
// for(i=0; i<array.length; i++){
//     console.log(array[i]);
// }

// var countBits = function(n=[5,1,3,2,6]) {
//   return n.toString(2);
// };

const arr = [5,1,3,2,6];

function binary(x) {
   return x.toString(2);
}
const output = arr.map(binary);
console.log(output);

