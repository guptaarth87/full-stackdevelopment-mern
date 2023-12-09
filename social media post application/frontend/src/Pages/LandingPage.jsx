import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';
import {Link} from 'react-router-dom';
import API_URL from '../Config';


export default function LandingPage() {
    

    const { register, handleSubmit } = useForm();
    const [data, setData] = useState("");
    const [postsData, setPostsData]= useState([]);
   
    useEffect(() => {
    if (data.search_text) {
        axios.get(`${API_URL}/getPosts/${data.search_text}`)
          .then(result => {
            console.log(result.data.posts);
            setPostsData(result.data.posts);
          })
          .catch(error => {
            console.error("Error fetching data:", error);
          });
      } else {
        axios.get(`${API_URL}/getPosts/None`)
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
                <input className="col-lg-2 col-md-3 col-sm-5 form-control "  placeholder="search text here"
                 {...register("search_text")}
                />
            </div>   
            {/*  */}
         
            <button class="col-lg-2 col-md-4 col-sm-4 btn background-clr m-2"  onClick={handleSubmit((data) => setData(data))} >Search</button>
           
            <button class="col-lg-2 col-md-4 col-sm-4 btn background-clr m-2"  >+ Add post</button>
            <Link class="col-lg-2 col-md-4 col-sm-4 btn background-clr m-2" to='/yourprofile' >Go to your profile</Link>
        </div>
       
      </div>


{/* posts section */}
<div class="container card_pos">
            <div class="row ">

{
    postsData.map((items,key)=>{
        return(
           
                <div class="card p-4 m-2 col-lg-5 col-md-5 col-sm-12 ">
                    <div class="row">     
                        <div class="col-lg-7 cardfooter">     
                               @{items.username}
                        </div>
                        <div class="col-5 cardfooter">
                              {items.post_date_time.slice(0,10)}
                        </div>   
                        <br></br>
                        <br></br>
                    <div class="title">
                       {items.post_title}
                    </div>
                    <br></br>
                    <div class="description">
                        {items.post_description}
                    </div>
                    <br></br>
                    <div class="hashtags">
                         {items.post_tags.map((item,keys)=>{
                              return(
                                   <>
                                   {`#${item}    `}
                                   </>
                              ) 
                         })}
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
