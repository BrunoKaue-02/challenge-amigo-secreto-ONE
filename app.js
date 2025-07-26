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

function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        alert("Adicione pelo menos um amigo para sortear.");
        return;
    }

    const sorteadoIndex = Math.floor(Math.random() * listaDeAmigos.length);
    const nomeSorteado = listaDeAmigos[sorteadoIndex];

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = ""; // limpa o que tinha antes

    const li = document.createElement("li");
    li.textContent = `Sorteado: ${nomeSorteado}`;
    resultado.appendChild(li);
}
