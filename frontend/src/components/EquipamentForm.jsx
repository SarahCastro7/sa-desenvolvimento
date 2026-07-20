import React from 'react';

export default function EquipamentForm({ equipamentoEmEdicao, categorias, setores, onSubmeter, onCancelar }) {
  return (
    <section className="section-form">
      <h2>{equipamentoEmEdicao ? 'Editar Equipamento' : 'Cadastrar Novo Equipamento'}</h2>
      
      <form onSubmit={onSubmeter} className="formulario">
        
        <div className="form-group">
          <label>Nome do Equipamento *</label>
          <input 
            type="text" 
            name="nome_equipamento" 
            defaultValue={equipamentoEmEdicao?.nome_equipamento || ''} 
            placeholder="Ex: Notebook Dell" 
            required
          />
        </div>

        <div className="form-group">
          <label>Quantidade *</label>
          <input 
            type="number" 
            name="quantidade_equipamento" 
            defaultValue={equipamentoEmEdicao?.quantidade_equipamento || 0} 
            min="0"
            required
          />
        </div>

        <div className="form-group">
          <label>Categoria *</label>
          <select name="id_categoria" defaultValue={equipamentoEmEdicao?.id_categoria || ''} required>
            <option value="" disabled>Selecione uma categoria...</option>
            {categorias.map(cat => (
              <option key={cat.id_categoria} value={cat.id_categoria}>
                {cat.nome_categoria}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Setor *</label>
          <select name="id_setor" defaultValue={equipamentoEmEdicao?.id_setor || ''} required>
            <option value="" disabled>Selecione um setor...</option>
            {setores.map(set => (
              <option key={set.id_setor} value={set.id_setor}>
                {set.nome_setor}
              </option>
            ))}
          </select>
        </div>

        <div className="form-botoes">
          <button type="submit" className="btn-salvar">Salvar</button>
          <button type="button" className="btn-cancelar" onClick={onCancelar}>Cancelar</button>
        </div>
      </form>
    </section>
  );
}