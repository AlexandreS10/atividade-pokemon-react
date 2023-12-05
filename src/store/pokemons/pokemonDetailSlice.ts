/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '..';

export interface Pokemon {
  id: number;
  name: string;
  species: NamedAPIResource;
  location_area_encounters: string;
  sprites: {
    back_default: string;
  };
  abilities: Ability[];
  held_items: HeldItem[];
  moves: Move[];
  stats: PokemonStat[];
  types: PokemonType[];
}

interface NamedAPIResource {
  name: string;
  url: string;
}

interface Ability {
  slot: number;
  ability: NamedAPIResource;
}

interface HeldItem {
  item: NamedAPIResource;
}

interface Move {
  move: NamedAPIResource;
}

interface PokemonStat {
  stat: NamedAPIResource;
  effort: number;
  base_stat: number;
}

interface PokemonType {
  slot: number;
  type: NamedAPIResource;
}

interface PokemonDetailsState {
  details: Pokemon | null;
  loading: boolean;
  error: string | null;
}

const initialState: PokemonDetailsState = {
  details: null,
  loading: false,
  error: null
};

export const getPokemonDetails = createAsyncThunk(
  'pokemonDetails/getPokemonDetails',
  async (pokemonId: number, { rejectWithValue }) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);

const pokemonDetailsSlice = createSlice({
  name: 'pokemonDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPokemonDetails.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getPokemonDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.details = action.payload;
      })
      .addCase(getPokemonDetails.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  }
});
export const selectPokemonDetails = (state: RootState) => state.pokemonDetails;
export default pokemonDetailsSlice.reducer;
