import React,{useEffect , useState} from 'react'

export default function UseEffecthook() {
//use of useEffect hook ->
// when we want any function to run at the time of loading of page or on the change of any 
//state or component we uses useEffect

const [age , setAge] = useState(21);
const [price , setPrice] = useState(10);

useEffect(()=>{
    //code will run on the load of page
    console.log("use effect called");
    console.log(`Current age is - ${age}`);
},[price])

  return (
   <>
   <h1>Use effect hook</h1>
   <button onClick={()=>{setAge(age+1)}}>ChangeAge</button>
   <button onClick={()=>{setPrice(price+10)}}>ChangePrice</button>
   </>
  )
}
