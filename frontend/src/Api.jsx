import { useState, useEffect } from 'react';
import EquipamentForm from './components/EquipamentForm.jsx';
import EquipamentList from './components/EquipamentList.jsx';
import { listarEquipamentos, cadastrarEquipamento, editarEquipamento, deletarEquipamento } from './functions/App.js';
import './styles/App.css';

function App() {
  const [equipamentos, setEquipamentos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [setores, setSetores] = useState([]);
  const [view, setView] = useState('listar'); 
  const [equipamentoSelecionado, setEquipamentoSelecionado] = useState(null);

  // Carrega todos os dados necessários da API
  const loadDados = async () => {
    try {
      // Busca os equipamentos
      const dadosEquip = await listarEquipamentos();
      setEquipamentos(dadosEquip);

      // Busca as categorias existentes para o select do formulário
      const resCat = await fetch("http://localhost:3000/categorias");
      if (resCat.ok) setCategorias(await resCat.json());

      // Busca os setores existentes para o select do formulário
      const resSet = await fetch("http://localhost:3000/setores");
      if (resSet.ok) setSetores(await resSet.json());
    } catch (error) {
      console.error("Erro ao carregar dados do backend:", error);
    }
  };

  useEffect(() => {
    loadDados();
  }, []);

  // Envio do formulário (Salvar / Atualizar)
  const lidarComEnvioFormulario = async (e) => {
    let sucesso = false;
    if (equipamentoSelecionado) {
      sucesso = await editarEquipamento(equipamentoSelecionado.id_equipamento, e);
    } else {
      sucesso = await cadastrarEquipamento(e);
    }

    if (sucesso) {
      setEquipamentoSelecionado(null);
      await loadDados();
      setView('listar');
    }
  };

  // Excluir item
  const lidarComExclusao = async (id_equipamento) => {
    const sucesso = await deletarEquipamento(id_equipamento);
    if (sucesso) {
      setEquipamentos(equipamentos.filter(eq => eq.id_equipamento !== id_equipamento));
    }
  };

  const iniciarEdicao = (eq) => {
    setEquipamentoSelecionado(eq);
    setView('cadastrar');
  };

  return (
    <div className="container-app">
      <nav className="navbar">
        <span className={view === 'listar' ? 'active' : ''} onClick={() => setView('listar')}>
          Lista de Equipamentos
        </span>
        <span className={view === 'cadastrar' ? 'active' : ''} onClick={() => { setEquipamentoSelecionado(null); setView('cadastrar'); }}>
          {equipamentoSelecionado ? 'Editar Equipamento' : 'Cadastrar Novo Equipamento'}
        </span>
      </nav>

      <main className="content">
        <h1>Gerenciamento de Equipamentos</h1>

        {view === 'listar' ? (
          <EquipamentList 
            equipamentos={equipamentos} 
            onIniciarEdicao={iniciarEdicao} 
            onExcluirEquipamento={lidarComExclusao} 
          />
        ) : (
          <EquipamentForm 
            equipamentoEmEdicao={equipamentoSelecionado}
            categorias={categorias}
            setores={setores}
            onSubmeter={lidarComEnvioFormulario}
            onCancelar={() => { setEquipamentoSelecionado(null); setView('listar'); }}
          />
        )}
      </main>

      <footer className="footer">
        Made by Natália Botelho
      </footer>
    </div>
  );
}

export default App;