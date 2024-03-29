/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { PokemonType } from '../store/pokemons/pokemonSlice';
import PokemonDetailsModal from './PokemonDetailsModal';
import { useDispatch, useSelector } from 'react-redux';
import { addToPokedex, removeFromPokedex } from '../store/pokemons/pokedexSlice';
import { useEffect, useState } from 'react';
import { RootState } from '../store';

export interface PokemonCardProps {
  pokemon: PokemonType;
}
const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
  const pokedex = useSelector((state: RootState) => state.pokedex.pokedex);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [result] = useState<any | null>(null);
  const [listPokemon, setListPokemon] = React.useState<PokemonType[]>([]);
  const dispatch = useDispatch();

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const handleAddToPokedex = () => {
    const isAdd = pokedex.some((p) => p.id === pokemon.id);
    if (isAdd) {
      dispatch(removeFromPokedex(pokemon.id));
    } else {
      dispatch(addToPokedex(pokemon));
    }
  };
  useEffect(() => {
    setListPokemon([...listPokemon, result]);
  }, [result]);
  return (
    <Card
      style={{
        backgroundImage: "url('./image/imagem-fundo-card.jpg')",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}
    >
      <CardMedia
        component="img"
        alt={pokemon.name}
        image={pokemon.sprites.front_default}
        style={{ display: 'flex', width: '50%', justifyContent: 'center' }}
      />
      <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
        <Typography variant="h4">{pokemon.name}</Typography>
        <Typography># {pokemon.id}</Typography>
        <Typography>Altura: {pokemon.height / 10} M</Typography>
        <Typography>Peso: {pokemon.weight} Kg</Typography>
        <Button variant="contained" onClick={handleOpenModal}>
          Ver detalhes
        </Button>
        <Button variant="contained" color="primary" onClick={handleAddToPokedex} style={{ backgroundColor: 'red' }}>
          {pokedex.some((p) => p.id === pokemon.id) ? 'Remover da Pokedex' : 'Adicionar à Pokedex'}
        </Button>
        {isModalOpen && <PokemonDetailsModal pokemonId={pokemon.id} onClose={handleCloseModal} />}
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
