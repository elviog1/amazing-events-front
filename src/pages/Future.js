import React, { useEffect, useState } from 'react'
import Card from '../components/Card';
import { useAllQuery } from '../features/eventsAPI';
import '../styles/Home.css'
export default function Future() {
  let { data: allEvents } = useAllQuery(""); // todos los eventos
  const [event, setEvent] = useState([])
  const [future,setFuture] = useState([])
  const [search,setSearch] = useState("")
  // let categories = event.map((item) => item.category); // todas las categorias y repetidas
  // const categoryNotRepeat = new Set(categories);
  // const categoryResult = [...categoryNotRepeat]; // categorias sin repetidos

  const filterSearch = future?.filter(event => event.name.toLowerCase().includes(search.toLowerCase()))

  useEffect(()=>{
    if(allEvents){
      setEvent(allEvents)
      setFuture(allEvents.filter(item => parseInt(item.fecha) >2022))
    }
  },[setEvent,setFuture,allEvents])


  // const printCheckbox = (item)=> (
  //   <label className='label' key={item}>{item}
  //       <input  type="checkbox" id={item} />
  //   </label>
  // )
  const changeSearch = (e)=>{
  setSearch(e.target.value)
  }

  return (
    <div>
      <div className="home-banner">
          <div className='div-search'>
          <h1 style={{textAlign:"center"}}>Eventos Futuros</h1>
          <input className='input-form' type="search" placeholder="Buscar..." onChange={changeSearch} />
          <div className='checkbox-div'>
          </div>
        </div>

      </div>
      <Card events={filterSearch} word={search} />
    </div>
  )
}
