let Score = 264;


console.log(typeof   Score)

let convertValue = String(Score);
console.log(typeof convertValue);

//"33"=>33
// "33abd"=>Nan
// true=>1; false =>0

let login = ""
let login2 = "rladsa"

let converBoleen =Boolean(login2)
let converBoleen2 =Boolean(login)

console.log(converBoleen);
console.log(converBoleen2);

let numver =33
console.log(typeof numver)

const converstringNumver = String(numver);
console.log( typeof converstringNumver);




// *****************************operations******************//

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);//power work
// console.log(2%2);//reminder work
// console.log(2/2);

let str1 = "ram";
let str2 ="sita"


console.log(2+1+"1"+2+2);
console.log(1+2+"3");

console.log(+true) //1
console.log(+"");//0

// pri fix and Post fix 
//priii fix me value pahle  add ho jati hain
//pro fix me value  bad me add ho ti hain

// example
let  value1 = 100;
// let valu2 = (++value1); // prii fix
let valu2 = (value1++); //pro fix
console.log(valu2);
//you can read priifix and profix  tc39.es/ecma262