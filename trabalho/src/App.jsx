import { useState } from "react";
import "./App.css";

function App() {
  const [ideias, setIdeias] = useState([]);
  const [texto, setTexto] = useState("");
  const [erro, setErro] = useState("");

  function adicionarIdeia(event) {
    event.preventDefault();

    if (!texto.trim()) {
      setErro("Digite uma ideia.");
      return;
    }

    const novaIdeia = {
      id: Date.now(),
      texto: texto,
      concluida: false
    };

    setIdeias([...ideias, novaIdeia]);
    setTexto("");
    setErro("");
  }

  function concluirIdeia(id) {
    setIdeias(
      ideias.map((ideia) =>
        ideia.id == id
          ? { ...ideia, concluida: !ideia.concluida }
          : ideia
      )
    );
  }

  function removerIdeia(id) {
    setIdeias(
      ideias.filter((ideia) => ideia.id != id)
    );
  }

  const concluidas = ideias.filter(
    (ideia) => ideia.concluida
  ).length;

  return (
    <div>
      <h1>Painel de Ideias</h1>

      <form onSubmit={adicionarIdeia}>
        <input
          type="text"
          value={texto}
          onChange={(event) => setTexto(event.target.value)}
          placeholder="Digite uma ideia"
        />

        <button type="submit">Adicionar</button>
      </form>

      {erro && <p>{erro}</p>}

      <ul>
        {ideias.map((ideia) => (
          <li key={ideia.id}>
            <input
              type="checkbox"
              checked={ideia.concluida}
              onChange={() => concluirIdeia(ideia.id)}
            />

            <span
              style={{
                textDecoration: ideia.concluida
                  ? "line-through"
                  : "none",
                color: ideia.concluida ? "blue" : "red"
              }}
            >
              {ideia.texto}
            </span>

            <button
              onClick={() => removerIdeia(ideia.id)}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>

      <p>
        {ideias.length} ideias no painel · {concluidas} concluídas
      </p>
    </div>
  );
}

export default App;