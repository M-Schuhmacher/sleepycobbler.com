import { Outlet } from "react-router-dom";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function Layout() {
   return (
      <>
         <AppBar position="static" sx={{ backgroundColor: "#000000" }}>
            <Container maxWidth="xl">
               <Toolbar disableGutters>
                  <Typography
                     component="a"
                     href="/"
                     sx={{
                        width: '100%',
                        fontFamily: 'Source Code Pro, sans-serif',
                        textDecoration: 'none',
                        color: 'white',
                     }}
                  >
                     The Sleepy Cobbler's Workshop
                  </Typography>
                  <Container sx={{ display: "flex", justifyContent: 'flex-end' }}>
                     <Typography
                        component="a"
                        href="/about"
                        sx={{
                           fontFamily: 'Source Code Pro, sans-serif',
                           textDecoration: 'none',
                           color: 'white',
                           m: '5px'
                        }}
                     >
                        About
                     </Typography>
                     <Typography
                        component="a"
                        href="/contact"
                        sx={{
                           fontFamily: 'Source Code Pro, sans-serif',
                           textDecoration: 'none',
                           color: 'white',
                           m: '5px'
                        }}
                     >
                        Contact
                     </Typography>
                  </Container>
               </Toolbar>
            </Container>
         </AppBar>
         <Outlet />
      </>
   );
}
export default Layout;