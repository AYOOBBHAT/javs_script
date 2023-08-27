// A regular function that takes two arguments
// function add(x, y) {
//     return x + y;
//   }
  
//   // Curried version of the 'add' function
//   function curryAdd(x) {
//     return function(y) {
//       return x + y;
//     };
//   }
  
//   const add5 = curryAdd(5); // Partial application
//   console.log(add5(3)); // Outputs 8
  

  // example

//   function sum(a,b,c){
//     return a+b+c;

    
//   }
//   console .log(sum(2,3,5));



// function sum (a){
//     return function (b){
//         return function (c){
//             return a+b+c;
// };
//     };
// }
// console.log(sum(1)(23)(4));




function evalvate(operation){
    return function(a){
        return function(b){
            if (operation=="sum")return a+b;
            else if(operation=="multiply")return a*b;
            else if(operation=="divide")return a/b;
            else if(operation=="subtract")return a-b;
            else return "invalid operation";
                
            
        }
    }
}

 console.log(evalvate("multiply")(2)(3));



 function updateElemenText(id){
    return function(content){
        document.querySelector("#"+id).textContent=content;
    };
 }

 const updateHeader=updateElemenText("HEADING");
updateHeader("subscribe");