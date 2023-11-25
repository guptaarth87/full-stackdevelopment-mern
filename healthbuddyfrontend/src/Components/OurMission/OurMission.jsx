import React from 'react'
import Ourmission from '../../Assets/about_us.svg';

export default function OurMission() {
  return (
   <>
     <h2 class="centreAlign mt-4">Our mission</h2>
        <div class="row">
            <div class="col-lg-5 col-sm-12">
                <p class="description"><strong>Lorem ipsum dolor sit </strong>,amet consectetur adipisicing elit. Cumque, quaerat aliquid? Itaque, mollitia beatae neque corrupti id officiis earum praesentium.<br></br><br></br> <span class="highlight">Laborum vitae</span> iure dicta, tempora molestiae quis nobis enim culpa.Lorem ipsum dolor sit.</p>
            
             </div>
             
              <div class="col-1"></div>
              <img class="col-lg-5 col-sm-12 about_sec_img" src={Ourmission} />
            
            
        </div>
   </>
  )
}
