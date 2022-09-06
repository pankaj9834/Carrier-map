import React, {Suspense} from 'react'
import { useDispatch, useSelector } from 'react-redux'


import { PageContainer, Heading, InfoCard, Title, InterestFooter } from './pagesStyled'
import Button from 'react-bootstrap/Button';
import { clearInterests } from '../ReduxSlice/interestSlice'
const InterestTypes = React.lazy(() => import("./contentLoader/InterestCondent"))
// const Data = interestItems;
const  InterestPage = () => {
   

   return(<PageContainer>
      <Heading>Interests Page</Heading>
      <InterestContainer/>
      </PageContainer>
   
   
   ) 
}

export default InterestPage 

const InterestContainer = () => { 
   const {interestItems, number} = useSelector((store) => store.interest );
   const Data = interestItems
   const Dispatch = useDispatch();
   if (number < 1){
      
      return<div style={{alignItems:"center", top:"50%"}}>
         <InfoCard style={{height:"70vh"}}>
         <span style={{color:"black", justifyContent:"center", position:"absolute", verticalAlign:"middle", alignItems:"center", zindex:1}}>Your cart is empty</span>
         </InfoCard>
         
      </div>
      
}


else{
return <>

   <InfoCard>
    <Suspense fallback={<div>Loading...</div>}>
     <InterestTypes Data={Data}/>
    </Suspense> 
    <InterestFooter>
    {/* <span style={{color:"black", verticalAlign:"middle", alignItems:"center", zindex:1}}>Footer</span> */}
    <Button type="button" class="btn btn-primary" style={{backgroundColor:"white", borderRadius:"8px", color:"#0f4d92", borderColor:"#0f4d92", width:"10%", onMouseOver: 'rgba(183, 194, 243, 0.3)'}}
    onClick={()=> Dispatch(clearInterests())}>
      Clear</Button>
    </InterestFooter>
   </InfoCard>


    </>
}

   
 }