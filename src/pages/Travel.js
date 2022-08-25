import React from 'react'
import './Travel.css'
import turkey from "../pages/turkey.jpeg"
import dubai from "../pages/dubai.jpeg"
import malaysia from "../pages/malaysia.jpeg"
import azerbaijan from "../pages/azer.jpeg"
import maldives from "../pages/maldives.jpeg"
import turkey2 from "../pages/turkey2.jpeg"
import beach from "../pages/beach.jpeg"

function travel() {
  return (
    <>
      <div className="travel-container">

        <img src={beach} alt='Dubai package' id='beach'></img>

      </div>

      <div className="travel-main">

        <div className="travel-content">
          <img src={dubai} alt='Dubai package' id='travel-packages-img'></img>
          <br></br>
          <br></br>
          <br></br>
          <a href="tel:03111100369" id='travel-btn'>Click to book your trip</a>
        </div>

        <div className="travel-content">
          <img src={turkey} alt='Turkey package' id='travel-packages-img'></img>
          <br></br>
          <br></br>
          <br></br>
          <a href="tel:03111100369" id='travel-btn'>Click to book your trip</a>
        </div>

        <div className="travel-content">
          <img src={malaysia} alt='Malaysia package' id='travel-packages-img'></img>
          <br></br>
          <br></br>
          <br></br>
          <a href="tel:03111100369" id='travel-btn'>Click to book your trip</a>
        </div>

      </div>

      <div className="travel-main-2">

        <div className="travel-content">
          <img src={azerbaijan} alt='Dubai package' id='travel-packages-img'></img>
          <br></br>
          <br></br>
          <br></br>
          <a href="tel:03111100369" id='travel-btn'>Click to book your trip</a>
        </div>

        <div className="travel-content">
          <img src={maldives} alt='Turkey package' id='travel-packages-img'></img>
          <br></br>
          <br></br>
          <br></br>
          <a href="tel:03111100369" id='travel-btn'>Click to book your trip</a>
        </div>

        <div className="travel-content">
          <img src={turkey2} alt='Malaysia package' id='travel-packages-img'></img>
          <br></br>
          <br></br>
          <br></br>
          <a href="tel:03111100369" id='travel-btn'>Click to book your trip</a>
        </div>

      </div >
    </>

  )
}


export default travel