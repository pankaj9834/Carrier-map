import { Routes, Route } from "react-router-dom";
import Screen from "./Screen";
import About from "./Components/AboutUsSec/About";
import Contact from "./Components/ContactUsSec/Contact";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Dashboard from "./Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Screen />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
