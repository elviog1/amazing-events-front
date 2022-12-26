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
    

    const printNav = (item,index)=>{
        return (
                <Link key={index} to={item.to} className="header-link">{item.name}</Link>
        )
    }

  return (
    <div className='header-nav'>
        <div className='header-logo'>
            <span className='logo'><span className='color'>A</span>mazing <span className='color'>E</span>vents</span>
        </div>
        <div className='links'>
            {navLinks.map(printNav)}
        </div>

    </div>
  )
}
