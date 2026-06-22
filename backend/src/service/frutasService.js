import { pool } from "../config/db.js";
import 'dotenv/config'

class FrutasService {

    async getAllFrutas() {
        try {
            const result = await pool.query('SELECT * FROM frutas');
            return result.rows; // ✅ ADICIONADO: retornar os dados
        } catch (error) { 
            console.error('Erro ao listar frutas:', error);
            throw new Error('Erro ao listar frutas');
        }
    }

    async getByIdFrutas(id) {
        try {
            const result = await pool.query(
                'SELECT * FROM frutas WHERE id = $1', // ✅ CORRIGIDO: adicionado WHERE
                [id]
            );
            return result.rows[0]; // ✅ ADICIONADO: retornar a fruta
        } catch (error) {
            console.error('Erro ao buscar fruta:', error);
            throw new Error('Erro ao buscar fruta');
        }
    }

    async createFrutas(nome) {
        try {
            const result = await pool.query(
                'INSERT INTO frutas (nome) VALUES ($1) RETURNING *',
                [nome]
            );
            return result.rows[0];
        } catch (error) {
            console.error('Erro ao criar fruta:', error);
            throw new Error('Erro ao criar fruta');
        }
    }

    async updateFrutas(id, nome) { // ✅ Renomeado de putFrutas para updateFrutas
        try {
            const result = await pool.query(
                'UPDATE frutas SET nome = $1 WHERE id = $2 RETURNING *',
                [nome, id]
            );
            return result.rows[0];
        } catch (error) {
            console.error('Erro ao atualizar fruta:', error);
            throw new Error('Erro ao atualizar fruta');
        }
    }

    async patchFrutas(id, nome) {
        try {
            const result = await pool.query(
                'UPDATE frutas SET nome = $1 WHERE id = $2 RETURNING *',
                [nome, id]
            );
            return result.rows[0];
        } catch (error) {
            console.error('Erro ao atualizar fruta:', error);
            throw new Error('Erro ao atualizar fruta');
        }
    }

    async deleteFrutas(id) {
        try {
            await pool.query('DELETE FROM frutas WHERE id = $1', [id]);
            return { message: 'Fruta deletada com sucesso' };
        } catch (error) {
            console.error('Erro ao deletar fruta:', error);
            throw new Error('Erro ao deletar fruta');
        }
    } 
}

export default new FrutasService();