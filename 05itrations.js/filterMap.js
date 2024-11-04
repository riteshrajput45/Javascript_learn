//Note 

const myarry = ["ram","lakhan","sitaJi"]

// const values = myarry.forEach((item)=>{
//        console.log(`this is my ${item}`)
//        return item
// })
// console.log(values);//forEach not anything return  // hey koi return nhi krta hain 

//NOTE - Filter - filter ke andar bhi hame callback use krna hota hain // then sath hi esme return kar kar skte  //but callback ke sath ek conditions bhi di jatii hain  //NOTE hum shortcurt sikhe agr ek line ho to agr perentethis ho to hme return karne ki jarurt nhi hoti and agr curlibraces lga rhe hain to hume return karne ki jarurt hoti  .. please confirm karne ke liye ek bar google kar lijiye  (i mean  scope  ka use krte hi aapko return krna pdega bhaisahb)

// const fnumValues =myNum.filter( function(myNum){
    //      return myNum%2==1
    // })
    // console.log(fnumValues);
    // const numValues =myNum.filter((myNum)=>myNum>4)
    // console.log(numValues);
    //REVIEW -  Agar ese hi jaise conditons likhi hain hme forEach me lgana ho to 
    //aaiye karte hain
    
    // const myFor =myNum.forEach((item)=>{
        
//      if(item>4){
    //         console.log(item)
    //      }
    
    // })this type you can do it
    
    const books = [
        { title: "Harry Potter and the Sorcerer's Stone", author: "J.K. Rowling" },
        { title: "The Hobbit", author: "J.R.R. Tolkien" },
        { title: "Harry Potter and the Chamber of Secrets", author: "J.K. Rowling" },
        { title: "1984", author: "George Orwell" }
    ];
    
    // const myBooks = books.filter( (my) =>my.author ==="J.K. Rowling")
    // console.log(myBooks);
    // const myBooks = books.filter( (my) =>my.author ==="J.K. Rowling")  // NOTE agr aapne scope {} open kiya hain to aapko retun likna hoga
    
    // const cars = [
        //     { brand: "Toyota", year: 2008 },
        //     { brand: "Honda", year: 2015 },
        //     { brand: "Ford", year: 2005 },
        //     { brand: "BMW", year: 2020 }
        //   ];
        
        // const myCar = cars.filter(  (mine) =>{
            //      return  mine.year >=2008
            // } )
            // console.log(myCar);
            
            
            //SECTION     //MAP 
            
            const students = [
                { name: "Alice", age: 17 },
                { name: "Bob", age: 19 },
                { name: "Charlie", age: 18 },
                { name: "David", age: 21 }
            ];
            
            const myStudents =students.map( (myCount)=> myCount.age+1 )
            //  console.log(myStudents);
            
            
            //We can use  filter map and  foreach
            
            // const myforEach = myNum.forEach(  (my)=> { console.log (my+1)})//return nhi krta or hame condition add krni pdti hain (if/else)


            // const myfilter = myNum.filter((num)=> num%2==0)//yeh automatic return karta hain he  or hme conditoon add krne ki jarurt nhi hoti hai  eska game hota hain true and  false 

            // console.log('myfilter: ', myfilter);
            
            
            // const  mymap = myNum.map( (num) =>{
            //     return num
            // } )
            // console.log( mymap);
            
            //!SECTION    CHAINING  if map nested to map we can use we can called is chaning
            
            // const myNum =[1,2,3,4,5,6,7,8,9,10]
            // const myChaining  = myNum.map( (num) => num *10 ).map( (num)=>(num+1) ).filter( (num)=> num >=50 );
            // console.log(myChaining);


    