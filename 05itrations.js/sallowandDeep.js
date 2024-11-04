//SECTION -  sallow and deeep;
// const myArray =["ram","sita","lakhan"]
// const instaUser={
//       userName:"Ritesh",
//       age:25
// }

// const hacker = instaUser;

// console.log(instaUser);
// console.log(hacker);// but this is reference given not copy
//bydefult errro

// hacker.userName ="ritesh Rajput"
// console.log(instaUser);
// console.log(hacker);

// console.log('newArray: ', newArray);
// console.log(myArray);
///if  hum actual copy bhi kar sakte hain 

// const hacker ={...instaUser}//esak hum copy ke liye karte hain ye acutal me ek object hota hain
// console.log(' hacker: ',  hacker);
// hacker.userName="krishna"
// console.log(' hacker: ',  hacker);
// console.log(instaUser);

//nested Object

// const user = {
//      useName: "ritesh",
//      age:25,
//      social:{
//         facebook:{
//             userFbName:"Mr_Ritesh",
//             password:"964404556"
//         },
//         instagram:{
//             userInsName:"iamRitesh",
//             password:8545454

//         }
//      }
// }

// console.log(user);
// const meHacker =user;
// console.log('meHacker: ', meHacker);
//NOTE  both copy 

//FIXME - Investigation if changing kri to

// user.social.facebook.userFbName=26555;
// console.log(user);
// const meHacker ={...user};
// console.log('meHacker: ', meHacker);


//NOTE esme hum top level ka badl kr hum access kar payenge but nested se nhi kr payenge

// console.log(instaUser)
// const myprob= {...instaUser}
// myprob.userName ="ram"
// console.log(instaUser)
// console.log('myprob: ', myprob);
//shollow copy me ab sirf top level ka access kar payenge but hum nested ka  nhi


//REVIEW -    shallow copy hota hain jav aap object ko copy kr rhe ho  with Object.assign and Object.spread  through  in dono ke cases me  top  level ki probs ho  jati but not  nested ,nested me reference pass kr deti hain 

//NOTE Exact copy  karne ke jo hum top level or nested  me se copy krke deg

const myArray =["ram","sita","lakhan"]
const instaUser={
      userName:"Ritesh",
      age:25
}

const check = JSON.stringify(instaUser)//String me convert krne ke liye kiya  jata hain 
console.log('check : ', check );
const check2 = JSON.parse(check)//string to original object me convert ke  liye jata 
console.log('check2: ', check2);

//We are use in this  Method because we deep copy top and nested objecct 

// const user = {
//      useName: "ritesh",
//      age:25,
//      social:{
//         facebook:{
//             userFbName:"Mr_Ritesh",
//             password:"964404556"
//         },
//         instagram:{
//             userInsName:"iamRitesh",
//             password:8545454

//         }
//      }
// }

// const obj = JSON.parse(JSON.stringify(user))
// obj.social.facebook.userFbName="ramji"
// console.log("obj", obj)
// console.log(user)



//FIXME -  Investigation object in function


const user = {
     useName: "ritesh",
     age:25,
     social:function(){
         console.log("<<<<")
         console.log("<<<<")
     }
     ()
     
}
console.log(user);