import React, { useEffect, useState } from 'react'
import StadisticTD from '../components/StadisticTD'
import { useAllQuery } from '../features/eventsAPI'

export default function Stats() {
    const [events,setEvents] = useState([])
    const {data} = useAllQuery()
    useEffect(()=>{
        if(data){
            setEvents(data)
        }
    },[data])

    const arrayAttendance = events.filter(item => parseInt(item.fecha)<2023) // todos los eventos pasados
    const eventUpcoming = events.filter(item => parseInt(item.fecha)>2022) // todos los eventos futuros

    //CAPACIDADES
    const allCapacity = arrayAttendance.map(item => item.capacity) // todas las capacidades
    const maxCapacityNumber = Math.max(...allCapacity) // capacidad mas grande
    const maxCapacityEvent = events.filter( event => event.capacity === maxCapacityNumber) // el evento que tubo la mayor capacidad

    //MAYOR ASISTENCIA
    const allAttendance = arrayAttendance.map(event => event.assistance * 100 / event.capacity) //todos los  porcentajes de asistencia
    const maxAttendanceNumber = Math.max(...allAttendance) // porcentaje mas alto de asistencia
    const maxAttendanceEvent = events.filter(event => event.assistance * 100 / event.capacity === maxAttendanceNumber) // evento con mayor % de asistencia

    // MENOR ASISTENCIA
    const minAttendanceNumber = Math.min(...allAttendance) // porcentaje mas bajo de asistencia
    const minAttendanceEvent = events.filter(event => event.assistance * 100 / event.capacity === minAttendanceNumber) // evento con menor % de asistencia

    //CATEGORIAS
    let categories = events.map((item) => item.category); // todas las categorias y repetidas
    const categoryNotRepeat = new Set(categories);
    const categoryResult = [...categoryNotRepeat]; // categorias sin repetidos 

    function upcoming(array,category){
        let revenues = 0
        let capacity = 0
        let assistance = 0
        for(let i = 0; i< array.length; i++){
            if(array[i].category === category){
                revenues += array[i].price * parseInt(array[i].assistance) 
                capacity += parseInt(array[i].capacity)
                assistance += parseInt(array[i].assistance) 
            }
        }
        return {
            category: category,
            revenues: revenues,
            attendance: assistance * 100 / capacity
        }
    }
    
    const upcomingResult = categoryResult.map(category => upcoming(arrayAttendance,category))
    console.log(upcomingResult) // arreglar el NAN del museo

    const printTH = (text)=> (
        <tr>
            <th colSpan="3">{text}</th>
        </tr>
    )
    const print = (item,index)=> (
            <td key={index}>{item.name}</td>
    )

  return (
    <div>
        <div className="home-banner">
            <h1 className='stats-title'>Estadisticas</h1>
        </div>

        <table>
            <thead>
                {printTH("Events Stadistics")}
            </thead>
            <tbody>
               <StadisticTD text1="Events with the highest percentage of attendance"
                            text2="Events with the lowest percentage of attendance"
                            text3="Events with larger capacity" />
                <tr>
                    {maxAttendanceEvent.map(print)}
                    {minAttendanceEvent.map(print)}
                    {maxCapacityEvent.map(print)}
                </tr>
                {printTH("Upcoming events statistics by category")}
                
                <StadisticTD    text1="Categories"
                                text2="Revenues"
                                text3="Percentage of attendance" />
                

                {printTH("Past events statistics by category")}
                <StadisticTD    text1="Categories"
                                text2="Revenues"
                                text3="Percentage of attendance" />
            </tbody>
        </table>
    </div>
  )
}
