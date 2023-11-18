import React from 'react'

export default function FunctionalComponent() {
    //space to write javascript


    const name_ = "functional component";

    const handleClick = () =>{
        alert("button clicked");
    }

  return (
    <>
       <h1>Hello from functional component my name is {name_}</h1>
       <button onClick={handleClick}>Click me</button>
       <button onClick={()=>{alert("button clicked");}}>Click me</button>
    </>
  )
}
