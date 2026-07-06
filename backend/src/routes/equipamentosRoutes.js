import express from 'express'
import equipamentosService from '../service/equipamentosService.js';

const equipamentosRoutes = express.Router();

// get all
equipamentosRoutes.get('/', async (req, res) => {
    try {
        const result = await equipamentosService.getAll();
        res.json(result);
    } catch (error) {
        console.error('Erro ao listar equipamentos:', error);
        res.status(500).json({ error: 'Erro ao listar equipamentos' });
    }
});

// get by id
equipamentosRoutes.get('/:id', async (req, res) => {
    try {
        const result = await equipamentosService.getById(req.params.id);
        res.json(result);
    } catch (error) {
        console.error('Erro ao buscar equipamentos:', error);
        res.status(500).json({ error: 'Erro ao buscar equipamentos' });
    }
});

// post
equipamentosRoutes.post('/', async (req, res) => {
    try {
        const result = await equipamentosService.create(req.body.nome);
        res.status(201).json(result);
    } catch (error) {
        console.error('Erro ao criar equipamentos:', error);
        res.status(500).json({ error: 'Erro ao criar equipamentos' });
    }
});

// put
equipamentosRoutes.put('/:id', async (req, res) => {
    try {
        const result = await equipamentosService.update(req.params.id, req.body.nome);
        res.json(result);
    } catch (error) {
        console.error('Erro ao atualizar equipamentos:', error);
        res.status(500).json({ error: 'Erro ao atualizar equipamentos' });
    }  
});

// patch
equipamentosRoutes.patch('/:id', async (req, res) => {
    try {
        const result = await equipamentosService.patch(req.params.id, req.body.nome);
        res.json(result);
    } catch (error) {
        console.error('Erro ao atualizar equipamentos:', error);
        res.status(500).json({ error: 'Erro ao atualizar equipamentos' });
    }
});

// delete
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