
// // console.log(null===undefined)
// // console.log(""==="har");

const { max } = require("moment");

// const { useCallback } = require("react");

// let zero = ["kfnsdf"]
// console.log(typeof('let: ', zero));
// // console.log("jsjkgns")

// let numbers =[1,2,3,4,5]
// numbers.map(function(valyue,index,array){
//     console.log('index: ', index);
//     console.log('array: ', array);
//     console.log(valyue)
// })


// let a = 20
// console.log(a)
// let b= a++
// console.log("after pre increament ",a)
// console.log('b: ', b);
// console.log(a+b)
// console.log(0==)

// let arr = [1,2,[4,5,6,[7,8]]]
// result  =[ ]
// for (i=0; i<arr.length; i++){
    
// }
// console.log(arr)

// let arr = [1,3,3,3,4,4,5,5,6]
// let freq = {}
// for(i=0; i<arr.length;i++){
// if((freq[arr[i]])){
//     freq[arr[i]] += 1
// }else{
//     freq[arr[i]] = 1
// }
// }
// console.log(freq);

// let names = ["shubham","shubh","shumya"]

// let a = names[0]
// let b =names[1]
// let c= names[2]

// commonStr =""
// for(i=0;i<=names.length;i++){
//     if(a[i]==b[i] && a[i] == c[i]){
//         commonStr = commonStr + a[i]
//     }
//     else{
//         break;
//     }

// }
// console.log(commonStr)

// let names =['chiar',"chair"]
// let a = names[0]
// let b = names[1]
// let c = a===b
// console.log('a: ', a);
// console.log('b: ', b);
// console.log("c",c)

// console.log("This not same",c)

// reverse string 
// const a  = "3";
// const b= a++
// console.log('a: ', a);
// console.log('b: ', b);

// var a=10;
// var a=20
// console.log(a);

// function outer() {
//   let name = "Ritesh";

//    function inner() {
//     console.log(name,inner());
//   }
//   inner()
// }
//  outer();
// // greet()

// function  one (){
//   console.log("fist function is call",two())
//   function two(){
//     console.log("secound function is call")
//   }
// }
// one()

// function outer(){
//     let name = "ritesh"
//     function inner(){
//       console.log("this is inner function",name)
     
//     }
//     return inner
// }
// const result = outer();
// result();
// function outer(){
//      name ="bhupend";
//      function inner(){
//         console.log("This is inner function")

//      }
//      return inner
// }
// const result =outer()
// result();
// sayHello();

// function sayHello() {
//   console.log("Hello, Ritesh!");
// }
// function show() {
//   console.log(this);
// }
// show(); 

// const data= {
//   name:"ritesh singh"
// }
// const newData = data
// newData.name= "soner"
// console.log("data",data.name)
// console.log("newData",newData)

// let a = {
//   name:"ritesh",
//   age:22,
//   personl:{
//     account_num:23499828,
//     Mobile_nu:12345
//   }
  
// }

// let b ={...a}
// b.name="krishna"
// b.personl.Mobile_nu=9644045048
// console.log("a",a)
// console.log("b",b);


// deep copy

// const a ={
//   name:"Ritesh",
//   age:23,
//   personal:{
//     mobile_num:'9644045045'
//   }
// }
// //this is deep copy
// const b = JSON.parse(JSON.stringify(a))
// b.personal.mobile_num ="1234"
//  console.log("a",a)
// console.log("b",b);

// function first(name, callback) {
//   console.log("hi", name);  // Step 1: Prints greeting
//   callback();               // Step 2: Calls the callback function
// }

// function secound() {
//   console.log("tata and bye bye"); // This is the callback
// }

// first("ritesh", secound); // Step 3: Runs the 'first' function with 'secound' as callback


// function first(name,callback){
//     console.log("hey",name)
//     callback()
// }
// function caling(){
//     console.log("This function also is callbacke function")
// }
// first("shree",caling)
// function normal(){
//    return `ritesh`;
// }

// function thismain(high){
//      const result = high()
//     console.log(result)
// }
// thismain(normal)
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



// function summry(name,age){
//    console.log(`my name is ${name},and my friend name is ${this.name} and my age is ${age}`)
// }
// const person ={name:"Vishal"}
// summry.call(person,"ritesh",24)
// function summry(name,age){
//    console.log(`my name is ${this.name},and my friend name is ${name} and my age is ${age}`)
// }
// const person ={name:"Vishal"}
// summry.apply(person,["ritesh",24])

// console.log("yes i am here ")

// function sync(){
//    for(i=0; i<=1000;i++){
//       console.log("hare krishna")
//    }
   
// }
// sync()
// console.log("shree")



// setTimeout(function add(){
//    console.log("there is timeout")
// },2000)


// console.log("shreee radha")

