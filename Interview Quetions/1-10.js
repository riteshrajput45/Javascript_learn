// 1. What is the difference between let, const, and var?

// var: Function scoped. Can be updated and redeclared.
// let: Block scoped. Can be updated but cannot be redeclared.
// const: Block scoped. Cannot be updated or redeclared.
// Note: For arrays/objects with const, you can change contents, but not the reference.


// 2. Explain closures in JavaScript with an example.

// A closure is when a function "remembers" variables from its outer scope even after the outer function has finished executing.

/*
function outer() {
    let name = "bhupend";
    function inner() {
        console.log("This is inner function, name is", name);
    }
    return inner;
}
const result = outer();
result();
*/


// 3. What is the event loop in JavaScript?

// The event loop lets JavaScript handle async tasks (like async/await, Promises, setTimeout, API calls) without blocking the main thread.
// (Event loop helps JavaScript handle async tasks by putting them in a queue, and running them later, without stopping the main code.)


// 4. What is hoisting in JavaScript?

// Hoisting means JavaScript moves declarations (but not initializations/values) to the top of their scope before code execution.


// 5. How does asynchronous JavaScript work (Promises, async/await)?

// Async JavaScript lets you run code without waiting for previous code to finish. Promises and async/await help manage this easily.


// 6. What is the difference between process.nextTick(), setImmediate(), and setTimeout()?

// process.nextTick(): Runs immediately after the current operation, before the event loop continues. Used for urgent tasks.

// setImmediate(): Runs after the I/O events, in the check phase of the event loop. Runs after process.nextTick() and often after setTimeout() with 0ms.

// setTimeout(() => {}, 0): Runs in the timer phase of the event loop. Even with 0ms, it is placed in the timer queue and may not run instantly.


// 7. What are the different data types in JavaScript?

// There are 2 types: Primitive and Non-Primitive.
// Primitive types (7): String, Number, BigInt, Boolean, Null, Undefined, Symbol.
// Non-Primitive types: Object, Array, Function.


// 8. What is Scope in JavaScript?

// Scope defines where variables, functions, and objects are accessible in your code.


// 9. What is the difference between null and undefined?

// undefined: Variable is declared but not assigned any value.
// null: Represents an intentional absence of value (intentionally empty).


// 10. What is 'this' in JavaScript?

// 'this' refers to the object that is currently executing the function.


// 11. What is Deep and Shallow Copy?

// Shallow copy: Copies only the top-level properties; nested objects are still referenced.
/*
let obj = { name: "Ritesh", address: { city: "Bhopal" } };
let shallow = { ...obj };
shallow.address.city = "Indore";
console.log(obj.address.city); // "Indore" (original also changed)
*/

// Deep copy: Completely copies all levels. Changing the copy does not affect the original.
/*
let obj = { name: "Ritesh", address: { city: "Bhopal" } };
let deep = JSON.parse(JSON.stringify(obj));
deep.address.city = "Mumbai";
console.log(obj.address.city); // "Bhopal" (original remains safe)
*/


// 12. What is the purpose of the comma operator?

// The comma operator allows evaluating multiple expressions, but only returns the value of the last expression.


// 13. What is a callback function? Provide an example.

// A callback function is a function passed as an argument to another function.

/*
function first(name, callback) {
    console.log("hey", name);
    callback();
}
function calling() {
    console.log("This function is also a callback function");
}
first("shree", calling);
*/


// 14. What are higher-order functions?

// Functions that take another function as an argument or return a function.

/*
function normal() {
   return 'ritesh';
}
function thismain(high) {
     const result = high();
     console.log(result);
}
thismain(normal);
*/


// 15. What is the Temporal Dead Zone (TDZ)?

// TDZ is the time between the declaration of let/const variables and their initialization, during which accessing them will throw a ReferenceError.


// 16. What is type coercion in JavaScript?

// Type coercion is when JavaScript automatically converts one data type to another.

// console.log("5" + 5); // "55"
// console.log("5" - 5); // 0

// // Explicit coercion examples:
// Number("1234");
// String(1234);

//17 What are truthy and falsy values?

// truthy is value define to truth value 
// falsy to define false  like 0

// falsy is 7 type
// "",null,undefined,false,o,on,nan,

// truth is this type 
// "ritesh",[],{},function, any number (1,...-1) without zero


//18. What are arrow functions? How are they different?
//  arrow function are use to write a code clearity and shorter  so we can use arrow function

// just like old function
// function add(a,b){
//    console.log(a+b)
// }

// add(4,5)

// let add = (a,b)=> a+b
// add(4,5) ==9

// let add = ()=> console.log("hello i am ritesh")

// add()

// one more added
// const data =(a,b)=> {
//     const ram =a+b
//     return ram
// }

// let add = (a,b)=> a+b

// console.log(add(4,5))


// let add = ()=> console.log("hello i am ritesh")

// add()

// const data =(a,b)=> {
//     const ram =a+b
//     return ram
// }
// console.log(data(2,4))

