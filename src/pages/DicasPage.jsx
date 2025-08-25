import Nav from "../components/Nav";
import styles from "../styles/DashboardPage.module.css";

export default function DicasPage() {
  return (
    <div className={styles.layout}>
      <Nav />
      <main className={styles.content}>
        <h1>Dicas de Saúde</h1>
        <ul>
          <li>Se a glicemia estiver baixa, consuma uma fonte de açúcar rápida (ex: suco de laranja).</li>
          <li>Se estiver alta, beba água e siga o plano do seu médico.</li>
          <li>Mantenha um diário regular de medições.</li>
        </ul>
      </main>
    </div>
  );
}
