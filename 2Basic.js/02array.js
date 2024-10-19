const numberCount = [1,2,3,4,5];
const stringCount =["one","two","Three","four","five"]

// const Marge = numberCount.push(stringCount);
// console.log(numberCount);
// console.log(numberCount[5][4]);

// NOTE push hame sirf ek  array me  dusra aarray put krke deta ya marge karke deta hain jo glt a
// TODO if agr hame ek hi arrya me dura aarry put ya marge karna hain to hum concate ka use kr sakte hainn

//SECTION  CONCAT yeh hame ek new array deta hain

// const Newarray = numberCount.concat(stringCount);
// console.log(Newarray);//yeh hame new array provide krta hain
//NOTE esse achha hame jo jyda use hota hai bo spread ka use kiya jata hain

//!SECTION  Spread 


// const Newarray = [...numberCount,...stringCount];
// console.log(Newarray);

//NOTE Agar array  ke andar array ho to or phir hame un arrray ko ek kran hain to hum flate ka use krate hain

const anotherArray = [1,2,3,["ram","KRishna"],["jays shree ram"]]
const changing = anotherArray.flat(Infinity)//eske andr hume dena pdega ki kitni depth tak dena hain hum abi to infinity dete hain 
// console.log(changing);


//NOTE - Agr hume koi data db ya scrape se kahi se aara to bo agr string ya object me ho agr use array me convert  krna hai to hum from ka= use  krte hauin
//SECTION -  Fromc
//string to convert array 
// const stringFrom = "hare krishna";
// const converArrayFrom =Array.from(stringFrom)
// console.log(' converArrayFrom: ',  converArrayFrom);

//STUB - Ky me object ko vi change kr sakte ho array me Chalo dekhte haim

const myIntro = { Name:"ritesh_rajput", "Age":24};
const covertArray = Array.from(myIntro);
const covertArraykey = Array.from(myIntro);
console.log(covertArray);//empty aaya but why how to possible;
//so what will to do?
// for this hum key btana hoga;
const covertArrayKey = Object.values(myIntro);
console.log('covertArrayKey: ', covertArrayKey);

//mujhe agr in sb ko aaraay me conver krana  he to me of ka  use kr skta hu
const score1 =264;
const score2 =552;
const score3= 525;

const convertAll=Array.of(score1,score2,score3);
console.log(convertAll);
console.log(typeof convertAll);
