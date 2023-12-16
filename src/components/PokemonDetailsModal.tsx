/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import { Modal, Card, CardContent, Typography, CircularProgress, Grid, CardMedia } from '@mui/material';
import { useDispatch } from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import { useEffect } from 'react';
import { getPokemonDetails } from '../store/pokemons/pokemonDetailSlice';
import { useAppSelector } from '../store/hooks';
import { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface PokemonDetailsModalProps {
  pokemonId: number;
  onClose: () => void;
}

const PokemonDetailsModal: React.FC<PokemonDetailsModalProps> = ({ pokemonId, onClose }) => {
  const dispatch = useDispatch();
  const pokemonDetailRedux = useAppSelector((state) => state.pokemonDetails);

  const dispatchTyped = dispatch as ThunkDispatch<RootState, any, AnyAction>;

  useEffect(() => {
    dispatchTyped(getPokemonDetails(pokemonId));
  }, [dispatchTyped, pokemonId]);

  if (pokemonDetailRedux.loading) {
    return <CircularProgress />;
  }

  const pokemonDetails = pokemonDetailRedux.details;

  return (
    <Modal open={true} onClose={onClose} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Card style={{ width: '300px' }}>
        <CardContent style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
          <CloseIcon onClick={onClose} style={{ alignSelf: 'flex-end' }} />
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <CardMedia component="img" alt={pokemonDetails?.name} image={pokemonDetails?.sprites.back_default} />
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            >
              <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                {pokemonDetails?.name}
              </Typography>
              <Typography>
                <b>Id:</b> {pokemonDetails?.id}
              </Typography>
              <Typography style={{ fontWeight: 'bold' }}>Habilidades:</Typography>
              {pokemonDetails?.abilities.map((ability, index) => (
                <Typography key={index}>{ability.ability.name}</Typography>
              ))}
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Modal>
  );
};

export default PokemonDetailsModal;
