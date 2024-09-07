import { Container, Typography } from '@mui/material';

export default function Battery3() {
  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Battery Type 3 Specifications
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Capacity:</strong> 3500mAh
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Charging Time:</strong> 45 minutes
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Flight Time:</strong> 20 minutes
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Energy Efficiency:</strong> Low
      </Typography>
      <Typography variant="body1" gutterBottom>
        <strong>Details:</strong> Great for lightweight drones with short-range use.
      </Typography>
    </Container>
  );
}
