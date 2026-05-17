"use client";

import React, { useEffect, useState } from "react";
import styles from "./SearchBar.module.scss";

import { useDebounce } from "@/hooks/useDebounce";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";

import { setSearchText } from "@/redux/slices/uiSlice";

const SearchBar = () => {
  const dispatch = useAppDispatch();
  const { searchText } = useAppSelector((state) => state.ui);
  const [input, setInput] = useState<string>(searchText);
  const debounced = useDebounce(input, 500);

  useEffect(() => {
    dispatch(setSearchText(debounced));
  }, [debounced]);

  return (
    <input
      className={styles.search}
      type="text"
      placeholder="Search Pokémon..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
    />
  );
};

export default React.memo(SearchBar);
