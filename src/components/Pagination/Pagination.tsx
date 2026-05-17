"use client";

import React, { useMemo } from "react";
import styles from "./Pagination.module.scss";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { setPage } from "@/redux/slices/pokemonSlice";

const ITEMS_PER_PAGE = 20;

const Pagination = () => {
  const dispatch = useAppDispatch();
  const { page, selectedType, totalCount } = useAppSelector(
    (state) => state.pokemon,
  );
  if (selectedType !== "all") return null;
  const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);
  const handlePageChange = (newPage: number) => {
    if (newPage < 0 || newPage >= totalPages) return;
    dispatch(setPage(newPage));
  };

  const visiblePages = useMemo(() => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i);
    }
    if (page <= 2) {
      return [0, 1, 2, "...", totalPages - 1];
    }
    if (page >= totalPages - 3) {
      return [0, "...", totalPages - 3, totalPages - 2, totalPages - 1];
    }
    return [0, "...", page - 1, page, page + 1, "...", totalPages - 1];
  }, [page, totalPages]);

  return (
    <div className={styles.pagination}>
      <button
        className={styles.prevNexBtn}
        onClick={() => handlePageChange(page - 1)}
        disabled={page === 0}
      >
        Prev
      </button>

      {visiblePages.map((item, index) => {
        if (item === "...") {
          return (
            <span key={`dots-${index}`} className={styles.dots}>
              ...
            </span>
          );
        }

        return (
          <button
            key={`page-${item}`}
            className={`${styles.pageBtn} ${
              page === item ? styles.active : ""
            }`}
            onClick={() => handlePageChange(Number(item))}
          >
            {Number(item) + 1}
          </button>
        );
      })}

      <button
        className={styles.prevNexBtn}
        onClick={() => handlePageChange(page + 1)}
        disabled={page === totalPages - 1}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
