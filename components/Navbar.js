import { AppBar, Toolbar, Typography, Button } from '@mui/material';
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
