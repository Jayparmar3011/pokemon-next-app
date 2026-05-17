"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import styles from "./login.module.scss";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (username === "admin" && password === "1234") {
      localStorage.setItem("auth-token", "demo-user");
      router.push("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <main className={styles.container}>
      <div className={styles.backgroundColor} />

      <div className={styles.loginCard}>
        <h1 className={styles.title}>Welcome Back</h1>
        <p className={styles.subtitle}>
          Login to access your Pokémon dashboard
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.field}>
            <label>Username</label>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className={styles.field}>
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p className={styles.error}>{error}</p>}

          <button type="submit" className={styles.loginBtn}>
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
