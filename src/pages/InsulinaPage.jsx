import { useState } from "react";
import Nav from "../components/Nav";
import formStyles from "../styles/Forms.module.css";
import styles from "../styles/DashboardPage.module.css";

export default function InsulinaPage() {
  const [tipo, setTipo] = useState("rápida");
  const [dose, setDose] = useState("");
  const [hora, setHora] = useState("");
  const [registros, setRegistros] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegistros([...registros, { tipo, dose, hora }]);
    setDose("");
    setHora("");
  };

  return (
    <div className={styles.layout}>
      <Nav />
      <main className={styles.content}>
        <h1>Registrar Insulina</h1>
        <form onSubmit={handleSubmit} className={formStyles.form}>
          <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
            <option value="rápida">Insulina Rápida</option>
            <option value="lenta">Insulina Lenta</option>
          </select>
          <input
            type="number"
            placeholder="Dose (unidades)"
            value={dose}
            onChange={(e) => setDose(e.target.value)}
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
              {r.tipo} - {r.dose}U às {r.hora}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
