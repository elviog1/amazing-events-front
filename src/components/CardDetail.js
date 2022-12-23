import React from 'react'

export default function CardDetail(props) {
    const data = props.event
    console.log(data)
    
    const printDetail = (item,index)=> {
        return (
            <div >
                {/* <img alt='imagen del evento' src={item.image} /> */}
                <div>
                    <h2>{item.name}</h2>
                    <h3>{item.description}</h3>
                    <h3>Fecha: {item.fecha}</h3>
                    <h3>Lugar: {item.place}</h3>
                    <h3>Precio: ${item.price}</h3>
                    {/* <h3>{item.description}</h3> */}
                </div>
            </div>
        )
    }

  return (
    <div>
        {data?.map(printDetail)}
    </div>
  )
}
