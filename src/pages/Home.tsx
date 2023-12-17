/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { Box, CircularProgress, Grid } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useEffect } from 'react';
import { getPokemons } from '../store/pokemons/pokemonSlice';
import { BasicPagination } from '../components/BasicPagination';
import { ButtonAppBar } from '../components/Navbar';
import PokemonCard from '../components/PokemonCard';

const Home: React.FC = () => {
  const dispatch = useAppDispatch();
  const pokemonsRedux = useAppSelector((state) => state.pokemons);
  const itemsPorPagina = 20;

  const totalPages = Math.ceil(pokemonsRedux.count / itemsPorPagina);

  useEffect(() => {
    // Ao montar o componente, buscar a primeira página de pokémons
    dispatch(getPokemons(1));
  }, []);

  useEffect(() => {
    dispatch(getPokemons(pokemonsRedux.currentPage));
  }, [pokemonsRedux.currentPage]);

  if (pokemonsRedux.loading) {
    return <CircularProgress />;
  }
  const handlePaginationChange = (page: number) => {
    dispatch(getPokemons(page));
  };

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
      <BasicPagination
        pageCount={totalPages}
        onChange={handlePaginationChange}
        currentPage={pokemonsRedux.currentPage}
      />
    </Box>
  );
};

export default Home;
