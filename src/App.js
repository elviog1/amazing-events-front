import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import Details from "./pages/Details";
import Future from "./pages/Future";
import Home from "./pages/Home";
import Past from "./pages/Past";
import Stats from "./pages/Stats";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/futuros" element={<Future />} />
        <Route path="/pasados" element={<Past />} />
        <Route path="/detail" element={<Details />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path="/estadisticas" element={<Stats />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
