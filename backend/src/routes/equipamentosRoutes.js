import express from 'express'
import equipamentosService from '../service/equipamentosService.js';

const equipamentosRoutes = express.Router();

equipamentosRoutes.get('/', async (req, res) => {
    try {
        const result = await equipamentosService.getAll();
        res.json(result);
    } catch (error) {
        console.error('Erro ao listar equipamentos:', error);
        res.status(500).json({ error: 'Erro ao listar equipamentos' });
    }
});

equipamentosRoutes.get('/:id', async (req, res) => {
    try {
        const result = await equipamentosService.getById(req.params.id);
        res.json(result);
    } catch (error) {
        console.error('Erro ao buscar equipamentos:', error);
        res.status(500).json({ error: 'Erro ao buscar equipamentos' });
    }
});

equipamentosRoutes.post('/', async (req, res) => {
    try {
        const result = await equipamentosService.create(req.body);
        res.status(201).json(result);
    } catch (error) {
        console.error('Erro ao criar equipamentos:', error);
        res.status(500).json({ error: error.message || 'Erro ao criar equipamentos' });
    }
});

equipamentosRoutes.put('/:id', async (req, res) => {
    try {
        const result = await equipamentosService.update(req.params.id, req.body);
        res.json(result);
    } catch (error) {
        console.error('Erro ao atualizar equipamentos:', error);
        res.status(500).json({ error: 'Erro ao atualizar equipamentos' });
    }  
});

equipamentosRoutes.patch('/:id', async (req, res) => {
    try {
        const result = await equipamentosService.patch(req.params.id, req.body);
        res.json(result);
    } catch (error) {
        console.error('Erro ao atualizar equipamentos:', error);
        res.status(500).json({ error: 'Erro ao atualizar equipamentos' });
    }
});

equipamentosRoutes.delete('/:id', async (req, res) => {
    try {
        const result = await equipamentosService.delete(req.params.id);
        res.json(result);
    } catch (error) {
        console.error('Erro ao deletar equipamentos:', error);
        res.status(500).json({ error: 'Erro ao deletar equipamentos' });
    }
});

export default equipamentosRoutes;