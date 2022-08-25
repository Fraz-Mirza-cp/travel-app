import React from 'react'
import './Contact.css'
function contact() {
  return (
    <div className="contact-body">

      <div className='contact-div'>

        <div className='contact-main'>
          <h2 id='contact-info'>Contact Information</h2>
          <div>
            <h3 id='info-details'>Ground floor, 19-K, Commercial Area, Phase1,DHA, Lahore </h3>
          </div>

          <div>
            <h3 id='info-details'> 03111100369 || 03234851087</h3>
          </div>

          <div>
            <h3 id='info-details'> tours@travelinc.pk  </h3>
          </div>

          <div>
            <h3 id='info-details'> Monday-Saturday 11:00 AM to 7:00 PM</h3>
          </div>
        </div>

        <div className='middle-div'></div>

        <div className='contact-content'>
          <h2 id='question'>Have any question?</h2>

          <div class="question-container">

            <form>
              <label>Name: </label>
              <input type="text" id="name" placeholder="Your name.."></input>
              <br></br>
              <br></br>

              <label>Email Address:</label>
              <input type="text" id="name" placeholder="Your email address.."></input>
              <br></br>
              <br></br>

              <label>Subject:</label>
              <input type="text" id="subject" placeholder="Subject of your email"></input>
              <br></br>
              <br></br>

              <label>Message:</label>
              <input id="message" placeholder="Write something.."></input>
              <br></br>
              <br></br>

              <input id='submit' type="submit" value="Submit"></input>
            </form>

          </div>
        </div>
      </div >
    </div>
  )
}

export default contact