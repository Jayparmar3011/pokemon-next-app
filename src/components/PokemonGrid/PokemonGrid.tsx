"use client";

import React from "react";
import PokemonCard from "../PokemonCard/PokemonCard";
import EmptyState from "../EmptyState/EmptyState";
import styles from "./PokemonGrid.module.scss";

import { useAppSelector } from "@/hooks/reduxHooks";
import { Pokemon } from "@/types/pokemon";

const PokemonGrid = () => {
  const { pokemons, selectedType, loading } = useAppSelector(
    (state) => state.pokemon,
  );

  const { searchText } = useAppSelector((state) => state.ui);

  const filtered = searchText
    ? pokemons.filter((pokemon: Pokemon) =>
        pokemon.name.toLowerCase().includes(searchText.toLowerCase()),
      )
    : pokemons;

  const isEmpty = !loading && filtered.length === 0;

  return (
    <>
      {isEmpty ? (
        <EmptyState
          title="No Pokémon found"
          subtitle={
            searchText
              ? `No results for "${searchText}"`
              : `No Pokémon available for "${selectedType}"`
          }
        />
      ) : (
        <div className={styles.grid}>
          {filtered.map((pokemon: Pokemon) => (
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
              url={pokemon.url}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default React.memo(PokemonGrid);
