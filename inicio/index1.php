<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MLMB - Biblioteca</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"> 
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css">
</head>
<body>

    

    <div class="sidebar" id="sidebar">
        <button class="close-btn" onclick="toggleSidebar()">×</button>
        
        <div class="profile">
            <div class="profile-info">
                <span>Marcus vinicius</span>
                
            </div>
        </div>
        
        <ul class="menu-list">
            <li>
                <a href="#"><i class="fas fa-heart"></i> Favoritos</a>
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
                <a href="#"><i class="fas fa-book-open"></i> Clube Do Livro</a>
            </li>
        </ul>
        
        <div class="footer-menu">
            <div class="school-info">
                <img src="fotos/IMG-20250513-WA0005.jpg" alt="Logo da Escola"> 
                <div>
                    <h5>ESCOLA ESTADUAL MARIA LUIZA MIRANDA BASTOS</h5>
                    <p>terceiro informatica-2025</p>
                </div>
            </div>
        </div>
    </div>
    <header class="main-header">
        <div class="top-bar">
            <nav class="top-nav">
                <a href="#" class="nav-item">CONHECER</a>
                <a href="#" class="nav-item">FAZER</a>
                <a href="#" class="nav-item">CONVIVER</a>
                <a href="#" class="nav-item">SER</a>
            </nav>
        </div>

        <div class="logo-search-user">
            <h1 class="logo">MLMB</h1>
            
            <div class="search-bar">
                <input type="text" placeholder="" aria-label="Pesquisar">
                <button type="submit" aria-label="Buscar">
                    <span class="material-icons">search</span>
                </button>
            </div>
            
            
            
           <div class="user-actions" style="display: flex; align-items: flex-end; justify-content: flex-start;">
    <a href="#" class="action-link" aria-label="Minhas Listas" style="margin-right: 18px;">
        <span class="material-icons heart-icon">favorite_border</span>
        Minhas Listas
    </a>
    <i class="fas fa-user-circle open-btn"
       onclick="toggleSidebar()"
       style="margin-left: 12px; font-size: 2rem; cursor: pointer; position: relative; top: 8px;"
       aria-label="Abrir menu do usuário"></i>
</div>
        </div>

        <nav class="bottom-nav">
            <a href="#" class="bottom-nav-item">LIVROS COM MAIS DEMANDA</a>
            <a href="#" class="bottom-nav-item">BUSQUE POR AUTORES</a>
            <a href="#" class="bottom-nav-item "> CATEGORIAS <span class="material-icons menu-icon">menu</span>
            </a>
        </nav>
    </header>
    
    <main class="content">
        <div class="book-cards-container">
            
            <div class="book-card card-red-queen">
                <h2 class="book-title">A Rainha<br>Vermelha</h2>
                <p class="book-author">VICTORIA AVEYARD</p>
                <div class="book-cover book-cover-red-queen">
                    </div>
                <p class="book-snippet">
                    UMA SOCIEDADE DIVIDIDA PELO SANGUE. 
                    E UMA JOVEM REDEFINIRÁ TUDO.
                </p>
                <a href="#" class="btn-more">SAIBA MAIS</a>
            </div>

            <div class="book-card card-dom-casmurro">
                <h2 class="book-title-small">Dom<br>Casmurro</h2>
                <p class="book-author-machado">MACHADO DE ASSIS</p>
                <div class="book-cover book-cover-dom-casmurro">
                    </div>
                <p class="book-snippet snippet-casmurro">
                    Publicado em 1899, Dom Casmurro é uma das principais 
                    obras do Realismo brasileiro e um marco da literatura mundial.
                </p>
                <a href="#" class="btn-more">SAIBA MAIS</a>
            </div>

            <div class="book-card card-fault-in-stars">
                <h2 class="book-title">A Culpa é<br>Das Estrelas</h2>
                <p class="book-author-john-green">JOHN GREEN</p>
                <div class="book-cover book-cover-fault-in-stars">
                    </div>
                <p class="book-snippet snippet-john-green">
                    O maior best-seller de John Green que emocionou 
                    milhares de leitores em todo o mundo.
                </p>
                <a href="#" class="btn-more">SAIBA MAIS</a>
            </div>

        </div>
    </main>

    <script>
        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            sidebar.classList.toggle('open');
        }
    </script>
    
</body>
</html>