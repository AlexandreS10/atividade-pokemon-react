import React, { useEffect } from 'react';
import { Button, Grid } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../store/hooks';
import { fetchPokemonList } from '../store/pokemons/pokemonSlice';

const PokemonList: React.FC = () => {
  const dispatch = useDispatch();
  const pokemonsRedux = useAppSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(fetchPokemonList());
  }, [dispatch]);
  return (
    <Grid container spacing={2}>
      {pokemonsRedux.map((pokemon) => (
        <Grid item key={pokemon.id} xs={12} sm={6} md={4} lg={3}>
          {/* Renderiza os componentes do MUI para exibir os detalhes do Pokémon */}
          <div>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <p>{pokemon.name}</p>
            <Button
              variant="contained"
              onClick={() => {
                /* Implemente a lógica para detalhes do Pokémon */
              }}
            >
              Detalhes
            </Button>
            <Button
              variant="contained"
              onClick={() => {
                /* Implemente a lógica para adicionar à Pokedex */
              }}
            >
              Adicionar à Pokedex
            </Button>
          </div>
        </Grid>
      ))}
    </Grid>
  );
};

export default PokemonList;
