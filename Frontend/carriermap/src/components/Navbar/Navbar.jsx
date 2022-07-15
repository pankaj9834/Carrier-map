import React ,{useState}from 'react'
import './Navbar.css'
import {AppBar,styled,Toolbar,Typography,Tabs,Tab, Button,useMediaQuery,useTheme} from '@mui/material'
import DrawerComp from '../Drawer/Drawer';





function Navbar() {  

  const [value,setValue]= useState();
  const theme= useTheme();
  const isMatch= useMediaQuery(theme.breakpoints.down('md'));
  const pages= ['Home','Services','AboutUs','ContactUs']
  return (
    <>
    <AppBar position="sticky" sx={{background:"#063970"}}>
    <Toolbar >
      {
        isMatch ? (
          <>
        
        <Typography varient="h6">
                Career Map 
              </Typography>
        <DrawerComp/> 
        </>
     ): (
       <>
              <Typography varient="h6" sx={{display:{xs:"none",sm:"block"}}}>
                Career Map 
              </Typography> 
                <Tabs
              value={value}
              textColor="inherit"
              onChange={(e,value)=> setValue(value)}
              indicatorColor='secondary'
              sx={{marginLeft:'auto'}}>
                {
                  pages.map((page,ind)=>(
                    <Tab key={ind} label={page}/>
                  ) 
                     
                  )
                }
            
            </Tabs>
            <Button sx={{marginLeft:"auto"}} variant="contained">Login</Button>
            <Button sx={{marginLeft:"10px"}} variant="contained">Signup</Button> 
       </>
     )
      }
    </Toolbar> 
   
</AppBar>

            </>
  )
}
 
export default Navbar 