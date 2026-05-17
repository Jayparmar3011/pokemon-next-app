import { createSlice } from "@reduxjs/toolkit";

interface UIState {
  viewMode: "grid" | "list";
  searchText: string;
}

const initialState: UIState = {
  viewMode: "grid",
  searchText: "",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setViewMode: (state, action) => {
      state.viewMode = action.payload;
    },

    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const { setViewMode, setSearchText } = uiSlice.actions;

export default uiSlice.reducer;
