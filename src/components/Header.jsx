// src/components/Header.js
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Layout.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false); // fecha o menu
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <>
      <header className={styles.header}>
        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
        <h1 className={styles.logo}>Doce Controle</h1>
      </header>

      <nav
        ref={navRef}
        className={`${styles.nav} ${menuOpen ? styles.show : ""}`}
      >
        <ul>
          <li><Link to="/home">🏠 Início</Link></li>
          <li><Link to="/registros">📝 Registros</Link></li>
          <li><Link to="/historico">📊 Histórico</Link></li>
          <li><Link to="/dicas">💡 Dicas</Link></li>
        </ul>
      </nav>
    </>
  );
}
