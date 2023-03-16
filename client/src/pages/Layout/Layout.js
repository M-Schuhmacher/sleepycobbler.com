import { Outlet } from "react-router-dom";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Layout() {
  return (
    <>
    <AppBar position="static" sx={{backgroundColor: "#696969"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: 'flex',
              fontFamily: 'Source Code Pro, monospace',
              fontWeight: 700,
              textDecoration: 'none',
              color: 'white'
            }}
          >
            The Sleepy Cobbler's Workshop
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
    <Outlet />
    </>
  );
}
export default Layout;