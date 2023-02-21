import React from 'react'
import Navbar from './Navbar'
import '../CapasEstilo/header.css'

const Header = () => {
  return (
    <header>
        <div className='container_logo'>
            <p>
                USUARIOS
            </p>
        </div>
        <div className='container_navbar'>
            <Navbar/>
        </div>
    </header>
  )
}

export default Header;