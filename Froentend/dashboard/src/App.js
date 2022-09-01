import "./App.css";
import styled from "styled-components";

import React from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./Components/Home";
import SportsPage from "./Components/Pages/SportsPage";
import EsportsPage from "./Components/Pages/ESportsPage";
import SingingPage from "./Components/Pages/SingingPage";
import GovernmentJobPage from "./Components/Pages/GovernmentJobPage";
import NetworkingPage from "./Components/Pages/NetworkingPage";
import ProgramAnalysisPage from "./Components/Pages/ProgramAnalysisPage";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <Router>
       <Container>
    <Sidebar />
    
    <Routes>
        <Route exact path='/'  element={<Home />} />
        <Route path='/SportsPage' element={<SportsPage />} />
        <Route path='/EsportsPage' element={<EsportsPage />} />
        <Route path='/SingingPage' element={<SingingPage />} />
        <Route path='/GovernmentJobPage' element={<GovernmentJobPage/>} />
        <Route path='/NetworkingPage' element={<NetworkingPage />} />
        <Route path='/ProgramAnalysisPage' element={<ProgramAnalysisPage />} />
    </Routes>
    </Container>
    </Router>
  );
}

const Container = styled.div`
  display: flex;
  height: 97vh;
  /* width:25ch; */
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-radius: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;

export default App;
