import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: 'red' }}>
      <Container>
        <Toolbar style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <Typography variant="body1">© {new Date().getFullYear()} Growdev.</Typography>
          <Typography variant="body1" color="inherit">
            Desenvolvido por: <b>{'Alexandre Santos '}</b>
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Footer;
