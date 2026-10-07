import { useState } from "react";
import "./App.css";

function App() {
  const [ideias, setIdeias] = useState([]);
  const [texto, setTexto] = useState("");

  function adicionarIdeia(event) {
    event.preventDefault();

    if (!texto.trim()) {
      return;
    }

    const novaIdeia = {
      id: Date.now(),
      texto: texto
    };

    setIdeias([...ideias, novaIdeia]);
    setTexto("");
  }

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

      <ul>
        {ideias.map((ideia) => (
          <li key={ideia.id}>
            {ideia.texto}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;