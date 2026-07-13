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
    <div>
      <h1>Equipamentos</h1>
      
    </div>
  );
}

export default App;