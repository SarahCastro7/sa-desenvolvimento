import express from 'express'
import frutasService from '../service/frutasService.js';

const frutasRoutes = express.Router();

// get all
frutasRoutes.get('/', async (req, res) => {
    try {
        const result = await frutasService.getAllFrutas();
        res.json(result);
    } catch (error) {
        console.error('Erro ao listar frutas:', error);
        res.status(500).json({ error: 'Erro ao listar frutas' });
    }
});

// get by id
frutasRoutes.get('/:id', async (req, res) => {
    try {
        const result = await frutasService.getByIdFrutas(req.params.id);
        res.json(result);
    } catch (error) {
        console.error('Erro ao buscar frutas:', error);
        res.status(500).json({ error: 'Erro ao buscar frutas' });
    }
});

// post
frutasRoutes.post('/', async (req, res) => {
    try {
        const result = await frutasService.createFrutas(req.body.nome);
        res.status(201).json(result);
    } catch (error) {
        console.error('Erro ao criar frutas:', error);
        res.status(500).json({ error: 'Erro ao criar frutas' });
    }
});

// put
frutasRoutes.put('/:id', async (req, res) => {
    try {
        const result = await frutasService.updateFrutas(req.params.id, req.body.nome);
        res.json(result);
    } catch (error) {
        console.error('Erro ao atualizar frutas:', error);
        res.status(500).json({ error: 'Erro ao atualizar frutas' });
    }  
});

// patch
frutasRoutes.patch('/:id', async (req, res) => {
    try {
        const result = await frutasService.patchFrutas(req.params.id, req.body.nome);
        res.json(result);
    } catch (error) {
        console.error('Erro ao atualizar frutas:', error);
        res.status(500).json({ error: 'Erro ao atualizar frutas' });
    }
});

// delete
frutasRoutes.delete('/:id', async (req, res) => {
    try {
        const result = await frutasService.deleteFrutas(req.params.id);
        res.json(result);
    } catch (error) {
        console.error('Erro ao deletar frutas:', error);
        res.status(500).json({ error: 'Erro ao deletar frutas' });
    }
});

export default frutasRoutes;