//declaration / defination of function
function printHello(){
    //peace of code will execute on calling of function
    console.log("hello");
}

//parameterized function

/* function print(a , b){
  console.log("hello ${a}");
  console.log(`hello ${a}`);
  console.log(`my age is ${b}`);
} */

     //a         b
/* print("dishika" , 20); */
/* printHello();
printHello();
printHello(); */


//filter method

let arr = [25, 22 , 21 , 19 , 7 ,8 , 10 , 12]

console.log(arr[5]);

//Task is to filter out the values greater than 18

//for first iteration
     //greaterThan18(25 , 0 ,[25, 22 , 21 , 19 , 7 ,8 , 10 , 12] )
//for second iteration
      //greaterThan18(22 , 1 ,[25, 22 , 21 , 19 , 7 ,8 , 10 , 12] )
function greaterThan18(value , index , array){
       console.log(`current value : ${value}`);
       console.log(`current index : ${index}`);
       console.log(array);
       console.log("____________");
       return value>18
}

//filter method 
           //   arr.filter(<name of function>)
let above18 = arr.filter(greaterThan18)

console.log(above18)


//objects
/* names = [ "A" , "B" , "C" , "D"];
marks = [ 9 , 8, 7 ,5 ];
age = [12 , 13 , 12 , 11];

// give me all the details of student A 

let name_ = prompt("enter the name of student" , "")
            //<name of array>.indexOf(<element of array>)
let index_ = names.indexOf(name_) //->0
console.log(` marks of student : ${marks[index_]}`);
console.log(` age of student : ${age[index_]}`);
 */
//Effecient way to achieve the same thing

//javascript object

let studentA = {
    "name" : "A",
    "marks":9,
    "age": 12
}

console.log(studentA.name);
console.log(studentA.marks);


//nested object

let student_details = {
  "A": {"marks":9,"age": 12 },
  "B": {"marks" : 8 ,"age":11},
  "C": {"marks": 7, "age":12}
}

/* let name_ = prompt("enter the name of student" , "") */

console.log(student_details.A.marks);
console.log(student_details.A.age);

//Array of objects

let students = [
   {
   "name":"A",
   "marks":9,
   "age": 12
   },
   {
   "name":"B",
   "marks":8,
   "age": 11
   },
   {
   "name":"c",
   "marks":7,
   "age": 12
   },
]

/* let len_ = students.length;
console.log(`length of array : ${len_}`);

for (let i=0 ; i< len_ ; i++){
 console.log(students[i]);
 //condition
 if (students[i].name == "A"){
      console.log(`marks of A : ${students[i].marks}`);
 }
 console.log("___________________");
} */

//filter element

function marksAbove7(value , index , array){
  return value.marks>7
}

let reduced_array = students.filter(marksAbove7)

console.log(reduced_array)










