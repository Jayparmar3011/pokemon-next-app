"use client";

import React, { useMemo } from "react";
import styles from "./PokemonCard.module.scss";

interface Props {
  name: string;
  url: string;
}

const PokemonCard = ({ name, url }: Props) => {
  const imageUrl = useMemo(() => {
    const id = url.split("/").filter(Boolean).pop();

    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
  }, [url]);

  return (
    <div className={styles.card}>
      <img src={imageUrl} alt={name} className={styles.image} loading="lazy" />
      <h3>{name}</h3>
    </div>
  );
};

export default React.memo(PokemonCard);
