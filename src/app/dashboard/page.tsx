"use client";

import { useEffect } from "react";
import Sidebar from "@/components/Sidebar/Sidebar";
import SearchBar from "@/components/SearchBar/SearchBar";
import ViewToggle from "@/components/ViewToggle/ViewToggle";
import PokemonGrid from "@/components/PokemonGrid/PokemonGrid";
import PokemonList from "@/components/PokemonList/PokemonList";
import Pagination from "@/components/Pagination/Pagination";
import Loader from "@/components/Loader/Loader";
import ErrorState from "@/components/ErrorState/ErrorState";
import ProtectedRoute from "@/components/ProtectedRoute/ProtectedRoute";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { getPokemons } from "@/redux/slices/pokemonSlice";
import styles from "./page.module.scss";
import { GRID_VIEW, LIST_VIEW } from "@/types/pokemon";

export default function HomePage() {
  const dispatch = useAppDispatch();

  const { loading, error, selectedType, page } = useAppSelector(
    (state) => state.pokemon,
  );

  const { viewMode } = useAppSelector((state) => state.ui);

  useEffect(() => {
    const request = dispatch(
      getPokemons({
        page,
        type: selectedType,
      }),
    );

    return () => {
      request.abort();
    };
  }, [page, selectedType]);

  return (
    <ProtectedRoute>
      <div className={styles.container}>
        <Sidebar />
        <section className={styles.content}>
          <SearchBar />
          <ViewToggle />
          {error && <ErrorState message={error} />}
          <div className={styles.pokemonWrapper}>
            {viewMode === GRID_VIEW && <PokemonGrid />}
            {viewMode === LIST_VIEW && <PokemonList />}
            {loading && <Loader />}
          </div>
          <Pagination />
        </section>
      </div>
    </ProtectedRoute>
  );
}
