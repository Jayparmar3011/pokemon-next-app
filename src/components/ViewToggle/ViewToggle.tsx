"use client";

import React from "react";
import styles from "./ViewToggle.module.scss";
import { useAppDispatch, useAppSelector } from "@/hooks/reduxHooks";
import { setViewMode } from "@/redux/slices/uiSlice";

const ViewToggle = () => {
  const dispatch = useAppDispatch();
  const { viewMode } = useAppSelector((state) => state.ui);

  return (
    <div className={styles.toggle}>
      <button
        className={viewMode === "grid" ? styles.active : ""}
        onClick={() => dispatch(setViewMode("grid"))}
      >
        Grid
      </button>

      <button
        className={viewMode === "list" ? styles.active : ""}
        onClick={() => dispatch(setViewMode("list"))}
      >
        List
      </button>
    </div>
  );
};

export default React.memo(ViewToggle);
