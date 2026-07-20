import { cadastrarEquipamento } from '../src/functions/app.js';

export default function FormEquipamento() {
    return (
        <form onSubmit={cadastrarEquipamento}>
            <label htmlFor="">
                Equipamento Nome:
                <input type="text" name="nome" />
            </label>
            <button type="submit">Cadastrar Equipamento</button>
        </form>
    )
}