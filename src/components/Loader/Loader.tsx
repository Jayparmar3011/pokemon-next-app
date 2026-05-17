import styles from "./Loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.loaderOverlay}>
      <div className={styles.loaderCard}>
        <div className={styles.spinner}></div>
        <p>Loading Pokémon...</p>
      </div>
    </div>
  );
};

export default Loader;
