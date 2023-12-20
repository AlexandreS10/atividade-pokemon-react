/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from 'react';
import { Box, CircularProgress, Grid, Pagination, Stack } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useEffect } from 'react';
import { getPokemons } from '../store/pokemons/pokemonSlice';
import { ButtonAppBar } from '../components/Navbar';
import PokemonCard from '../components/PokemonCard';
import Footer from '../components/Footer';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const pokemonsRedux = useAppSelector((state) => state.pokemons);
  const countPokemons = useAppSelector((state) => state.pokemons.count);

  const [page, setPage] = useState(1);

  useEffect(() => {
    if (page === 1) {
      dispatch(getPokemons());
    } else {
      const offset = (page - 1) * 20;
      dispatch(getPokemons(`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=${offset}`));
    }
  }, [page]);

  if (pokemonsRedux.loading) {
    return <CircularProgress />;
  }
  return (
    <Box
      style={{
        backgroundImage: "url('./image/raios-de-grunge.avif')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
      sx={{ flexGrow: 1 }}
    >
      <ButtonAppBar />
      <Grid container spacing={2} mt={2}>
        {pokemonsRedux.pokemons.map((pokemon) => (
          <Grid item key={pokemon.id} xs={12} sm={6} md={4} lg={3}>
            <PokemonCard pokemon={pokemon} />
          </Grid>
        ))}
      </Grid>
      <Stack spacing={2}>
        <Pagination
          color="primary"
          page={page}
          onChange={(event, value) => setPage(value)}
          count={Math.ceil(countPokemons / 20)}
        />
      </Stack>
      <Footer />
    </Box>
  );
};

export default Home;
