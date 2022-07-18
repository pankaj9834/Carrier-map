import React from 'react'
import { ContactContainer, Contacth1,Contactbox,Contactp} from './Contact.component';
import {Button} from '@mui/material';

function Contact() {
  return (
    <>
     <ContactContainer>
         <Contacth1>Contact Us</Contacth1>
         <Contactbox>
             <Contactp>
               For the Detailed information or to know abouts us please get in touch!
             </Contactp> 
             <Button style={{marginTop:"20px"}} variant="contained">Click Here !</Button>
         </Contactbox>
         
     </ContactContainer>
    </>
  )
}

export default Contact 