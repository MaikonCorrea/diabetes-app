import Header from "../components/Header";
import styles from "../styles/Layout.module.css";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className={styles.content}>
        <h2>Bem-vindo ao Doce Controle</h2>
        <p>Sua jornada com a diabetes, mais leve e organizada.</p>
        <p>Cuidar da diabetes pode parecer um grande desafio, mas não precisa ser uma jornada solitária. Chegou o Doce Controle, o aplicativo que transforma a rotina de monitoramento em uma experiência mais simples, organizada e cheia de apoio!</p>
      </main>
    </>
  );
}
