//Object destructuring

var library ={
    'book_name' : 'science ncert',
    'book_price':'110',
    'subject':  'science'
    }
    
    /* var { book_price , book_name} = library; */
    
    var {book_price} =  {
    'book_name' : 'science ncert',
    'book_price':'110',
    'subject':  'science'
    }
    console.log(book_price)

    
const numbers = [10, 20 , 30 ,23, 43 ,45]

const [ a1 ,  a2 ,a3 ,a4,  ...rest] = numbers;

console.log(rest)
console.log(...rest)

//Asynchronous behaviour 
/* 
const url = `https://jsonplaceholder.typicode.com/posts?userId=3`

const data_ = fetch(url)
 */
// fetch is a functuion in javascript used to make get request
//get request

//Achieving asynchronous behaviour
//type of function //function name = (<parameter>) =>{ <code>}
/* const fetchData = async ()=>{
    const url = `https://jsonplaceholder.typicode.com/posts?userId=3`
    const data_ =await fetch(`https://jsonplaceholder.typicode.com/posts?userId=3`)
    console.log(data_)
}

result = fetchData()
console.log(result) */
  
  //use of async await
/* const getData = async (url) => {
  const response = await fetch(url)
  const json = await response.json()
  console.log(json)
  return json
  
} */
/* 
const url = `https://jsonplaceholder.typicode.com/posts?userId=3`
const res = getData(url)

//using .then     
               //variable
fetch(url)
.then(result =>{
    result.json()
    .then(result1 =>{
         console.log(result1)
     })
}) */



//database
const st = [
    {
      'name':"a1"
    },
    {
       'name':"a2"
    }
    ]
    
    //api //functions or operatioon over data is carried out by api
    //api= application programming interface
    // CRUD
    //1	-> create    post request
    //2 -> read      Get request
    //3 -> update    Put request
    //4 -> delete    delete request
    
    
    
    console.log(st)
    
    
      