import { useState, useEffect } from 'react'
import EquipamentoComponent from './components/quitanda.jsx'
import FormEquipamento from './components/newEquipament.jsx'
import FormEquipamento from './components/newEquipament.jsx'


function App() {
  const [equipamentos, setEquipamentos] = useState([])

  async function loadEquipamentos() {
    try {
      const res = await fetch("http://localhost:3000/equipamentos")
      const data = await res.json()
      setEquipamentos(data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    loadEquipamentos()
  }, [])

  return (
    <div>
      <FormEquipamento />
      <main>
        {equipamentos.length > 0 ? (equipamentos.map((equipamento) => (
          <EquipamentoComponent key={equipamento.id} data={equipamentos} />
        ))) : <div>Loading....</div>}
      </main>
    </div>
  )
}

export default App
