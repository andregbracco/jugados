import React, { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./NavBar.module.scss";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    const auth = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(auth);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navLeft}>
        <Link href="/">Inicio</Link>
      </div>
      <div className={styles.navCenter}>
        <span>Jugados</span>
      </div>
      <div className={styles.navRight}>
        {isAuthenticated ? (
          <button onClick={handleLogout}>Cerrar Sesión</button>
        ) : (
          <Link href="/login">Iniciar Sesión</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
