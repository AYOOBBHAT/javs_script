const number =[1,2,34,5];
const multiply= number.map((nums)=>nums*2);

const divide =number.map((currValue,i,number)=>{console.log(currValue/2)}
);
console.log(multiply);

// create new array by applying a given fn to each element;

// for each vs map?
//for each does not return new arr;
//map returns new arr;