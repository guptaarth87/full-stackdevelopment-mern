// console.log("working fine status 200")

// functions

// Functions are the peace of code which help us to work a specific type of task
// it help us to write clean code and help us to achieve modularity

// let name_="arth";
// print("Hello",name_);

//1. create a function
//2. calling of function

//function key word in starting
// name of function

//types of function
//1 parameterized function
//2 unparameterized function


//example of unparameterized function
// function addToNumbers (){
//     //block of function
//     let a= 10;
//     let b= 20;
//     console.log(a+ b);
// }

// addToNumbers();

//example of parameterized function

function addToNumbers_ (x , y){
   
    console.log(x + y);
    
    let a = 25;
    console.log(a);
    console.log(a);
}

 
var a= 10;
let b= 20;
addToNumbers_(a , b);

// you cannot acces variable before the initialization

console.log("_________fat_arrow_function_syntax__________");
const multToNums_ = () =>{
    console.log(10*20);
}

//parameterized
const multToNums = (x , y) =>{
    console.log(x*y);
}

let m =20;
let n = 10;
multToNums(m,n);


// function add(x,y){
//     console.log(`sum is ${x + y}`);
// }

// function mult(x,y){
//     console.log(`multiply is ${x * y}`);
// }

// function calcultate(x,y){
//         add(x,y);
//         mult(x,y);
// }

// let x = 25;
// // let y = prompt("Enter a number : ",10);

// calcultate(x,y);


//Array
//1. 2d datastruction 
//2. which helps us to store homogeneous type of data 
//3. its length is dynamic in nature

//syntax => [] , comma separated values

let arr = [10,20,30,40];
console.log(arr);

// array methods
arr.push(50);
console.log(arr);

arr.pop();
console.log(arr);


arr.pop(50);
console.log(arr);

console.log(arr.length);

console.log(arr.indexOf(10));

//accessing of elements
console.log(arr);
// [10,20,30]
console.log(arr[2]); //-> 30

console.log(arr[1])
//slicing

arr.push(40,50,60);

console.log(arr);

console.log(arr.slice(1,4));  //-> end index element is not going to print


// nested array = [1 , 2 , 3 , [ 4, 2]]
//accessing 4

let arr2 = [1 , 2 , 3 , [ 4, 2]]
console.log(arr2[3][0]);

//arr2[3] = [4,2]
//arr2[3][0] = 4

let name_ = "tushar"
console.log(name_[0]);

//Assignment

//Learn about looping in array
// lets suppose we have an array named vegetables
let vegetables = ["potato", "tomato", "brinjal", "cabage"];
//task
//1. iterate over the array and print every single element
// output
// potato
// Tomato
// brinjal
// cabage

// 2. print capital letters of every vegetable

