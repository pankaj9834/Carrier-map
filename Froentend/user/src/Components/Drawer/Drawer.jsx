import React, {useState} from 'react'
import {Drawer,IconButton,List,ListItemButton,ListItemIcon,ListItemText} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';

function DrawerComp() {
  const [openDrawer,setOpenDrawer]= useState(false);
  const pages= ['Home','Services','AboutUs','ContactUs','Login','Logout'];

  return (<React.Fragment>
    <Drawer open={openDrawer} onClose={()=>setOpenDrawer(false)}>
          <List>
            {
              pages.map((page,ind)=>(
                <ListItemButton onClick={()=>{setOpenDrawer(false)}} key={ind}> 
                  <ListItemIcon>
                      <ListItemText>{page}</ListItemText>
                  </ListItemIcon>
              </ListItemButton>
              ))
            }
               
          </List>
    </Drawer>
    <IconButton sx={{color:"white",marginLeft:"auto"}} onClick={()=>setOpenDrawer(!openDrawer)} >
        <MenuIcon/>
    </IconButton>
    </React.Fragment> 
  )  
}

export default DrawerComp