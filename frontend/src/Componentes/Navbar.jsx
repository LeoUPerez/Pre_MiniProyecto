import React from 'react'
import { Link } from 'react-router-dom';
import '../CapasEstilo/navbar.css';

const Navbar = () => {
  return (
    <div className='navbar_container'>
        <Link to={'/'} className='link'>
            Lista Usuarios
        </Link>
        <Link to={'/crearusuarios'} className='link'>
            Crear Usuarios
        </Link>
    </div>
  )
}

export default Navbar;