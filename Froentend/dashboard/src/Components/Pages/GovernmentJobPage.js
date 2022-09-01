import React, { Component } from 'react'
// import axios from 'axios'
import { InfoCard, Card, CardContent, Row, InfoContainer, Title, Heading } from './pagesStyled';
import Data from "../../assets/data.json"
import sports from './dataController';
 

  

export class SportsPage extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     sports: []
  //   };
  //   this.routerRef = React.createRef();
  // }

  // async componentDidMount() {
  
  //     const sports = await axios.get('api');
  
  //     this.setState({ sports: sports.data });
  // }



  render() {
    return (<div>
      <Heading>SportsPage</Heading>
      <InfoCard>
      <Types />
    </InfoCard>
    </div> 
    )
  }
}

export default SportsPage


function Types() {
  // const sports = data.sports.map((name, key) => (
//  )
   

  return (
    <div>
             {
             Data && Data.map(data => {
              
              return(
                <Card>
        <CardContent>
          <Row>
            <InfoContainer>
                <Title className='box' key={data.id}>
                  {data.name}
                  </Title>
                </InfoContainer>
              </Row>
            </CardContent>
          </Card>
              )
             })}
    </div>         
  )
}

