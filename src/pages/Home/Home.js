import React from 'react'
import './Home.css'
import Product from '../../components/Product';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src='https://m.media-amazon.com/images/I/71tIrZqybrL._SX3000_.jpg' alt="" />


        <div className="home__row">
          <Product title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses" image="https://m.media-amazon.com/images/I/41Ag4WE7uyL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg" price={99.99} rating={5} />
          <Product title="BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround" image="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1000_.jpg" price={99.99} rating={4} />

        </div>
        <div className="home__row">
          <Product title="BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround" image="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1000_.jpg" price={99.99} rating={4} />
          <Product title="Apple 2021 MacBook Pro (14-inch, M1 Pro chip with 10‑core CPU and 16‑core GPU, 16GB RAM, 1TB SSD) - Space Gray" image="https://m.media-amazon.com/images/I/5161GqDC9vL._AC_SL1200_.jpg" price={1800.99} rating={5} />
          <Product title="BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic, LED Light, Bass Surround" image="https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_SL1000_.jpg" price={89.99} rating={3} />


        </div>
        <div className="home__row">
          <Product title="SAMSUNG 49 Odyssey Neo G9 G95NA Gaming Monitor, 4K UHD Mini LED Display, Curved Screen, 240Hz, 1ms, G-Sync and FreeSync Premium Pro" image="https://m.media-amazon.com/images/I/81gf+wgrcfS._AC_SL1500_.jpg" price={1199.99} rating={4} />

        </div>
      </div>


    </div>
  )
}

export default Home;