import React, { useEffect, useState } from 'react'
import { useAllQuery } from '../features/eventsAPI'
import '../styles/Search.css'
export default function Search(props) {
    const data = props.categories
    console.log(data)
    

    const printCheckbox = (item)=> (
            <label className='label' key={item}>{item}
                <input type="checkbox" id={item} />
            </label>

    )
  return (
    <div className='div-search'>
        <input className='search-input' type="search" placeholder="Buscar..." />
        <div className='checkbox-div'>
            {data?.map(printCheckbox)}
        </div>
    </div>
  )
}
