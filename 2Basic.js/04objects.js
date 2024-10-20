const instaUser ={
    name:"Ritesh Rajput",
    fullname :{
         fullname:"ritesh_soner"
    },
    email:"mrriteshrajput045@gmail.com",
}
// console.log(instaUser.fullname.fullname)

const fbUser = {
    name :"Love Rajput",
    fullname:{
        fullname:"ritesh Rajput",

    },
    email:"loverajput045gmail.com"



}
//agr hum dono  object ko combine kare to  ky kare 
// console.log(instaUser,fbUser)

//esse to ek object ke andr ek object aa rha hain 
//NOTE hume to dono ko combine karke ek objecct ke liye assign ka use krenge ;

// const Marging = Object.assign(fbUser,instaUser)
// console.log('Marging : ', Marging );
s
//NOTE me marging ke liye spread oprator ka use krunga jisse aasini se marge ho jayyega (.....)

const obj1 = {a:1,b:2};
const obj2 ={c:3,d:4}

const Spread = {...fbUser,...instaUser}
const Spread2 = {...obj1,...obj2}
// console.log('Spread2: ', Spread2);
// console.log('Spread: ', Spread);


// NOTE ARRAY KE SATH OBJECT KA CONSEPT ;


const myArrayObj = [
    {
        userName:"ritesh_soner",
        Address:"Bawdiya",
    },
    {
        userName:"rahul_soner",
        Address:"Bawdiya",
    },
    {
        userName:"additay_soner",
        Address:"Bawdiya",
    },
    {
        userName:"ravi_soner",
        Address:"Bawdiya",
    }
]
// console.log(myArrayObj[0].userName)

//Mujhe agr Sari  keys nikalna hain too me object.keys ka use krunga
console.log(myArrayObj)
console.log(Object.keys(myArrayObj ))



//agar hame find krna koi bhi property to hum esme (hasOwnpropety)ka use krenge ye answer true  or false me kregi 

console.log(myArrayObj.hasOwnProperty('Address'))    

//SECTION   Object D structure 

const course ={
       cousre_name: "js.learn in hindi",
       paid:999,
       user_name: "ritesh"
}

const {user_name:Name} = course;
console.log('user_name: ', user_name);
