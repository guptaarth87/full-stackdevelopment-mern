import React from 'react'

export default function MapFunction() {
    const list_of_student =[
        {
        "name":"arth",
        "age":21,
        },
        {
        "name":"Tushar",
        "age":20
        },
        {
        "name":"Dishika",
        "age":21
        },
        {
            "name":"Shikha",
            "age":20
        }
        ]
  return (
    <>
    {/* <h1>Name of this student is - Arth</h1>
    <h2>Age of student is - 21</h2>
    <hr></hr>
    <h1>Name of this student is - Tushar</h1>
    <h2>Age of student is - 21</h2>
    <hr></hr>
    <h1>Name of this student is - Dishika</h1>
    <h2>Age of student is - 20</h2> */}
    {
           list_of_student.map((item,key)=>{
            return(
            <>
                <h1>Name of this student is - {item.name}</h1>
                <h2>Age of student is - {item.age}</h2>
                <hr></hr> 
            </>
            )
        })
    }
  
    </>
  )
}
