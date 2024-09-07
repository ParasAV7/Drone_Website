const fs = require('fs');
const path = require('path');

const foldersToCreate = [
  'components',
  'styles',
  'pages',
];

const filesToCreate = {
  'components/Navbar.js': `import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import Link from 'next/link';

export default function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Drone Batteries
        </Typography>
        <Link href="/" passHref>
          <Button color="inherit">Home</Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
`,
  'styles/theme.js': `import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default theme;
`,
  'pages/index.js': `import { Container, Grid, Card, CardContent, CardActions, Button, Typography } from '@mui/material';
import Link from 'next/link';

export default function Home() {
  const batteries = [
    { name: "Battery Type 1", link: "/battery1" },
    { name: "Battery Type 2", link: "/battery2" },
    { name: "Battery Type 3", link: "/battery3" },
  ];

  return (
    <Container maxWidth="lg" sx={{ marginTop: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center">
        Drone Batteries Overview
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {batteries.map((battery, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2">
                  {battery.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Learn more about this battery's capacity, efficiency, and more.
                </Typography>
              </CardContent>
              <CardActions>
                <Link href={battery.link} passHref>
                  <Button size="small" color="primary">
                    Learn More
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
`,
  'pages/battery1.js': `import { Container, Typography } from '@mui/material';

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
`,
  // Add more files as necessary for battery2.js, battery3.js, etc.
};

foldersToCreate.forEach(folder => {
  if (!fs.existsSync(folder)) {
    fs.mkdirSync(folder);
  }
});

Object.entries(filesToCreate).forEach(([filePath, content]) => {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(filePath, content);
});

console.log('Project structure created!');
