import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import { useAllQuery } from "../features/eventsAPI";
import "../styles/Home.css";
export default function Home() {
  const [events, setEvents] = useState([]);
  const [search,setSearch] = useState("")
  let { data: allEvents } = useAllQuery(""); // todos los eventos

  // let categories = events.map((item) => item.category); // todas las categorias y repetidas
  // const categoryNotRepeat = new Set(categories);
  // const categoryResult = [...categoryNotRepeat]; // categorias sin repetidos

  const filterSearch = events?.filter(event => event.name.toLowerCase().includes(search.toLowerCase()))
  console.log(filterSearch)
  useEffect(() => {
    if (allEvents) {
      setEvents(allEvents);
    }
  }, [allEvents]);

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
        <h1 style={{textAlign:"center"}}>Inicio</h1>
          <input className='input-form' type="search" placeholder="Buscar..." onChange={changeSearch} />
          <div className='checkbox-div'>
          </div>
        </div>
      </div>

      <Card events={filterSearch} word={search} />
    </div>
  );
}
