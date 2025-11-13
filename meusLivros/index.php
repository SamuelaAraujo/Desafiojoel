<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meus Livros - Biblioteca Pessoal</title>
    <link rel="stylesheet" href="css/style.css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
</head>
<body>

<i class="fas fa-user-circle open-btn" id="open-btn" onclick="toggleSidebar()"></i>

<header class="main-header">
    <div class="header-content">
        <a href="../inicio/index1.html"><i class="fas fa-home"></i></a>

        <div class="search-bar">
            <input type="text" placeholder="">
            <i class="fas fa-search"></i>
        </div>

        <h1>MEUS LIVROS</h1>

        <div class="header-icons">
            <i class="fas fa-book"></i>
        </div>
    </div>
</header>

<main class="book-list">
    <div class="book-item">
        <img src="capa-livro1.png" alt="Capa do livro Feliz por Acaso">
        <div class="book-details">
            <p><strong>NOME:</strong> Feliz por Acaso</p>
            <p><strong>adquiriu:</strong> 15/05/2025</p>
            <p><strong>DEVOLUÇÃO:</strong> 22/05/2025</p>
        </div>
    </div>

    <div class="book-item">
        <img src="capa-livro2.png" alt="Capa do livro É Assim Que Acaba">
        <div class="book-details">
            <p><strong>NOME:</strong> É Assim Que Acaba</p>
            <p><strong>adquiriu:</strong> 01/06/2025</p>
            <p><strong>DEVOLUÇÃO:</strong> 08/06/2025</p>
        </div>
    </div>

    <div class="book-item">
        <img src="capa-livro3.png" alt="Capa do livro Loucos">
        <div class="book-details">
            <p><strong>NOME:</strong> Loucos</p>
            <p><strong>adquiriu:</strong> 10/06/2025</p>
            <p><strong>DEVOLUÇÃO:</strong> 17/06/2025</p>
        </div>
    </div>
    <div class="book-item">
        <img src="capa-livro3.png" alt="Capa do livro Loucos">
        <div class="book-details">
            <p><strong>NOME:</strong> Loucos</p>
            <p><strong>adquiriu:</strong> 10/06/2025</p>
            <p><strong>DEVOLUÇÃO:</strong> 17/06/2025</p>
        </div>
    </div>
    <div class="book-item">
        <img src="capa-livro3.png" alt="Capa do livro Loucos">
        <div class="book-details">
            <p><strong>NOME:</strong> Loucos</p>
            <p><strong>adquiriu:</strong> 10/06/2025</p>
            <p><strong>DEVOLUÇÃO:</strong> 17/06/2025</p>
        </div>
    </div>
    <div class="book-item">
        <img src="capa-livro3.png" alt="Capa do livro Loucos">
        <div class="book-details">
            <p><strong>NOME:</strong> Loucos</p>
            <p><strong>adquiriu:</strong> 10/06/2025</p>
            <p><strong>DEVOLUÇÃO:</strong> 17/06/2025</p>
        </div>
    </div>
    <div class="book-item">
        <img src="capa-livro3.png" alt="Capa do livro Loucos">
        <div class="book-details">
            <p><strong>NOME:</strong> Loucos</p>
            <p><strong>adquiriu:</strong> 10/06/2025</p>
            <p><strong>DEVOLUÇÃO:</strong> 17/06/2025</p>
        </div>
    </div>
    <div class="book-item">
        <img src="capa-livro3.png" alt="Capa do livro Loucos">
        <div class="book-details">
            <p><strong>NOME:</strong> Loucos</p>
            <p><strong>adquiriu:</strong> 10/06/2025</p>
            <p><strong>DEVOLUÇÃO:</strong> 17/06/2025</p>
        </div>
    </div>
    <div class="book-item">
        <img src="capa-livro3.png" alt="Capa do livro Loucos">
        <div class="book-details">
            <p><strong>NOME:</strong> Loucos</p>
            <p><strong>adquiriu:</strong> 10/06/2025</p>
            <p><strong>DEVOLUÇÃO:</strong> 17/06/2025</p>
        </div>
    </div>
    <div class="book-item">
        <img src="capa-livro3.png" alt="Capa do livro Loucos">
        <div class="book-details">
            <p><strong>NOME:</strong> Loucos</p>
            <p><strong>adquiriu:</strong> 10/06/2025</p>
            <p><strong>DEVOLUÇÃO:</strong> 17/06/2025</p>
        </div>
    </div>
    <div class="book-item">
        <img src="capa-livro3.png" alt="Capa do livro Loucos">
        <div class="book-details">
            <p><strong>NOME:</strong> Loucos</p>
            <p><strong>adquiriu:</strong> 10/06/2025</p>
            <p><strong>DEVOLUÇÃO:</strong> 17/06/2025</p>
        </div>
    </div>
    <div class="book-item">
        <img src="capa-livro3.png" alt="Capa do livro Loucos">
        <div class="book-details">
            <p><strong>NOME:</strong> Loucos</p>
            <p><strong>adquiriu:</strong> 10/06/2025</p>
            <p><strong>DEVOLUÇÃO:</strong> 17/06/2025</p>
        </div>
    </div>

    <footer class="footer-band"></footer>

</main>

<div class="sidebar" id="sidebar">
    <button class="close-btn" onclick="toggleSidebar()">×</button>

    <div class="profile">
        <div class="profile-info">
            <span>Marcus vinicius</span>
        </div>
    </div>

    <ul class="menu-list">
        <li>
            <a href="../Obrasfavoritas/favoritos.html"><i class="fas fa-heart"></i> Favoritos</a>
        </li>
        <li>
            <a href="../meusLivros/index.php"><i class="fas fa-book-open"></i> Meus livros</a>
        </li>
        <li>
            <a href="../historico/index.html"><i class="fas fa-history"></i> Histórico</a>
        </li>
        <li>
            <a href="../MeusDados/index.html"><i class="fas fa-user-edit"></i> Meus Dados</a>
        </li>
        <li>
            <a href="../clube.do.livro/index.php"><i class="fas fa-book-open"></i> Clube Do Livro</a>
        </li>
        <li>
            <a href="../moskito/catalogo.html"><i class="fas fa-book-open"></i> Cadastro de livros</a>
        </li>
    </ul>
    <div class="footer-menu">
        <div class="school-info">
            <img src="imagem/logo.png.png" alt="Logo da Escola">
            <div>
                <h5>ESCOLA ESTADUAL MARIA LUIZA MIRANDA BASTOS</h5>
                <p>terceiro informatica</p>
            </div>
        </div>
    </div>
</div>

<script>
    function toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        const openBtn = document.getElementById('open-btn');

        sidebar.classList.toggle('open');
        openBtn.classList.toggle('hidden');
    }
</script>

</body>
</html>