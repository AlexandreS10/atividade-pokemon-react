/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Box, CircularProgress, Grid } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useEffect } from 'react';
import { getPokemons } from '../store/pokemons/pokemonSlice';
import PokemonCard from '../components/pokemonCard';
import { ButtonAppBar } from '../components/navbar';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const pokemonsRedux = useAppSelector((state) => state.pokemons);

  useEffect(() => {
    setTimeout(() => {
      dispatch(getPokemons());
    }, 300);
  }, []);

  if (pokemonsRedux.loading) {
    return <CircularProgress />;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <ButtonAppBar />
      <Grid container spacing={2} mt={2}>
        {pokemonsRedux.pokemons.map((pokemon) => (
          <Grid item key={pokemon.id} xs={12} sm={6} md={4} lg={3}>
            <PokemonCard pokemon={pokemon} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Home;
