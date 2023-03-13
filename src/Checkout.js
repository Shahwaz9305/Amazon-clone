import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
function Checkout() {
  return (
      <div className="checkout">
        <div className='checkout_left '>
          <h1 className="checkout_title">
            Shopping Cart
          </h1>
        </div>

        <div className="checkout_right">
           <h2>Subtotle</h2>
           <Subtotal />
        </div>
      </div>
  )
}

export default Checkout;
