import React from 'react'
import '../styles/Footer.css'
export default function Footer() {
    const scrollTo = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      };
  return (
    <footer className='footer-container'>
        <div>
            <span className='logo'>Super Eventos</span>
        </div>
        <div className='footer-red-social'>
            <img className='red-social' alt='logo instagram' src='https://cdn-icons-png.flaticon.com/512/2111/2111463.png' />
            <img className='red-social' alt='logo youtube' src='https://cdn-icons-png.flaticon.com/512/3938/3938037.png' />
            <img className='red-social' alt='logo twitter' src='https://cdn-icons-png.flaticon.com/512/2504/2504947.png' />
        </div>
        <div>
            <img className='red-social top' alt='flecha' src='https://cdn-icons-png.flaticon.com/512/992/992703.png' onClick={scrollTo}/>
        </div>
    </footer>
  )
}
