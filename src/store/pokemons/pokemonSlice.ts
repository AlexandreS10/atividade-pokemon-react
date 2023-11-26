import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { apiPokemon } from '../../services';

export interface Pokemon {
    id: number;
    name: string;
    base_experience: number;
    height: number;
    is_default: boolean;
    order: number;
    weight: number;
    abilities: Ability[];
    forms: NamedAPIResource[];
    game_indices: VersionGameIndex[];
    held_items: PokemonHeldItem[];
    location_area_encounters: string;
    moves: PokemonMove[];
    sprites: PokemonSprites;
    species: NamedAPIResource;
    stats: PokemonStat[];
    types: PokemonType[];
}

interface NotesType {
    notes: NoteType[];
    loading: boolean;
  }

const initialState: NotesType = {
  notes: [],
  loading: false
};

export const getPokemon = createAsyncThunk('notes/getNotes', async () => {
  const response = await apiPokemon.get('/notes');

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