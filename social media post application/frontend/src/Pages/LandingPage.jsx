import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';


export default function LandingPage() {
    const temp_array=[0,1,2,3,4,5,6];

    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    const [postsData, setPostsData]= useState([]);
   
    useEffect(() => {
    if (data.search_text) {
        axios.get(`http://localhost:1111/getPosts/${data.search_text}`)
          .then(result => {
            console.log(result.data.posts);
            setPostsData(result.data.posts);
          })
          .catch(error => {
            console.error("Error fetching data:", error);
          });
      } else {
        axios.get('http://localhost:1111/getPosts/None')
          .then(result => {
            console.log(result.data.posts);
            setPostsData(result.data.posts);
          })
          .catch(error => {
            console.error("Error fetching data:", error);
          });
      }
    }, [data]);
  
    if(data){
        console.log(data.search_text);
    }
  
  return (
    <>
       <Header/>
       {/* searchbar feature and buttons */}
       <br></br>
       <br></br>
       <div class="container">
        <div class="row ">
          
            <div class="col-lg-4 col-sm-6 m-2">
                <input class="col-lg-2 col-md-3 col-sm-5 form-control "  placeholder="search text here"
                 {...register("search_text")}
                />
            </div>   
         
            <button class="col-lg-2 col-md-4 col-sm-4 btn background-clr m-2" onClick={handleSubmit((data) => setData(data))}  >Search</button>
           
            <button class="col-lg-2 col-md-4 col-sm-4 btn background-clr m-2"  >+ Add post</button>
            <button class="col-lg-2 col-md-4 col-sm-4 btn background-clr m-2"  >Go to your profile</button>
        </div>
       
      </div>


{/* posts section */}
<div class="container card_pos">
            <div class="row ">

{
    temp_array.map((items,key)=>{
        return(
           
                <div class="card p-4 m-2 col-lg-5 col-md-5 col-sm-12 ">
                    <div class="row">     
                        <div class="col-lg-7 cardfooter">     
                               @arthgupta311@gmail
                        </div>
                        <div class="col-5 cardfooter">
                              03/01/2023
                        </div>   
                        <br></br>
                        <br></br>
                    <div class="title">
                       Lorem ipsum dolor sit amet consectetur.
                    </div>
                    <br></br>
                    <div class="description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi ad modi, numquam eum provident minima earum quas fugit. Esse ex neque quod dicta?
                    </div>
                    <br></br>
                    <div class="hashtags">
                         #food #travel #europe
                    </div>
                    <br></br>
                 </div>
            </div>
       
        )
    })
}

</div>
    </div>

          <br></br>  
          <br></br> 
       <Footer/>
    </>
  )
}
