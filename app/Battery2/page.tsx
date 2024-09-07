import { Container, Typography } from '@mui/material';

export default function Battery2() {
  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Battery Type 2 Specifications
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Capacity:</strong> 6000mAh
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Charging Time:</strong> 1.5 hour
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
    </Container>
  );
}
