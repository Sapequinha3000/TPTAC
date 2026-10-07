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
    ideia.id === id
     ? { ...ideia, concluida: !ideia.concluida }
     : ideia
   )
  );
 }

 return (
  <div>
   <h1>Painel de Ideias</h1>

   <form onSubmit={adicionarIdeia}>
    <input
     value={texto}
     onChange={(event) => setTexto(event.target.value)}
     placeholder="Digite uma ideia"
    />

    <button>Adicionar</button>
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
        textDecoration: ideia.concluida ? "line-through" : "none"
       }}
      >
       {ideia.texto}
      </span>

     </li>
    ))}
   </ul>
  </div>
 );
}

export default App;