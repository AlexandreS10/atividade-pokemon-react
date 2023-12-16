import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PokemonType } from './pokemonSlice';
import { RootState } from '..';

interface PokedexSliceType {
  pokedex: PokemonType[];
}

const initialState: PokedexSliceType = {
  pokedex: []
};

const pokedexSlice = createSlice({
  name: 'pokedex',
  initialState,
  reducers: {
    addToPokedex: (state, action: PayloadAction<PokemonType>) => {
      state.pokedex.push(action.payload);
    },
    removeFromPokedex: (state, action: PayloadAction<number>) => {
      state.pokedex = state.pokedex.filter((pokemon) => pokemon.id !== action.payload);
    }
  }
});

export const { addToPokedex, removeFromPokedex } = pokedexSlice.actions;

export const selectPokedex = (state: RootState) => state.pokedex.pokedex;

export default pokedexSlice.reducer;
