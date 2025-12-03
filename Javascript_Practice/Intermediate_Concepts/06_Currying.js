//Non currying function;

function example(a,b,c){
    return console.log(a+b+c);
}

example(2,3,4)
//9


// Currying function:

function currying(a){
    return function (b){
        return function(c){
            return a+b+c;
        }
    }
}
console.log(currying(2)(3)(4))

//9


// Currying:
// Instead of taking all arguments in function -
//  currying helps in taking one argument at a time and reutrns a new function which takes another arguments as second and returns a new fucntion with takes 3rd argument etc 
//  until all arguments are completed

// Why? 

// Checks methods that you got everything you need before you proccessed.
// avoids passing same argument again and again
// readablity and smaller functions and less chances of errors.

//Realtime examples in projects for currying

// <button onClick={handleClick(id)}>Edit</button>

// function handleClick(id) {
//   return function() {
//     console.log("Clicked:", id);
//   };
// }

