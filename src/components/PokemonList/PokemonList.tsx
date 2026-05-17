"use client";

import React from "react";
import styles from "./PokemonList.module.scss";

import EmptyState from "../EmptyState/EmptyState";

import { useAppSelector } from "@/hooks/reduxHooks";
import { Pokemon } from "@/types/pokemon";

const PokemonList = () => {
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
        <div>
          {filtered.map((pokemon: any) => {
            const id = pokemon.url.split("/").filter(Boolean).pop();
            const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
            return (
              <div key={pokemon.name} className={styles.item}>
                <img
                  src={image}
                  alt={pokemon.name}
                  className={styles.image}
                  loading="lazy"
                />
                <span>{pokemon.name}</span>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default React.memo(PokemonList);
