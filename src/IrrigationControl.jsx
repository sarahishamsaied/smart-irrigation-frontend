
import React, { useState } from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimeField } from '@mui/x-date-pickers/DateTimeField';
import Button from '@mui/material/Button';
import { Grid, Paper } from '@mui/material';

const IrrigationControl = () => {
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();
  const socket = new WebSocket('ws://localhost:3001'); //hanghayar el localhost port 3ala hasab el port fel backend 
  
  const handleStartInputChange = (event) => {
    setStartTime(event.target.value);
  };

  const handleEndInputChange = (event) => {
    setEndTime(event.target.value);
  };
  
  const handleSaveClick = () => {
    if (!startTime || !endTime) {
        alert('Please select both start and end date-times.');
        return;
      }
      const startDateTime = new Date(startTime);
      const endDateTime = new Date(endTime);
  
      if (endDateTime <= startDateTime) {
        alert('End date and time must be after the start date and time.');
        return;
      }
    const timeRange = JSON.stringify({ startTime, endTime });
    socket.send(timeRange);
  };
  return (
    <div>
        <Grid container spacing={5}>
        <Grid item xs={12}>
            <h2>Welcome to Our Smart Irrigation System</h2> 
        </Grid>
        <Paper sx={{padding:7}}>" a cutting-edge solution designed to transform the way you manage and optimize your garden or agricultural watering needs. 
        Harnessing the power of technology, our system integrates seamlessly with your environment, utilizing data-driven insights to deliver precise and efficient irrigation. 
        Say goodbye to guesswork and hello to intelligent watering schedules tailored to your specific plant types and local weather conditions. Whether you're a seasoned gardener or a farming enthusiast,
        our Smart Irrigation System empowers you with the tools to conserve water, save time, and foster healthier plant growth. Explore a greener and more sustainable approach to irrigation with us – where innovation meets nature!</Paper>
    
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid item xs={6}>
                <DateTimeField 
                label="Pick a Start Date and Time " 
                slotProps= { { textField: { fullWidth: true } } }
                value={startTime}
                disablePast
                onChange={setStartTime}
                required
                />
            </Grid>
            <Grid item xs={6}>
                <DateTimeField 
                label="Pick an End Date and Time " 
                slotProps= { { textField: { fullWidth: true } } }
                value={endTime}
                disablePast
                onChange={setEndTime}
                required 
                />
            </Grid>
        </LocalizationProvider>
        <Grid item xs={6}>
            <Button variant="contained" style={{  backgroundColor: 'green'}} onClick={handleSaveClick} >Save</Button>
        </Grid>
        <Grid item xs={6}>
            <Button variant="outlined" color="success">Cancel</Button>
        </Grid>
        </Grid>
    </div>
  );
};

export default IrrigationControl;
