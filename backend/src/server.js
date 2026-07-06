import express from 'express';
import equipamentosRoutes from './routes/equipamentosRoutes.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("the life isnt a strawberry!🍓");
});

app.use('/equipamentos', equipamentosRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});