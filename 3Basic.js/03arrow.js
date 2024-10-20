//SECTION -  /* *********************** THIS **********************************SECTION//

//yeh keyword currect contacts ko dikhata hain;

// const  youtubeUser ={
//      user_name :"ritesh",
//      age:45,
//      welcomeMessage:function(){
//         console.log( `${this.user_name},welecome to youtube`)
//      }
    
// }
// youtubeUser.welcomeMessage();
// youtubeUser.user_name="kaka"
// youtubeUser.welcomeMessage();
//TODO - yeh eksliye kyuki humne hard code nhi kiya tha  >>> this cureent value  ki bat krta hain

//NOTE browser ke andr jo object hain bo window object hota hain

// function milk(){
//     console.log(this);
// }
// milk()

//bht sara window object print hoker aata ;

const milk =()=>{
    console.log(this);
}

milk()
//this is  run but printed only empaty object 