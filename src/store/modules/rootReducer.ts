import { combineReducers } from '@reduxjs/toolkit';
import pokemonSlice from '../pokemons/pokemonSlice';
import pokemonDetailSlice from '../pokemons/pokemonDetailSlice';

export default combineReducers({
  pokemons: pokemonSlice,
  pokemonDetails: pokemonDetailSlice
});
