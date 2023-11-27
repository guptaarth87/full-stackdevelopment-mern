import React from 'react'
import ClassComponent from '../Components/ClassComponent';
import FunctionalComponent from '../Components/FunctionalComponent';
import './LandingPage.css';
import MapFunction from './MapFunction';
import UsingAxios from './UsingAxios';

export default function LandingPage() {
  return (
    <>
    <h1 className='background_style'>This is a landing page</h1>
      {/* <ClassComponent/> */}
      {/* <ClassComponent/> */}
      {/* <FunctionalComponent/> */}
      {/* <MapFunction/> */}
      <UsingAxios/>
    </>
  )
}
