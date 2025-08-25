// largest of number -------->
// let arr =[1,2,3,4,5,6]
// largest =[0]
// secound= [0]
// third =[0]
// for(let i=0; i<arr.length;i++){
//     if (largest<arr[i]){
//         third = secound
//         secound = largest
//         largest = arr[i]

//     }
// }
// console.log(largest)
// console.log(secound)
// console.log(third)


// factorial number
// let num =5
// fact =1
// for(let i =1; i<=5;i++){
//     fact= fact * i
// }
// console.log(fact)


//prime and not prime

// function primechecker(num){
//     for (let i=2;i< num;i++){
//         if(i%2==0){
//         console.log("this is not prime number",i)
//         break;
//         }
//         else{
//             console.log("this is prime  number",i)
//         }

//     }
// }

// let check= parseInt(prompt("Enter your prime check number => " ))
// primechecker(check)


////FIXME -  Questions--->  match common  str

// let arr =["shree","shree_radha","shreeRam"]

// let a =arr[0]
// let b =arr[1]
// let c= arr[2]
// commonStr =""
// for(i=0;i<=a.length;i++){
//     if(a[i]==b[i] && a[i] == c[i]){
//         commonStr = commonStr + a[i]
//     }
//     else{
//         break;
//     }

// }
// console.log(commonStr)

//FIXME - check charecer  match ---->

// let names =['chair',"chair"]
// let a = names[0]
// let b = names[1]
// let c = a===b
// console.log('a: ', a);
// console.log('b: ', b);
// console.log("c",c)


// //FIXME - Factorial of a number
// let a=4
// let my = 1
// for(i=1; i<= a; i++){
    //     my =my*i
    // }
    // console.log(my)
    
 //strong number------>means - 145 ---> 1*1+1*2*3*4+1*2*3*4*5

//  let number ='146'
//  strongNumber =0
//  console.log(typeof(number))
//  for(i=0; i< number.length; i++){
//      let numbers =number[i]
//      fact =1
//      for(j=1;j<=numbers;j++){
//          fact =fact * j
        
         
//         }

//         strongNumber =strongNumber +fact
        
        
//     }
    
//     console.log('strongNumber: ', strongNumber);
// if( strongNumber == number){
//     console.log("this is  strong number")
// }
// else{
//     console.log("this not strong number")
// }
// strongNumber =
// for(let=)

//FIXME - 
// let names = "RCB jitegi ky"
// let splitcount = names.split(" ")
// // console.log('splitcount: ', splitcount);
// // console.log(splitcount.length)
// const reversestring = [ ]
// for(i=2 ; i >=0; i--){
//     //   console.log(splitcount[i])
//     reversestring.push(splitcount[i])
// }
// console.log('reversestring: ', reversestring);

// FIXME -  please find is sum of 0\
// let checkk =[1m3]

// let sumof =[]
// for(i=0; i< numbers.length;i++){
    
//     for(j=0;j< numbers.length; j++){
    //         if (numbers[i]  + numbers[j] ==0){
        //             sumof.push(numbers[i])
        //         }
        //     }
        
        // }
        // console.log('sumof: ', sumof);
        
        
        function checksumZero(num){
       for (i=0;i < num.length;i++){
          for(j=0; j<num.length;j++){
            if(num[i]+num[j]==0){
                return num[i] + num[j]
            }
          }
       }

        }
        
let numbers =[1,2,3,4,5,6,7,8,-4]
const letscheck= checksumZero(numbers)
console.log('letscheck: ', letscheck);
