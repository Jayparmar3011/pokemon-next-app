import styles from "./EmptyState.module.scss";
import SearchIcon from "@/components/Icon/SearchIcon";

interface Props {
  title: string;
  subtitle?: string;
}

const EmptyState = ({ title, subtitle }: Props) => {
  return (
    <div className={styles.empty}>
      <div className={styles.icon}>
        <SearchIcon size={42} />
      </div>
      <h3 className={styles.title}>{title}</h3>
      {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
    </div>
  );
};

export default EmptyState;
