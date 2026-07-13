import { useState, useEffect, use } from 'react';
import


function App() {
    const [Equipamentos, setEquipamentos] = useState([]);
}

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
    <div>
    <main>

    </main>
    </div>
)