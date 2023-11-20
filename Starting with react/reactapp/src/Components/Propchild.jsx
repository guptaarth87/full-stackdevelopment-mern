import React from 'react'

export default function Propchild(props) {
  return (
   <>
    <hr></hr>
       <h1>This is a prop child </h1>
       {/* <h2>{props.data}</h2>
       <h3>{props.age}</h3>
       <h3>{props.std}</h3> */}
       <h2>{props.data.name}</h2>
   </>
  )
}
