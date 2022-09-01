import styled from "styled-components";
import Sidebar from "./Sidebar";
import MainContent from "./MainContent";
import React from 'react'
import { Route, Routes } from "react-router-dom";

import SportsPage from "./Pages/SportsPage";

function Home() {
  return (
    <Container>
       
      <MainContent />
      {/* <Routes> */}
        {/* <Route exact path='/'  element={<Home />} /> */}
        {/* <Route exact path='/SportPage' element={<SportsPage/>} />  */}
        {/* <Route path='/contact' element={<Contact/>} /> 
        <Route path='/blogs' element={<Blogs/>} />
        <Route path='/sign-up' element={<SignUp/>} /> */}
    {/* </Routes>  */}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  /* height: 97vh; */
  background: linear-gradient(to bottom right, white 0%, #e6e4ff 70%);
  border-radius: 2rem;
  @media screen and (min-width: 320px) and (max-width: 1080px) {
    flex-direction: column;
    overflow-x: scroll;
  }
`;

export default Home;
