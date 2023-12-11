import { Typography } from '@mui/material';
import React, { useState,useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const  SoilMoisture= () => {
    const [soilMoisture, setSoilMoisture] = useState("");
    const[soilMoistureLevel,setSoilMoistureLevel]=useState("");

    const handleSoilAdjust = () =>{
     
     const soilMoistureThreshold=JSON.stringify({soilMoistureLevel});
     socket.send(soilMoistureThreshold);
    }
    useEffect(() => {
        const socket = new WebSocket('ws://localhost:3001');
        socket.addEventListener('message', (event) => {
          const receivedData = event.data;
          setSoilMoisture(receivedData);
        });
        return () => {
          socket.close();
        };
      }, [soilMoisture]); 
    
    return(
    <>
        <h3>The Current Soil Moisture level:</h3>
        <TextField
            id="filled-read-only-input"
            placeholder="soil moisture level "
            value={soilMoisture}
            InputProps={{
            readOnly: true,
            }}
            variant="filled"
            color="success"
            fullWidth
        />
        <h3>Set the Soil Moisture Level to Your Preference</h3>
        <TextField id="filled-basic" color="success"
        fullWidth 
        value={soilMoistureLevel} 
        onChange={(e) => setSoilMoistureLevel(e.target.value)} 
        label="Enter your desired soil moisture level..." 
        variant="filled" />
        <Button variant="contained" color="success" onClick={handleSoilAdjust} >Adjust Soil Moisture</Button>
    </>);
}
export default SoilMoisture;