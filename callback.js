
// pass data b/w functions
function getValue(callback) {
    // Get the value of the variable.
  
    callback(value);
  }
  
  getValue(function(value) {
    // Do something with the value.
  });


 // Here is an example of how a callback function
 // can be used to handle an asynchronous event:



  function handleClick(event) {
    // Do something in response to the user's click.
  }
  
  document.getElementById("button").addEventListener("click", handleClick);