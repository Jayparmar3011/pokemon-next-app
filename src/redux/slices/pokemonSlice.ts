import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchPokemonList, fetchPokemonByType } from "@/services/pokemonApi";

interface PokemonState {
  pokemons: any[];
  loading: boolean;
  error: string | null;
  selectedType: string;
  page: number;
  totalCount: number;
}

export const getPokemons = createAsyncThunk(
  "pokemon/getPokemons",
  async (
    {
      page,
      type,
    }: {
      page: number;
      type: string;
    },
    { signal },
  ) => {
    if (type === "all") {
      return await fetchPokemonList(20, page * 20, signal);
    }

    return await fetchPokemonByType(type, signal);
  },
);

const initialState: PokemonState = {
  pokemons: [],
  loading: true,
  error: null,
  selectedType: "all",
  page: 0,
  totalCount: 0,
};

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setSelectedType: (state, action) => {
      state.selectedType = action.payload;
    },

    setPage: (state, action) => {
      state.page = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getPokemons?.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(getPokemons?.fulfilled, (state, action) => {
        state.loading = false;

        if (action?.payload?.results) {
          state.pokemons = action?.payload?.results;
          state.totalCount = action?.payload?.count;
        } else {
          state.pokemons = action?.payload?.pokemon.map((p: any) => p.pokemon);
          state.totalCount = action?.payload?.pokemon.length;
        }
      })

      .addCase(getPokemons?.rejected, (state, action) => {
        state.loading = false;

        if (action?.error?.name !== "AbortError") {
          state.error = "Failed to fetch Pokémon";
        }
      });
  },
});

export const { setSelectedType, setPage } = pokemonSlice.actions;

export default pokemonSlice.reducer;
