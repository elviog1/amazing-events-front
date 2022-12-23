import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import Search from '../components/Search'
import { useAllQuery } from '../features/eventsAPI';
import '../styles/Home.css'
export default function Future() {
  let { data: allEvents } = useAllQuery(""); // todos los eventos
  const [event, setEvent] = useState([])
  const [future,setFuture] = useState([])
  let categories = event.map((item) => item.category); // todas las categorias y repetidas
  const categoryNotRepeat = new Set(categories);
  const categoryResult = [...categoryNotRepeat]; // categorias sin repetidos

  useEffect(()=>{
    if(allEvents){
      setEvent(allEvents)
      setFuture(allEvents.filter(item => parseInt(item.fecha) >2022))
    }
  },[setEvent,setFuture])

  return (
    <div>
      <div className="home-banner">
          <Search categories={categoryResult} />
      </div>
      <Card events={future} />
    </div>
  )
}
