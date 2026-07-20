export async function cadastrarEquipamento(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    const nome = formData.get("nome");
    console.log("nome do equipamento", nome);


    try {
        const res = await fetch("http://localhost:3000/frutas", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome })
        })
        console.log(res);

    } catch (error) {
        console.error(error);
    }
}

