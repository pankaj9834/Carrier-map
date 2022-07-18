import React from 'react'
import Carousel from 'react-elastic-carousel'
import  { Item,CarouselContainer } from './Item';

const breakPoints=[
    {width:1, itemsToShow:1},
    {width:550, itemsToShow:1},
    {width:768, itemsToShow:1},
    {width:1200, itemsToShow:2},
    ]

export const CarouselComp = (props) => {
  return (
    <> 
      <CarouselContainer>
              <Carousel breakPoints={breakPoints}>
               <Item>Sports</Item>
               <Item>Finance</Item>
               <Item>Product Enginering</Item>
               <Item>Manufacturing</Item>
               <Item>Digital Marketing</Item>
               <Item>Entertainment</Item>
               <Item>sports</Item>
               <Item>Finance</Item>
              </Carousel>
            </CarouselContainer>
    </>
  )
} 

