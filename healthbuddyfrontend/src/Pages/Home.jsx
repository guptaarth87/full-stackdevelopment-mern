import React from 'react'
import SectionOne from '../Components/SectionOne/SectionOne'
import OurExperts from '../Components/OurExpers/OurExperts'
import OurServices from '../Components/OurServices/OurServices'
import Faq from '../Components/Faqs/Faq'

export default function Home() {
  return (
   <>
   <div className='container'>
     <SectionOne/>
     <OurExperts/>
     <OurServices/>
     <Faq/>
     </div>
   </>
  )
}
