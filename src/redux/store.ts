import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./slices/pokemonSlice";
import typeReducer from "./slices/typeSlice";
import uiReducer from "./slices/uiSlice";

export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
    types: typeReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
