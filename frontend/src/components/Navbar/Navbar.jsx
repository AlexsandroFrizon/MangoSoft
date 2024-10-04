import React, { useState } from 'react'
import "./Navbar.css"
import {assets} from "../../assets/assets"

const Navbar = () => {

  const [ menu,setMenu] = useState("home");

  return (
    <div className='navbar'>
        <img src={assets.logo} alt="" className="logo" />

        <ul className="navbar-menu">

        <li onClick={() => setMenu("home")} className={menu==="home"?"active":""}>Página inicial</li>
        <li onClick={() => setMenu("Menu")} className={menu==="Menu"?"active":""}>Menu</li>
        <li onClick={() => setMenu("Aplicativo")} className={menu==="Aplicativo"?"active":""}>Aplicativo</li>
        <li onClick={() => setMenu("Entre em contato")} className={menu==="Entre em contato"?"active":""}>Entre em contato</li>

        </ul>

        <div className="navbar-rigth">
            <img src={assets.search_icon} alt="" />
            <div className="navbar-search-icon">
                <img src={assets.basket_icon} alt="" />
                <div className="dot"></div>                
            </div>
            <button>Entrar</button>
        </div>
    </div>
  )
}

export default Navbar
