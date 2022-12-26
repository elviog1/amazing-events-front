import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Search from "../components/Search";
import { useAllQuery } from "../features/eventsAPI";
import "../styles/Home.css";
export default function Home() {
  const [events, setEvents] = useState([]);
  let { data: allEvents } = useAllQuery(""); // todos los eventos
  let categories = events.map((item) => item.category); // todas las categorias y repetidas
  const categoryNotRepeat = new Set(categories);
  const categoryResult = [...categoryNotRepeat]; // categorias sin repetidos

  useEffect(() => {
    if (allEvents) {
      setEvents(allEvents);
    }
  }, [allEvents]);
  console.log(allEvents)

  return (
    <div>
      <div className="home-banner">
        <Search events={events} categories={categoryResult} />
      </div>
      <Card events={events} />
    </div>
  );
}
