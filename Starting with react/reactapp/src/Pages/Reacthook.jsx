import React,{useState} from 'react'

//import useState

export default function Reacthook() {
   
   const [age , setAge] =useState(21);
   const [price , setPrice] = useState(10);

   const [datax , setDatax ] = useState({
        age_ : 21,
        price_ : 10
   })

  const handleIncrease = ()=>{
       var newAge = age+1;
       setAge(newAge);
  }

  const handleDecrease = ()=>{
     setAge(age-1);
  }

  const handlePrice = ()=>{
    var newPrice = price+10;
    console.log(newPrice);
   //  setDatax({ ...datax, [datax.price_]: newPrice });
    setPrice(price+10);
  }

  return (
   <>
      <h1>my age is - {age}</h1>
      <h1>price of maggie is  {price}</h1>
      <button onClick={handlePrice}>Increase price</button>
      <button onClick={handleIncrease}>Increase age</button>
      <br></br><br></br>
      <button onClick={handleDecrease}>Decrease age</button>

   </>
  )
}
