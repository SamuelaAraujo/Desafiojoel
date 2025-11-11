document.addEventListener('DOMContentLoaded', () => {
    const bookGrid = document.getElementById('book-grid');

    // 1. Função para Deletar um Livro
    window.deleteBook = function(bookId) {
        if (confirm('Tem certeza que deseja deletar este livro do catálogo?')) {
            let books = JSON.parse(localStorage.getItem('books') || '[]');
            
            books = books.filter(book => book.id !== bookId);
            
            localStorage.setItem('books', JSON.stringify(books));
            
            renderCatalog(books);
        }
    }

    // 2. Função para Editar um Livro
    window.editBook = function(bookId) {
        window.location.href = `cadastro.html?editId=${bookId}`;
    }

    // 3. Função principal para renderizar o catálogo
    function renderCatalog(books) {
        bookGrid.innerHTML = ''; 

        // Adiciona o card de "Adicionar Livro"
        const addBookCard = document.createElement('a');
        addBookCard.href = 'cadastro.html';
        addBookCard.classList.add('book-card', 'add-book-card');
        addBookCard.innerHTML = `
            <div class="add-icon-wrapper">
                <i class="fas fa-plus"></i>
                <p>Adicionar Livro</p>
            </div>
        `;
        
        // Renderiza cada livro
        books.forEach(book => {
            const bookCard = document.createElement('div');
            bookCard.classList.add('book-card');
            
            // Adiciona a classe de destaque se o livro for recém-adicionado
            if (book.isNew) {
                bookCard.classList.add('new-book-highlight');
                // Remove a flag 'isNew' do localStorage para que o destaque suma na próxima recarga
                // O livro recém-adicionado só é destacado UMA VEZ.
                // Isso atende à lógica de "sumir temporariamente" o destaque.
                setTimeout(() => {
                    bookCard.classList.remove('new-book-highlight');
                    // O destaque some após 5 segundos, mas a flag no localStorage só é removida na próxima adição.
                    // Para remover a flag de forma mais persistente, é melhor fazer no próximo cadastro.
                    // Vamos manter a remoção da flag na próxima adição/edição no cadastro.html
                }, 5000); 
            }

            const imgSrc = book.image && book.image !== 'placeholder' ? book.image : 'placeholder.jpg'; 

            bookCard.innerHTML = `
                <div class="book-cover">
                    <img src="${imgSrc}" alt="Capa do Livro: ${book.title}" onerror="this.src='placeholder.jpg';">
                </div>
                <div class="book-info">
                    <h3 class="book-title">${book.title}</h3>
                    <p class="book-author">${book.author} ${book.lastName}</p>
                    <p class="book-quantity">Quantidade: ${book.quantity}</p>
                    <div class="book-actions">
                        <button class="action-btn edit-btn" onclick="editBook('${book.id}')">
                            <i class="fas fa-edit"></i> Editar
                        </button>
                        <button class="action-btn delete-btn" onclick="deleteBook('${book.id}')">
                            <i class="fas fa-trash-alt"></i> Deletar
                        </button>
                    </div>
                </div>
            `;
            
            bookGrid.appendChild(bookCard);
        });
        
        // Adiciona o card de "Adicionar Livro" por último
        bookGrid.appendChild(addBookCard);
    }

    const storedBooks = JSON.parse(localStorage.getItem('books') || '[]');
    renderCatalog(storedBooks);
});