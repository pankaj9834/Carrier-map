import React from 'react'
import { SerCardWrap, Servh1, ServicesContainer,Card } from './services.component'
import './services.css'

function Services() {
  return (
  <ServicesContainer>
        <Servh1>
        Services
        </Servh1>
        <SerCardWrap>
            <Card>
                <h2>Service 1</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            </Card>
            <Card>
                <h2>Service 1</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            </Card>
            <Card>
                <h2>Service 1</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                      when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            </Card>
        </SerCardWrap>
  </ServicesContainer>
  )
}

export default Services