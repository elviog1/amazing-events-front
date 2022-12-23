import React, { useState } from 'react'
import '../styles/Contact.css'
export default function Contact() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [message,setMessage] = useState("")
    const sendEmail = (e)=>{
        e.preventDefault()
    }

    const changeName = (e)=>{
        setName(e.target.value)
    }
    const changeEmail = (e)=>{
        setEmail(e.target.value)
    }
    const changeMessage = (e)=>{
        setMessage(e.target.value)
    }
  return (
    <div>
        <div className="home-banner">
            <h1 className='contact-title'>Contacto</h1>
        </div>
        <div className='contact-form'>
            <form className='form' onSubmit={sendEmail}>
                <input  name='input-name' type="text" placeholder='Nombre' className='input-form' onChange={changeName} />
                <input  name='input-email' type="email" placeholder='Email' className='input-form' onChange={changeEmail} />
                <textarea  name='textarea' cols={35} rows={7} className='textarea' placeholder='Escribe tu mensaje...' onChange={changeMessage}>
                </textarea>
                <button className='button'>Enviar</button>
            </form>
        </div>
    </div>
  )
}
