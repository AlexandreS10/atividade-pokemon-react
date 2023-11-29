import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from '@mui/material';
import { Pokemon } from '../store/pokemons/pokemonSlice';

interface PokemonDetailsProps {
  open: boolean;
  onClose: () => void;
  pokemon: Pokemon;
}

const PokemonDetails: React.FC<PokemonDetailsProps> = ({ open, onClose, pokemon }) => {
  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle> Detalhes</DialogTitle>
      <DialogContent>
        <Typography variant="body1">
          {pokemon.name}
          Altura: {pokemon.height}
          <br />
          Peso: {pokemon.weight}
          {/* ... */}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="contained">
          Fechar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default PokemonDetails;
