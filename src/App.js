import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Details from "./pages/Details";
import Future from "./pages/Future";
import Home from "./pages/Home";
import Past from "./pages/Past";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/futuros" element={<Future />} />
        <Route path="/pasados" element={<Past />} />
        <Route path="/detail" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
