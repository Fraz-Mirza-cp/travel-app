import React from 'react'
import './Home.css'
import umrah from './umrah.jpeg';
import hajj from './hajj.jpeg';
import flight from './flight.jpeg';

function Home() {
  return (
    <>
      <div className="home-body">

        <div className='home-div'>
          <div className='home-content'>
            <figure>
              <a href='http://localhost:3000/Umrah'>
                <img src={umrah} alt='Umrah packages' id='home-img'></img></a>
              <figcaption> <h3>UMRAH PACKAGES</h3></figcaption>
            </figure>
          </div>

          <div className='home-content'>
            <figure>
              <a href='http://localhost:3000/Hajj'>
                <img src={hajj} alt='Hajj packages' id='home-img'></img></a>
              <figcaption> <h3>HAJJ PACKAGES</h3></figcaption>
            </figure>
          </div>

          <div className='home-content'>
            <figure>
              <a href='http://localhost:3000/Travel'>
                <img src={flight} alt='Travel Packages' id='home-img'></img></a>
              <figcaption><h3>TRAVEL PACKAGES</h3></figcaption>
            </figure>
          </div>
        </div>

        <div className='home-div-2'>
        </div>
      </div>



    </>
  )
}

export default Home