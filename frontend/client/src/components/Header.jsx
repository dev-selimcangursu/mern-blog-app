import React from 'react'
import './Header.css'
import HeaderTop from './HeaderTop'
import HeaderBottom from './HeaderBottom'
function Header() {
  return (
    <header id='header' className='header'>
       <HeaderTop/>
       <HeaderBottom/>   
    </header>
  )
}

export default Header