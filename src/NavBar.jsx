import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import GrassOutlinedIcon from '@mui/icons-material/GrassOutlined';
export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed"  style={{ width: '100%', backgroundColor: 'green'}}>
        <Toolbar>
         <GrassOutlinedIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          {/* <Typography sx={{fontSize:15,fontWeight:'bold'}}  >
            Smart Irrigation System
          </Typography> */}
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
          
          <Button color="inherit"  >Schedule</Button>
          <Button color="inherit" >Soil Moisture</Button>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}