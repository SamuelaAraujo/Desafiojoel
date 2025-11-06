document.addEventListener('DOMContentLoaded', loadBooks);

function loadBooks() {
    const bookGrid = document.getElementById('book-grid');
    
    // Recupera a lista de livros salvos (ignora o primeiro elemento, que é o card "Adicionar Livro")
    const addBookCard = bookGrid.firstElementChild.cloneNode(true); 
    bookGrid.innerHTML = ''; // Limpa o grid para reinserir o card de adição e os livros
    bookGrid.appendChild(addBookCard); // Reinsere o card de adição
    
    // 1. Pega os dados do Local Storage
    let books = JSON.parse(localStorage.getItem('booksCatalog')) || [];

    if (books.length === 0) {
        // Se não houver livros, exibe uma mensagem
        const noBooksMessage = document.createElement('p');
        noBooksMessage.textContent = 'Nenhum livro cadastrado ainda. Use o botão Adicionar Livro.';
        noBooksMessage.style.textAlign = 'center';
        noBooksMessage.style.gridColumn = '1 / -1'; // Ocupa toda a largura
        bookGrid.appendChild(noBooksMessage);
        return;
    }

    // 2. Cria e adiciona um card para cada livro
    books.forEach(book => {
        const bookCard = document.createElement('a');
        bookCard.href = `#book-${book.id}`; // Link fictício para 'detalhes'
        bookCard.classList.add('book-card');
        
        // Estrutura do Card
        bookCard.innerHTML = `
            <img src="${book.imagemBase64 || 'placeholder.jpg'}" alt="Capa do livro ${book.titulo}" class="book-image">
            <div class="book-info">
                <h3>${book.titulo}</h3>
                <p>Por: ${book.autor}</p>
                <p>Qtde: ${book.quantidade}</p>
            </div>
        `;
        
        bookGrid.appendChild(bookCard);
    });
}