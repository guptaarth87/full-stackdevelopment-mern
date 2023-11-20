import React from 'react'
import Propchild from '../Components/Propchild'

export default function Propfile() {
    const sampletext = "sample data text blaah blaah";
    const sampleage = 25;
    const keyvaluedata = {"name":"arth gupta"};
  return (
    <>
    <h1>This is a prop file</h1>
       {/* <Propchild data={sampletext}  age={sampleage} std={8}/> */}
       {/* <Propchild data={{"name":"arth gupta"}} /> */}
       <Propchild data={keyvaluedata} />
    </>
  )
}

