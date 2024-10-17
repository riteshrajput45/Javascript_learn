const  StiringValue = "HareRama";
const StiringValue2 ="HareKrisna";
// console.log(StiringValue+StiringValue2); this type is very  old 
// console.log(`c  ${ StringValue2 }   Hare Hare`);

console.log(` ${StiringValue2 } ${StiringValue2 } Hare hare  ${StiringValue}  ${StiringValue}  Hare hare`);

console.log(StiringValue.length);
console.log(StiringValue[0]);
console.log(StiringValue.charAt(2))
console.log(StiringValue.indexOf('r'))

// substring  hame kaha se leke kaha tk value chaiye bo hme yha se le  skte hain
const subsValue  ="Krishna"
const CheckValue = subsValue.substring(1,4);
console.log(CheckValue);

// slice -> eska use bhi hum value  string ki value ko jaha se leke bha tk kiya jata hain
const sliceValue ="krishna";
const check = sliceValue.slice(-4,6);
console.log(check);

// Trim -> yeh space ko delete karne le liye use hota hain 
const SpaceValue = "  ram     ji  ";
const checkspace = SpaceValue.trim();
console.log(checkspace);

// Split ->  
const SplitValue  = "hare ram"
const checlSplit = SpaceValue.split("-");
console.log(checlSplit);