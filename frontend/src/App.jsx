import { useEffect, useState } from 'react';
import './styles/App.css';

function App() {
  const [count, setCount] = useState(0);
  const [equipamentos, setEquipamentos] = useState([]);

  useEffect(() => {
    loadEquipamentos();
  }, []);

  async function loadEquipamentos() {
    try {
      const res = await fetch('http://localhost:3000/equipamentos');
      const data = await res.json();
      setEquipamentos(data);
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }

return (
    <div className="card-1">
      <div className="card">
        <h1>Furadeira</h1>
        <p><strong>Descrição:</strong> Furadeira de impacto 500W</p>
        <p><strong>Quantidade:</strong> 8</p>
        <p><strong>Categoria:</strong> Elétrica</p>
      </div>

      <div className="card-2">
        <h1>Martelo</h1>
        <p><strong>Descrição:</strong> Martelo de unha 25mm</p>
        <p><strong>Quantidade:</strong> 15</p>
        <p><strong>Categoria:</strong> Manual</p>
      </div>

      <div className="card-3">
        <h1>Serra Circular</h1>
        <p><strong>Descrição:</strong> Serra circular 7 1/4"</p>
        <p><strong>Quantidade:</strong> 4</p>
        <p><strong>Categoria:</strong> Elétrica</p>
      </div>

      <div className="card-4">
        <h1>Chave de Fenda</h1>
        <p><strong>Descrição:</strong> Jogo de chaves de fenda</p>
        <p><strong>Quantidade:</strong> 20</p>
        <p><strong>Categoria:</strong> Manual</p>
      </div>

      <div className="card-5">
        <h1>Parafusadeira</h1>
        <p><strong>Descrição:</strong> Parafusadeira sem fio 12V</p>
        <p><strong>Quantidade:</strong> 6</p>
        <p><strong>Categoria:</strong> Elétrica</p>
      </div>
    </div>
  );
}

export default App;