// function greet(name){
//    console.log(`Good Morning ${name}`)
// }

// function passes(name){

//     return greet(name)
// }
// passes("ritesh")

// let a = [1,2,3,4]
// let b= [5,6]

// let c =[...a,...b]
// console.log("C",c)

// let [a,...rest] =[1,2,3,4,5]
// console.log(a)
// console.log(rest)


// const mydata = {
//     city:"indore"
// }

// console.log("mydata",mydata?.name?.sirname)

//loops
// let a =[1,2,3,4,5]
// for(data in a){
//     console.log("data",a[data])
// }

// const myInfo ={name:"Ritesh",age:23}

// // for(data in myInfo){
// //     console.log("data",data,myInfo[data])
// // }

// let a = [1,2,3,4,5]
// let b = a.map(function(data){
//     console.log(data+1)
// })

// let num = [1,2,3,4,5]
// let c= num.map(Data=> Data+100)
// console.log(c)

// let nums = [1,2,3,4,5]
// let data = nums.filter(nums=> nums==3)
// console.log(data)

// const num = [1,2,4,5]
// num.forEach(data=>console.log(data+1001))
// // console.log(num)

// let nums =[1,2,3,4,5]

// // let newNumb= nums.reduce((Accc,arr)=>Accc+arr,)
// // console.log("newNumb",newNumb)
// let acc ={}
// //  acc['apple'] =1
//  console.log(acc['apple'])

// let nums = [1,2,3,4,5,6]

// const newNums = nums.reduce((acc,array)=>{
//     return acc + array

// })

// console.log(newNums)

// let alphabet  = ["a","b","c","d","e","a","b","c","a","b"]
// let acc={}
// const countalphbet =alphabet.reduce((acc,arr)=>{
//     acc[arr] = (acc[arr] || 0) +1
    
// },{})
// console.log(alphabet)
// let info ={name:"ritesh",age:3}
// // Object.freeze(info)
// Object.seal(info)
// info.name="krishna"
// delete info.name;
// console.log("info",info)

// const info = {
//      data:function infoGether(){
//         console.log("You caling prototyple inheritance")
//     }
// }

// const infoCaling = Object.create(info)

// infoCaling.name="krishna"

// infoCaling.data()
// console.log(infoCaling.name)

// const parent ={
//     data:function callme(){
//         console.log("this is parents function")
//     }
// }

// const prototypal = Object.create(parent)

// prototypal.data()

// function info(name){
//     this.name= name
// }


// info.prototype.sayhello=function(){
//     console.log(`hi i am calling from ${this.name} `)
// }

// const person = new info("parents")
// person.sayhello()

// const a = ["apple","banana","greps"]

// let ac=a[0]
// console.log(ac)
// const voter = new Promise ((resolve,reject)=>{
//     let age = 1
//     if(age  >=8){
//         resolve("yes you can allow to votter point ")
//     }
    

// });
// voter
//   .then(function(mesaage){
//              console.log(mesaage)
//   })
//   .catch(function(error){
//     console.log(error)
//   })

// const numbers = [1,2,3,4,5]
// // let largest2 = numbers.reduce((max, num) => num > max ? num : max);
// // console.log(largest2);
// let questions = numbers.reduce((acc, curr)=>{
//      return acc>curr
// });
// console.log(questions)

//  How to given  largest nyumber
// const numbers = [1,2,3,4,5]

// let largest = numbers[0]

// for(newarrr of numbers){
//   if(largest < numbers ){
//     largest =numbers
//   }
// }

// console.log("largest value this is")


// const numbers =[2,3,1,2,4,2,42]
// let largest =0
// let min_num =numbers[0]
// for(aryNum of numbers){
//     if(largest < aryNum){
//       largest =aryNum
//     }
//      if(min_num > aryNum){
//       min_num =aryNum
//     }
// }

// console.log("largest",largest)
// console.log("min",min_num)

// const number = [1,2,3,4,5]
// const reverse =[];
// for(let i= number.length-1; i>=0; i--){
//       reverse.push(number[i])
// }
// // console.log(reverse)

// const a = 20
// {
//   // let b = 30
//   console.log("inside the block",a)
// }
// console.log("outside the func",a)

// var  a= 10

// function addd(){
//   var a=20
//   console.log("inside the function",a)
// }

// addd()
// // console.log("outside the variabe",a)

// console.log("5" +1)

// false ? console.log("shreee"):console.log("Ram")

// for (let i=1 ; i<=10; i++){
//   console.log("jay shree krishna", i)
// 

// let i=1
// while(i<=15){
//   if(i % 2==1){
//    console.log("RADHA---This is Odd number",i)
//   }
//    i++
// }
// let sum =0
// for(let i=1; i<=100; i++){
//    sum = sum +i
  
