import { useState } from "react";
import Nav from "../components/Nav";
import formStyles from "../styles/Forms.module.css";
import styles from "../styles/DashboardPage.module.css";

export default function GlicemiaPage() {
  const [valor, setValor] = useState("");
  const [hora, setHora] = useState("");
  const [registros, setRegistros] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegistros([...registros, { valor, hora }]);
    setValor("");
    setHora("");
  };

  return (
    <div className={styles.layout}>
      <Nav />
      <main className={styles.content}>
        <h1>Registrar Glicemia</h1>
        <form onSubmit={handleSubmit} className={formStyles.form}>
          <input
            type="number"
            placeholder="Valor (mg/dL)"
            value={valor}
            onChange={(e) => setValor(e.target.value)}
            required
          />
          <input
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            required
          />
          <button type="submit">Salvar</button>
        </form>

        <h2>Registros</h2>
        <ul>
          {registros.map((r, i) => (
            <li key={i}>
              {r.hora} - {r.valor} mg/dL
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
