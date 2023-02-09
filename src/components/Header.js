import React from 'react'
import './estilos/header.css'
import logo from '../assets/logo.png'
import { CartWidget } from './header/CartWidget'

const Header = () => {
    return (
        <>
            <nav className='navbar'>
                <div className='navbarBranch'>
                    <img src={logo} alt="logo"/>
                    <h1>Hogareño</h1>
                </div>
                <div className="nav-wrapper">
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Cocina</a></li>
                        <li><a href="#">Dormitorio</a></li>
                        <li><a href="#">Baño</a></li>
                    </ul>
                </div>
                <CartWidget />
            </nav>
        </>
    )
}

export default Header 