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

    async getById(id) {
        try {
            const result = await pool.query(
                `SELECT * FROM ${TABLE} WHERE id = $1`,
                [id]
            );
            return result.rows[0];
        } catch (error) {
            console.error('Erro ao buscar equipamento:', error);
            throw new Error('Erro ao buscar equipamento');
        }
    }

    async create(nome) {
        try {
            const result = await pool.query(
                `INSERT INTO ${TABLE} (nome) VALUES ($1) RETURNING *`,
                [nome]
            );
            return result.rows[0];
        } catch (error) {
            console.error('Erro ao criar equipamento:', error);
            throw new Error('Erro ao criar equipamento');
        }
    }

    async update(id, nome) {
        try {
            const result = await pool.query(
                `UPDATE ${TABLE} SET nome = $1 WHERE id = $2 RETURNING *`,
                [nome, id]
            );
            return result.rows[0];
        } catch (error) {
            console.error('Erro ao atualizar equipamento:', error);
            throw new Error('Erro ao atualizar equipamento');
        }
    }

    async patch(id, nome) {
        try {
            const result = await pool.query(
                `UPDATE ${TABLE} SET nome = $1 WHERE id = $2 RETURNING *`,
                [nome, id]
            );
            return result.rows[0];
        } catch (error) {
            console.error('Erro ao atualizar equipamento:', error);
            throw new Error('Erro ao atualizar equipamento');
        }
    }

    async delete(id) {
        try {
            await pool.query(`DELETE FROM ${TABLE} WHERE id = $1`, [id]);
            return { message: 'Equipamento deletado com sucesso' };
        } catch (error) {
            console.error('Erro ao deletar equipamento:', error);
            throw new Error('Erro ao deletar equipamento');
        }
    }
}

export default new EquipamentosService();