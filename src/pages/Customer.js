import React from 'react'
import './Customer.css'

function customer() {
  return (
    <>
      <div className='customer-body'>
        <div className='customer-content'>
          <h1 id='review'>Customer Reviews</h1>

          <div className='customer-reviews'>
            <h3 id='review-1'> Muhammad Umar </h3>
            <p id='r-para'>Best family trip ever!! My siblings and I had so much fun exploring Misgar and Hunza. We had never stayed with locals before and it was a memorable experience. The local food we ate, especially the local bread and yak burger were simply amazing. Travel Inc had something new planned for us every day. And the best part was the organizers let us kids be kids.</p>
          </div>

          <div className='customer-reviews'>
            <h3 id='review-1'> Fraz Mirza </h3>
            <p id='r-para'> My parents were a little skeptical about taking me on my first trekking trip, that too to Patundas, Top but the Travel Inc team gave them the confidence that it was a good idea. And they were right!! The itinerary was well thought of considering it was my first time, and the facilities were great! I advise every first timer to go with them!</p>
          </div>

          <div className='customer-reviews'>
            <h3 id='review-1'> Ali Raza </h3>
            <p id='r-para'>I am a Pakistani residing in the US and often visit Pakistan in the summer. This year I wanted to show my family the treasures of my country and someone suggested Travel Inc. To be honest the organizers went an extra mile to ensure that my family and I had a safe and enjoyable experience. Great care was taken regarding our food and accommodation considering our immunity. The pace was relaxed according to our requirements and we had a memorable experience. True value for money!</p>
          </div>

          <div className='customer-reviews'>
            <h3 id='review-1'> Bilal Hassan </h3>
            <p id='r-para'>We have just returned from a Thailand Holiday booked through Travel Inc. The holiday was perfect and everything went according to schedule as booked. We were a little apprehensive because after booking and prior to departure there was little to no contact from Travel Inc, despite my phone calls and emails. However, it all went smoothly our flights, transfers and accomodation was exactly as we expected. I would not hesitate to book another holiday through Travel Inc, but maybe a little more reassuring contact would be appreciated prior to departure. If there was a problem and I needed to change or cancel, I am not sure how I would have done this.</p>
          </div>


        </div>
        <div className='divider-div'>
          <hr></hr>
        </div>



        <div className='customer-content-2'>

          <div className='customer-heading'><h1>Tell Us About Your Experience</h1></div>

          <form>

            <label id='r-label'>Name: </label>
            <input type="text" id="r-name" placeholder="Your name.."></input>
            <br></br>
            <br></br>

            <label id='r-label'>Email :</label>
            <input type="text" id="r-email" placeholder="Your email address.."></input>
            <br></br>
            <br></br>

            <label id='r-rate'>Ratings:</label>
            <select id='r-rating'>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <br></br>
            <br></br>

            <label id='r-label'>Message:</label>
            <input id="r-message" placeholder="Write something about your experience.."></input>
            <br></br>
            <br></br>

            <input id='r-submit' type="submit" value="Submit"></input>
          </form>

        </div>
      </div>

    </>
  )
}

export default customer