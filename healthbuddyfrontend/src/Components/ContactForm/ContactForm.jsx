import React from 'react'
import Contact from '../../Assets/contact.svg'

export default function ContactForm() {
  return (
    <>
        <div class="background-shadow-3d  m-4 p-4">
            <div class="row">
                <img class="col-lg-5" src={Contact} />
                
                {/* form  */}
                <div class="col-lg-6">
                <div class="row g-3">
                    <div class="col-md-12">
                      <label for="inputEmail4" class="form-label">Email</label>
                      <input type="email" class="form-control" id="inputEmail4" />
                    </div>
                    <div class="col-md-12">
                      <label for="fullname" class="form-label">Full name</label>
                      <input type="text" class="form-control" id="inputFullname" />
                    </div>
                    <div class="col-12">
                      <label for="inputAddress" class="form-label">Phone Number</label>
                      <input type="text" class="form-control" id="inputPhonenumber" />
                    </div>
                    <div class="col-12">
                      <label for="inputservice" class="form-label">Select service</label>
                      <select id="inputState" class="form-select">
                        
                        <option>Anxiety/stress</option>
                        <option>Eating disorder</option>
                        <option>Bipolar disorder</option>
                        <option>Relationship issues</option>
                        <option>Teenage issues</option>
                        <option>Neoro development disorder</option>
                        <option>schizophrenia</option>
                        <option>Depression</option>
                        <option>Dementia</option>
                        <option>PTSD</option>

                      </select>
                    </div>
                    <div class="col-md-4">
                        <label for="inputAge" class="form-label">Age</label>
                        <input type="number" class="form-control" id="inputAge" />
                      </div>
                    <div class="col-md-6">
                      <label for="inputCity" class="form-label">City</label>
                      <input type="text" class="form-control" id="inputCity" />
                    </div>
                  
                    <div class="col-md-2">
                      <label for="inputZip" class="form-label">Zip</label>
                      <input type="text" class="form-control" id="inputZip"/> 
                    </div>
                    <div class="col-12">
                        <button type="submit" class="btn button-background">Register</button>
                      </div>
                    </div>
                  
                  </div>
                </div>
            </div>
       
    </>
  )
}
