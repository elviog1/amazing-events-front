import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Future from "./pages/Future";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/futuros" element={<Future />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
