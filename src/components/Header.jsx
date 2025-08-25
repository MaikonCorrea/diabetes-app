import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Layout.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <button className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
        <h1 className={styles.logo}>DiabetesApp</h1>
      </header>

      <nav className={`${styles.nav} ${menuOpen ? styles.show : ""}`}>
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
