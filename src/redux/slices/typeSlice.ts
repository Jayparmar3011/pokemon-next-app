import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { fetchPokemonTypes } from "@/services/pokemonApi";

export const getTypes = createAsyncThunk(
  "types/getTypes",
  async (_, { signal }) => {
    const data = await fetchPokemonTypes(signal);
    return data.results;
  },
);

const typeSlice = createSlice({
  name: "types",
  initialState: {
    types: [],
    loading: false,
  },

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getTypes.pending, (state) => {
        state.loading = true;
      })

      .addCase(getTypes.fulfilled, (state, action) => {
        state.loading = false;
        state.types = action.payload;
      });
  },
});

export default typeSlice.reducer;