// }

// console.log("sum",sum)

// let countThree =0
// let countFive=0
// for(let i =1 ; i<=100; i++){
//     if (i % 3 ==0 && i % 5 ==0){
//       countThree ++
//       console.log("SHree radha",i)
       
//     }
  
// // }
// console.log("count5",countFive)
// console.log("count3",countThree)


// for(i=1; i<101; i++){
//   if(i%7==0){
//     console.log("this is 7 multiple division",i)
//     break;
//   }
//   console.log("I",i)
// }


// for(i=1 ; i<=20; i++){
//     if(i%3==0){
//       continue;
//     }
//     console.log('I',i)
// }
// let obbNumber =0
// for(i =1; i<=100; i++){
//     if(i % 2 ==1){
//        obbNumber ++
//        console.log("1",i)
//        if (obbNumber ==5){
//         break;
//        }
//     }
// //   }

//  let add=( v1=10, v2=20,d)=>{
//       return v1+v2;
//   }
//   const result = add()
//   console.log(result)
//   // const add = function(V1=10,v2=20){
//   //   return V1 +v2
//   // }
  // console.log(result)


  // function  newfunc(val){
  //    return val();
  // }

  // newfunc(function(){
  //    console.log("Jay shree ram")
  // })


  // let arr =[3,4,5,4,100,3,3,4,1,2]
  // let nrew= arr.sort(function(a,b){
  //    return b-a
  // })
  // console.log(nrew)


//   let  my= [1,3,4,5,3,2,3,3]
// let mereprbhu=my.map(function(data){
//      console.log("jay shree krishna",data)
// })

// console.log("mereprbhu",mereprbhu)
// console.log("my",my)

// let arr = [1,3,4,5,6,7,]


// let findout = arr.find(function(val){
//         if(val==5) return true
// })
// console.log("findout",findout)

//  const newArr= arr.reduce(function(acc,curr){
//    return acc+curr
// },0)
// console.log("arr",arr)
// let newarr = arr.filter(function(val){
//     if(val > 5) return true
// })
// let newarr =arr.map(function(val){
//    return val*val
// })
// console.log("newArr",newArr)
// // let newArray = arr.filter(function(val){
//     if(val %2 ==1) return false
// })
// console.log("newarr",newArray)

// let fruits = ["apple","banana","greps"]
// // console.log(fruits[1])
// fruits.push("Mango")
// fruits.unshift("Pineapple")
// fruits[2]= "Kiwi"
// console.log("fu",fruits)


// const myInfo = {
//      name:"ritesh singh",
//      age:24,
//      Mobile_num:9644045048,
//      familyInfos :{
//           father : "Jagdish sing soner"
  
//      }
// }

// myInfo["designation"] ="backend Engineer"

// console.log(myInfo.familyInfo?.father)


// {
//   var a=1;
//   let b=2;
//   const c=3
// }

// console.log(a,b,c)


// let number = [1,2,3,4,5]
// // console.log(number.length)
// let reverse =[]
// for(i=4; i>=0; i--){
//      reverse.push(number[i])
// }

// console.log(reverse)



// function calles(){
//    let  name ="Good morning"
//    return function(){
//      console.log(`Hello ${name}`)
//    }
// }

// const result = calles()
// result()
// console.log(null + 1);    
// console.log(typeof []);
//  console.log(typeof null);
//  console.log(typeof 123n);

//  console.log(5 === "5"); 
// add()
// let add =function(){
//   console.log("shree nath")

// }
// console.log(parseInt("abx"))


// function  add(){
//     counter=0
//     function move(){
//       counter ++
//       return counter
//     }
//     return move
// }

// const result = add()
// console.log(result())
// console.log(result())
// console.log(result())


// setTimeout(function add (){
//   console.log("jay shree ram")

// },3000) 


// console.log("Jay shree radha")
// // // name()

// const data = new Promise((resolve,reject)=>{
//     let success = false;
//     if(success){
//       resolve("successfull run")

//     }
//     else{
//        reject("this is not run")
//     }
// })

// data()
//     .then(function(resolve){
//       console.log(resolve)
//     })
//   .catch(function(reject){
//     console.log(reject)
//   })


// const data = function help(){
//   return "hel"
// }
// let Questionsdata =data()
// console.log(Questionsdata)


// function fechdata(){
//    return new Promise(function(resolve){
//      setTimeout(()=>{
//         resolve("Jay shree radha")
//      },4000)
//    })
// }

// async function asco(){
//   try{
//      console.log("fitst log")
//      const data =  fechdata()
//      console.log(data)
//      console.log("mere karna arjun aayenge")
//   }
//   catch(error) {
//      console.log("shree")
//   }
// }
// asco()


let number = [1,3,4,5,5]

