import { AppBar, Box, Grid, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
import React from 'react';

const pokedex: React.FC = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar style={{ backgroundColor: 'red' }}>
            <IconButton size="large" edge="start" color="inherit" aria-label="open drawer" sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, justifyContent: 'center', display: { xs: 'none', sm: 'block' } }}
            >
              <CatchingPokemonIcon style={{ fontSize: '50px' }} />
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <Grid container spacing={2}></Grid>
    </>
  );
};

export default pokedex;
