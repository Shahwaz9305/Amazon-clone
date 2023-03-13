 import React from 'react'
 import './Subtotal'
 import CurrencyFormat from 'react-currency-format';
 function Subtotal() {
   return (
     <div className='subtotal'>
       <CurrencyFormat 
       renderText={(value)=>(
        <>
        <p>Subtotle (0 items): <strong>0</strong></p>
        <small className='subtotal_gift'>
          <input type="checkbox" />this order contains a gift
        </small>
      </>
       )}
       decimalScale={2}
       value={0}
       displayType={"text"}
       thousandSeparator={true}
       prefix={"₹"}
       />
     </div>
   )
 }
 
 export default Subtotal
 