import Header from "../components/Header";
import styles from "../styles/Layout.module.css";

export default function HomePage() {
  return (
    <div>
      <Header />
      <main className={styles.content}>
        <h2>Bem-vindo ao DiabetesApp</h2>
        <p>Use o menu para acessar suas funções.</p>
      </main>
    </div>
  );
}
