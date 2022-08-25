import React from 'react'
import './Footer.css'
import logo from './logo.jpeg'
import logo1 from './fb.jpeg'
import logo2 from './ins.jpeg'
import logo3 from './twitter.jpeg'

function Footer() {
  return (
    <>
      <div className="footer-body">

        <div className="footer-container">
          <div className="footer-logo">
            <a href='https://travelinc.pk'>
              <img src={logo} alt="Travel Inc" className="logo-web" />
            </a>
          </div>

          <div className="footer-social">
            <a href="https://facebook.com/travelinc.pk?igshid=YmMyMTA2M2Y=">
              <img src={logo1} alt="Facebook" className="logo-social" />
            </a>

            <a href="https://instagram.com/travelinc.pk?igshid=YmMyMTA2M2Y=">
              <img src={logo2} alt="Instagram" className="logo-social" />
            </a>

            <a href="https://twitter.com/travelinc.pk?igshid=YmMyMTA2M2Y=">
              <img src={logo3} alt="Twitter" className="logo-social" />
            </a>
          </div>

          <div className="contact-direction">
            <h1>Contact Information:</h1>
            <p>
              Call us: 03111100369 <br></br><br></br> Address: Ground floor, 19-K, Commercial Area, Phase1,DHA, Lahore <br></br><br></br> Email: tours@travelinc.pk
            </p>
          </div>

        </div>


        <div> <hr></hr></div>

        <div className="footer-bottom">
          <p id='copyright'>Copyright ® 2022 CloudPacer Pvt(Ltd).All rights reserved.</p>
        </div>
      </div>
    </>
  )
}

export default Footer
