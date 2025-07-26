// Lista de amigos
let listaDeAmigos = [];

function adicionarAmigo() {
    const input = document.getElementById("amigo");
    const nome = input.value.trim();

    if (nome === "") {
        alert("Digite um nome válido!");
        return;
    }

    if (listaDeAmigos.includes(nome)) {
        alert("Esse nome já foi adicionado!");
        return;
    }

    listaDeAmigos.push(nome);

    // Atualiza a lista visual
    const ul = document.getElementById("listaAmigos");
    const li = document.createElement("li");
    li.textContent = nome;
    ul.appendChild(li);

    // Limpa o input
    input.value = "";
}
