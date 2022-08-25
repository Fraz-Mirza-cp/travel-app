import React from 'react'
import './Hajj.css'
import makkah from "../pages/makkah.jpeg"
import madina from "../pages/madina.jpeg"

function hajj() {
  return (

    <>
      <div className="hajj-container">
        <img src={madina} alt='Hajj package' id='hajj'></img>
      </div>

      <div className="hajj-main">
        <div className="hajj-content">
          <img src={makkah} alt='Hajj packages' id='hajj-packages-img'></img>
          <br></br>
          <br></br>
          <br></br>
          <a href="tel:03111100369" id='hajj-btn-call'>Click to book your trip</a>
        </div>
      </div>
    </>
  )
}

export default hajj