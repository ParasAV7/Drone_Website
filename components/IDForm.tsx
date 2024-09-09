import { useState } from 'react';
import { Container, TextField, Button, Typography } from '@mui/material';

interface IDFormProps {
  batteryType: string;
}

export default function IDForm({ batteryType }: IDFormProps) {
  const [userID, setUserID] = useState<string>('');
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Simple check for demo purposes. Replace with your actual ID verification logic.
    if (userID === '12345') {
      setIsAuthorized(true);
    } else {
      alert('Invalid ID, please try again.');
    }
  };

  if (isAuthorized) {
    return (
      <Container>
        <Typography variant="h4" component="h1" gutterBottom>
          {batteryType} Specifications
        </Typography>
        {/* Specifications content based on the batteryType */}
        {batteryType === "Battery Type 1" && (
          <>
            <Typography variant="body1" gutterBottom>
              <strong>Capacity:</strong> 4500mAh
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Charging Time:</strong> 1 hour
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Flight Time:</strong> 25 minutes
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Energy Efficiency:</strong> High
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Details:</strong> Ideal for medium to long-range drones.
            </Typography>
          </>
        )}
        {batteryType === "Battery Type 2" && (
          <>
            <Typography variant="body1" gutterBottom>
              <strong>Capacity:</strong> 6000mAh
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Charging Time:</strong> 1.5 hours
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Flight Time:</strong> 35 minutes
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Energy Efficiency:</strong> Medium
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Details:</strong> Best for high-powered and heavy-duty drones.
            </Typography>
          </>
        )}
        {/* Add more cases as necessary for other battery types */}
      </Container>
    );
  }

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Please enter your ID to view the specifications for {batteryType}
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          label="User ID"
          variant="outlined"
          fullWidth
          value={userID}
          onChange={(e) => setUserID(e.target.value)}
          sx={{ marginBottom: 2 }}
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </form>
    </Container>
  );
}
