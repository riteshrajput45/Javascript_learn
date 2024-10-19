//object litrals ;

const { ConnectionStates } = require("mongoose")
const myFull=  Symbol()
const myIntro ={
    Name:"ritesh_rajput",
    myFull:"ritesh_soner",
    age:23,
    email:"mrritesh@045.com"
}
console.log(myIntro.Name);
console.log(myIntro["Name"]);
console.log(myIntro[myFull])

//i want change  my email ya any other details
myIntro.email ="mriretsh045$.gmailcom";
console.log(myIntro);
//then mujhe ab nhi bdkan to mne feeeze ka use krunga