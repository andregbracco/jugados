import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.scss";

const Navbar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    const auth = localStorage.getItem("isAuthenticated") === "true";
    setIsAuthenticated(auth);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.setItem("isAuthenticated", "false");
    router.push("/");
  };

  const isLoginPage = router.pathname === "/login";

  return (
    <nav className={styles.navbar}>
      <div className={styles.navLeft}>
        <Link href="/">Inicio</Link>
      </div>
      <div className={styles.navCenter}>
        <span>Jugados</span>
      </div>
      <div className={styles.navRight}>
        {!isLoginPage && isAuthenticated ? (
          <button onClick={handleLogout}>Cerrar Sesión</button>
        ) : !isLoginPage && (
          <Link href="/login" className={styles.login}>Iniciar Sesión</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
