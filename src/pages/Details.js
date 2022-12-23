import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useGetOneEventQuery } from '../features/eventsAPI'
import '../styles/Detail.css'
export default function Details() {
    let navigate = useNavigate()
    let query = new URLSearchParams(window.location.search)
    let eventID = query.get("id")
    const {data:detail} = useGetOneEventQuery(eventID)
    const [data,setData] = useState([])
    useEffect(()=>{
        if(detail){
            setData(detail)
        }
    },[setData])
    console.log(data)

    const printDetail = (item,index)=> {
      return (
          <div className='detail-card' key={index}>
            <button onClick={()=> navigate("/")}>V</button>
              {/* <img alt='imagen del evento' src={item.image} className='img-detail'/> */}
              <div className='detail-info'>
                  <h2>{item.name}</h2>
                  {/* <h3>{item.description}</h3>
                  <h3>Fecha: {item.fecha}</h3>
                  <h3>Lugar: {item.place}</h3>
                  <h3>Precio: ${item.price}</h3> */}
                  {/* <h3>{item.description}</h3> */}
              </div>
          </div>
      )
  }

  return (
    <div>
        {/* {printDetail(detail)} */}
        {/* {data.map(printDetail)} */}
    </div>
  )
}
