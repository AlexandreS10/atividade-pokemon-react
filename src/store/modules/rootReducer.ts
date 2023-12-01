import { combineReducers } from '@reduxjs/toolkit';
import pokemonSlice from '../pokemons/pokemonSlice';

export default combineReducers({
  pokemons: pokemonSlice
});
