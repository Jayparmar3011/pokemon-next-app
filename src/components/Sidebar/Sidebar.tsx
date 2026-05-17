"use client";

import React, { useEffect, useCallback } from "react";
import styles from "./Sidebar.module.scss";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { getTypes } from "@/redux/slices/typeSlice";
import {
  setSelectedType,
  setPage,
  getPokemons,
} from "@/redux/slices/pokemonSlice";

const Sidebar = () => {
  const dispatch = useAppDispatch();
  const { types } = useAppSelector((state) => state.types);
  const { selectedType } = useAppSelector((state) => state.pokemon);

  useEffect(() => {
    dispatch(getTypes());
  }, []);

  const handleTypeClick = useCallback((type: string) => {
    dispatch(setSelectedType(type));
    dispatch(setPage(0));
  }, []);

  return (
    <aside className={styles.sidebar}>
      <h2>Pokemon Types</h2>

      <button
        className={selectedType === "all" ? styles.active : ""}
        onClick={() => handleTypeClick("all")}
      >
        All
      </button>

      {types.map((type: any) => (
        <button
          key={type.name}
          className={selectedType === type.name ? styles.active : ""}
          onClick={() => handleTypeClick(type.name)}
        >
          {type.name}
        </button>
      ))}
    </aside>
  );
};

export default React.memo(Sidebar);
