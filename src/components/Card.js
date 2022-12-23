import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Card.css'
export default function Card(props) {
    const allEvents = props.events

    const printEvents = (item,index)=>{
        return (
            <div key={index} className='card-container'>
                <Link to={`/detail?id=${item._id}`} className="card-link">
                    <img alt='imagen del evento' src={item.image}  className='card-img' />
                    <p className='card-title'>{item.name}</p>
                </Link>
            </div>
        )
    }


  return (
    <div className='card-main'>
        {allEvents.map(printEvents)}
    </div>
  )
}
