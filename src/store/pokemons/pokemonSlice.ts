import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiPokemon } from '../../services';

export interface PokemonType {
  id: string;
  name: string;
  tamanho: number;
}
export interface PokemonsType {
  pokemons: PokemonType[];
}

const initialState: PokemonsType = {
  pokemons: []
};
export const getPokemon = createAsyncThunk('pokemons', async (name: PokemonsType) => {
  const response = await apiPokemon.get(`/pokemon,${name}`);

  if (response.status === 200) {
    return response.data;
  }

  return [];
});

const pokemonSlice = createSlice({
  name: 'pokemons',
  initialState: initialState,
  reducers: {
    clear: () => {
      return initialState;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getPokemon.pending, (state) => {
      return state;
    }),
      builder.addCase(getPokemon.fulfilled, (state, action) => {
        state.pokemons = action.payload;

        return state;
      });
  }
});

export const { clear } = pokemonSlice.actions;
export default pokemonSlice.reducer;
