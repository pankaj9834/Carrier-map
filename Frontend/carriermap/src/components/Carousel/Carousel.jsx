import React from 'react'
import Carousel from 'react-elastic-carousel'
import  { Item,CarouselContainer } from './Item';
import './Carousel.css';

const breakPoints=[
    {width:1, itemsToShow:1},
    {width:550, itemsToShow:1},
    {width:768, itemsToShow:1},
    {width:1200, itemsToShow:1},
    ]

export const CarouselComp = (props) => {
  return (
    <> 
      <CarouselContainer>
              <Carousel breakPoints={breakPoints}>
               <Item className="container">
                 <img src={`/assets/images/sport.jpg`} />
                 <div  className="text-block">
                 </div> 
                 <h4>Sport</h4>
              </Item>   
               <Item className="container">
                 <img src={`/assets/images/finance5.jpg`} />
                 <div  className="text-block">
                 </div> 
                 <h4>Finance</h4>
                </Item>
               <Item className="container">
               <img src={`/assets/images/producte.jpg`} />
                 <div  className="text-block">
                 </div> 
                 <h4>Product Enginering</h4>
              </Item>
               <Item className="container">
               <img src={`/assets/images/manufacture.jpg`} /> 
                 <div  className="text-block">
                
                 </div> 
                 <h4>Manufacturing</h4>
                </Item>
               <Item className="container">
               <img src={`/assets/images/digital.jpeg`} />
                 <div  className="text-block">
                 
                 </div> 
                 <h4>Digital Marketing</h4>
                 </Item>
               <Item className="container">
               <img src={`/assets/images/entertain.png`} />
                 <div  className="text-block">
                 
                 </div> 
                 <h4>Entertainment</h4>
                 </Item>
              </Carousel>
            </CarouselContainer>   
    </>
  )
} 

