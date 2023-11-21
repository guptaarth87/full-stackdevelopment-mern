import React,{useState , useEffect} from 'react'

export default function UseEffectFetch() {

const [data , setData] = useState({name:'',email:''});
const [userId , setUserId] = useState(1);

useEffect(()=>{
   fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
   .then(response=>response.json())
   .then(finalResult=>setData(finalResult))
},[userId])

console.log(data);

  return (
   <>
   <h1>Use effect fetch</h1>
   <h3>Current username - {data.name}</h3>
   <h3>Current username - {data.email}</h3>
   <button onClick={()=>{setUserId(userId+1)}}>Change user Id</button>
   </>
  )
}
