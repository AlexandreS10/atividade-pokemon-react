/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export interface TypePokemonType {
  slot: number;
  type: {
    name: string;
    url: string;
  };
}

export interface PokemonType {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: TypePokemonType[];
  sprites: {
    front_default: string;
    back_default: string;
  };
}
export interface PokedexSliceType {
  pokedex: PokemonType[];
  loading: boolean;
}

const initialState: PokedexSliceType = {
  pokedex: [],
  loading: false
};

export const getPokemons = createAsyncThunk('pokemons/getPokemons', async () => {

const pokedexSlice = createSlice({
  name: 'pokedex',
  initialState: initialState,
  reducers: {
    clear: () => {
      return initialState;
    },
    addToPokedex: (state, action: PayloadAction<PokemonType>) => {
      state.pokedex.push(action.payload);
    },

    removeFromPokedex: (state, action: PayloadAction<number>) => {
      state.pokedex = state.pokedex.filter((pokemon) => pokemon.id !== action.payload);
    }
  },
  extraReducers(builder) {
    builder.addCase(getPokemons.pending, (state) => {
      state.loading = true;
      return state;
    }),
      builder.addCase(getPokemons.rejected, (state) => {
        state.loading = false;
        console.log('Erro no getPokemon');
      }),
      builder.addCase(getPokemons.fulfilled, (state, action) => {
        state.pokedex = action.payload?.pokemons || [];
        state.loading = false;
      });
  }
});
}
export const { clear, addToPokedex } = pokedexSlice.actions;
export default pokedexSlice.reducer;
