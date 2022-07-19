import React from 'react'
import {AboutUs, AboutUsp,AboutUsh1, AboutusLeft, AboutusRight, AboutsWrap} from './About.component'; 
import {Button} from '@mui/material'
import './aboutus.css';

function About() {
  return (
    <AboutsWrap>
      <AboutUsh1>About Us</AboutUsh1>
       <AboutUs>
         
       <AboutusLeft>
       <AboutUsp>At Gloat, talent flows freely between projects and teams. People from all backgrounds 
             collaborate across the globe. Doors are never closed, and communication is always open.
              Anything can happen, and it all starts here.At Gloat, talent flows freely between projects and teams. People from all backgrounds 
             collaborate across the globe. Doors are never closed, and communication is always open.
              Anything can happen, and it all starts here.</AboutUsp>
              <Button style={{marginTop:"20px"}} variant="contained">About Us</Button> 
       </AboutusLeft>
       <AboutusRight>
         <div className='aboutus'>
         <img src={`/assets/images/aboutus.jpg`}/>
         </div>
         
       </AboutusRight>
     </AboutUs>
    </AboutsWrap> 
  )
} 

export default About 