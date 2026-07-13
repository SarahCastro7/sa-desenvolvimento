import { cadastrarFruta } from "../functions/frutas.js";

export default function FormFruta() {
    return (
        <form onSubmit={cadastrarFruta}>
            <label htmlFor="">
                Fruta Nome:
                <input type="text" name="nome" />
            </label>
            <button type="submit">Cadastrar Fruta</button>
        </form>
    )
}