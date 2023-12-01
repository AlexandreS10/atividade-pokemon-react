import React from 'react';
import { Typography, Grid } from '@mui/material';

const Pokedex: React.FC = () => {
  return (
    <div>
      <Typography variant="h3">pokédex</Typography>
      <Grid container spacing={2}></Grid>
    </div>
  );
};

export default Pokedex;
