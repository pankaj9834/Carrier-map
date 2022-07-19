import styled from 'styled-components'

export const ContactContainer= styled.div`
  padding:25px;
  height:auto; 
  margin:15px 0px;
  text-align:center;

`; 

export const Contacth1 = styled.h1`
font-size:2.5rem;
color:#063970;
margin-bottom:20px;
`; 

export const Contactbox = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
height:auto;
margin-inline:auto;
flex-wrap:wrap;
@media (max-width:900px){
  justify-content:center;
align-items:center;
} 
`;   

export const Contactp = styled.p`
font-size:1.2rem;
max-width:700px;
`;