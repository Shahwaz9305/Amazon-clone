import React from 'react'
import BasicSlider from './BasicSlider'
import './Home.css'
import Product from './product'
function Home() {
  return (
    <div className='home'>
      <div className="home_container">
        <BasicSlider />
      </div>
      <div className="home_row">
        <Product
          id="1234560"
          title='Samsung Galaxy Watch 3 45mm Bluetooth (Mystic Black),SM-R840NZKAINS'
          price={`15,999`}
          image="https://m.media-amazon.com/images/I/61abrgjIeuL._SX450_.jpg"
          rating={4}
        />
        <Product
          id="1234561"
          title='Lenovo V15 (2021) Intel Core i3 10th Gen 39.63cm (15.6") FHD Thin and Light Laptop (4GB RAM/ 256GB SSD/ Windows 10 Home/ Iron Grey/ 1.85 kg), 82C500XXIH'
          price={`31,999`}
          image="https://m.media-amazon.com/images/I/71G2ma3U0rS._SX450_.jpg"
          rating={4}
        />
   

      </div>
      <div className="home_row">
        <Product
          id="1234562"
          title='Redgear Cloak Wired RGB Wired Over Ear Gaming Headphones with Mic for PC'
          price={`799`}
          image="https://m.media-amazon.com/images/I/61O0rXhhP6L._AC_UL480_FMwebp_QL65_.jpg"
          rating={4}
        />
        <Product
          id="1234563"
          title='Unisex-Adult Rebound Layup Sl Sneaker'
          price={`2,749`}
          image="https://m.media-amazon.com/images/I/719ziTfQzWL._AC_UL480_FMwebp_QL65_.jpg"
          rating={5}
        />
        <Product
          id="1234564"
          title='Trance Home Linen Cotton 400 TC Satin Striped Elasticated Fitted Bedsheet with 2 Pillow Covers-(King 78x72 inch, White Striped)'
          price={`2,088`}
          image="https://m.media-amazon.com/images/I/51BigDFxS-L.jpg"
          rating={4}
        />
      </div>
      <div className="home_row">
        <Product
          id="1234565"
          title='Avinya Super King Size bedsheet Floral Print 108 x 108 inch Size with 2 Pillow Cover, 275 x 275 cm Super King Size (9 ft by 9 ft) (White Flower, Microfiber)'
          price={`598`}
          image="https://m.media-amazon.com/images/I/71utF61kCOL._AC_UL480_QL65_.jpg"

          rating={4}
        />

      </div>
    </div>
  )
}

export default Home
