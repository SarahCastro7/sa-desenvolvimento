import express from 'express';
import cors from 'cors';
import { pool } from './config/db.js';
import equipamentosRoutes from './routes/equipamentosRoutes.js';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("the life isnt a strawberry!🍓");
});

app.get('/categorias', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM categorias');
        res.json(result.rows);
    } catch (error) {
        console.error('Erro ao buscar categorias:', error);
        res.status(500).json({ error: error.message });
    }
});

app.get('/setores', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM setores');
        res.json(result.rows);
    } catch (error) {
        console.error('Erro ao buscar setores:', error);
        res.status(500).json({ error: error.message });
    }
});

app.use('/equipamentos', equipamentosRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});