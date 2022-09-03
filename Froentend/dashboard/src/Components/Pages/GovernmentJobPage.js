import React, { Component, Suspense } from 'react'
import { InfoCard, PageContainer, Heading } from './pagesStyled';
import data from "../../assets/data.json"
const Types = React.lazy(() => import("./PageContent"))
 

let Data = data.filter(function(v) {
  return (v.type === "government");
})  

export class GovernmentJobPage extends Component {
  render() {
    return (<PageContainer>
      <Heading>Government Jobs Page</Heading>
      <InfoCard>
      <Suspense fallback={<div>Loading...</div>}>
      <Types Data={Data}/>
        </Suspense>
    </InfoCard>
    </PageContainer> 
    )
  }
}

export default GovernmentJobPage


