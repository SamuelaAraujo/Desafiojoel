// Atualizar livro
document.getElementById('form-livro').addEventListener('submit', function(e) {
    e.preventDefault();

    const titulo = document.getElementById('titulo').value;
    const capa = document.getElementById('capa').value || "https://via.placeholder.com/180x250?text=Sem+Capa";

    document.getElementById('titulo-livro').innerText = titulo;
    document.getElementById('capa-livro').src = capa;

    alert("📘 Livro atualizado com sucesso!");
    this.reset();
});

// Adicionar nova data
document.getElementById('form-data').addEventListener('submit', function(e) {
    e.preventDefault();

    const dia = document.getElementById('dia').value;
    const mes = document.getElementById('mes').value;
    const ano = document.getElementById('ano').value;

    const tabela = document.getElementById('tabela-datas');
    const novaLinha = tabela.insertRow();
    novaLinha.innerHTML = `<td>${dia}</td><td>${mes}</td><td>${ano}</td>`;

    alert("📅 Data adicionada!");
    this.reset();
});
// -----------------------------
// SISTEMA DE RESENHAS
// -----------------------------

const formResenha = document.getElementById('form-resenha');
const listaResenhas = document.getElementById('resenhas');

// Carrega resenhas salvas
window.addEventListener('load', () => {
    const resenhasSalvas = JSON.parse(localStorage.getItem('resenhas')) || [];
    resenhasSalvas.forEach(adicionarResenhaNaTela);
});

// Adiciona nova resenha
formResenha.addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const texto = document.getElementById('texto-resenha').value;

    if (nome && texto) {
        const novaResenha = { nome, texto };

        adicionarResenhaNaTela(novaResenha);
        salvarResenha(novaResenha);

        formResenha.reset();
        alert("✅ Sua resenha foi enviada!");
    }
});

// Mostra resenha na tela
function adicionarResenhaNaTela(resenha) {
    const li = document.createElement('li');
    li.innerHTML = `<strong>${resenha.nome}</strong>: ${resenha.texto}`;
    listaResenhas.appendChild(li);
}

// Salva no localStorage
function salvarResenha(resenha) {
    const resenhasAtuais = JSON.parse(localStorage.getItem('resenhas')) || [];
    resenhasAtuais.push(resenha);
    localStorage.setItem('resenhas', JSON.stringify(resenhasAtuais));
}
