/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import { ButtonAppBar } from '../components/Navbar';
import PokemonCard from '../components/PokemonCard';
import { useAppSelector } from '../store/hooks';

const Pokedex: React.FC = () => {
  const pokedex = useAppSelector((state) => state.pokedex.pokedex);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <ButtonAppBar />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Typography variant="h3">pokédex</Typography>
        </div>
        <Grid container spacing={2} mt={2}>
          {pokedex.map((pokemon) => (
            <Grid item key={pokemon.id} xs={12} sm={6} md={4} lg={3}>
              <PokemonCard pokemon={pokemon} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default Pokedex;
