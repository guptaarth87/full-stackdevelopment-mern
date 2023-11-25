import React from 'react'
import './SectionOne.css';
import MedicalCare from '../../Assets/medical_care.svg';

export default function SectionOne() {
  return (
    <>
      
      <div class="starter-section">
         <div class="row m-4 p-4">
            <div class="col-lg-5 col-sm-12">
                <div class="starter_text mt-4">
                   <h2>Health Buddy</h2>
                   <br></br>
                   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, cumque earum? Modi, consequuntur excepturi a neque nam recusandae molestias aut repudiandae laboriosam. Quae eaque, impedit tenetur repellat fugiat, voluptatibus ipsa consectetur laboriosam deserunt iusto minima.</p>
                   <br></br>
                   <button class="btn button-background font1-5">Our services <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                  </svg></button>
                </div>
            </div>
            <div class="col-lg-1"></div>
            <img class="col-lg-5 col-sm-12"  src={MedicalCare} />
            
         </div>
      </div>
    </>
  )
}
