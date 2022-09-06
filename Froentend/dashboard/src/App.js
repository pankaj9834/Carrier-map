import "./App.css";
import styled from "styled-components";

import React, { useEffect, Suspense }from 'react'
import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
// import SportsPage from "./Components/Pages/SportsPage";
// import EsportsPage from "./Components/Pages/ESportsPage";
// import SingingPage from "./Components/Pages/SingingPage";
// import GovernmentJobPage from "./Components/Pages/GovernmentJobPage";
// import NetworkingPage from "./Components/Pages/NetworkingPage";
// import ProgramAnalysisPage from "./Components/Pages/ProgramAnalysisPage";
// import InterestPage from "./Components/Pages/InterestPage";
import Sidebar from "./Components/Sidebar";
// import Signup from "./Components/Auth/Signup";
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from "./Components/ReduxSlice/interestSlice"
import { auth, onAuthStateChanged } from './firebase';
// import Login from "./Components/Auth/Login";
// import MainContent from "./Components/MainContent";

const SportsPage = React.lazy(() => import("./Components/Pages/SportsPage"))
const EsportsPage = React.lazy(() => import("./Components/Pages/ESportsPage"))
const SingingPage = React.lazy(() => import("./Components/Pages/SingingPage"))
const GovernmentJobPage = React.lazy(() => import("./Components/Pages/GovernmentJobPage"))
const NetworkingPage = React.lazy(() => import("./Components/Pages/NetworkingPage"))
const ProgramAnalysisPage = React.lazy(() => import("./Components/Pages/ProgramAnalysisPage"))
const InterestPage = React.lazy(() => import("./Components/Pages/InterestPage"))
const Signup = React.lazy(() => import("./Components/Auth/Signup"))
const Login = React.lazy(() => import("./Components/Auth/Login"))
const MainContent = React.lazy(() => import("./Components/MainContent"))
require('dotenv').config()




function App() {
  const user = useSelector(selectUser);
const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // user is logged in, send the user's details to redux, store the current user in the state
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);
  
  return (
    <Router>
      {!user ? (
        // display the login form 
        <div style={{maxHeight:"100vh"}}>
        
        <Routes>
        <Route  path='/Login'  element={<Suspense fallback={<div>Loading...</div>}>
      <Login/>
        </Suspense>} />
          <Route  path='/Signup'  element={<Suspense fallback={<div>Loading...</div>}>
      <Signup/>
        </Suspense>} />
          <Route path="/" element={ <Navigate to="/Login" />} /> 
        </Routes>
        </div>
       
        
      ) : (
        // display the rest of the app
        <div className='app__body'>
          {/* Rest of the app */}
          
      
      <div style={{justifyContent:"center", width: "20%", float:"left"}}>
    <Sidebar />
      </div>
    <div style={{justifyContent:"center", width: "80%", float:"right"}}>
    <Container>
    <Routes>
    <Route path="/Login" element={ <Navigate to="/" />} />
        <Route exact path='/'  element={<Suspense fallback={<div>Loading...</div>}>
        <MainContent />
        </Suspense> } />
        <Route path='/SportsPage' element={<Suspense fallback={<div>Loading...</div>}>
        <SportsPage /> 
        </Suspense>} />
        <Route path='/EsportsPage' element={ <Suspense fallback={<div>Loading...</div>}>
        <EsportsPage />
        </Suspense>} />
        <Route path='/SingingPage' element={ <Suspense fallback={<div>Loading...</div>}>
        <SingingPage />
        </Suspense>} />
        <Route path='/GovernmentJobPage' element={<Suspense fallback={<div>Loading...</div>}>
        <GovernmentJobPage/>
        </Suspense>} />
        <Route path='/NetworkingPage' element={<Suspense fallback={<div>Loading...</div>}>
        <NetworkingPage />
        </Suspense>} />
        <Route path='/ProgramAnalysisPage' element={<Suspense fallback={<div>Loading...</div>}>
        <ProgramAnalysisPage />
        </Suspense>} />
        <Route path='/InterestsPage' element={<Suspense fallback={<div>Loading...</div>}>
        <InterestPage />
        </Suspense>} />
        
    </Routes>
    </Container>
    </div>
    
        </div>
      )}
       
    </Router>
  );
}

const Container = styled.div`
  height: 95vh;
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
