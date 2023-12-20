/* eslint-disable @typescript-eslint/no-explicit-any */
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

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
export interface PokemonsSliceType {
  count: number;
  next: string | null;
  previous: string | null;
  pokemons: PokemonType[];
  loading: boolean;
  currentPage: number;
  totalPages: number;
}

const initialState: PokemonsSliceType = {
  count: 0,
  next: '',
  previous: '',
  pokemons: [],
  loading: false,
  currentPage: 1, // Adicione a informação da página atual ao estado inicial
  totalPages: 1
};

export const getPokemons = createAsyncThunk('pokemons/getPokemons', async (urlParams: string | undefined) => {
  const url = urlParams ? urlParams : 'https://pokeapi.co/api/v2/pokemon';
  try {
    const response = await axios.get(url); //faco uma requisicão get com o axios

    if (response.status === 200) {
      // caso der certo
      const { data } = response; //  desestruturo os dados da requisição atribuindo a uma variavel

      const promises = data.results.map(async (item: any) => {
        const response = await axios.get(item.url);

        if (response.status === 200) {
          const { data } = response;

          const pokemon: PokemonType = {
            id: data.id,
            name: data.name,
            height: data.height,
            weight: data.weight,
            sprites: {
              back_default: data.sprites.back_default,
              front_default: data.sprites.front_default
            },
            types: data.types
          };
          return pokemon;
        }
      });
      const pokemons = await Promise.all(promises);
      return {
        count: data.count,
        next: data.next,
        previous: data.previous,
        pokemons: pokemons
      };
    }
  } catch (error) {
    throw 'Erro ao buscar pokemons';
  }
});

const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: initialState,
  reducers: {
    clear: () => {
      return initialState;
    },
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
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
        state.count = action.payload?.count;
        state.next = action.payload?.next;
        state.previous = action.payload?.previous;
        state.pokemons = action.payload?.pokemons || [];
        state.loading = false;
      });
  }
});
export const { clear, setCurrentPage } = pokemonSlice.actions;
export default pokemonSlice.reducer;
