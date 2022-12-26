import React, { useEffect, useState } from 'react'
import StadisticTD from '../components/StadisticTD'
import { useAllQuery } from '../features/eventsAPI'
import '../styles/Stats.css'
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

    // pasado
    function past(array,category){
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
    
    const pastResult = categoryResult.map(category => past(arrayAttendance,category))
    
    // futuro
    function upcoming(array,category){
        let revenues = 0
        let capacity = 0
        let estimate = 0
        for(let i = 0; i< array.length; i++){
            if(array[i].category === category){
                revenues += array[i].price * parseInt(array[i].estimate) 
                capacity += parseInt(array[i].capacity)
                estimate += parseInt(array[i].estimate) 
            }
        }
        return {
            category: category,
            revenues: revenues,
            estimate: estimate * 100 / capacity
        }
    }
    const upcomingResult = categoryResult.map(category => upcoming(eventUpcoming,category))
    
    console.log(upcomingResult)
    const printTH = (text)=> (
        <tr className='title-table'>
            <th colSpan="3">{text}</th>
        </tr>
    )
    const print = (item,index)=> (
            <td key={index}>{item.name}</td>
    )

    const printEventResult = (item,index)=> (
        <tr key={index}>
            <td>{item.category}</td>
            <td>$ {item.revenues}</td>
            <td>{item.attendance ? item.attendance.toFixed(2) : item.estimate.toFixed(2)} %</td>
        </tr>
)

    

  return (
    <div>
        <div className="home-banner">
            <h1 className='stats-title'>Estadisticas</h1>
        </div>
    <div className='div-table'>
        <table className='table'>
            <thead>
                {printTH("Estadisticas de los eventos")}
            </thead>
            <tbody>
               <StadisticTD text1="Evento con mayor porcentaje de asistencia"
                            text2="Evento con menor porcentaje de asistencia"
                            text3="Evento con mayor capacidad" />
                <tr>
                    {maxAttendanceEvent.map(print)}
                    {minAttendanceEvent.map(print)}
                    {maxCapacityEvent.map(print)}
                </tr>
                {printTH("Estadisticas de eventos futuros segun categorias")}
                
                <StadisticTD    text1="Categoria"
                                text2="Ingresos"
                                text3="Porcentaje de asistencia" />

                    {pastResult.map(printEventResult)}

                

                {printTH("Estadisticas de eventos pasados segun categoria")}
                <StadisticTD    text1="Categoria"
                                text2="Ingresos"
                                text3="Porcentaje de asistencia" />

                                {upcomingResult.map(printEventResult)}
            </tbody>
        </table>
        </div>
    </div>
  )
}
