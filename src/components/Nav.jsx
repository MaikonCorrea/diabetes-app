import { Link } from "react-router-dom";
import styles from "../styles/Nav.module.css";

export default function Nav() {
  return (
    <aside className={styles.sidebar}>
      <h2 className={styles.menuTitle}>Menu</h2>
      <ul>
        <li><Link to="/dashboard">🏠 Início</Link></li>
        <li><Link to="/dashboard/glicemia">🧪 Registrar Glicemia</Link></li>
        <li><Link to="/dashboard/insulina">💉 Registrar Insulina</Link></li>
        <li><Link to="/dashboard/historico">📊 Histórico</Link></li>
        <li><Link to="/dashboard/dicas">💡 Dicas</Link></li>
      </ul>
    </aside>
  );
}
