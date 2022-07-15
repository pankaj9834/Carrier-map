import React from 'react'
import {AboutUs, AboutUsp,AboutUsh1} from './About.component'; 
import {Button} from '@mui/material'

function About() {
  return (
     <AboutUs>
         <AboutUsh1>About Us</AboutUsh1>
         <AboutUsp>At Gloat, talent flows freely between projects and teams. People from all backgrounds 
             collaborate across the globe. Doors are never closed, and communication is always open.
              Anything can happen, and it all starts here.At Gloat, talent flows freely between projects and teams. People from all backgrounds 
             collaborate across the globe. Doors are never closed, and communication is always open.
              Anything can happen, and it all starts here.</AboutUsp>
              <Button style={{marginTop:"20px"}} variant="contained">About Us</Button> 
     </AboutUs>
  )
} 

export default About 