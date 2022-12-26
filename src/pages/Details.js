import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetOneEventQuery } from '../features/eventsAPI'
import '../styles/Detail.css'
export default function Details() {
    const [event, setEvent] = useState({})
    let query = new URLSearchParams(window.location.search)
    let eventID = query.get("id")
    let navigate = useNavigate()
    const {data} = useGetOneEventQuery(eventID)

    useEffect(()=>{
        if(data){
            setEvent(data)
        }
    },[data])

    const printDetail = (item)=> {
      return (
        <div className='detail-container' style={{backgroundImage:`url(${item.image})`}}>
            <div className='detail'>
                <img className='back-arrow' alt='back arrow' onClick={()=> navigate("/")} src='https://cdn-icons-png.flaticon.com/512/7235/7235838.png' />
                <div className='detail-info'>
                    <h2 className='detail-h title'>{item.name}</h2>
                    <h3 className='detail-h'>{item.description}</h3>
                    <h3 className='detail-h'>Fecha: {item.fecha}</h3>
                    {parseInt(item.fecha)>2022 ?
                    <h3 className='detail-h'>Estimado: {item.estimate}</h3>
                    :
                    <h3 className='detail-h'>Asistieron: {item.assistance}</h3> }
                    <h3 className='detail-h'>Lugar: {item.place}</h3>
                    <h3 className='detail-h'>Precio: ${item.price}</h3>
                </div>
            </div>
        </div>
      )
  }

  return (
    <div>
        { printDetail(event)}
    </div>
  )
}
