import React from 'react'
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { AddCircleOutlineOutlined, MoveToInboxOutlined, SubjectOutlined } from '@mui/icons-material';
import { Link, useNavigate, Location, useLocation } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import { color } from '@mui/system';
import { createTheme, ThemeProvider } from '@mui/material/styles';


function Layout({children}) {   
  const drawerWidth = '15%';
  const history = useNavigate()
  const location = useLocation()
  const theme = createTheme({
    active:{
      "&:active":{
        background:'#4dd0e1'
      },
  }})
  const menuItem = [
    {
      text : "My Notes",
      icon: <SubjectOutlined  color='secondary'/>,
      path: '/notes'
    },
    {
      text : "Create Notes",
      icon: <AddCircleOutlineOutlined color='secondary'/>,
      path: '/create'
    },
    {
      text : "Inbox Notes",
      icon: <MoveToInboxOutlined color='secondary'/>,
      path: '/notes'
    }
  ]
  return (
    
    <div style={{
     display:'flex',
     
    }}>

      {/* side drawer */}
     <Drawer
     variant='permanent'
     anchor='left'
     sx={{  width: drawerWidth,
      '& .MuiDrawer-paper': {
        width: drawerWidth,
        boxSizing: 'border-box',
      },
       
    }}
     >
      <div>
        <Typography variant='h5'>
        Notes Drawer
        </Typography>
      </div>

    {/* list / links */}
      <List>
        {menuItem.map((el,i)=>(
          <ThemeProvider theme={theme}>
          <ListItemButton
          sx={{
            "&:hover":{
              background:'#4dd0e1'
            },
            "&:active":{
               background:'silver'
            }
  
          }}
          >
          <Link
          style={{
            textDecoration: 'none',
            color:'purple',
          
           }}
           to= {el.text == 'My Notes'? '/notes': '/create'}>
          
         <ListItem
         
         key={i}
         onClick={()=>history(el.path)}
         to={location.pathname == el.path ? theme.active:null}
         >
         <ListItemIcon>{el.icon}</ListItemIcon>
         <ListItemText  primary={el.text}/>
         </ListItem>
         </Link>
         </ListItemButton>
         </ThemeProvider>
        ))}
      </List>

     </Drawer>

      <div
      style={{background:'#f9f9f9', width:'100%'}}
      >
   {children}
    </div>
    </div>
  
  )
}

export default Layout
