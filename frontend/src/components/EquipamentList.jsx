import React from 'react';

export default function EquipamentList({ equipamentos, onIniciarEdicao, onExcluirEquipamento }) {
  return (
    <section className="section-lista">
      <h2>Lista de Equipamentos</h2>
      <div className="table-container">
        <table className="tabela-dados">
          <thead>
            <tr>
              <th>ID Simplificado</th>
              <th>Nome do Equipamento</th>
              <th>Quantidade</th>
              <th>ID Categoria</th>
              <th>ID Setor</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {equipamentos.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center' }}>Nenhum equipamento cadastrado.</td>
              </tr>
            ) : (
              equipamentos.map((eq) => (
                <tr key={eq.id_equipamento}>
                  <td>{eq.id_equipamento?.substring(0, 8)}...</td>
                  <td>{eq.nome_equipamento}</td>
                  <td>{eq.quantidade_equipamento}</td>
                  <td>{eq.id_categoria?.substring(0, 8)}...</td>
                  <td>{eq.id_setor?.substring(0, 8)}...</td>
                  <td>
                    <div className="acoes-botoes">
                      <button className="btn-editar" onClick={() => onIniciarEdicao(eq)}>
                        Editar
                      </button>
                      <button className="btn-excluir" onClick={() => onExcluirEquipamento(eq.id_equipamento)}>
                        Excluir
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}