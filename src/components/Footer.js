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
        <span className='logo'><span className='color'>A</span>mazing <span className='color'>E</span>vents</span>
        </div>
        <div className='footer-red-social'>
          <a href='https://youtube.com' target="_blank">
            <img className='red-social' alt='logo youtube' src='https://cdn-icons-png.flaticon.com/512/3938/3938037.png' />
          </a>
          <a href='https://instagram.com' target="_blank">
            <img className='red-social' alt='logo instagram' src='https://cdn-icons-png.flaticon.com/512/2111/2111463.png' />
          </a>
          <a href='https://twitter.com' target="_blank">
            <img className='red-social' alt='logo twitter' src='https://cdn-icons-png.flaticon.com/512/2504/2504947.png' />
          </a>  
            
            
        </div>
        <div>
            <img className='red-social top' alt='flecha' src='https://cdn-icons-png.flaticon.com/512/992/992703.png' onClick={scrollTo}/>
        </div>
    </footer>
  )
}
