import { combineReducers } from '@reduxjs/toolkit';
import pokemonSlice from '../pokemons/pokemonSlice';
import pokemonDetailSlice from '../pokemons/pokemonDetailSlice';
import pokedexSlice from '../pokemons/pokedexSlice';

export default combineReducers({
  pokemons: pokemonSlice,
  pokemonDetails: pokemonDetailSlice,
  pokedex: pokedexSlice
});
