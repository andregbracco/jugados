import React, { useState } from "react";
import { useRouter } from "next/router";
import NavBar from "@/components/NavBar/NavBar.js";
import styles from "./LoginPage.module.scss";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (username === "bomb" && password === "bombpass") {
      console.log("¡Inicio de sesión exitoso!");
      localStorage.setItem("isAuthenticated", "true"); 
      router.push("/");
    } else {
      setError("Nombre de usuario o contraseña incorrectos.");
    }
  };

  return (
    <div className={styles.root}>
      <NavBar />
      <div className={styles.container}>
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleLogin} className={styles.form}>
          <label htmlFor="username">Nombre de usuario:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className={styles.input}
          />
          <br />
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.input}
          />
          <br />
          <button type="submit" className={styles.button}>
            Iniciar sesión
          </button>
        </form>
        {error && <p className={styles.error}>{error}</p>}
      </div>
    </div>
  );
};

export default LoginPage;