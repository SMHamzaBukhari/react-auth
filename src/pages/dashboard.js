import * as React from 'react';
import './dashboard.css'
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useParams, useNavigate } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { useState } from 'react';
import { useEffect } from 'react';
import { getData } from '../config/routing/firebase/firebasemethods';


const drawerWidth = 240;

function Dashboard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [username, setUsername] = useState("");
const obj = {username};
const navigate = useNavigate();
useEffect(()=>{
  if(params.id){
    getData('users')
  }
})


const dashboard = () =>{
  navigate(`/dashboard/${username}`, {state: obj});
  }

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className='toolbar'>
      <Toolbar sx={{backgroundColor:"#323232"}}/>
     
      <List sx={{height:"100vh", color:"orange", backgroundColor:"#323232"}}>
        {['Dashboard', 'Profile', 'Analysis', 'Accounting', 'Projects'].map((text, index) => (
          <ListItem className='listItem' key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon className='listIcon' sx={{color:"orange"}}>
                {<ArrowForwardIosIcon  fontSize='smaller'/>}
              </ListItemIcon>
              <ListItemText primary={text} onClick={dashboard}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;
  const params = useParams();
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar className='nav'>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography sx={{color: "#323232"}} variant="h4" noWrap component="div">
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
      <div className='all'>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <div className='profile'>
        <AccountCircleRoundedIcon fontSize='large'/>
       <div className='user'>
          <Typography variant='h5'>
        {params.id}
        </Typography>
        <Typography variant='caption'>
        {params.id}@gmail.com
        </Typography>
        
        </div>
        </div>
     
      </Box> 
    </div>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};



export default Dashboard;