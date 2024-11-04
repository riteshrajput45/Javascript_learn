// NOTE  const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,
// );

// console.log(sumWithInitial);
// // Expected output: 10


const array =[1,2,3];


const myReduce =array.reduce ( (acc,cureent)=>{
       return acc+cureent;

},3)
// console.log(myReduce);

const cars = [
    { brand: "Toyota", price: 20080 },
    { brand: "Honda", price: 20150 },
    { brand: "Ford", price: 20050 },
    { brand: "BMW", price: 20200 }
  ];
  
const totalPrice = cars.reduce( (acc,item,)=> acc+ item.price,0)
console.log('totalPrice: ', totalPrice);//Arrow function

const normalFunction = cars.reduce( function(acc,current){
          return acc+ current.price
},0)
console.log(normalFunction);