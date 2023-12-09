import React from 'react'
import Header from '../Components/Header/Header'
import Footer from '../Components/Footer/Footer'
import { useState, useEffect } from "react";
import API_URL from '../Config';
import axios from 'axios';

export default function YourProfile() {
    const [data, setData] = useState("");
    const [postsData, setPostsData]= useState([]);
    const UserName= "user8"
   
    useEffect(() => {
   
        axios.get(`${API_URL}/getPostByUser/${UserName}`)
          .then(result => {
            console.log(result.data.posts);
            setPostsData(result.data.posts);
          })
          .catch(error => {
            console.error("Error fetching data:", error);
          });
     
      
    }, []);

    const handleDelete=(_id)=>{
           console.log(_id);
           axios.delete(`${API_URL}/deletePost/${_id}`).then(result => {
            console.log(result.data.post);
            window.location.reload();
          })
          .catch(error => {
            console.error("Error fetching data:", error);
          });
    }

  return (
    <>
    <Header/>
    
    <div className="container">
     <div className='heading'>@{UserName}</div>
    </div>
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
                        <div class="col-lg-5 col-sm-10 cardfooter">
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
                    <div className="row">
                        <button className="btn btn-danger col-5 m-2" onClick={()=>{handleDelete(items._id)}}>Delete post</button>
                        <button className="btn btn-secondary col-5 m-2">Edit post</button>
                    </div>
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
