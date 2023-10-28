console.log("hello world!");
console.log("mern stack is best for app dev");
// alert("hello its an allert");

var name_ = "Tushar"
// console.log(`my name is ${name_}`);
// alert(`my name is ${name_}`);

//taking input from user
                  //question     , default answer
// let name_ = prompt("Enter your name :", "")
// let age_ = prompt("Enter your age :", 19)


// alert(`my name is ${name_} and my age is ${age_}`);

// alert(` logged   in successfully ${name_}! `)

// -> operators
// + , - , * , / , %   arithmatic operators , % -> returns remainder 
       //-> returns either a float or a integer value
   
//  comparision operators
// < , > , <= , >= , ==    returns a boolean value like true or false

// <= -> either it should be less or equal to
// >= -> either it should be greater or equal to
// == -> if both are equal it will return true else false

// learn difference between assignment operator "=" and a comparision operator "=="

//NaN 

// conditional statement 

// if , else
// if ,else if,
// if ,else if ,else

// var color_of_apple = prompt("enter color of apple");

// if (color_of_apple == "red")
// {
//     alert("Apple is of good quality");
// }
// else if (color_of_apple == "green")
// {
//     alert("This is a green apple");
// }
// else if (color_of_apple == "black")
// {
//     alert("apple is rotten");
// }
// else{
//     alert("please enter right color");
// }


// var color_of_apple = prompt("enter color of apple");

// if (color_of_apple == "green"){
//     alert("This is a green apple");
// }
// if (1==1){
//     alert("user entered a choice");
// }

// var age = prompt("enter your age");

// if (age >= 18){
//     alert("yess you can vote");
// }else{
//     alert("you must be of 18 or grater than 18 to vote");
// }

// ternary operator -> used only when we have one condition to check in terms of true false

// var age = prompt("enter your age");

// (age >=18) ?       // check this condition
// alert("yess you can vote")    // run this if condition is true
// :
// alert("you must be of 18 or grater than 18 to vote");  //run this if condition is false

//-> Looping

// alert("hello, world!");
// alert("hello, world!");
// alert("hello, world!");
// alert("hello, world!");
// alert("hello, world!");

//-> for looping
      //let i=0 -> initialize a variable with any starting value
      // i<5 -> declare a condition
      //i++ -> mention the step value

      // i = i+2  -> firstly calculate the arithmatic operation of right hand side
                    //then update the value of i
    
    // a better way to achieve this can be by doing i+=2

// for (let i = 0; i<6 ; i=i+2){
//     console.log("hello, world!");
    
// }

//table of 2
// for (let i=2 ; i<21 ; i=i+2){
//     console.log(i);
// }

// for (let i=1 ; i<31; i++){
    
//     if (i%5==0){
//         console.log(i);
//     }else{
//         console.log("not divisible");
//     }
// }

// print prime numbers assignment

// for looping we need 3 conditions to ensure
//1-> initialization of variable
//2-> declare a condition
//3-> mention step value

// for (let i=0; i>0; i++){
//     // console.log("hello");
// }

//-> while loop

// let i = 0;
// while (i<5){
//     console.log("hello world");
//     i++;
// }



// for (let i=0; i<5; i++){
//     console.log("hello world");
// }

//Assignment -> use while loop to print table of 2
               // use while loop to print prime numbers

// do while loop

let i=1;
while (i<51){
    if (i%6==0){
        console.log(`${i} is divisible by 6`);
    }
    else if(i%5==0){
        console.log(`${i} is divisible by 5`);
    }
    else{
        console.log(`${i} is neither divisible by 6 nor 5`);
    }

    i++
}