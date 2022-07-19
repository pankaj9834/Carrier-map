import styled from 'styled-components'

export const ServicesContainer= styled.div`
  padding:25px;
  height:auto; 
  margin:15px 0px;
  text-align:center;
`;  

export const Servh1 = styled.h1`
font-size:2.5rem;
color:#063970;
margin-bottom:20px;
`; 

export const SerCardWrap = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
height:auto;
flex-flow:row; 
flex-wrap:wrap;
flex:1 1 1;
gap:80px; 
@media (max-width:900px){
    gap:30px; 
} 
@media (max-width:768px){
    flex:100%; 
}
`; 

export const Card= styled.div`
display:flex;
flex-flow:column;
padding:50px 20px;
border:1px solid rgb(6 57 112); 
color:rgb(6 57 112);
flex:1;
transition: all 0.6s ease-in;

&:hover{
    background-color: rgb(6 57 112); 
    color:#fff;
}
@media (max-width:768px){
    flex:100%; 
}

`;
