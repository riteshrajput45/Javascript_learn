//array---> 

const myArray = [1,2,3,4,5,6,7,8,9,10,"hanumanji",null,true]
// console.log(myArray);
////i want with Index 


// console.log(myArray[10])

// myArray.push("krishna");
// console.log(myArray);



// agr hame start  me add krna hain to
//unshift ka use krte hain
// myArray.unshift("shree ganesh")
// console.log(myArray);

//NOTE Agr hame koi qestions puvchna hain bo hain ya nhi to hum includes ka use krte hain

//includes

const Checkarray =myArray.includes(100);
console.log(Checkarray);

//NOTE -  conver to secound array in String

const Newarray =  myArray.join();
console.log(typeof Newarray); 

//NOTE - Slice or Splice me deferent 

const  Slicearray = myArray.slice(1,3)
console.log("A",Slicearray);
const  Splicearray = myArray.splice(1,3) 
console.log("B",Splicearray);