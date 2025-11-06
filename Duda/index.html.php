<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clube do Livro</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <header>
        <div class="topo">
            <img src="https://cdn-icons-png.flaticon.com/512/25/25694.png" alt="Home" class="icone-home">
            <h1>CLUBE DO LIVRO</h1>
            <img src="https://cdn-icons-png.flaticon.com/512/149/149071.png" alt="Perfil" class="icone-perfil">
        </div>
    </header>

    <main>
        <section class="conteudo">
            <div class="livro-info">
                <div class="livro-imagem">
                    <img src="https://i.imgur.com/kq0ZpMi.png" alt="Livro É Assim Que Acaba">
                </div>
                <div class="livro-detalhes">
                    <h2>PRÓXIMO LIVRO A SER COMENTADO NA REUNIÃO:</h2>
                    <img src="https://m.media-amazon.com/images/I/81s0B6NYXML._AC_UF894,1000_QL80_.jpg" 
                         alt="É Assim Que Acaba - Colleen Hoover" class="capa-livro">
                </div>
            </div>

            <div class="datas">
                <h2>DATAS DE ENCONTRO:</h2>
                <table>
                    <tr>
                        <th>DIA</th>
                        <th>MÊS</th>
                        <th>ANO</th>
                    </tr>
                    <tr><td></td><td></td><td></td></tr>
                    <tr><td></td><td></td><td></td></tr>
                    <tr><td></td><td></td><td></td></tr>
                </table>
            </div>
        </section>
    </main>

    <footer>
            <!-- SEÇÃO DE RESENHAS -->
    <section class="resenhas">
        <h2>📝 Compartilhe sua opinião sobre o seu último livro lido!</h2>
        <form id="form-resenha">
            <input type="text" id="nome" placeholder="Seu nome" required>
            <textarea id="texto-resenha" rows="4" placeholder="Escreva sua resenha aqui..." required></textarea>
            <button type="submit">Enviar resenha</button>
        </form>

        <div id="lista-resenhas">
            <h3>💬 Resenhas dos leitores:</h3>
            <ul id="resenhas"></ul>
        </div>
    </section>

        <p>© 2025 Clube do Livro</p>
    </footer>
</body>
</html>

