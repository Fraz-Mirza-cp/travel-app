import React from 'react'
import './About.css'
import about from './about2.jpeg';

function About() {
  return (
    <div className="about-main">
      <img src={about} alt='About' id='about-img'></img>
      <div className="about-heading">
        <h2 id='about-head'>ABOUT US</h2>
        <h4 id='about-paragraph'>
          Travel Incorporated effectively monitor your travelers pre-trip, and throughout their journey.  Travel Incorporated provides a complete suite of Duty of Care tools to monitor upcoming trips to potential high risk regions, delivers alerts and notifications to travelers potentially impacted by disruption, and track travelers globally.</h4>
      </div>
    </div>
  )
}
export default About