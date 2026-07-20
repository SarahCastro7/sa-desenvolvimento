import { pool } from '../config/db.js';
import 'dotenv/config';

const TABLE = 'equipamentos';

class EquipamentosService {

    async getAll() {
        try {
            const result = await pool.query(`SELECT * FROM ${TABLE}`);
            return result.rows;
        } catch (error) {
            console.error('Erro ao listar equipamentos:', error);
            throw new Error('Erro ao listar equipamentos');
        }
    }

    async getById(id_equipamento) {
        try {
            const result = await pool.query(
                `SELECT * FROM ${TABLE} WHERE id_equipamento = $1`,
                [id_equipamento]
            );
            return result.rows[0];
        } catch (error) {
            console.error('Erro ao buscar equipamento:', error);
            throw new Error('Erro ao buscar equipamento');
        }
    }

    async create(dados) {
        try {
            const { nome_equipamento, quantidade_equipamento, id_categoria, id_setor } = dados;
            
            const result = await pool.query(
                `INSERT INTO ${TABLE} (nome_equipamento, quantidade_equipamento, id_categoria, id_setor) 
                 VALUES ($1, $2, $3, $4) RETURNING *`,
                [nome_equipamento, quantidade_equipamento, id_categoria, id_setor]
            );
            return result.rows[0];
        } catch (error) {
            console.error('Erro ao criar equipamento no banco:', error);
            throw error; // Mantém o erro original para o controller capturar
        }
    }

    async update(id_equipamento, dados) {
        try {
            const { nome_equipamento, quantidade_equipamento, id_categoria, id_setor } = dados;

            const result = await pool.query(
                `UPDATE ${TABLE} 
                 SET nome_equipamento = $1, quantidade_equipamento = $2, id_categoria = $3, id_setor = $4 
                 WHERE id_equipamento = $5 RETURNING *`,
                [nome_equipamento, quantidade_equipamento, id_categoria, id_setor, id_equipamento]
            );
            return result.rows[0];
        } catch (error) {
            console.error('Erro ao atualizar equipamento no banco:', error);
            throw error;
        }
    }

    async patch(id_equipamento, dados) {
        return this.update(id_equipamento, dados);
    }

    async delete(id_equipamento) {
        try {
            await pool.query(`DELETE FROM ${TABLE} WHERE id_equipamento = $1`, [id_equipamento]);
            return { message: 'Equipamento deletado com sucesso' };
        } catch (error) {
            console.error('Erro ao deletar equipamento no banco:', error);
            throw error;
        }
    }
}

export default new EquipamentosService();