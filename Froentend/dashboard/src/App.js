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
import InterestPage from "./Components/Pages/InterestPage";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <Router>
       <Container>
      <div style={{justifyContent:"center", width: "20%", float:"left"}}>
    <Sidebar />
      </div>
    <div style={{justifyContent:"center", width: "80%", float:"right"}}>
    <Routes>
      
        <Route exact path='/'  element={<Home />} />
        <Route path='/SportsPage' element={<SportsPage />} />
        <Route path='/EsportsPage' element={<EsportsPage />} />
        <Route path='/SingingPage' element={<SingingPage />} />
        <Route path='/GovernmentJobPage' element={<GovernmentJobPage/>} />
        <Route path='/NetworkingPage' element={<NetworkingPage />} />
        <Route path='/ProgramAnalysisPage' element={<ProgramAnalysisPage />} />
        <Route path='/Interests' element={<InterestPage />} />
    </Routes>
    </div>
    </Container>
    </Router>
  );
}

const Container = styled.div`
  height: 97vh;
  width: 100%;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-radius: 2rem;
  display: flex;
  position: relative;
  z-index: 1;
  overflow-x: hidden;

  /* justify-content: center; */
  /* align-items: center; */
  /* flex-direction: row; */
  /* @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  } */
`;

export default App;
