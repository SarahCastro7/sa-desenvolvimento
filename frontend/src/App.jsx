import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [ Equipamentos, setEquipamentos] = useState(0)


async function loadEquipamentos() {
    try {
        const res = await fetch('http://localhost:3000/equipamentos');
        const data = await res.json();
        setEquipamentos(data);
        console.log(data);
    } catch (error) {
        console.error('erro ao carregar:', error);
    }
}

useEffect(() => {
    loadEquipamentos();
}, []);

  return (
    <>
      {/* aqui vai ficar todo o html */}
    </>
  )
}

export default App
