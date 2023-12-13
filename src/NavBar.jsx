import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import GrassOutlinedIcon from '@mui/icons-material/GrassOutlined';
import {Link} from "react-router-dom";
export default function NavBar() {
  const linkStyles = {
    textDecoration: 'none', 
    color: 'white', 
    fontFamily: 'monospace',
    fontSize: '16px',
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed"  style={{ width: '100%', backgroundColor: 'green'}}>
        <Toolbar>
         <GrassOutlinedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 500,
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            Smart Irrigation System
          </Typography>
          
         <Button color="inherit"><Link style={linkStyles} to="/" >Schedule</Link></Button> 
         <Button color="inherit"><Link style={linkStyles} to="/SoilMoisture" >Soil Moisture</Link></Button>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}