//module pattern 
// The module pattern is a design pattern used in JavaScript to create 
// private variables and methods. 

function createModule() {
    var privateVariable = "Hello world";
  
    function privateMethod() {
      console.log(privateVariable);
    }
  
    return {
      publicMethod: function() {
        privateMethod();
      }
    };
  }
  
  var myModule = createModule();
  myModule.publicMethod(); // logs "Hello world"