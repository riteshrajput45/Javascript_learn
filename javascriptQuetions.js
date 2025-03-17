//Foreach-

//ForEach  ForEach ka use  array ki value ke liye kiya jata hain jisme array ko retrive ke liye eska use kiya jata hain 
//this is loop off form

//just like example 
// let a = [1,2,3,4,5]
// console.log (a[0])

//foreasch ek highvalueble function hota hain highvaluble means always give to nested function just like

// a.forEach(function(valueOfArray){

//     console.log(valueOfArray+2)//

// })

// Q1 FOREACH KA USE KARKE  EK ARRAY KE SAMANE SHREE RADHA PRINT KARANA  HAIN

// let a =[1,2,3,4,5]

// a.forEach((all)=>{
//     console.log(all+ " = SHREE RADHA")
// })


// Q2 aaray ke un number ko print kro jo 2 bde hoo

// let a = [1,2,3,4,5]

// a.forEach(function(myAnswer){
//     if(myAnswer >  2){
//         console.log(myAnswer)
//     }
// })

//Q3 Sare elements jo he unka sum  karna hain


// let a = [1,2,3,4,5]

// let allCount =0
// a.forEach(function(myAnswer){
//        allCount=allCount+myAnswer
       
//     })
    
//       console.log(allCount)


//Q4 Sare bandhe add kro if usme se string nikl jaye to use skip kare 

// let a = [ 1,2,"3",4,5]

// let sum =0;
// a.forEach(function(myAnswer){
//     if( typeof myAnswer === "string"){
//         sum = sum+myAnswer
//     }

// })
// console.log(sum)


// Q4  tough question-> 

// var arr =[]

// for(let i=0; i<10; i++){

//     arr.push(function(){
//         setTimeout(function(){
//           console.log(i)
//         },1000)
//     })

// }

// for(var i=0; i<10; i++){

//     arr[i]();
// }


// q5
// write  a JavaScript Function to check  whether an input is an Array or  not
//!SECTION  test-data

// function checkArray(check){
//   console.log(Array.isArray(check))
// }
// checkArray(["1"])


//How to clone array console.log([1,2,3,4,5])
//spre

// function clonning(insp){
//    let clonned = [...insp]
//    return clonned;

// }

// // clonning([1,2,3,4,5])
// clonning([1,2,3,[4,5]])

// console.log('clonning([1,2,3,4,5]): ', clonning([1,2,3,4,5]));



// Q6  Write a Javascript  function  to get the first element of an array Passing a parameters 'n' will return the first 'n' elements of the array .go to the editor
// example = a= [1,2,3,4,5],1
// answer = [1]
// if b =  [1,2,3,4,5],3
// answer =[1,2,3]

// lets Do it solve this question

// function getter(check,get=1){
//     let aarayGet =[ ];
//    for(let i =0; i<get; i++){
//      aarayGet.push(check[i])
//    }
//    return aarayGet
// }

// // getter([1,2,3,4,5])
// console.log('getter([1,2,3,4,5]): ', getter([1,2,3,4,5],-1));


// Q7 Write a Javascrpit program to join all element of the following  array into a string Go to the editor 

// simple array : myClour =["Red","Green","White","Black"]

// Expected answer 
// ans 1 =["Red,Green,white,Black"]
// ans 2 = ["Red+Green+White+Black"]

// function joiner(insp){
//     return insp.join('+')
//     return insp.join(',')
// }
// // Note:- We can use Join() operator sperate i want to join array i use join()


// console.log( joiner(["Red","Green","White","Black"]));


// Q8  Possible ways to create an object
// ans -> there are four ways  create object 

//  let a = {}  //Object literals
//  let b = Object.create(null) //by using object create method
// //  let c =>

// function abcd(){//Constructor Functions.
//   this.name = "Ritesh";
// }
// class Abcd{
//   constructor(){}
//   a=12
// } 
// var ans =new abcd()
// var obj =new abcd(); //this keyword giving black object  beacuse we are imagein of replace this keyword  is object . then name  access
// console.log('ans: ',typeof ans);
// console.log('obj: ', typeof obj);
// console.log('new abcd();: ', new abcd());
// //  console.log('b: ', b);

// // console.log('a: ',typeof a);



// Q9  High Order Function 
// //ek esa function jo ek or function ko add kre apne ander as parameter"
//if function return  function call of high order function


// function abcd(insp){
//   return function (insp2){return insp+insp2}
// }
// // abcd(10),abcd2(20)
// console.log('abcd(10),abcd2(20): ', abcd(10)(20));

// type of high order //
//  Map,filter,foreach


// Q10 var const let defference 
// var es5,function scoped,add in window
//let and const,es6,brases scoped,does not add window



// map and foreach question

// Q11  Ek Array se ek new Array bnao jisme agr word ki length  5 words  ho to p  tag main dalo nahito  word span tag main dalo

// let first = ["apple","bnana","papaya","gulabjamun","rasogulla","sev"]
// let smallArray =[]
// let bigArray =[]

// first.forEach(function(newNum){
//     if(newNum.length < 4){
//         smallArray.push(newNum)

//     }
//     else{
//         bigArray.push(newNum)
//     }
    
// })
// console.log("smallArray",smallArray)
// console.log("bigArray",bigArray)

///you can use map method also only you have return is complsary in map method  


// Q12 ek array of Object hain aur us array main kafi data hain usse ek array  bano jismain sirfname ho

// solve
// let first = [
//     {
//         student_name : "Ritesh Rajput",
//         mobile_num:9644045048,
//         designation: "associate software engineer"
//     }
// ]

// let onlyNameArray =[]

// const result = first.map(function(val){
//     if(val.student_name){
//         return  onlyNameArray.push( val.student_name);
//     }
// })
// console.log('onlyNameArray: ', onlyNameArray);

//Q 13 ek array jisme values 1-10  to esme value first bali first array me save hona chaiye secound vali secound means 1 ko chh0r kr  first bali main  save honi chaiuye

//solve ->
// let mainArray =[1,2,3,4,5,6,7,8,9,10]
// let first  = []
// let secound = []

// mainArray.map((val)=>{
//     if(val%2==1){
//         return first.push(val)
//     }
//     else{
//         return secound.push(val)
//     }

// })
// console.log(first)
// console.log(secound)


// Q 14 array main jitne bhi naam aise hain  jinke naam me a aa  rha hain  ese name ko hta do

// solve->


// let studentNames= ["Ritesh","shubham","aman","amit","deepak","abhishek"]

// const result =studentNames.filter((val)=>{
//      console.log();return !val.includes("a")
//      console.log();return val.includes("a")
// })

// console.log('result: ', result);

// Q15 aise namo ko  return karo jinmain do ya do  se jada bar a,a aa rha hoo unhe remove kr do

// let first = ["aman","diya","papa","aayan","Ritesh"]

// const result = first.filter((val)=>{
//     if( val.split("a").length <=2 ){
//         return true
//     }
// })
// console.log('result: ', result);

//  const my = "kakaka"
// const yes= my.split("a")
// console.log('yes: ', yes);
// split