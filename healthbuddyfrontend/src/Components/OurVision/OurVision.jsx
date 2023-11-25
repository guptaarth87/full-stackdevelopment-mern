import React from 'react'
import Ourvision from '../../Assets/our_vision.svg'

export default function OurVision() {
  return (
    <>
      <h2 class="centreAlign mt-4">Our vision</h2>
        <div class="row">
           
            <img class="col-lg-5 col-sm-12 about_sec_img" src={Ourvision} />
    
            <div class="col-1"></div>
            <div class="col-lg-5 col-sm-12 ">
                <p class="description"><strong>Lorem ipsum dolor sit </strong>,amet consectetur adipisicing elit. Cumque, quaerat aliquid? Itaque, mollitia beatae neque corrupti id officiis earum praesentium.<br></br><br></br> <span class="highlight">Laborum vitae</span> iure dicta, tempora molestiae quis nobis enim culpa.Lorem ipsum dolor sit.</p>
             </div>
        </div>
               
    </>
  )
}
