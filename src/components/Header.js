import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Header.css'
export default function Header() {
    const navLinks = [
        {name:"Inicio", to: "/"},
        {name:"Futuros", to: "/futuros"},
        {name:"Pasados", to: "/pasados"},
        {name:"Contacto", to: "/contacto"},
        {name:"Estadisticas", to: "/estadisticas"}
    ]

    const printNav = (item)=>{
        return (
            <li key={item} className="header-li">
                <Link to={item.to} className="header-link">{item.name}</Link>
            </li>
        )
    }
  return (
    <div className='header-nav'>
        <div className='header-logo'>
            <span className='logo'>Super Eventos</span>
        </div>
        <ul className='header-ul'>
            {navLinks.map(printNav)}
        </ul>
    </div>
  )
}
