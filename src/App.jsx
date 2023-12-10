import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimeField } from '@mui/x-date-pickers/DateTimeField';
import Button from '@mui/material/Button';
import NavBar from './NavBar'
import { Grid, Paper } from '@mui/material';
import IrrigationControl from './IrrigationControl';
function App() {

  return (
    <div>
      <NavBar/>
      <IrrigationControl/> 
    </div>
  )
 }

export default App
