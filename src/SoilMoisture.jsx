import { Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const SoilMoisture = () => {
  const [soilMoisture, setSoilMoisture] = useState("");
  const [sckt, setSckt] = useState(null);
  const [soilMoistureLevel, setSoilMoistureLevel] = useState("");
  const [socket, setSocket] = useState(null);

  const handleSoilAdjust = () => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({ type: "threshold", soilMoistureLevel }));
    }
  };

  useEffect(() => {
    const newSocket = new WebSocket("ws://localhost:3001");
    setSocket(newSocket);

    newSocket.addEventListener("open", () => {
      console.log("WebSocket connection opened");
    });

    newSocket.addEventListener("message", (event) => {
      console.log("Received WebSocket event:", event);
      event = JSON.parse(event.data);
      console.log("Data from event:", event.soilMoistureLevel);
      console.log(event.currentMoistureLevel);
      setSckt(event.currentMoistureLevel);

      try {
        const receivedData = JSON.parse(event.data);
        console.log("Parsed data:", receivedData);

        if (receivedData.type === "threshold") {
          console.log(
            "Received threshold data:",
            receivedData.soilMoistureLevel
          );
          setSoilMoisture(receivedData.soilMoistureLevel);
        }
      } catch (error) {
        console.error("Error parsing JSON:", error);
      }
    });

    return () => {
      newSocket.close();
    };
  }, []);

  return (
    <>
      <h3>The Current Soil Moisture level:</h3>
      <TextField
        id="filled-read-only-input"
        placeholder="soil moisture level "
        value={sckt}
        InputProps={{
          readOnly: true,
        }}
        variant="filled"
        color="success"
        fullWidth
      />
      <h3>Set the Soil Moisture Level to Your Preference</h3>
      <TextField
        id="filled-basic"
        color="success"
        fullWidth
        value={soilMoistureLevel}
        onChange={(e) => setSoilMoistureLevel(e.target.value)}
        label="Enter your desired soil moisture level..."
        variant="filled"
      />
      <Button variant="contained" color="success" onClick={handleSoilAdjust}>
        Adjust Soil Moisture
      </Button>
      <p>Socket is{sckt}</p>
    </>
  );
};

export default SoilMoisture;
