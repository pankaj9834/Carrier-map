import "./App.css";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Dash from "./Components/Dash";
import Login from "./Components/Login/Login";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import GovernmentJobPage from "./Components/GovernmentJobPage";
import { auth } from "./firebase";
import Networking from "./Components/Networking";
import Esports from "./Components/Esports";
import Singing from "./Components/Singing";
import ProgramAnalysis from "./Components/ProgramAnalysis";
import Sports from "./Components/Sports";
import SignUp from "./Components/SignUp/SignUp";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);
  return (
    <div className="App">
      <Container>
        <Router>
          <Routes>
            <Route exact path="/" element={<Dash />} />
            <Route
              exact
              path="/GovernmentJobPage"
              element={<GovernmentJobPage />}
            />
            <Route path="/login" element={<Login />} />
            <Route path="/networking" element={<Networking />} />
            <Route path="/esports" element={<Esports />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/singing" element={<Singing />} />
            <Route path="/programanalysis" element={<ProgramAnalysis />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Dash name={userName} />} />
          </Routes>
        </Router>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
  height: 97vh;
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-radius: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
  }
`;

export default App;