// NOTE - this is not run here because they find to our outer environment (Arrow function this ko le raha hai apne outer environment se — jahan this.name undefined hai.)

//19. What is the difference between call, apply, and bind?

// call function  is immeadiatly call pass to parmaeters one by one and we are describe comma sepreter

// function summry(name,age){
//    console.log(`my name is ${name},and my friend name is ${this.name} and my age is ${age}`)
// }
// const person ={name:"Vishal"}
// summry.call(person,"ritesh",24)


// apply -- exaclty same to call --



// function summry(name,age){
//    console.log(`my name is ${this.name},and my friend name is ${name} and my age is ${age}`)
// }
// const person ={name:"Vishal"}
// summry.apply(person,["ritesh",24])


// bind => bind is not immeadiatly and this  and give return to function

// function greet() {
//   console.log("Hi, my name is " + this.name);
// }

// const person = { name: "Ritesh" };

// // Bind greet function to person
// const greetPerson = greet.bind(person);

// greetPerson()


// 20 What is the difference between synchronous and asynchronous code?

// synn-- the sync is run to line by line and wait to next step --

// function calculate(){
//    for(let i=0; i<=100; i++){
//       console.log("jay shree krishna")
//    }
// }
// calculate()
// console.log("shree ram")

// async- async is does not waiting continues executing  this is non blocking-just like  just like settimeout, promise async await - 


// 21. What are higher-order functions?

// high order function user to take another function  as an arugument

// function greet(name){
//    console.log(`Good Morning ${name}`)
// }

// function passes(name){

//     return greet(name)
// }
// passes("ritesh")


// 22 How to clone an object in JavaScript

// also same to deep copy and shllow copy please read to below


//23 How does destructuring work in objects and arrays?

// destructuring means ---  array and  Object  extract as a variable


//24 What are spread and rest operators?

// spread -- use to expands all the propertires  they are copying and marging
// rest - the rest opreater use to  getharing to an Arrays and objects 

//25--What is optional chaining ?


// the optional use to error handling when return to undefind and null so giving a error so we can handle to optional chanigng

// const mydata = {
//     city:"indore"
// }

// console.log("mydata",mydata?.name?.sirname)

//26  describe to for in and for off

// for of--- they are  return to ittreable to value  string Array and object 


// const a = ["applie","ananas"]
// for(data of a){
//     console.log(data)
// }

// for in --we are using object and indexing array

// const myData = {name:"ritesh",age:38}
// for(data  in myData){
//     console.log("data",datamyData[data])
// }


//27 what is  monolith and microservice

// monolith---> monolith are using to single codebase strucutre we are here all function productvity do--
// just like user auhtenction and login feature logout only use to sigle strucutre

// microservice--> microservice using to micro past just like every small codebase  defferent defferent make a servive  because one crash but still works


//28  please describe to map() filter() foreach() reduce()?
// Map()=> map function return to new array but origin does not change

// let a = [1,2,3,4,5]
// let b = a.map(function(data){
//     console.log(data+1)
// })

// let num = [1,2,3,4,5]
// let c= num.map(Data=> Data+100)
// console.log(c)

// Filter()--> filter function also return to new array but they condition base run 

// let nums = [1,2,3,4,5]
// let data = nums.filter(nums=> nums==3)
// console.log(data)

// forEach ---> forEach is not return to array not change to orginal array

// const num = [1,2,4,5]
// num.forEach(data=>console.log(data+1001))



// reduce()==> reduce  is method to a array they are givan to single value  output

// let nums = [1,2,3,4,5,6]

// const newNums = nums.reduce((acc,array)=>{
//     return acc+array

// })

// let alphabet  = ["a","b","c","d","e","a","b","c","a","b"]
// const countalphbet =alphabet.reduce((acc,arr)=>{
//     acc[arr] = [acc[arr] || 0] +1
//     return acc
// },{})


// Q 29 -->What is Object.freeze() vs Object.seal()?

// Object.freeze()--> object freeze we can not change not delete not put anything Make an object completely immutable

// let info ={name:"ritesh",age}
// Object.freeze(info)

// info.name="shree"
// console.log("info",info)

// Object.seal() --> here  we are not delete and add any properties  but you can change  values---

// let info ={name:"ritesh",age}
// Object.freeze(seal)

// info.name="shree"
// console.log("info",info)

// Q30 --> What is prototypal inheritance?

// prototype inheritance method to javascript where object inherit properties and method from  another object 

// const parent ={
//     data:function callme(){
//         console.log("this is parents function")
//     }
// }

// const prototypal = Object.create(parent)

// prototypal.data()

// USING FUNCTION CONSTRUCTER ---

// function info(name){
//     this.name= name
// }


// info.prototype.sayhello=()=>{
//     console.log(`hi i am calling from ${this.name} `)
// }

// const person = new info("parents")
// person.sayhello()


const numbers = [1,2,3,4,5]

for(let newnum of numbers){
    console.log("newnum",newnum)
}
