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
interface Ability {
  is_hidden: boolean;
  slot: number;
  ability: NamedAPIResource;
}

interface NamedAPIResource {
  name: string;
  url: string;
}

interface VersionGameIndex {
  game_index: number;
  version: NamedAPIResource;
}

interface PokemonHeldItem {
  item: NamedAPIResource;
  version_details: PokemonHeldItemVersion[];
}

interface PokemonHeldItemVersion {
  version: NamedAPIResource;
  rarity: number;
}

interface PokemonMove {
  move: NamedAPIResource;
  version_group_details: PokemonMoveVersion[];
}

interface PokemonMoveVersion {
  move_learn_method: NamedAPIResource;
  version_group: NamedAPIResource;
  level_learned_at: number;
}

interface PokemonSprites {
  front_default: string;
  front_shiny: string;
  front_female: string | null;
  front_shiny_female: string | null;
  back_default: string;
  back_shiny: string;
  back_female: string | null;
  back_shiny_female: string | null;
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

interface PokemonsType {
  pokemons: Pokemon[];
}
const initialState: PokemonsType = {
  pokemons: []
};

export const fetchPokemonList = createAsyncThunk('pokemon/fetchPokemonList', async () => {
  try {
    const response = await apiPokemon.get('/pokemon?limit=20');
    const data = await response.data;

    if (response.status === 200) {
      return data;
    }
  } catch (error) {
    return [];
  }
});

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPokemonList.pending, (state) => {
      return state;
    }),
      builder.addCase(fetchPokemonList.fulfilled, (state, action) => {
        state.pokemons = action.payload.map((pokemon: Pokemon, index: number) => ({
          id: index + 1,
          name: pokemon.name,
          sprites: {
            front_default: pokemon.sprites.front_default
          }
        }));

        return state;
      });
  }
});
export default pokemonSlice.reducer;
