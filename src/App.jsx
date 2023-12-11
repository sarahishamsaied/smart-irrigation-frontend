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
import {Route ,BrowserRouter as Router, Routes  } from 'react-router-dom';
import SoilMoisture from './SoilMoisture';
function App() {

  return (
    <div>
      <NavBar/>
    <Router>
      <Routes>
        <Route path="/" element={<IrrigationControl/>} />
        <Route path="/SoilMoisture" element={<SoilMoisture/>}/>
      </Routes>
    

    </Router>
    </div>
  )
 }

export default App
