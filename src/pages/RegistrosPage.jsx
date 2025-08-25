import { useState } from "react";
import Header from "../components/Header";
import styles from "../styles/Layout.module.css";
import formStyles from "../styles/Forms.module.css";

export default function RegistrosPage() {
  const [glicemia, setGlicemia] = useState("");
  const [insulina, setInsulina] = useState("");
  const [tipo, setTipo] = useState("rápida");
  const [hora, setHora] = useState(() => {
    const now = new Date();
    return now.toTimeString().slice(0, 5);
  });
  const [registros, setRegistros] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegistros([...registros, { glicemia, insulina, tipo, hora }]);
    setGlicemia("");
    setInsulina("");
  };

  return (
    <div>
      <Header />
      <main className={styles.content}>
        <h2>Registrar Glicemia + Insulina</h2>
        <form onSubmit={handleSubmit} className={formStyles.form}>
          <input
            type="number"
            placeholder="Glicemia (mg/dL)"
            value={glicemia}
            onChange={(e) => setGlicemia(e.target.value)}
            required
          />
          <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
            <option value="rápida">Insulina Rápida</option>
            <option value="lenta">Insulina Lenta</option>
          </select>
          <input
            type="number"
            placeholder="Dose (unidades)"
            value={insulina}
            onChange={(e) => setInsulina(e.target.value)}
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

        <h3>Últimos registros</h3>
        <ul>
          {registros.map((r, i) => (
            <li key={i}>
              {r.hora} - Glicemia {r.glicemia} mg/dL, {r.tipo} {r.insulina}U
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
