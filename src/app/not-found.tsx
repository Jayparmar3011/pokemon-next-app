import Link from "next/link";
import styles from "./not-found.module.scss";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>The page you are looking for does not exist.</p>
        <Link href="/dashboard" className={styles.btn}>
          Go Home
        </Link>
      </div>
    </div>
  );
}
