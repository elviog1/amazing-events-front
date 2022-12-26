import React, { useState } from 'react'
import '../styles/Contact.css'
import emailjs from '@emailjs/browser'
import swal from 'sweetalert'
export default function Contact() {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [message,setMessage] = useState("")
    const sendEmail = (e)=>{
        e.preventDefault()
        if(name.length <3){
            swal("Error!", `Su nombre debe tener minimo 4 caracteres`, "error");
        }
        else if(email.length === 0){
            swal("Error!", `Ingrese un correo electronico`, "error");
        }
        else if(message.length <5){
            swal("Error!", `Ingrese un mensaje por favor`, "error");
        }
        else{
            emailjs.sendForm("service_a7xpd7c","template_jx93opg",e.target,"nAw2N6DYf4535Zve3")
            .then(response => console.log(response)) 
            .catch(error => console.log(error)) 
            swal("Perfecto !", `Su mensaje fue enviado correctamente`, "success");
            
        }
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
                <button type='submit' className='button'>Enviar</button>
            </form>
        </div>
    </div>
  )
}
