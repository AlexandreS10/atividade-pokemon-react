/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { PokemonType } from '../store/pokemons/pokemonSlice';

export interface PokemonCardProps {
  pokemon: PokemonType;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  return (
    <Card>
      <CardMedia component="img" alt={pokemon.name} image={pokemon.sprites.front_default} />
      <CardContent>
        <Typography variant="h4">{pokemon.name}</Typography>
        <Typography>ID: {pokemon.id}</Typography>
        <Typography>Tamanho: {pokemon.height}</Typography>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
