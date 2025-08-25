import styles from "../styles/DashboardPage.module.css";

export default function DashboardPage() {
  return (
    <div className={styles.layout}>
      <aside className={styles.sidebar}>
        <h2 className={styles.menuTitle}>Menu</h2>
        <ul>
          <li>🏠 Início</li>
          <li>🧪 Registrar Glicemia</li>
          <li>💉 Registrar Insulina</li>
          <li>📊 Histórico</li>
          <li>💡 Dicas</li>
        </ul>
      </aside>
      <main className={styles.content}>
        <h1 className={styles.welcome}>Bem-vindo ao DiabetesApp</h1>
        <p>Aqui você poderá registrar seus dados de glicemia e insulina.</p>
      </main>
    </div>
  );
}
