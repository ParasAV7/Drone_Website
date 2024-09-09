import { Container, Typography } from '@mui/material';

import IDForm from '../../components/IDForm';

export default function Battery1Page() {
  return (
    <IDForm batteryType="Battery Type 1" />
  );
}


export default function Battery1() {
  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Battery Type 1 Specifications
      </Typography>
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
    </Container>
  );
}
