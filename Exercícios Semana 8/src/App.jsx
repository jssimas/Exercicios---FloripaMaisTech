import './App.css';
import { useState } from 'react';
import CardAdicionar from './models/CardAdicionar';
import ListaTarefas from './models/ListaTarefas';

function App() {
  const [listatarefas, setListaTarefas] = useState([]);

  function adicionarTarefa(tarefa) {
    const novaTarefa = {id: listatarefas.length + 1, texto: tarefa, finalizado: false}
   
    setListaTarefas([...listatarefas, novaTarefa]);
  }

  function removerTarefa(tarefa) {
    const novaLista = listatarefas.filter(item => item.id != tarefa.id)
    setListaTarefas(novaLista)
    }

  return (
    <div className="App">
      <CardAdicionar adicionarTarefa={adicionarTarefa} />
      {
        listatarefas.map(tarefa => (
          <ListaTarefas tarefa={tarefa} removerTarefa={removerTarefa}/>
        ))
      }
    </div>
  );
}

export default App;
