<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Clube do Livro</title>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
</head>
<body>

<header class="main-header">
    <nav class="header-nav">
        <a href="../inicio/index1.html" class="nav-icon" aria-label="Página Inicial">
            <i class="fas fa-home"></i>
        </a>

        <div class="logo-group">

            <h1>CLUBE DO LIVRO</h1>
        </div>

        <i class="fas fa-user-circle open-btn" id="open-btn" onclick="toggleSidebar()"></i>


        <div class="sidebar" id="sidebar">
            <button class="close-btn" onclick="toggleSidebar()">×</button>

            <div class="profile">
                <div class="profile-info">
                    <span>Marcus vinicius</span>
                </div>
            </div>

            <ul class="menu-list">
                <li>
                    <a href="../Obrasfavoritas/index.php"><i class="fas fa-heart"></i> Favoritos</a>
                </li>
                <li>
                    <a href="#"><i class="fas fa-book-open"></i> Meus livros</a>
                </li>
                <li>
                    <a href="#"><i class="fas fa-history"></i> Histórico</a>
                </li>
                <li>
                    <a href="#"><i class="fas fa-user-edit"></i> Meus Dados</a>
                </li>
                <li>
                    <a href="../clube.do.livro/index.php"><i class="fas fa-book-open"></i> Clube Do Livro</a>
                </li>
                <li>
                    <a href="#"><i class="fas fa-book-open"></i> Cadastro de livros</a>
                </li>
            </ul>

            <div class="footer-menu">
                <div class="school-info">
                    <img src="fotos/IMG-20250513-WA0005.jpg" alt="Logo da Escola">
                    <div>
                        <h5>ESCOLA ESTADUAL MARIA LUIZA MIRANDA BASTOS</h5>
                        <p>terceiro informatica</p>
                    </div>
                </div>
            </div>
        </div>

        <script>
            // MUDANÇA: A função foi atualizada
            function toggleSidebar() {
                const sidebar = document.getElementById('sidebar');
                const openBtn = document.getElementById('open-btn'); // Seleciona o botão de abrir

                sidebar.classList.toggle('open');
                openBtn.classList.toggle('hidden'); // Alterna a classe 'hidden' no botão de abrir
            }
        </script>
    </nav>
</header>

<main class="content-area">

    <section class="content-column polaroid-section">
        <div class="polaroid-stack">
            <div class="polaroid-frame polaroid-back"></div>
            <div class="polaroid-frame polaroid-front">
                <i class="fas fa-paperclip paperclip"></i>
                <img src="fotos/pexels-photo-11603664.jpeg" alt="Livro aberto em estilo polaroid">
            </div>
        </div>
    </section>

    <section class="content-column book-section">
        <h2>PROXIMO LIVRO Á<br>SER COMENTADO NA<br>REUNIÃO:</h2>
        <img src="fotos/melhor.png.jpg" alt="Capa do livro É Assim Que Acaba" class="book-cover">
    </section>

    <section class="content-column date-section">
        <h2>DATAS DE ENCONTRO:</h2>
        <table class="date-table">
            <thead>
            <tr>
                <th>DIA</th>
                <th>MÊS</th>
                <th>ANO</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> </tr>
            <tr>
                <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> </tr>
            <tr>
                <td>&nbsp;</td> <td>&nbsp;</td> <td>&nbsp;</td> </tr>
            </tbody>
        </table>
    </section>

</main>

<footer class="main-footer">
</footer>

</body>
</html>