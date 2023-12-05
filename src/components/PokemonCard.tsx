/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { PokemonType } from '../store/pokemons/pokemonSlice';
import PokemonDetailsModal from './PokemonDetailsModal';

export interface PokemonCardProps {
  pokemon: PokemonType;
}

const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
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

        {isModalOpen && <PokemonDetailsModal pokemonId={pokemon.id} onClose={handleCloseModal} />}
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
