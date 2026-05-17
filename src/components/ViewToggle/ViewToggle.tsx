"use client";

import React from "react";
import styles from "./ViewToggle.module.scss";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { setViewMode } from "@/redux/slices/uiSlice";
import { GRID_VIEW, LIST_VIEW } from "@/types/pokemon";

const ViewToggle = () => {
  const dispatch = useAppDispatch();
  const { viewMode } = useAppSelector((state) => state.ui);

  return (
    <div className={styles.toggle}>
      <button
        className={viewMode === GRID_VIEW ? styles.active : ""}
        onClick={() => dispatch(setViewMode(GRID_VIEW))}
      >
        Grid
      </button>

      <button
        className={viewMode === LIST_VIEW ? styles.active : ""}
        onClick={() => dispatch(setViewMode(LIST_VIEW))}
      >
        List
      </button>
    </div>
  );
};

export default React.memo(ViewToggle);
