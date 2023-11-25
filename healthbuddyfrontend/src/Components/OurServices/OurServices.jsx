import React from 'react'
import Anxiety from '../../Assets/anxiety.jpg';
import Bipolar from '../../Assets/bipolar.jpg';
import Dementia from '../../Assets/dementia.jpg';
import Depression from '../../Assets/depression.jpg';
import Neuro from '../../Assets/neuro.jpg';
import Obesity from '../../Assets/obesity.jpg';
import Relationship from '../../Assets/relationship.jpg';
import Schezo from '../../Assets/schizophrenia.jpg';
import Teenage from '../../Assets/teenage issue.jpg'
import Ptsd from '../../Assets/ptsd.jpg';

export default function OurServices() {
  return (
    <>
         {/* <!-- our services --> */}
         <div class="mt-5  p-5" style={{"background-color": "#e3f2fd;"}} id="ourservices">
          <h2 class="centreAlign mt-5" style={{"color": "black;"}}>Our Services</h2>
   
          <div class="row parent_service_div" >
   
           {/* <!-- card1 --> */}
   
           <div class="card m-2  col-lg-2 col-md-3 col-sm-4"  >
             <img src={Anxiety} class="card-img-top" alt="anxiety" />
             <div class="card-body">
               <h5 class="card-title mt-1"> <strong>Anxiety/Stress</strong></h5>
               <a href="#" class="btn button-background responsive_button mt-4"> Consult Now</a>
             </div>
           </div>
   
           {/* <!-- card2 --> */}
   
           <div class="card m-2  col-lg-2  col-md-3 col-sm-4">
             <img src={Depression} class="card-img-top" alt="anxiety" />
             <div class="card-body">
               <h5 class="card-title mt-1"> <strong>depression</strong></h5>
               <a href="#" class="btn button-background responsive_button mt-5"> Consult Now</a>
             </div>
           </div>
   
           {/* <!-- card3 --> */}
           
           <div class="card  m-2   col-lg-2  col-md-3 col-sm-4" >
             <img src={Obesity} class="card-img-top" alt="anxiety" />
             <div class="card-body">
               <h5 class="card-title mt-0"> <strong>Eating Disorder</strong></h5>
               <a href="#" class="btn button-background responsive_button mt-4"> Consult Now</a>
             </div>
           </div>
   
           {/* <!-- card4 --> */}
   
           <div class="card m-2  col-lg-2  col-md-3 col-sm-4">
             <img src={Bipolar} class="card-img-top" alt="anxiety" />
             <div class="card-body">
               <h5 class="card-title mt-2"> <strong>Bipolar Disorder</strong></h5>
               <a href="#" class="btn button-background responsive_button mt-4"> Consult Now</a>
             </div>
           </div>
   
           {/* <!-- card5 --> */}
           <div class="card m-2  col-lg-2  col-md-3 col-sm-4" >
             <img src={Relationship} class="card-img-top" alt="anxiety" />
             <div class="card-body">
               <h5 class="card-title mt-4 relationship"> <strong>Relationship Issue</strong></h5>
               <a href="#" class="btn button-background responsive_button mt-4"> Consult Now</a>
             </div>
           </div>
           <div class="col-1"></div>
   
           {/* <!-- card6 --> */}
   
           <div class="card m-2   col-lg-2  col-md-3 col-sm-4"  >
             <img src={Teenage}  class="card-img-top" alt="anxiety" />
             <div class="card-body">
               <h5 class="card-title mt-1"> <strong>Teenage issue</strong></h5>
               <a href="#" class="btn button-background responsive_button mt-4"> Consult Now</a>
             </div>
           </div>
   
           {/* <!-- card7 --> */}
   
           <div class="card m-2  col-lg-2  col-md-3 col-sm-4">
             <img src={Dementia} class="card-img-top" alt="anxiety" />
             <div class="card-body">
               <h5 class="card-title mt-1"> <strong>Dementia</strong></h5>
               <a href="#" class="btn button-background responsive_button mt-5"> Consult Now</a>
             </div>
           </div>
   
           {/* <!-- card8 --> */}
           
           <div class="card m-2  col-lg-2  col-md-3 col-sm-4" >
             <img src={Neuro} class="card-img-top" alt="anxiety" />
             <div class="card-body">
               <h5 class="card-title mt-1 neuro" > <strong>Neuro development disorder</strong></h5>
               <a href="#" class="btn button-background responsive_button mt-3"> Consult Now</a>
             </div>
           </div>
   
           {/* <!-- card9 --> */}
   
           <div class="card m-2  col-lg-2  col-md-3 col-sm-4">
             <img src={Ptsd} class="card-img-top" alt="anxiety" />
             <div class="card-body">
               <h5 class="card-title mt-2 ptsd" > <strong>Post Traumatic stress disorder (PTSD)</strong></h5>
               <a href="#" class="btn button-background responsive_button mt-4"> Consult Now</a>
             </div>
           </div>
   
           {/* <!-- card10 --> */}
           <div class="card m-2  col-lg-2  col-md-3 col-sm-4" >
             <img src={Schezo} class="card-img-top" alt="anxiety" />
             <div class="card-body">
               <h5 class="card-title mt-1"> <strong>Schizophrenia</strong></h5>
               <a href="#" class="btn button-background responsive_button mt-4"> Consult Now</a>
             </div>
           </div>
           <div class="col-1"></div>
              
          </div>
         </div>
    </>
  )
}
