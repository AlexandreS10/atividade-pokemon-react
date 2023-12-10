/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { PokemonType } from '../store/pokemons/pokemonSlice';
import PokemonDetailsModal from './PokemonDetailsModal';
import { useDispatch } from 'react-redux';
import { addToPokedex } from '../store/pokemons/pokedexSlice';
import { useEffect, useState } from 'react';

export interface PokemonCardProps {
  pokemon: PokemonType;
}
const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [result, setResult] = useState<any | null>(null);
  const [listPokemon, setListPokemon] = React.useState<PokemonType[]>([]);
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleAddToPokedex = () => {
    dispatch(addToPokedex(pokemon));
  };
  useEffect(() => {
    setListPokemon([...listPokemon, result]);
  }, [result]);
  return (
    <Card>
      <CardMedia component="img" alt={pokemon.name} image={pokemon.sprites.front_default} />
      <CardContent>
        <Typography variant="h4">{pokemon.name}</Typography>
        <Typography># {pokemon.id}</Typography>
        <Typography>Altura: {pokemon.height / 10} M</Typography>
        <Typography>Peso: {pokemon.weight} Kg</Typography>
        <Button variant="contained" onClick={handleOpenModal}>
          Ver detalhes
        </Button>
        <Button variant="contained" color="primary" onClick={handleAddToPokedex}>
          Adicionar à Pokedex
        </Button>
        {isModalOpen && <PokemonDetailsModal pokemonId={pokemon.id} onClose={handleCloseModal} />}
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
