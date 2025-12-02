// call apply bind solves the unique problem.
// They allow you to changes the owner of function. which arguments never do.

// Objects have functions inside them called Methods.

// General case.

const user = {
    name : "poorna",
   greet(){
    console.log("Hi " + this.name);
   }
}
user.greet();

// if you call user.greet() -> works Hi poorna

//The real problem in JS is function is not in object.

function wish(){
    console.log("Hello," + this.name);
}

const user1 = {name:"Poorna chary"};
const user2 = {name: "charan"};

// can wish method work for these both objects? YES!!!
//  BY BROWWING function.

wish.call(user1); //Hello,Poorna chary
wish.call(user2); //Hello,charan

// Defination: call, apply, bind allows you to borrow the function and decides which object should be "this" inside function.
//Let's check call apply bind in depth.

// common function:
function interview(name, position){
console.log("Hi", name, this.age, "applying for", position);
}

const dev1 = {age:24};
const dev2 = {age:35};

// We need to use the common function and apply dev 1 and dev 2 ages along with arguments.

//Call(): -> calls immediately.

// syntax: function.call(this.arg, arg1, arg2)
//calls the function immediately and passes the arguments one by one.

interview.call(dev1, "Poorna", "FrontendRole");
interview.call(dev2, "charan", "BackendRole");

// Hi Poorna 24 applying for FrontendRole
// Hi charan 35 applying for BackendRole
//TRICK: call() -> comma ,


//apply():
//calls immediately, passes arguments as array.

// syntax: function.apply(this.Arg,[arg1, arg2])

interview.apply(dev1, ["Rakesh", ".Net role"]);
interview.apply(dev2, ["praveen",'snowflake']);


// Hi Rakesh 24 applying for .Net role
// Hi praveen 35 applying for snowflake

//Trick: apply=> array

//bind():
// Dont call now, create a new function

// syntax: const newFunc = function.bind(this.arg, arg1, arg2..)
// Doesnot call immediaely but retunrs a new funciton.

const interviewnewfunc = interview.bind(dev1, 'sanju');
interviewnewfunc("UI/UX role");

//Trick : bind = build;
// Hi sanju 24 applying for UI/UX role

