import React, { Component, Suspense } from 'react'
import { InfoCard, Card, CardContent, Row, PageContainer, InfoContainer, Title, Heading } from './pagesStyled';
import data from "../../assets/data.json"
const Types = React.lazy(() => import("./PageContent"))
 

let Data = data.filter(function(v) {
  return (v.type === "sports");
})  

export class SportsPage extends Component {
  render() {
    return (<PageContainer>
      <Heading>Sports Page</Heading>
      <InfoCard>
        <Suspense fallback={<div>Loading...</div>}>
      <Types Data={Data}/>
      </Suspense>
    </InfoCard>
    </PageContainer> 
    )
  }
}

export default SportsPage


