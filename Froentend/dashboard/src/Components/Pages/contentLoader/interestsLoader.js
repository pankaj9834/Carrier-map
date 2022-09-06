import { Card, CardContent, Row, ButtonHolder, InfoContainer, Title } from '../pagesStyled';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { removeItem, addItem } from '../../ReduxSlice/interestSlice';
import { useDispatch } from 'react-redux';

export default function Types(props) {
  const dispatch = useDispatch();

  const [isHovering, setIsHovering] = useState(false);
  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const handleClick = (data) =>{
     dispatch(addItem(data))
  }

   return (
     <div>
              {
              props.Data && props.Data.map(data => {
               
               return(
                 <Card>
         {/* <CardContent>
           <Row>
             <InfoContainer> */}
                 <Title style={{float: "left"}} className='box' key={data.id}>
                   {data.name}
                   </Title>
                   <ButtonHolder>
                   <Button  style={{
                     backgroundColor: isHovering ? 'rgba(183, 194, 243, 0.3)' : '',
                     color: isHovering ? '#0f4d92' : '',
                     borderRadius:"8px", borderColor:"#0f4d92", width:"50px",
                     width: "fit-content",
                     height: "fit-content",
                     marginLeft:"20px"
                    }}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave} onClick={()=>{dispatch(removeItem(data.id))}}>Remove</Button>
                    </ButtonHolder>
                    
                    
                    {/* </InfoContainer>
                    </Row>
             </CardContent> */}
           </Card>
               )
              })}
     </div>         
   )
 }

