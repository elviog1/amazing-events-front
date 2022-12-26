import React, { useState } from 'react'
import '../styles/Search.css'
export default function Search(props) {
    const data = props.categories
    const events = props.events
    const [search,setSearch] = useState("")

    const printCheckbox = (item)=> (
            <label className='label' key={item}>{item}
                <input  type="checkbox" id={item} />
            </label>
    )
    const changeSearch = (e)=>{
      setSearch(e.target.value)
    }
    const filterSearch = events?.filter(event => event.name.toLowerCase().includes(search.toLowerCase()))
    
    // const filterCheckbox = document.querySelectorAll("input[type='checkbox'")
    // const arrayCheckbox = Array.from(filterCheckbox)

    

  return (
    <div className='div-search'>
        <input className='search-input' type="search" placeholder="Buscar..." onChange={changeSearch} />
        <div className='checkbox-div'>
            {data?.map(printCheckbox)}
        </div>
    </div>
  )
}
