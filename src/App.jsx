import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import NavBar from './NavBar'
import IrrigationControl from './IrrigationControl';
import {Route ,BrowserRouter as Router, Routes  } from 'react-router-dom';
import SoilMoisture from './SoilMoisture';
function App() {

  return (
    <div>
      <NavBar/>
      <Routes>
        <Route path="/" element={<IrrigationControl/>} />
        <Route path="/SoilMoisture" element={<SoilMoisture/>}/>
      </Routes>
    </div>
  )
 }

export default App
