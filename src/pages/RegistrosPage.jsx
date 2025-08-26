import { useState } from "react";
import Header from "../components/Header";
import styles from "../styles/Layout.module.css";
import formStyles from "../styles/Forms.module.css";

export default function RegistrosPage() {
  const [glicemia, setGlicemia] = useState("");
  const [rapidaDose, setRapidaDose] = useState("");
  const [lentaAtiva, setLentaAtiva] = useState(false);
  const [lentaDose, setLentaDose] = useState("");
  const [atividadeFez, setAtividadeFez] = useState("nao");
  const [atividade, setAtividade] = useState("Sem registro");
  const [hora, setHora] = useState(() => {
    const now = new Date();
    return now.toTimeString().slice(0, 5);
  });
  const [momento, setMomento] = useState(() => {
    const now = new Date();
    const h = now.getHours();
    if (h >= 7 && h < 9) return "Café da manhã";
    if (h >= 11 && h < 14) return "Almoço";
    if (h >= 14 && h < 18) return "Café da tarde";
    if (h >= 18 && h < 22) return "Janta";
    return "Outro";
  });
  const [registros, setRegistros] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setRegistros([
      ...registros,
      {
        glicemia,
        hora,
        momento,
        atividadeFez,
        atividade: atividadeFez === "sim" ? atividade : "Sem registro",
        insulina: {
          rapida: rapidaDose,
          lenta: lentaAtiva ? lentaDose : null,
        },
      },
    ]);
    setGlicemia("");
    setRapidaDose("");
    setLentaAtiva(false);
    setLentaDose("");
  };

  return (
    <div>
      <Header />
      <main className={styles.content}>
        <h2>Registre sua Glicemia</h2>
        <form onSubmit={handleSubmit} className={formStyles.form}>
          <input
            type="number"
            placeholder="Glicemia (mg/dL)"
            value={glicemia}
            onChange={(e) => setGlicemia(e.target.value)}
            required
          />

          {/* Insulina rápida sempre obrigatória */}
          <input
            type="number"
            placeholder="Dose insulina rápida (U)"
            value={rapidaDose}
            onChange={(e) => setRapidaDose(e.target.value)}
            required
          />

          {/* Insulina lenta opcional */}
          <div>
            <label>
              <input
                type="checkbox"
                checked={lentaAtiva}
                onChange={(e) => setLentaAtiva(e.target.checked)}
              />
              Insulina lenta
            </label>
            {lentaAtiva && (
              <input
                type="number"
                placeholder="Dose insulina lenta (U)"
                value={lentaDose}
                onChange={(e) => setLentaDose(e.target.value)}
              />
            )}
          </div>

          <select value={atividadeFez} onChange={(e) => setAtividadeFez(e.target.value)}>
            <option value="nao">Teve atividade física antes?</option>
            <option value="sim">Sim</option>
            <option value="nao">Não</option>
          </select>

          {atividadeFez === "sim" && (
            <select value={atividade} onChange={(e) => setAtividade(e.target.value)}>
              <option value="Sem registro">Selecione a atividade</option>
              <option value="Brincadeira">Brincadeira</option>
              <option value="Futebol">Futebol</option>
              <option value="Corrida">Corrida</option>
              <option value="Caminhada">Caminhada</option>
              <option value="Academia">Academia</option>
              <option value="Vôlei">Vôlei</option>
            </select>
          )}

          <input
            type="time"
            value={hora}
            onChange={(e) => setHora(e.target.value)}
            required
          />

          <select value={momento} onChange={(e) => setMomento(e.target.value)}>
            <option value="Café da manhã">Café da manhã</option>
            <option value="Almoço">Almoço</option>
            <option value="Café da tarde">Café da tarde</option>
            <option value="Janta">Janta</option>
            <option value="Outro">Outro</option>
          </select>

          <button type="submit">Salvar</button>
        </form>

        <h3>Últimos registros</h3>
        <ul>
          {registros.map((r, i) => (
            <li key={i}>
              {r.hora} - Glicemia {r.glicemia} mg/dL, Momento: {r.momento},{" "}
              Atividade: {r.atividade} | Rápida {r.insulina.rapida}U{" "}
              {r.insulina.lenta && `| Lenta ${r.insulina.lenta}U`}
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
