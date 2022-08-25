import React from 'react'
import './Umrah.css'
import umrahpic from "../pages/umrah-1.jpeg"
import umrahpic2 from "../pages/umrahpic2.jpeg"
import umrahpic3 from "../pages/umrahpic3.jpeg"
import madina from "../pages/madina.jpeg"

function umrah() {
  return (
    <>
      <div className="umrah-container">

        <img src={madina} alt='umrah package' id='madina'></img>

      </div>

      <div className="umrah-main">

        <div className="umrah-content">
          <img src={umrahpic} alt='Umrah packages' id='umrah-packages-img'></img>
          <a href="tel:03111100369" id='umrah-btn-call'>Click to book your trip</a>
        </div>

        <div className="umrah-content">
          <img src={umrahpic3} alt='umrah packages' id='umrah-packages-img'></img>
          <a href="tel:03111100369" id='umrah-btn-call'>Click to book your trip</a>
        </div>

        <div className="umrah-content">
          <img src={umrahpic2} alt='umrah packages' id='umrah-packages-img'></img>
          <a href="tel:03111100369" id='umrah-btn-call'>Click to book your trip</a>
        </div>


      </div>
    </>
  )
}

export default umrah