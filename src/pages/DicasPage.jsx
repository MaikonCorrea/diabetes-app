import Header from "../components/Header";
import styles from "../styles/Layout.module.css";

export default function DicasPage() {
  return (
    <div>
      <Header />
      <main className={styles.content}>
        <h2>Dicas</h2>
        <ul>
          <li>Se a glicemia estiver baixa, consuma açúcar rápido.</li>
          <li>Se estiver alta, beba água e siga o plano médico.</li>
          <li>Não esqueça de registrar sempre as medições.</li>
        </ul>
      </main>
    </div>
  );
}
