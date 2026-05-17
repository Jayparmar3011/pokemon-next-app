"use client";

import React, { useEffect, useCallback } from "react";
import styles from "./Sidebar.module.scss";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { getTypes } from "@/redux/slices/typeSlice";
import { setSelectedType, setPage } from "@/redux/slices/pokemonSlice";
import { ALL_TYPE, Pokemon } from "@/types/pokemon";

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
        className={selectedType === ALL_TYPE ? styles.active : ""}
        onClick={() => handleTypeClick(ALL_TYPE)}
      >
        All
      </button>

      {types.map((type: Pokemon) => (
        <button
          key={type?.name}
          className={selectedType === type?.name ? styles.active : ""}
          onClick={() => handleTypeClick(type?.name)}
        >
          {type?.name}
        </button>
      ))}
    </aside>
  );
};

export default React.memo(Sidebar);
