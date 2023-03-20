function myCallback() {
  console.log('Callback called');
}

function receivesAFunction(callback) {
  console.log('Function received');
  callback();
}

receivesAFunction(myCallback); 

function returnsANamedFunction() {
  return function myNamedFunction() {
    console.log('Hello, I am a named function!');
  };
}


function returnsAnAnonymousFunction() {
  return function() {
    console.log('Hello, I am an anonymous function!');
  };
}

const myFunction = returnsAnAnonymousFunction();
myFunction(); 
