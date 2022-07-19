import styled from 'styled-components'

export const AboutUs = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
height:auto;
flex-flow:row; 
flex-wrap:wrap;
flex:1;
gap:20px; 
 
`;   

export const AboutsWrap=styled.div`
padding: 30px 25px 45px 25px;
margin:15px 0px;
text-align:center;
background-color:#f4f4f4;
`;

export const AboutUsp = styled.p`
max-width:1200px;
font-size:1.2rem;
`; 

export const AboutusLeft= styled.div`
display:flex;
flex-flow:column;
flex:55%;
justify-content:center;
align-items:center;
@media (max-width:900px){
    flex:100%;
}  
`;

export const AboutusRight= styled.div`
display:flex;
flex-flow:column;
flex:30%; 
`; 

export const AboutUsh1 = styled.h1`
font-size:2.5rem;
color:#063970;
margin-bottom:20px;
`; 