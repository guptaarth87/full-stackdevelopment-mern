import React from 'react'
import axios from 'axios';

export default function UsingAxios() {

    //axios post request
    const URL = "https://jsonplaceholder.typicode.com/posts";
    const handleAxiosPost=()=>{
       
        const sampledata = {
            userId: 11,
            id: 101,
            title: "sample data",
            body: "sample data body"
            }

        axios.post(URL, sampledata)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    const handleAxiosGet=()=>{

        axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(response=>console.log(response.data));
    }

  return (
    <>
       <button className="btn btn-success m-4" onClick={handleAxiosPost}>click me to add</button>
       <button className="btn btn-success m-4" onClick={handleAxiosGet}>click me to get</button>
       
    </>
  )
}
