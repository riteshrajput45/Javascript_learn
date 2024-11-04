//NOTE    off   looop // this loop is special in array

// const user =[ ,,,1,,2,3,12,2,
//     //   name:"ram",
//     //   age:25
// ]

// for(let num of user){
//     console.log(num)
// }

// const  greeting = "Good Morning";
// for(let greet of  greeting ){
//     if(greet==' '){
//         continue
//     }
//     console.log(`ritesh ji ${greet}`)
// }

// SECTION  Map is Object this is holding key value paire duplocate value not allow always giving uniqe value 

// const map = new Map();
// map.set('IN',"India") 
// map.set('IN',"India") 
// map.set('IN',"India") 
// map.set('IN',"India") 
// map.set('USA',"United states of America") 
// map.set('FR',"FRance") 

// console.log(map);//uniqe value

//loop lagayenge to array me aajaye
// for (let num of map){
//     console.log(num);
// }
// for (let num of map){
//     console.log(num);
// }

//key value
// for (let [num,value] of map){
//     console.log(num  ,"=", value)
// }

//Object   esme loop lagane ke liye off nhi chalega esme In lgega

const user ={
    Name:"ritesh",
    age:23
}

// for(let [key,value]of user){
//     console.log(key,value);
// }  user is not ittrebal


// for(let key in user){
//     console.log(`only for key  ${key},and value is ${user[key]}`)
// }

// we can see to this in loop work on areay  or not

const array  = ["ram","shree","sita"]

// for(let key in array ){
//     console.log(key); //value indfx me aayegi for in
//     console.log(array[key]); //to hum esa krte hain index ka use kr lete hain
// }


///////NOTE for in  ka use hum map pr krte  

// const map = new Map();
// map.set('IN',"India") 
// map.set('IN',"India") 
// map.set('IN',"India") 
// map.set('IN',"India") 
// map.set('USA',"United states of America") 
// map.set('FR',"FRance") 

// for(let key in map){
//     console.log(key);//kuch anwwer show nhi hoga  because map is not ittreble
// }

//

//SECTION -  FOREACH



const mySena =["vishal","prashant","Ritesh"]
//forEach me hme callBack ka use krna pdega or callBack write karne ke liye  function ka  name nhi dalte hain;
// const UsingForeach = mySena.forEach( function(give){
//             console.log(give);
// })

//forEach me function bnana hoga then call back rehta hain or call back me function ka name nhi hota hain
// esme hum arrow function ka use  kr skte hain

// mySena.forEach( (num)=>{
//       console.log(num)
// })

//TODO -  eske pass sari value ka access jata hain  essee huum(value ,index,arr ) also print  krba sakte hain

// mySena.forEach( (num,index,arr)=>{
//     console.log(num,index,arr);
// } )
//investigation ky hum object use kr skte hain ky

// user.forEach( (num)=>{
//       console.log(num)
// })

//NOTE array ke andar bht sare  object declear hote  hain

const myarryObj = [
      {user:"ritesh",
       password:12345
    },
      {user:"karan",
       password:12345
    },
      {user:"pritesh",
       password:12345
    }
]

myarryObj.forEach ( (item) =>{
    console.log(item.user);
      console.log(item.password);
} )