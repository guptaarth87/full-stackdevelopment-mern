import React from 'react'
import Joinus from '../../Assets/join_us.svg'
import './HowToJoin.css'

export default function HowToJoin() {
  return (
    <>
     <h2 class="centreAlign mt-4">How to join us</h2>
        <div class="row">
            <img class="col-lg-5 col-sm-12 about_sec_img" src={Joinus} />
            <div class="col-1"></div>
            <div class="col-lg-5 col-sm-12 ">
                <p class="description"><strong>Lorem ipsum dolor sit </strong>,amet consectetur adipisicing elit. Cumque, quaerat aliquid? Itaque, mollitia beatae neque corrupti id officiis earum praesentium.<br></br><br></br> <span class="highlight">Laborum vitae</span> iure dicta, tempora molestiae quis nobis enim culpa.Lorem ipsum dolor sit.
                   <br></br> <button class="btn button-background m-2">Join our community</button> 
                </p>
            
            </div>
            </div>
           
    </>
  )
}
