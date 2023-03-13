import React from 'react'
import './Header.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {  ShoppingBasketTwoTone } from '@mui/icons-material';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
      <Link to="/">
                <img className='logo' src="/images/Amazon-logo.jpg" alt="" />
      </Link>

       <div className="header_search">
        <input className='input' type="text" />
        <SearchOutlinedIcon className="searchIcon"/>
       </div>
       <div className="header_nav">
            <div className="header_option">
               <span className='line_one'>Hello</span>
               <span className='line_two'>Sign In</span>
            </div>
            <div className="header_option">
            <span className='line_one'>Returns</span>
               <span className='line_two'>& Order</span>
                </div>
                <div className="header_option">
                <span className='line_one'>Your</span>
               <span className='line_two'>Prime</span>
                </div>
            <Link className='link' to="/checkout">
             
                  <div className="header_option_basket">
                <ShoppingBasketTwoTone/>
                <span className="basket_count">0</span>
             </div>  
            </Link>




       </div>
    </div>
    
  )
}

export default Header
