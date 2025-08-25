import Nav from "../components/Nav";
import styles from "../styles/DashboardPage.module.css";

export default function HistoricoPage() {
  return (
    <div className={styles.layout}>
      <Nav />
      <main className={styles.content}>
        <h1>Histórico</h1>
        <p>Aqui futuramente mostraremos todos os registros (glicemia + insulina).</p>
      </main>
    </div>
  );
}
