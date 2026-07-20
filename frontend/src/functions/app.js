const API_URL = "http://localhost:3000/equipamentos";

export async function listarEquipamentos() {
    try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Erro ao buscar dados.");
        return await res.json();
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function cadastrarEquipamento(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    
    const dados = {
        nome_equipamento: formData.get("nome_equipamento"),
        quantidade_equipamento: parseInt(formData.get("quantidade_equipamento") || 0),
        id_categoria: formData.get("id_categoria"),
        id_setor: formData.get("id_setor")
    };

    if (!dados.nome_equipamento?.trim() || !dados.id_categoria || !dados.id_setor) {
        alert("Por favor, preencha todos os campos obrigatórios!");
        return false;
    }

    try {
        const res = await fetch(API_URL, {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        });
        if (res.ok) {
            alert("Equipamento cadastrado com sucesso!");
            return true;
        }
        const errData = await res.json();
        alert(`Erro do Servidor: ${errData.error || 'Falha ao salvar'}`);
        return false;
    } catch (error) {
        alert("Erro ao conectar com o servidor.");
        return false;
    }
}

export async function editarEquipamento(id_equipamento, e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    
    const dados = {
        nome_equipamento: formData.get("nome_equipamento"),
        quantidade_equipamento: parseInt(formData.get("quantidade_equipamento") || 0),
        id_categoria: formData.get("id_categoria"),
        id_setor: formData.get("id_setor")
    };

    try {
        const res = await fetch(`${API_URL}/${id_equipamento}`, {
            method: "PUT",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        });
        if (res.ok) {
            alert("Equipamento atualizado com sucesso!");
            return true;
        }
        return false;
    } catch (error) {
        alert("Erro ao atualizar.");
        return false;
    }
}

export async function deletarEquipamento(id_equipamento) {
    if (!window.confirm("Tem certeza que deseja excluir este equipamento?")) return false;

    try {
        const res = await fetch(`${API_URL}/${id_equipamento}`, { method: "DELETE" });
        if (res.ok) {
            alert("Equipamento excluído!");
            return true;
        }
        return false;
    } catch (error) {
        alert("Erro ao deletar.");
        return false;
    }
}